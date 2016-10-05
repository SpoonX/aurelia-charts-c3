define(['exports', 'aurelia-charts', './three-dimensional'], function (exports, _aureliaCharts, _threeDimensional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BubbleChart = undefined;

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

  var BubbleChart = exports.BubbleChart = (_dec = (0, _aureliaCharts.scales)([_aureliaCharts.quan, _aureliaCharts.quan, _aureliaCharts.quan]), _dec2 = (0, _aureliaCharts.chart)('C3', 'bubble'), _dec(_class = _dec2(_class = function (_ThreeDimensional) {
    _inherits(BubbleChart, _ThreeDimensional);

    function BubbleChart() {
      var _temp, _this, _ret;

      _classCallCheck(this, BubbleChart);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _ThreeDimensional.call.apply(_ThreeDimensional, [this].concat(args))), _this), _this.settings = {
        data: {
          type: 'scatter',
          columns: []
        },
        point: {
          r: function r(d) {
            return _this.dimensions.third[d.id][d.index];
          }
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return BubbleChart;
  }(_threeDimensional.ThreeDimensional)) || _class) || _class);
});