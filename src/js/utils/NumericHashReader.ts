import {MissionObject} from '../interfaces/ChallengeYear';

interface MissionInfo {
  key: string
  type: string
}

export class NumericHashReader {
  private missionTypes: MissionInfo[] = [];

  constructor(
    initialMissionsState: MissionObject
  ) {
    Object.keys(initialMissionsState).forEach(key => {
      this.missionTypes.push({
        key,
        type: typeof initialMissionsState[key],
      });
    });
  }

  public decode(hash: string): MissionObject {
    const state = {};

    const parts = hash.split('');

    if (parts.length !== this.missionTypes.length) {
      throw 'Invalid hash Length (expected: ' + this.missionTypes.length + ', actual: ' + parts.length + ')';
    }

    parts.forEach((value, index) => {
      const mission = this.missionTypes[index];

      state[mission.key] = mission.type === 'number' ? parseInt(value) : value === '1';
    });

    return state;
  }

  public encode(missions: MissionObject): string {
    return this.missionTypes.map(mission => {
      const value = missions[mission.key];

      return mission.type === 'number' ? value : (value ? 1 : 0);
    }).join('');
  }
}
