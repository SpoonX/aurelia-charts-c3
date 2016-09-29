import {scales, chart, quan} from 'aurelia-charts';
import {OneDimensional}      from './one-dimensional';

@scales([quan])
@chart('C3', 'donut')
export class DonutChart extends OneDimensional {

  settings = {
    data: {
      type:    'donut',
      columns: []
    }
  };

}
