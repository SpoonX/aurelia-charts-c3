import {scales, chart, quan} from 'aurelia-charts';
import {OneDimensional}      from './one-dimensional';

@scales([quan])
@chart('C3', 'pie')
export class PieChart extends OneDimensional {

  settings = {
    data: {
      type:    'pie',
      columns: []
    }
  };

}
