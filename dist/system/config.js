"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Config;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("Config", Config = function () {
        function Config() {
          _classCallCheck(this, Config);

          this.settings = {};
        }

        Config.prototype.configure = function configure() {
          var incomming = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          Object.assign(this.settings, incomming);

          return this;
        };

        return Config;
      }());

      _export("Config", Config);
    }
  };
});