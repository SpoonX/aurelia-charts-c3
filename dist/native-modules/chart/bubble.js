var _dec, _dec2, _class;



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { quan, scales, chart } from 'aurelia-charts';
import { ThreeDimensional } from './three-dimensional';

export var BubbleChart = (_dec = scales([quan, quan, quan]), _dec2 = chart('C3', 'bubble'), _dec(_class = _dec2(_class = function (_ThreeDimensional) {
  _inherits(BubbleChart, _ThreeDimensional);

  function BubbleChart() {
    var _temp, _this, _ret;

    

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
}(ThreeDimensional)) || _class) || _class);