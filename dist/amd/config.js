define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Config = exports.Config = function () {
    function Config() {
      _classCallCheck(this, Config);

      this.settings = {};
    }

    Config.prototype.configure = function configure() {
      var incomming = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      Object.assign(this.settings, incomming);

      return this;
    };

    return Config;
  }();
});