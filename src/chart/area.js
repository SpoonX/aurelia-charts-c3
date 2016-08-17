import {scales, chart, quan} from 'aurelia-charts';
import {TwoDimensional} from './two-dimensional';

@scales([quan, quan])
@chart('C3', 'area')
export class AreaChart extends TwoDimensional {
  settings = {
    data: {
      type: 'area',
      columns: []
    }
  }
}
