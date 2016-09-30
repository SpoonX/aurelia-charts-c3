var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { TwoDimensional } from './two-dimensional';

export let AreaChart = (_dec = scales([quan, quan]), _dec2 = chart('C3', 'area'), _dec(_class = _dec2(_class = class AreaChart extends TwoDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'area',
        columns: []
      }
    }, _temp;
  }

}) || _class) || _class);