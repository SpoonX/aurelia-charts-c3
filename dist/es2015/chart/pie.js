var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { OneDimensional } from './one-dimensional';

export let PieChart = (_dec = scales([quan]), _dec2 = chart('C3', 'pie'), _dec(_class = _dec2(_class = class PieChart extends OneDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'pie',
        columns: []
      }
    }, _temp;
  }

}) || _class) || _class);