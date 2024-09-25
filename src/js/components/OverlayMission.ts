import * as m from 'mithril';
import trans from '../helpers/trans';
import OverlayTask from './OverlayTask';
import {Mission, MissionObject} from '../interfaces/ChallengeYear';
import NoEquipmentIndicator from './NoEquipmentIndicator';

interface OverlayMissionAttrs {
  key: number
  focused_mission: number
  mission: Mission
  missions: MissionObject
}

export default class OverlayMission implements m.ClassComponent<OverlayMissionAttrs> {
  view(vnode: m.Vnode<OverlayMissionAttrs>) {
    const {mission, missions} = vnode.attrs;

    let className = '--hidden-previous';

    if (vnode.attrs.key === vnode.attrs.focused_mission) {
      className = '';
    } else if (vnode.attrs.key > vnode.attrs.focused_mission) {
      className = '--hidden-next';
    }

    return m('.scoreboard__overlay__mission', {
      className,
    }, m('.content', [
      mission.no_equipment_constraint ? m(NoEquipmentIndicator) : null,
      m('h1', (mission.number === null ? '' : ('M' + mission.number + ' ')) + trans(mission.title)),
      mission.description ? m('p', trans(mission.description)) : null,
      m('.tasks', {
        className: mission.tasks.length > 1 ? ' multiple' : '',
      }, mission.tasks.map(
        (task, key) => m(OverlayTask, {
          task,
          key,
          missions,
        })
      )),
      mission.constraints && m('ul', mission.constraints.map(
        (constraint, key) => m('li', {
          key,
        }, trans(constraint))
      )),
    ]));
  }
}
