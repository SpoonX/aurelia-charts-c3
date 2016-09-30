var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { OneDimensional } from './one-dimensional';

export let GaugeChart = (_dec = scales([quan]), _dec2 = chart('C3', 'gauge'), _dec(_class = _dec2(_class = class GaugeChart extends OneDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'gauge',
        columns: []
      }
    }, _temp;
  }

}) || _class) || _class);