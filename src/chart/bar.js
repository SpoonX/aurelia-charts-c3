import {scales, chart, quan} from 'aurelia-charts';
import {OneDimensional} from './one-dimensional';

/* namespaced to enable the use of multiple graph libs */
@scales([quan])
@chart('C3', 'bar')
export class BarChart extends OneDimensional {

  settings = {
    data: {
      type:    'bar',
      columns: []
    },
    bar:  {
      width: {
        ratio: 0.8
      }
    }
  };

}
