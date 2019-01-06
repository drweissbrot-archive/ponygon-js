"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Game = _interopRequireDefault(require("../Game"));

var _GameData = _interopRequireDefault(require("./GameData"));

var _helpers = require("../../helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultRoles = {
  amor: 1,
  spy: 3,
  witch: 3,
  // hunter: 3, // TODO
  protector: 3,
  // investigator: 3, // TODO
  lycanthrope: 3,
  elder: 3
};
const unfriendlyRoles = ['werewolf', 'lycanthrope'];

class Werewolves extends _Game.default {
  constructor(lobby) {
    super(lobby);
    this.playersByRole = new Map();

    for (const role in defaultRoles) {
      this.playersByRole.set(role, []);
    }

    this.resetVictims();
    this.assignRoles();
    this.emitRoles();
    this.resetProtected();
    this.phase = {
      night: true,
      round: 0,
      part: 0
    };
    (0, _helpers.after)(5, () => {
      this.nextRound();
    });
  }

  get meta() {
    return {
      name: 'werewolves',
      allowJoiningWhileRunning: false
    };
  }

  get alivePlayers() {
    return this.lobby.players.filter(player => !player.gameData.get('dead'));
  }

  initialGameData() {
    return new _GameData.default();
  }

  async nextRound() {
    this.resetProtected().speakingAllowed(false).increaseRound().emitPhase();
    await this.runNight();
    this.killEldersIfAppropriate();
    let deaths = this.handleDeaths();
    if (this.matchHasClinched()) return;
    await this.handleMayorDeath(deaths);
    this.resetProtected().speakingAllowed(true);
    await this.runDay(deaths);
    deaths = this.handleDeaths();
    if (this.matchHasClinched()) return;
    await this.handleMayorDeath(deaths);
    return this.emitRoles().nextRound();
  }

  assignRoles() {
    const allRoles = Object.assign(defaultRoles); // TODO apply config

    let roles = this.getAssigningRoles(allRoles);

    for (let player of _lodash.default.shuffle(this.lobby.players)) {
      const role = roles.shift() || 'citizen';
      player.gameData.set('role', role);
      const playersWithRole = this.playersByRole.get(role);
      if (!playersWithRole) this.playersByRole.set(role, [player]);else playersWithRole.push(player);
    }
  }

  emitRoles() {
    for (const player of this.alivePlayers) {
      player.emit('role', {
        role: player.gameData.get('role')
      }).emit('action', {
        view: 'role-interstitial',
        data: {
          role: player.gameData.get('role')
        }
      });
    }

    return this;
  }

  getWerewolfCount() {
    if (this.lobby.players.length <= 4) return 1;
    if (this.lobby.players.length <= 7) return 2;
    if (this.lobby.players.length <= 11) return 3;
    if (this.lobby.players.length <= 14) return 4;
    if (this.lobby.players.length <= 17) return 5;
    return 6;
  }

  getAssigningRoles(allRoles) {
    let roles = [];
    let werewolves = [];

    for (let i = 0; i < this.getWerewolfCount(); i++) {
      werewolves.push('werewolf');
    }

    for (const role in allRoles) {
      for (let i = 0; i < allRoles[role]; i++) {
        roles.push(role);
      }
    }

    return werewolves.concat(_lodash.default.shuffle(roles));
  }

  emitPhase() {
    this.lobby.emit('phase', {
      phase: this.phase
    });
    return this;
  }

  increaseRound() {
    this.phase = {
      night: true,
      round: this.phase.round + 1,
      part: 1
    };
    return this;
  }

  increasePart() {
    this.phase.part++;
    return this;
  }

  async runNight() {
    this.phase.night = true;
    this.phase.part = 1;
    await this.runNightPartOne();
    this.increasePart().emitPhase(); // amor lovers

    if (this.phase.round === 1) {
      await this.runNightPartTwo();
      this.increasePart().emitPhase();
    }

    await this.runNightPartThree();
    this.increasePart().emitPhase();
    await this.runNightPartFour();
  }

  runNightPartOne() {
    let promises = this.getAutoresolvingPromiseArray(); // amor

    if (this.phase.round === 1 && this.anyPlayersAre('amor')) {
      const amor = this.playersOfRole('amor')[0];
      promises.push(new Promise((resolve, reject) => {
        amor.emit('action', {
          view: 'amor choose'
        }).once('amor choice', ({
          players
        }) => {
          if (players.length !== 2) return resolve();
          const playerOne = this.getPlayerById(players[0]);
          const playerTwo = this.getPlayerById(players[1]);
          if (!playerOne || !playerTwo) return resolve();
          playerOne.gameData.set('inLoveWith', playerTwo);
          playerTwo.gameData.set('inLoveWith', playerOne);
          this.inLove = [playerOne, playerTwo];
          resolve();
        }); // TODO force resolve after some time
      }));
    } // spy


    if (this.anyPlayersAre('spy')) {
      for (const spy of this.playersOfRole('spy')) {
        promises.push(new Promise((resolve, reject) => {
          spy.emit('action', {
            view: 'spy choose'
          }).once('spy choice', ({
            player: targetId
          }) => {
            const target = this.getPlayerById(targetId);
            if (!target) return resolve();
            const friendly = !unfriendlyRoles.includes(target.gameData.get('role'));
            spy.emit('action', {
              view: 'spy result',
              data: {
                friendly,
                player: target.forPublic
              }
            });
            (0, _helpers.after)(4, resolve);
          }); // TODO force resolve after some time
        }));
      }
    } // protector


    if (this.anyPlayersAre('protector')) {
      for (const protector of this.playersOfRole('protector')) {
        promises.push(new Promise((resolve, reject) => {
          const protectedLastNight = protector.gameData.get('protectedLastNight');
          protector.emit('action', {
            view: 'protector choose',
            data: {
              protectedLastNight: protectedLastNight ? protectedLastNight.forPublic : null
            }
          }).once('protector choice', ({
            player: targetId
          }) => {
            const target = this.getPlayerById(targetId);
            if (!target || protector.gameData.get('protectedLastNight') === target) return resolve();
            protector.gameData.set('protectedLastNight', target);
            this.protected.push(target);
            resolve();
          });
        }));
      }
    } // TODO investigator


    return Promise.all(promises);
  }

  runNightPartTwo() {
    return new Promise((resolve, reject) => {
      if (this.inLove) {
        this.emitInLove(this.inLove[0], this.inLove[1]).emitInLove(this.inLove[1], this.inLove[0]);
      }

      (0, _helpers.after)(6, resolve);
    });
  }

  runNightPartThree() {
    const werewolves = this.playersOfRole('werewolf');
    const werewolvesPublic = werewolves.map(wolf => wolf.forPublic);
    const minVotesForVictim = this.getMinVoteCount(werewolves.length);
    let choices = this.getVotingChoicesBase();
    return new Promise((resolve, reject) => {
      for (const werewolf of werewolves) {
        werewolf.emit('action', {
          view: 'werewolf choose',
          data: {
            werewolves: werewolvesPublic
          }
        });
        werewolf.on('werewolf choice', ({
          player
        }) => {
          const target = this.getPlayerById(player);
          if (!target) return; // remove previous choice this wolf made

          choices.forEach((wolves, targetId) => {
            choices.set(targetId, wolves.filter(wolf => wolf !== werewolf));
          }); // apply current choice this wolf made

          let choicesForTarget = choices.get(target.id);
          if (!choicesForTarget) return;
          choicesForTarget.push(werewolf); // decide if the victim has enough votes

          const victim = this.determineVotingWinner(choices, minVotesForVictim, false);

          if (!victim) {
            let targets = [];

            for (const wolf of werewolves) {
              let data = {
                wolf: wolf.forPublic,
                choice: null
              };
              let playerId;

              for (const entry of choices.entries()) {
                if (entry[1].includes(wolf)) {
                  playerId = entry[0];
                  break;
                }
              }

              const player = this.getPlayerById(playerId);
              if (player) data.choice = player.forPublic;
              targets.push(data);
            }

            for (const wolf of werewolves) {
              wolf.emit('werewolf choices', {
                choices: targets
              });
            }
          } else {
            this.victims.werewolves = victim;

            for (const wolf of werewolves) {
              wolf.emit('action', {
                view: 'werewolf result',
                data: {
                  victim: victim.forPublic
                }
              });
            }

            resolve();
          }
        });
      } // TODO force resolve after some time

    });
  }

  runNightPartFour() {
    let promises = this.getAutoresolvingPromiseArray(); // witch

    if (!this.anyPlayersAre('witch')) return Promise.all(promises);

    for (const witch of this.playersOfRole('witch')) {
      const canHeal = !witch.gameData.get('hasHealed');
      const canKill = !witch.gameData.get('hasKilled');
      witch.emit('action', {
        view: 'witch choose',
        data: {
          canHeal,
          canKill,
          werewolfVictim: this.victims.werewolves ? this.victims.werewolves.forPublic : null
        }
      });

      if (!canHeal && !canKill) {
        promises.push(this.getAutoresolvingPromise(4, 4));
        continue;
      }

      promises.push(new Promise((resolve, reject) => {
        witch.once('witch choice', ({
          heal,
          kill
        }) => {
          if (canHeal && heal && this.victims.werewolves) {
            this.protected.push(this.victims.werewolves);
            witch.gameData.set('hasHealed', true);
          }

          if (canKill && kill) {
            const target = this.getPlayerById(kill);

            if (target) {
              this.victims.witches.push(target);
              witch.gameData.set('hasKilled', true);
            }
          }

          resolve();
        }); // TODO force resolve after some time
      }));
    }

    return Promise.all(promises);
  }

  async runDay(deaths) {
    this.phase.night = false;
    this.phase.part = 1;
    this.emitPhase(); // deaths

    await this.runDayPartOne(deaths);
    this.increasePart().emitPhase(); // mayor

    if (!this.mayor || this.mayor.gameData.get('dead')) {
      await this.runDayPartTwo();
      this.increasePart().emitPhase();
    } // discussion/accusations


    const accusations = await this.runDayPartThree();
    this.increasePart().emitPhase(); // voting

    await this.runDayPartFour(accusations);
  }

  runDayPartOne(deaths) {
    this.emitActionToAlive('daytime deaths', {
      deaths: deaths.map(player => player.forPublic)
    });
    return new Promise((resolve, reject) => {
      (0, _helpers.after)(7.5, resolve);
    });
  }

  runDayPartTwo() {
    const minVotesToWin = this.getMinVoteCount(this.alivePlayers.length);
    let votes = this.getVotingChoicesBase();
    let promises = [];
    this.emitActionToAlive('daytime mayor');
    return new Promise((resolve, reject) => {
      for (const player of this.alivePlayers) {
        player.on('vote for mayor', ({
          player: votedFor
        }) => {
          const target = this.getPlayerById(votedFor);
          if (!target) return; // remove previous choice this player made

          votes.forEach((voters, targetId) => {
            votes.set(targetId, voters.filter(voter => voter !== player));
          }); // apply current choice this player made

          let choicesForTarget = votes.get(target.id);
          if (!choicesForTarget) return;
          choicesForTarget.push(player); // decide if the player has enough votes

          const mayor = this.determineVotingWinner(votes, minVotesToWin);
          if (!mayor) return;
          this.setMayor(mayor);
          resolve();
        });
      }
    });
  }

  runDayPartThree() {
    this.emitActionToAlive('daytime accusations');
    let accusations = this.getVotingChoicesBase();

    for (const player of this.alivePlayers) {
      player.on('accuse', ({
        player: votedFor
      }) => {
        const target = this.getPlayerById(votedFor);
        if (!target) return; // remove previous choice this player made

        accusations.forEach((accusers, targetId) => {
          accusations.set(targetId, accusers.filter(voter => voter !== player));
        }); // apply current choice this player made

        let choicesForTarget = accusations.get(target.id);
        if (!choicesForTarget) return;
        choicesForTarget.push(player);
        this.emitAccusations(accusations);
      });
    }

    return new Promise((resolve, reject) => {
      if (!this.mayor) return (0, _helpers.after)(60, () => resolve(accusations));
      this.mayor.once('mayor continue to voting', () => {
        if (Array.from(accusations.values()).some(accusers => accusers.length > 0)) resolve(accusations);
      });
    });
  }

  runDayPartFour(accusations) {
    let accused = [];

    for (const entry of accusations.entries()) {
      if (!entry[1].length) continue;
      const player = this.getPlayerById(entry[0]);
      if (player) accused.push(player.forPublic);
    }

    this.emitToAlive('action', {
      view: 'daytime voting',
      data: {
        accused
      }
    });
    let votes = this.getVotingChoicesBase();
    const minVotesForVictim = this.getMinVoteCount(this.alivePlayers.length);
    return new Promise((resolve, reject) => {
      for (const player of this.alivePlayers) {
        player.on('vote', ({
          player: votedFor
        }) => {
          const target = this.getPlayerById(votedFor);
          if (!target) return; // remove previous choice this player made

          votes.forEach((voters, targetId) => {
            votes.set(targetId, voters.filter(voter => voter !== player));
          }); // apply current choice this player made

          let choicesForTarget = votes.get(target.id);
          if (!choicesForTarget) return;
          choicesForTarget.push(player); // decide if the victim has enough votes

          const victim = this.determineVotingWinner(votes, minVotesForVictim);
          if (!victim) return;
          this.victims.village = victim;
          resolve();
        });
      }
    });
  }

  playersOfRole(role) {
    return this.playersByRole.get(role) || [];
  }

  anyPlayersAre(role) {
    return !!this.playersOfRole(role).length;
  }

  getAutoresolvingPromise(min = 4, max = 15) {
    return new Promise((resolve, reject) => {
      (0, _helpers.after)((0, _helpers.randomNumber)(min, max), resolve);
    });
  }

  getAutoresolvingPromiseArray(min = 4, max = 15) {
    return [this.getAutoresolvingPromise(min, max)];
  }

  emitInLove(to, other) {
    to.emit('action', {
      view: 'amor in-love',
      data: {
        other: Object.assign({
          role: other.gameData.get('role')
        }, other.forPublic)
      }
    });
    return this;
  }

  getPlayerById(id) {
    return this.lobby.players.find(player => player.id === id);
  }

  getVotingChoicesBase() {
    let choices = new Map();

    for (const player of this.alivePlayers) {
      choices.set(player.id, []);
    }

    return choices;
  }

  getMinVoteCount(total) {
    if (total < 2) return total;
    return total / 1.99; // we always need more than 50%
  }

  determineVotingWinner(choices, minVotesForVictim, preferMayor = true) {
    for (const target of choices.entries()) {
      let votes = target[1].length;
      if (preferMayor && this.mayor && target[1].includes(this.mayor)) votes += .5;

      if (votes >= minVotesForVictim) {
        return this.getPlayerById(target[0]) || false;
      }
    }

    return false;
  }

  resetVictims() {
    this.victims = {
      village: null,
      werewolves: null,
      // hunter: null,
      witches: [],
      elders: []
    };
    return this;
  }

  resetProtected() {
    this.protected = [];
    return this;
  }

  handleDeaths() {
    let deaths = []; // add werewolf victim

    if (this.victims.werewolves) deaths.push(this.victims.werewolves); // add witch victims

    deaths.push(...this.victims.witches); // add village victim

    if (this.victims.village) deaths.push(this.victims.village); // remove any protected victims

    deaths = deaths.filter(player => !this.protected.includes(player)); // handle lovers

    if (this.inLove && (deaths.includes(this.inLove[0]) || deaths.includes(this.inLove[1]))) {
      deaths.push(...this.inLove);
    } // add elders


    deaths.push(...this.victims.elders);
    deaths = (0, _lodash.default)(deaths).uniq().value(); // kill players

    for (const player of deaths) {
      player.gameData.set('dead', true);
      player.emit('dead');
    } // clean up role arrays


    for (const role of this.playersByRole.keys()) {
      const playersOfRole = this.playersByRole.get(role);
      if (!playersOfRole) continue;
      this.playersByRole.set(role, playersOfRole.filter(player => !player.gameData.get('dead')));
    }

    if (deaths.length) this.lobby.emit('log', deaths.map(player => player.name).join(', ') + ' died.');else this.lobby.emit('log', 'No-one died.');
    this.lobby.emitPlayers();
    this.resetVictims();
    return deaths;
  } // protected async handleHunterDeaths(deaths: Player[]) : Promise<Player[] | undefined> {
  // 	const deadHunters = deaths.filter((player) => player.gameData.get('role') === 'hunter')
  // 	if (! deadHunters.length) return Promise.all([])
  //
  // 	let killed = []
  //
  // 	for (const hunter of deadHunters) {
  // 		killed.push(... await this.getHunterVictim(hunter))
  // 	}
  //
  // 	return killed
  // }
  //
  // protected getHunterVictim(hunter: Player) : Promise<Player[]> {
  // 	return new Promise((resolve, reject) => {
  // 		hunter.emit('action', { view: 'hunter choose' })
  // 		.once('hunter choice', async ({ player }: { player: string }) => {
  // 			hunter.emit('clear action')
  //
  // 			const victim = this.getPlayerById(player)
  // 			if (! victim) return resolve()
  //
  // 			this.victims.hunter = victim
  //
  // 			const deaths = this.killVictims()
  // 			await this.handleHunterDeaths(deaths)
  // 			await this.handleMayorDeath(deaths)
  //
  // 			resolve()
  // 		})
  //
  // 		// TODO force resolve after some time
  // 	})
  // }


  async handleMayorDeath(deaths) {
    const deadMayor = deaths.find(player => player.gameData.get('mayor'));
    if (!deadMayor) return Promise.all([]);
    deadMayor.emit('action', {
      view: 'mayor choose successor'
    });
    return new Promise((resolve, reject) => {
      deadMayor.once('mayor choice', ({
        player: playerId
      }) => {
        deadMayor.emit('clear action');
        let target = this.getPlayerById(playerId);
        if (!target) target = this.getRandomPlayer();
        this.setMayor(target, false);
        resolve();
      }); // TODO force resolve after some time
    });
  }

  matchHasClinched() {
    const alive = this.alivePlayers;

    if (alive.length === 2 && this.inLove && alive[0].gameData.get('inLoveWith') && alive[0].gameData.get('inLoveWith') === alive[1]) {
      return this.forceWin('lovers', this.inLove);
    }

    const werewolves = alive.filter(player => player.gameData.get('role') === 'werewolf');

    if (werewolves.length === 0) {
      return this.forceWin('citizens', this.lobby.players.filter(player => player.gameData.get('role') !== 'werewolf'));
    }

    if (werewolves.length === alive.length) {
      return this.forceWin('werewolves', this.lobby.players.filter(player => player.gameData.get('role') === 'werewolf'));
    }

    return false;
  }

  forceWin(group, players) {
    this.winners = players;
    this.losers = this.lobby.players.filter(player => !players.includes(player));
    this.winner = group;
    this.emitWinner();
    this.end();
    return true;
  }

  emitWinner() {
    if (!this.winner || !this.winners || !this.losers) return;
    this.lobby.emit('action', {
      view: 'gg wp',
      data: {
        winner: this.winner,
        winners: this.winners.map(player => player.forFinalScoreboard),
        losers: this.losers.map(player => player.forFinalScoreboard)
      }
    });
  }

  speakingAllowed(allowed) {
    this.lobby.emit('speaking allowed', allowed);
    return this;
  }

  emitAccusations(accusations) {
    let accusedPlayers = [];

    for (const playerId of accusations.keys()) {
      const accusers = accusations.get(playerId);
      if (!accusers || !accusers.length) continue;
      const player = this.getPlayerById(playerId);
      if (!player) continue;
      accusedPlayers.push(player.forPublic);
    }

    this.lobby.emit('accusations', {
      accusations: accusedPlayers
    });
    return this;
  }

  emitToAlive(event, data) {
    for (const player of this.alivePlayers) {
      player.emit(event, data);
    }

    return this;
  }

  emitActionToAlive(view, data) {
    this.emitToAlive('action', {
      view,
      data
    });
    return this;
  }

  getRandomPlayer(includeDead = false) {
    return _lodash.default.sample(includeDead ? this.lobby.players : this.alivePlayers);
  }

  setMayor(mayor, wasElected = true) {
    this.mayor = mayor;
    this.mayor.gameData.set('mayor', true);
    this.mayor.emit('mayor');
    if (wasElected) this.lobby.emit('log', `${mayor.name} was elected mayor.`);else this.lobby.emit('log', `${mayor.name} was chosen as new mayor.`);
    this.lobby.emitPlayers();
    return this;
  }

  killEldersIfAppropriate() {
    if (this.phase.round === this.playersOfRole('werewolf').length + 1) {
      this.victims.elders = this.playersOfRole('elder');
    }

    return this;
  }

}

exports.default = Werewolves;
//# sourceMappingURL=Werewolves.js.map