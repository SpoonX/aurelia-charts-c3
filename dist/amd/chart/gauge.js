define(['exports', 'aurelia-charts', './one-dimensional'], function (exports, _aureliaCharts, _oneDimensional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GaugeChart = undefined;

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

  var _dec, _dec2, _class;

  var GaugeChart = exports.GaugeChart = (_dec = (0, _aureliaCharts.scales)([_aureliaCharts.quan]), _dec2 = (0, _aureliaCharts.chart)('C3', 'gauge'), _dec(_class = _dec2(_class = function (_OneDimensional) {
    _inherits(GaugeChart, _OneDimensional);

    function GaugeChart() {
      var _temp, _this, _ret;

      _classCallCheck(this, GaugeChart);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _OneDimensional.call.apply(_OneDimensional, [this].concat(args))), _this), _this.settings = {
        data: {
          type: 'gauge',
          columns: []
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return GaugeChart;
  }(_oneDimensional.OneDimensional)) || _class) || _class);
});