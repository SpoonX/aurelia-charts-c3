import {scales, chart, quan} from 'aurelia-charts';
import {PieChart} from './pie';

@scales([quan])
@chart('C3', 'donut')
export class DonutChart extends PieChart {

  constructor() {
    super();
    this.settings = {
      data: {
        type:    'donut',
        columns: []
      }
    };
  }

}
