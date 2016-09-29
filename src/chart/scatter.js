import {quan, scales, chart} from 'aurelia-charts';
import {TwoDimensional} from './two-dimensional';

/* namespaced to enable the use of multiple graph libs */
@scales([quan, quan])
@chart('C3', 'scatter')
export class ScatterChart extends TwoDimensional {
  settings = {
    data: {
      type:    'scatter',
      columns: []
    }
  }
}
