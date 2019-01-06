"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (app, __dirname) => {
  const files = {
    '/': 'index.html',
    '/app': 'app.html'
  };
  const js = ['manifest.js', 'vendor.js', 'app.js'];
  const css = ['app.css'];

  for (const file in files) {
    app.get(file, (req, res) => res.sendFile(`${__dirname}/client/public/${files[file]}`));
  }

  for (const file of js) {
    app.get(`/js/${file}`, (req, res) => res.sendFile(`${__dirname}/client/public/js/${file}`));
  }

  for (const file of css) {
    app.get(`/css/${file}`, (req, res) => res.sendFile(`${__dirname}/client/public/css/${file}`));
  }
};

exports.default = _default;
//# sourceMappingURL=static-files.js.map