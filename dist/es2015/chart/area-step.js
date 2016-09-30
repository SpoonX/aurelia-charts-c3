var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { TwoDimensional } from './two-dimensional';

export let AreaStepChart = (_dec = scales([quan, quan]), _dec2 = chart('C3', 'areaStep'), _dec(_class = _dec2(_class = class AreaStepChart extends TwoDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'area-step',
        columns: []
      }
    }, _temp;
  }

}) || _class) || _class);