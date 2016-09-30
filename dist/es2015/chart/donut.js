var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { OneDimensional } from './one-dimensional';

export let DonutChart = (_dec = scales([quan]), _dec2 = chart('C3', 'donut'), _dec(_class = _dec2(_class = class DonutChart extends OneDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'donut',
        columns: []
      }
    }, _temp;
  }

}) || _class) || _class);