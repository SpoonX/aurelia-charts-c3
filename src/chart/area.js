import {scales, chart, quan} from 'aurelia-charts';
import {Chart} from './base';

@scales([quan, quan])
@chart('C3', 'area')
export class AreaChart extends Chart {
  settings = {
    data: {
      type: 'area-spline',
      columns: []
    }
  }
}
