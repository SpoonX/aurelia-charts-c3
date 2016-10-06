import {quan, scales, chart} from 'aurelia-charts';
import {ThreeDimensional} from './three-dimensional';

/**
 * @class BubbleChart
 *
 * Basically a scatter chart but it has three dimensions. The third being the
 * radius of the scatter
 */
@scales([quan, quan, quan])
@chart('C3', 'bubble')
export class BubbleChart extends ThreeDimensional {

  settings = {
    data: {
      type   : 'scatter',
      columns: []
    },
    point: {
      r: d => this.dimensions.third[d.id][d.index]
    }
  }
}
