import {scales, chart, quan} from 'aurelia-charts';
import {TwoDimensional} from './two-dimensional';

@scales([quan, quan])
@chart('C3', 'step')
export class StepChart extends TwoDimensional {
  settings = {
    data: {
      type: 'step',
      columns: []
    }
  }
}
