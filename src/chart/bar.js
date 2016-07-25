import {scales, chart, quan, qual} from 'aurelia-charts';
import {Chart} from './base';

/* namespaced to enable the use of multiple graph libs */
@scales([quan, quan], [qual, quan])
@chart('C3', 'bar')
export class BarChart extends Chart {

  settings = {
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

}
