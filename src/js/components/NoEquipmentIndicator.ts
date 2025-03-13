import * as m from 'mithril';
import trans from '../helpers/trans';
import {texts} from '../global';

export default class NoEquipmentIndicator implements m.ClassComponent {
  tooltip: M.Tooltip = null;

  view() {
    const title = trans(texts.strings.no_equipment_contraint_definition);

    // Allow using the component without Materialize. We'll just fall back to a title attribute
    return m('.no_equipment_constraint_indicator', window.M ? {
      'data-position': 'left',
      'data-tooltip': title,
    } : {
      title,
    });
  }

  oncreate(vnode) {
    this.tooltip = window.M ? M.Tooltip.init(vnode.dom) : null;
  }

  onremove(vnode) {
    if (this.tooltip) {
      this.tooltip.destroy();
    }
  }
}
