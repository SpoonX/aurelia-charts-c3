'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreeDimensional = undefined;

var _c3Chart = require('./c3-chart');

var _twoDimensional = require('./two-dimensional');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThreeDimensional = exports.ThreeDimensional = function (_C3Chart) {
  _inherits(ThreeDimensional, _C3Chart);

  function ThreeDimensional() {
    _classCallCheck(this, ThreeDimensional);

    return _possibleConstructorReturn(this, _C3Chart.apply(this, arguments));
  }

  ThreeDimensional.prototype.calculateSettings = function calculateSettings() {
    var _this2 = this;

    this.dimensions.third = {};

    this.settings = _twoDimensional.TwoDimensional.prototype.calculateSettings.call(this);

    this.data.forEach(function (dataset, index) {
      var name = _this2.dimensions.name ? _this2.dimensions.name(dataset, index, _this2.data) : index;

      _this2.dimensions.third[name] = dataset.map(_this2.dimensions[2].value);
    });

    return this.settings;
  };

  return ThreeDimensional;
}(_c3Chart.C3Chart);