define(['exports', './c3-chart'], function (exports, _c3Chart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TwoDimensional = undefined;

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

  var TwoDimensional = exports.TwoDimensional = function (_C3Chart) {
    _inherits(TwoDimensional, _C3Chart);

    function TwoDimensional() {
      _classCallCheck(this, TwoDimensional);

      return _possibleConstructorReturn(this, _C3Chart.apply(this, arguments));
    }

    TwoDimensional.prototype.calculateSettings = function calculateSettings() {
      var _this2 = this;

      var columns = [];
      var xs = {};

      this.data.forEach(function (dataset) {
        var label = _this2.dimensions[1].label(dataset);
        var xLabel = _this2.dimensions[0].label(dataset);
        xs[label] = xLabel;
        columns = columns.concat([[label].concat(dataset.map(_this2.dimensions[1].value)), [xLabel].concat(dataset.map(_this2.dimensions[0].value))]);
      });

      this.instance.axis.labels({
        x: this.dimensions[0].label(),
        y: this.dimensions[1].label()
      });

      this.settings = { columns: columns, xs: xs };

      return this.settings;
    };

    return TwoDimensional;
  }(_c3Chart.C3Chart);
});