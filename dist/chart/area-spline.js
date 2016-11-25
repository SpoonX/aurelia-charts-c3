import {scales, chart, quan} from 'aurelia-charts';
import {TwoDimensional} from './two-dimensional';

@scales([quan, quan])
@chart('C3', 'areaSpline')
export class AreaSplineChart extends TwoDimensional {
  settings = {
    data: {
      type   : 'area-spline',
      columns: []
    }
  }
}
