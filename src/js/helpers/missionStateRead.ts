import {MissionObject} from "../interfaces/ChallengeYear";

/**
 * Read and prepare the value of a boolean mission
 * @param {Object} missions
 * @param {string} key
 * @returns {boolean}
 */
export function booleanMission<T extends MissionObject = any>(missions: T, key: keyof T): boolean {
  return missions.hasOwnProperty(key) && !!missions[key];
}

/**
 * Read and prepare the value of a numeric mission
 * @param {Object} missions
 * @param {string} key
 * @returns {number}
 */
export function numericMission<T extends MissionObject = any>(missions: T, key: keyof T): number {
  if (missions.hasOwnProperty(key)) {
    return missions[key] as any;
  } else {
    return 0;
  }
}
