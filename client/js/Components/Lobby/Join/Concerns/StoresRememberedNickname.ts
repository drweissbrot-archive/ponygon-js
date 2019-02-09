import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component
export default class LobbyJoinConcernsStoresRememberedNickname extends Vue {
	public name: any = window.localStorage.getItem('remembered-nickname')

	@Watch('name')
	public onNameChangedStoreRememberedNickname() : void {
		window.localStorage.setItem('remembered-nickname', this.name)
	}
}
