'use strict';

System.register(['aurelia-charts', 'c3'], function (_export, _context) {
  "use strict";

  var logger, chart, Chart, c3, _dec, _class, C3Chart;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_aureliaCharts) {
      logger = _aureliaCharts.logger;
      chart = _aureliaCharts.chart;
      Chart = _aureliaCharts.Chart;
    }, function (_c) {
      c3 = _c.default;
    }],
    execute: function () {
      _export('C3Chart', C3Chart = (_dec = chart('C3'), _dec(_class = function (_Chart) {
        _inherits(C3Chart, _Chart);

        function C3Chart() {
          var _temp, _this, _ret;

          _classCallCheck(this, C3Chart);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Chart.call.apply(_Chart, [this].concat(args))), _this), _this.settings = {
            data: {
              columns: []
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        C3Chart.prototype.create = function create() {
          this.settings.bindto = this.element;
          this.instance = c3.generate(this.settings);
          if (this.data && this.dimensions) {
            this.update();
          }
        };

        C3Chart.prototype.calculateSettings = function calculateSettings() {
          logger.error('\'calculateSettings\' method is not defined for ' + this.constructor.name);
        };

        C3Chart.prototype.update = function update() {
          this.calculateSettings();
          this.instance.load(this.settings);
        };

        C3Chart.prototype.destroy = function destroy() {
          this.instance.destroy();
        };

        C3Chart.prototype.typeChanged = function typeChanged(type) {
          this.instance.transform(type);
        };

        return C3Chart;
      }(Chart)) || _class));

      _export('C3Chart', C3Chart);
    }
  };
});