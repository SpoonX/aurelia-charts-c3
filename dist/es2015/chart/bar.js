var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { OneDimensional } from './one-dimensional';

export let BarChart = (_dec = scales([quan]), _dec2 = chart('C3', 'bar'), _dec(_class = _dec2(_class = class BarChart extends OneDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'bar',
        columns: []
      },
      bar: {
        width: {
          ratio: 0.8
        }
      }
    }, _temp;
  }

}) || _class) || _class);