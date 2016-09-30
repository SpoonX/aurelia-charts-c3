'use strict';

System.register(['aurelia-charts', './two-dimensional'], function (_export, _context) {
  "use strict";

  var quan, scales, chart, TwoDimensional, _dec, _dec2, _class, LineChart;

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
      quan = _aureliaCharts.quan;
      scales = _aureliaCharts.scales;
      chart = _aureliaCharts.chart;
    }, function (_twoDimensional) {
      TwoDimensional = _twoDimensional.TwoDimensional;
    }],
    execute: function () {
      _export('LineChart', LineChart = (_dec = scales([quan, quan]), _dec2 = chart('C3', 'line'), _dec(_class = _dec2(_class = function (_TwoDimensional) {
        _inherits(LineChart, _TwoDimensional);

        function LineChart() {
          var _temp, _this, _ret;

          _classCallCheck(this, LineChart);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _TwoDimensional.call.apply(_TwoDimensional, [this].concat(args))), _this), _this.settings = {
            data: {
              type: 'line',
              columns: []
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        return LineChart;
      }(TwoDimensional)) || _class) || _class));

      _export('LineChart', LineChart);
    }
  };
});