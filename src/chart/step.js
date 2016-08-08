import {scales, chart, quan} from 'aurelia-charts';
import {Chart} from './base';

@scales([quan, quan])
@chart('C3', 'step')
export class StepChart extends Chart {
  settings = {
    data: {
      type: 'step',
      columns: []
    }
  }
}
