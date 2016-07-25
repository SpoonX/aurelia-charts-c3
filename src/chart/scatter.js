import {quan, scales, chart} from 'aurelia-charts';
import {Chart} from './base';

/* namespaced to enable the use of multiple graph libs */
@scales([quan, quan])
@chart('C3', 'scatter')
export class ScatterChart extends Chart {
  settings = {
    data: {
      type:    'scatter',
      columns: []
    }
  }
}
