define(['exports', 'aurelia-charts', './one-dimensional'], function (exports, _aureliaCharts, _oneDimensional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StackedBarChart = undefined;

  

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

  var StackedBarChart = exports.StackedBarChart = (_dec = (0, _aureliaCharts.scales)([_aureliaCharts.quan]), _dec2 = (0, _aureliaCharts.chart)('C3', 'stackedBar'), _dec(_class = _dec2(_class = function (_OneDimensional) {
    _inherits(StackedBarChart, _OneDimensional);

    function StackedBarChart() {
      

      var _this = _possibleConstructorReturn(this, _OneDimensional.call(this));

      _this.settings = {
        data: {
          type: 'bar',
          columns: []
        },
        bar: {
          width: {
            ratio: 0.8
          }
        }
      };


      var oldCalculateSettings = _this.calculateSettings;

      _this.calculateSettings = function () {
        _this.settings = oldCalculateSettings.call(_this);

        _this.instance.groups([_this.settings.columns.map(function (column) {
          return column[0];
        })]);

        return _this.settings;
      };
      return _this;
    }

    return StackedBarChart;
  }(_oneDimensional.OneDimensional)) || _class) || _class);
});