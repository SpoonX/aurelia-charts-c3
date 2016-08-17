import {scales, chart, quan} from 'aurelia-charts';
import {OneDimensional}      from './one-dimensional';

@scales([quan])
@chart('C3', 'gauge')
export class GaugeChart extends OneDimensional {

  settings = {
    data: {
      type:    'gauge',
      columns: []
    }
  };

}
