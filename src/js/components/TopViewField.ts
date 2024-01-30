import * as m from 'mithril';
import Configuration from '../utils/Configuration';
import FieldMission from './FieldMission';
import {MissionObject, Year} from '../interfaces/ChallengeYear';

interface TopViewFieldAttrs {
  data: Year
  missions: MissionObject
  focused_mission: number
  focusMission: (mission: number) => void
}

export default class TopViewField implements m.ClassComponent<TopViewFieldAttrs> {
  view(vnode: m.Vnode<TopViewFieldAttrs>) {
    const {data, missions, focused_mission, focusMission} = vnode.attrs;

    return m('.scoreboard__field', {
      className: focused_mission !== -1 ? ' --overlay-open' : '',
      style: {
        backgroundImage: 'url(' + Configuration.imagePath + data.meta.field + ')',
      },
    }, data.missions.map((mission, key) => m(FieldMission, {
      mission,
      key,
      missions,
      focusMission,
    })));
  }
}
