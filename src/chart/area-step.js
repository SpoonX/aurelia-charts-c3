import {scales, chart, quan} from 'aurelia-charts';
import {TwoDimensional}      from './two-dimensional';

@scales([quan, quan])
@chart('C3', 'areaStep')
export class AreaStepChart extends TwoDimensional {
  settings = {
    data: {
      type   : 'area-step',
      columns: []
    }
  }
}
