import * as m from 'mithril';
import Scoreboard from './Scoreboard';
import {NumericHashReader} from "../utils/NumericHashReader";
import {AbstractScorer, MissionObject, Year} from "../interfaces/ChallengeYear";

const EMPTY_HASH = /^#0+$/;

export default class StandaloneScoreboard implements m.Component {
  hashReader: NumericHashReader;
  missions: MissionObject;

  oninit(vnode) {
    const scorer = vnode.attrs.scorer as AbstractScorer<MissionObject, any>;
    this.hashReader = new NumericHashReader(scorer.initialMissionsState());
    this.missions = scorer.initialMissionsState();

    if (window.location.hash) {
      try {
        const hash = window.location.hash.substring(1);

        let initialMissionsState;

        if (hash.match(/^[0-6]+$/)) {
          initialMissionsState = this.hashReader.decode(hash);
        } else {
          initialMissionsState = JSON.parse(decodeURIComponent(hash));
        }

        for (let attr in initialMissionsState) {
          if (initialMissionsState.hasOwnProperty(attr) && this.missions.hasOwnProperty(attr)) {
            this.missions[attr] = initialMissionsState[attr];
          }
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }

  view(vnode) {
    const scorer = vnode.attrs.scorer as AbstractScorer<MissionObject, any>;
    const data = vnode.attrs.data as Year;
    let missionHash = '#' + this.hashReader.encode(vnode.state.missions);

    if (EMPTY_HASH.test(missionHash)) {
      missionHash = '';
      if (window.location.hash) {
        window.location.hash = '';
      }
    } else {
      if (missionHash !== window.location.hash) {
        window.location.hash = missionHash;
      }
    }

    return m(Scoreboard, {
      missions: this.missions,
      scorer,
      data,
      missionHash,
    });
  }
}
