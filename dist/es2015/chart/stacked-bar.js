var _dec, _dec2, _class;

import { scales, chart, quan } from 'aurelia-charts';
import { OneDimensional } from './one-dimensional';

export let StackedBarChart = (_dec = scales([quan]), _dec2 = chart('C3', 'stackedBar'), _dec(_class = _dec2(_class = class StackedBarChart extends OneDimensional {

  constructor() {
    super();

    this.settings = {
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
    const oldCalculateSettings = this.calculateSettings;

    this.calculateSettings = () => {
      this.settings = oldCalculateSettings.call(this);

      this.instance.groups([this.settings.columns.map(column => column[0])]);

      return this.settings;
    };
  }
}) || _class) || _class);