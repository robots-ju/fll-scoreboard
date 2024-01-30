import * as m from 'mithril';
import trans from '../helpers/trans';
import {Mission, MissionObject} from '../interfaces/ChallengeYear';

interface FieldMissionAttrs {
  key: number
  mission: Mission
  missions: MissionObject
  focusMission: (key: number) => void
}

export default class FieldMission implements m.ClassComponent<FieldMissionAttrs> {
  view(vnode: m.Vnode<FieldMissionAttrs>) {
    // Current mission description from missions.json
    const {mission, missions} = vnode.attrs;

    let scoring = false;
    let score = 0;

    mission.tasks.forEach(
      task => {
        task.options.forEach(
          option => {
            switch (option.type) {
              case 'boolean':
                if (missions[option.handle]) {
                  scoring = true;

                  if (option.points) {
                    score += option.points;
                  }
                }
                break;
              case 'number':
                if (missions[option.handle]) {
                  scoring = true;

                  if (option.points) {
                    score += missions[option.handle] * option.points;
                  }

                  if (option.points_list) {
                    score += option.points_list[missions[option.handle] - 1];
                  }
                }
                break;
              default:
                console.warn('Unknown option type ' + option.type);
            }
          }
        );
      }
    );

    return m('.scoreboard__field__mission', {
      onclick() {
        vnode.attrs.focusMission(vnode.attrs.key);
      },
      style: {
        top: mission.position.top + '%',
        left: mission.position.left + '%',
      },
    }, [
      m('.pointer', {
        className: (scoring ? ' scoring' : '') + (score < 0 ? ' negative' : ''),
      }, [
        m('.score', score !== 0 ? score : (scoring ? m('i.fas.fa-check') : '')),
        m('.number', mission.number === null ? 'PE' : ('M' + mission.number)),
      ]),
      m('.label', trans(mission.title)),
    ]);
  }
}
