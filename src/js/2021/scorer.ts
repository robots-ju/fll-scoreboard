import {AbstractScorer, MissionObject} from "../interfaces/ChallengeYear";
import {booleanMission, numericMission} from "../helpers/missionStateRead";

enum Warnings2021 {
  m02_cannot_score_both,
  m06_cannot_score_both,
  m11_cannot_score_both,
  m12_cannot_score_both_blade,
  m12_cannot_score_both_chicken,
}

interface MissionObject2021 extends MissionObject {
  m00_small_inspection_area?: boolean
  m01_innovation?: boolean
  m02_partly?: boolean
  m02_completely?: boolean
  m03_prepared?: boolean
  m03_unloaded?: boolean
  m04_truck?: boolean
  m04_plane?: boolean
  m05_engine_switched?: boolean
  m06_not_knocked_down?: boolean
  m06_knocked_down?: boolean
  m07_not_touching?: boolean
  m07_east_of_deck?: boolean
  m08_separated?: boolean
  m08_circle?: boolean
  m08_both_teams?: boolean
  m09_track_repaired?: boolean
  m09_destination_reached?: boolean
  m10_sorted?: boolean
  m11_partly?: boolean
  m11_completely?: boolean
  m12_blade_mat?: boolean
  m12_blade_nothing?: boolean
  m12_chicken_partly?: boolean
  m12_chicken_completely?: boolean
  m13_latched_together?: boolean
  m13_latched_bridge?: boolean
  m14_lowered?: number
  m15_trucks?: number
  m15_train?: number
  m15_ship?: number
  m16_partly_any_circle?: number
  m16_completely_any_circle?: number
  m16_blue_container?: boolean
  m16_lime_container?: boolean
  m16_circles_with_container?: number
  m17_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2021, Warnings2021> {
  public warnings = Warnings2021;

  public initialMissionsState(): MissionObject2021 {
    return {
      m00_small_inspection_area: false,
      m01_innovation: false,
      m02_partly: false,
      m02_completely: false,
      m03_prepared: false,
      m03_unloaded: false,
      m04_truck: false,
      m04_plane: false,
      m05_engine_switched: false,
      m06_not_knocked_down: false,
      m06_knocked_down: false,
      m07_not_touching: false,
      m07_east_of_deck: false,
      m08_separated: false,
      m08_circle: false,
      m08_both_teams: false,
      m09_track_repaired: false,
      m09_destination_reached: false,
      m10_sorted: false,
      m11_partly: false,
      m11_completely: false,
      m12_blade_mat: false,
      m12_blade_nothing: false,
      m12_chicken_partly: false,
      m12_chicken_completely: true,
      m13_latched_together: false,
      m13_latched_bridge: false,
      m14_lowered: 0,
      m15_trucks: 0,
      m15_train: 0,
      m15_ship: 0,
      m16_partly_any_circle: 0,
      m16_completely_any_circle: 0,
      m16_blue_container: false,
      m16_lime_container: false,
      m16_circles_with_container: 0,
      m17_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2021) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    /*
     |
     | Mission 01
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm01_innovation')) {
      score += 20;
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_partly_full = booleanMission<MissionObject2021>(missions, 'm02_partly');

    if (m02_partly_full) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm02_completely')) {
      if (m02_partly_full) {
        warnings.push(Warnings2021.m02_cannot_score_both);
      } else {
        score += 30;
      }
    }

    /*
     |
     | Mission 03
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm03_prepared')) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm03_unloaded')) {
      score += 10;
    }

    /*
     |
     | Mission 04
     |
     */

    const m04_truck = booleanMission<MissionObject2021>(missions, 'm04_truck');

    if (m04_truck) {
      score += 10;
    }

    const m04_plane = booleanMission<MissionObject2021>(missions, 'm04_plane');

    if (m04_plane) {
      score += 10;
    }

    if (m04_truck && m04_plane) {
      score += 10;
    }

    /*
     |
     | Mission 05
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm05_engine_switched')) {
      score += 20;
    }

    /*
     |
     | Mission 06
     |
     */

    const m06_not_knocked_down = booleanMission<MissionObject2021>(missions, 'm06_not_knocked_down');

    if (m06_not_knocked_down) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm06_knocked_down')) {
      if (m06_not_knocked_down) {
        warnings.push(Warnings2021.m06_cannot_score_both);
      } else {
        score += 30;
      }
    }

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm07_not_touching')) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm07_east_of_deck')) {
      score += 10;
    }

    /*
     |
     | Mission 08
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm08_separated')) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm08_circle')) {
      score += 10;
    }

    if (booleanMission<MissionObject2021>(missions, 'm08_both_teams')) {
      score += 10;
    }

    /*
     |
     | Mission 09
     |
     */

    if (booleanMission<MissionObject2021>(missions, 'm09_track_repaired')) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm09_destination_reached')) {
      score += 20;
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission(missions, 'm10_sorted')) {
      score += 20;
    }

    /*
     |
     | Mission 11
     |
     */

    const m11_partly = booleanMission<MissionObject2021>(missions, 'm11_partly');

    if (m11_partly) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm11_completely')) {
      if (m11_partly) {
        warnings.push(Warnings2021.m11_cannot_score_both);
      } else {
        score += 30;
      }
    }

    /*
     |
     | Mission 12
     |
     */

    const m12_blade_mat = booleanMission<MissionObject2021>(missions, 'm12_blade_mat');

    if (m12_blade_mat) {
      score += 20;
    }

    if (booleanMission<MissionObject2021>(missions, 'm12_blade_nothing')) {
      if (m12_blade_mat) {
        warnings.push(Warnings2021.m12_cannot_score_both_blade);
      } else {
        score += 30;
      }
    }

    const m12_chicken_partly = booleanMission<MissionObject2021>(missions, 'm12_chicken_partly');

    if (m12_chicken_partly) {
      score += 5;
    }

    if (booleanMission<MissionObject2021>(missions, 'm12_chicken_completely')) {
      if (m12_chicken_partly) {
        warnings.push(Warnings2021.m12_cannot_score_both_chicken);
      } else {
        score += 10;
      }
    }

    /*
     |
     | Mission 13
     |
     */

    const m13_latched_together = booleanMission<MissionObject2021>(missions, 'm13_latched_together');

    if (m13_latched_together) {
      score += 10;
    }

    const m13_latched_bridge = booleanMission<MissionObject2021>(missions, 'm13_latched_bridge');

    if (m13_latched_bridge) {
      score += 10;
    }

    if (m13_latched_together && m13_latched_bridge) {
      score += 10;
    }

    /*
     |
     | Mission 14
     |
     */

    score += Math.min(2, numericMission<MissionObject2021>(missions, 'm14_lowered')) * 10;

    /*
     |
     | Mission 15
     |
     */

    score += Math.min(2, numericMission<MissionObject2021>(missions, 'm15_trucks')) * 10;
    score += Math.min(2, numericMission<MissionObject2021>(missions, 'm15_train')) * 20;
    score += Math.min(2, numericMission<MissionObject2021>(missions, 'm15_ship')) * 30;

    /*
     |
     | Mission 16
     |
     */

    score += numericMission<MissionObject2021>(missions, 'm16_partly_any_circle') * 5;
    score += numericMission<MissionObject2021>(missions, 'm16_completely_any_circle') * 10;

    if (booleanMission(missions, 'm16_blue_container')) {
      score += 20;
    }

    if (booleanMission(missions, 'm16_lime_container')) {
      score += 20;
    }

    score += numericMission<MissionObject2021>(missions, 'm16_circles_with_container') * 10;

    /*
     |
     | Mission 17
     |
     */

    switch (numericMission(missions, 'm17_precision_tokens')) {
      case 6:
        score += 50;
        break;
      case 5:
        score += 50;
        break;
      case 4:
        score += 35;
        break;
      case 3:
        score += 25;
        break;
      case 2:
        score += 15;
        break;
      case 1:
        score += 10;
        break;
    }

    return {
      score,
      warnings,
    };
  }
}
