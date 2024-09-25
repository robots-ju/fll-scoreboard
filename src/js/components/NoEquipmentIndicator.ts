import * as m from 'mithril';
import trans from '../helpers/trans';
import {texts} from '../global';

export default class NoEquipmentIndicator implements m.ClassComponent {
  tooltip: M.Tooltip = null;

  view() {
    return m('.no_equipment_constraint_indicator', {
      'data-position': 'left',
      'data-tooltip': trans(texts.strings.no_equipment_contraint_definition),
    });
  }

  oncreate(vnode) {
    this.tooltip = M.Tooltip.init(vnode.dom);
  }

  onremove(vnode) {
    this.tooltip.destroy();
  }
}
