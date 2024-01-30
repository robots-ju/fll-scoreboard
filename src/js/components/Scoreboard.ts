import * as m from 'mithril';
import icon from '../helpers/icon';
import trans from '../helpers/trans';
import OverlayMission from './OverlayMission';
import TopViewField from './TopViewField';
import Configuration from '../utils/Configuration';
import {texts} from '../global';
import {AbstractScorer, MissionObject, Year} from '../interfaces/ChallengeYear';
import GridBoard from './GridBoard';

export interface ScoreboardAttrs {
  missions: MissionObject
  data: Year
  scorer: AbstractScorer<MissionObject, any>
}

export default class Scoreboard implements m.ClassComponent<ScoreboardAttrs> {
  focused_mission = -1
  missionsCount: number
  gridMode: boolean = false

  oninit(vnode: m.Vnode<ScoreboardAttrs>) {
    // Need to copy this value because it will be used in a callback without access to vnode
    this.missionsCount = vnode.attrs.data.missions.length;

    this.gridMode = window.localStorage.getItem('gridMode') === '1';

    // The index of the mission to display in extended format
    // If the viewport is large enough we open the first mission in the wizard
    if (!this.gridMode && window.innerWidth > Configuration.openOverlayWhenInnerWidthGreatherThan) {
      this.focused_mission = 0;
    }
  }

  focusMission(mission: string | number) {
    let newIndex = this.focused_mission;

    switch (mission) {
      case 'next':
        if (newIndex < this.missionsCount - 1) {
          newIndex++;
        } else {
          newIndex = -1;
        }
        break;
      case 'prev':
        if (newIndex > -1) {
          newIndex--;
        }
        break;
      case 'close':
        newIndex = -1;
        break;
      default:
        newIndex = typeof mission === 'string' ? parseInt(mission) : mission;
    }

    this.focused_mission = newIndex;
  }

  view(vnode: m.Vnode<ScoreboardAttrs>) {
    const {missions, data, scorer} = vnode.attrs;
    const output = scorer.computeMissions(missions);
    const score = output.score;

    return m('div', {
      style: {
        '--challenge-main-color': data.meta.colors.main,
        '--challenge-missions-color': data.meta.colors.missions,
        '--challenge-scoring-color': data.meta.colors.scoring,
        '--challenge-penalties-color': data.meta.colors.penalties,
      },
    }, [
      m('header.scoreboard__header', [
        m('i.header-block.fas.fa-bars.sidenav-trigger', {
          'data-target': 'menu',
        }),
        m('img.logo', {
          src: Configuration.imagePath + data.meta.logo,
          alt: data.meta.title + ' season logo',
        }),
        m('.header-block.score', 'Score: ' + score),
        m('h1..scoreboard__header__title.header-block', [
          m('em', 'Robots-JU'),
          ' FLL Scoreboard',
        ]),
        m('.overlay-nav', {
          className: this.focused_mission !== -1 ? ' active' : '',
        }, [
          m('button.header-block.nav-prev.waves-effect', {
            onclick: () => {
              this.focusMission('prev');
            },
          }, [icon('chevron-left'), ' ', trans(texts.strings.prev)]),
          m('button.header-block.nav-next.waves-effect', {
            onclick: () => {
              this.focusMission('next');
            },
          }, [trans(texts.strings.next), ' ', icon('chevron-right')]),
          m('button.header-block.nav-close.waves-effect', {
            onclick: () => {
              this.focusMission('close');
            },
          }, [trans(texts.strings.close), ' ', icon('close')]),
        ]),
        m('button.header-block.start-overlay', {
          className: this.focused_mission === -1 ? ' active' : '',
          onclick: () => {
            this.focusMission(0);
          },
        }, [icon('magic'), ' ', trans(texts.strings.launch_wizard)]),
      ]),
      m('.scoreboard__warnings', output.warnings.map(
        warning => {
          const warning_key = Object.keys(scorer.warnings).find(key => scorer.warnings[key] === warning);

          let warning_data = null;

          if (warning_key && data.warnings.hasOwnProperty(warning_key)) {
            warning_data = data.warnings[warning_key];
          } else {
            warning_data = texts.strings.unknown_warning;
          }

          return m('.scoreboard__warning', {
            onclick: () => {
              if (warning_data.mission) {
                const index = data.missions.findIndex(mission => mission.number === warning_data.mission);

                if (index !== -1) {
                  this.focusMission(index);
                }
              }
            },
          }, trans(warning_data).replace('%warning%', warning));
        }
      )),
      this.gridMode ? m(GridBoard, {
        data,
        missions,
        focused_mission: this.focused_mission,
        focusMission: this.focusMission.bind(this),
      }) : m(TopViewField, {
        data,
        missions,
        focused_mission: this.focused_mission,
        focusMission: this.focusMission.bind(this),
      }),
      m('.scoreboard__overlay', {
        className: this.focused_mission !== -1 ? ' --open' : '',
      }, data.missions.map(
        (mission, key) => m(OverlayMission, {
          mission,
          key,
          missions,
          focused_mission: this.focused_mission,
        })
      )),
      m('.tools', [
        m('button.btn.btn-larger', {
          onclick() {
            const initial = scorer.initialMissionsState();
            Object.keys(initial).forEach(key => {
              missions[key] = initial[key];
            });
          },
        }, [
          icon('eraser'),
          ' ',
          trans(texts.strings.reset),
        ]),
        m('button.btn', {
          onclick: () => {
            this.gridMode = !this.gridMode;
            this.focused_mission = -1;
            window.localStorage.setItem('gridMode', this.gridMode ? '1' : '0');
          },
        }, this.gridMode ? [
          icon('map'),
          ' ',
          trans(texts.strings.map_mode),
        ] : [
          icon('list'),
          ' ',
          trans(texts.strings.grid_mode),
        ]),
      ]),
    ]);
  }
}
