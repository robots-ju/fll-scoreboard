import * as m from 'mithril';
import Scoreboard from './Scoreboard';
import {NumericHashReader} from '../utils/NumericHashReader';
import {AbstractScorer, MissionObject, Year} from '../interfaces/ChallengeYear';

export class StandaloneScoreboardAttrs {
  data: Year
  scorer: AbstractScorer<MissionObject, any>
}

export default class StandaloneScoreboard implements m.ClassComponent<StandaloneScoreboardAttrs> {
  hashReader: NumericHashReader;
  missions: MissionObject;
  lastMissions: string;

  oninit(vnode: m.Vnode<StandaloneScoreboardAttrs>) {
    const {scorer} = vnode.attrs;
    this.hashReader = new NumericHashReader(scorer.initialMissionsState());
    this.missions = scorer.initialMissionsState();

    if (window.location.hash) {
      try {
        const hash = window.location.hash.substring(1);

        let initialMissionsState: MissionObject;

        if (hash.match(/^[0-7]+$/)) {
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

    this.lastMissions = JSON.stringify(this.missions);
  }

  view(vnode: m.Vnode<StandaloneScoreboardAttrs>) {
    const {scorer, data} = vnode.attrs;

    const missionsJson = JSON.stringify(this.missions);

    // We need to check lastMissions because we only want to update the url when the data actually changed
    // If we compared with the current location hash, it would try updating the hash when we're navigating away from the page to a page that doesn't have a hash
    if (missionsJson !== this.lastMissions) {
      const missionHash = this.hashReader.encode(this.missions);
      const initialMissionHash = this.hashReader.encode(scorer.initialMissionsState());

      if (missionHash === initialMissionHash) {
        // Remove hash without causing a jump
        window.history.pushState('', document.title, window.location.pathname);
      } else {
        window.location.hash = '#' + missionHash;
      }

      this.lastMissions = missionsJson;
    }

    return m(Scoreboard, {
      missions: this.missions,
      scorer,
      data,
    });
  }
}
