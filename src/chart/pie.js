import {scales, chart, quan} from 'aurelia-charts';
import {Chart} from './base';

@scales([quan])
@chart('C3', 'pie')
export class PieChart extends Chart {

  constructor() {
    super();
    this.settings = {
      data: {
        type:    'pie',
        columns: []
      }
    };
  }

  calculateSettings() {
    const columns = this.data.map(dataset => {
      const label = dataset.key;

      return [label].concat(this.dimensions[0].data(dataset.values));
    });

    this.settings = {columns};

    return this.settings;
  }

}
