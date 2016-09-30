var _dec, _dec2, _class;

import { quan, scales, chart } from 'aurelia-charts';
import { TwoDimensional } from './two-dimensional';

export let SplineChart = (_dec = scales([quan, quan]), _dec2 = chart('C3', 'spline'), _dec(_class = _dec2(_class = class SplineChart extends TwoDimensional {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        type: 'spline',
        columns: []
      }
    }, _temp;
  }

}) || _class) || _class);