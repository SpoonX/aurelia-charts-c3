import {logger, chart, Chart} from 'aurelia-charts';
import c3 from 'c3';

/* @todo: consider naming the Chart class of aurelia-charts an AureliaChart */

/**
 * @class C3Chart is the base class for all c3 related graphs
 */
@chart('C3')
export class C3Chart extends Chart {

  settings = {
    data: {
      columns: []
    }
  };

  create() {
    this.settings.bindto = this.element;
    this.instance        = c3.generate(this.settings);
    this.update();
  }

  calculateSettings() {
    logger.error(`'calculateSettings' method is not defined for ${this.constructor.name}`);
  }

  update(newData, oldData) {
    // requires the following properties in order to work
    if (!Array.isArray(this.data) || !this.dimensions || !this.instance) {
      return
    }

    const newIds    = this.dimensionIds(newData || []);
    const oldIds    = this.dimensionIds(oldData || []);
    const unloadIds = oldIds.filter(oldId => newIds.indexOf(oldId) === -1);

    this.calculateSettings();
    this.instance.unload({
      ids : unloadIds,
      done: () => {
        this.instance.load(this.settings);
      }
    });
  }

  destroy() {
    this.instance.destroy();
  }

  typeChanged(type) {
    this.instance.transform(type);
  }

  dimensionIds(data) {
    return data.map((dataset, index) => {
      return this.dimensions.name ? this.dimensions.name(dataset, index, data) : index;
    });
  }

}

