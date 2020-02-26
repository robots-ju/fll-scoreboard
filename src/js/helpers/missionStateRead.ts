/**
 * Read and prepare the value of a boolean mission
 * @param {Object} missions
 * @param {string} key
 * @returns {boolean}
 */
export function booleanMission(missions, key) {
  return missions.hasOwnProperty(key) && missions[key];
}

/**
 * Read and prepare the value of a numeric mission
 * @param {Object} missions
 * @param {string} key
 * @returns {number}
 */
export function numericMission(missions, key) {
  if (missions.hasOwnProperty(key)) {
    return missions[key];
  } else {
    return 0;
  }
}
