var _dec, _dec2, _class;

import { quan, scales, chart } from 'aurelia-charts';
import { ThreeDimensional } from './three-dimensional';

export let BubbleChart = (_dec = scales([quan, quan, quan]), _dec2 = chart('C3', 'bubble'), _dec(_class = _dec2(_class = class BubbleChart extends ThreeDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'scatter',
        columns: []
      },
      point: {
        r: d => this.dimensions.third[d.id][d.index]
      }
    }, _temp;
  }

}) || _class) || _class);