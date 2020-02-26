import * as m from 'mithril';
import trans from '../helpers/trans';
import {Mission, MissionObject} from "../interfaces/ChallengeYear";

export default {
  view(vnode) {
    // Current mission description from missions.json
    const mission = vnode.attrs.mission as Mission;

    // Current game state
    const missions = vnode.attrs.missions as MissionObject;

    let score = 0;

    mission.tasks.forEach(
      task => {
        task.options.forEach(
          option => {
            switch (option.type) {
              case 'boolean':
                if (missions[option.handle]) {
                  score += option.points;
                }
                break;
              case 'number':
                if (missions[option.handle]) {
                  score += missions[option.handle] * option.points;
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
        className: (score !== 0 ? ' scoring' : '') + (score < 0 ? ' negative' : ''),
      }, [
        m('.score', score !== 0 ? score : ''),
        m('.number', mission.number === null ? 'PE' : ('M' + mission.number)),
      ]),
      m('.label', trans(mission.title)),
    ]);
  },
}
