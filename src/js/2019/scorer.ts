import {AbstractScorer, MissionObject} from "../interfaces/ChallengeYear";
import {booleanMission, numericMission} from "../helpers/missionStateRead";

enum Warnings2019 {
  m01_bridge_requirement_not_met,
  m02_circle_requirement_not_met,
  m08_cannot_score_both,
  m11_cannot_score_both,
}

interface MissionObject2019 extends MissionObject {
  m00_small_inspection_area?: boolean
  m01_robot_supported?: boolean
  m01_flags_raised?: number
  m02_unit_lowered?: boolean
  m02_supported_by_blue?: boolean
  m02_in_blue_circle?: boolean
  m03_drone_supported?: boolean
  m04_bat_supported?: boolean
  m05_units_on_large_branches?: number
  m05_units_on_small_branches?: number
  m06_traffic_lifted?: boolean
  m07_swing_released?: boolean
  m08_blue_car_down?: boolean
  m08_balanced?: boolean
  m09_beams_knocked?: number
  m10_structure_standing?: boolean
  m11_completely_in_circle?: boolean
  m11_partially_in_circle?: boolean
  m12_color_matching_circles?: number
  m12_stack_heights?: number
  m13_upgrades?: number
  m14_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2019, Warnings2019> {
  public warnings = Warnings2019;

  public initialMissionsState(): MissionObject2019 {
    return {
      m00_small_inspection_area: false,
      m01_robot_supported: false,
      m01_flags_raised: 0,
      m02_unit_lowered: false,
      m02_supported_by_blue: false,
      m02_in_blue_circle: false,
      m03_drone_supported: false,
      m04_bat_supported: false,
      m05_units_on_large_branches: 0,
      m05_units_on_small_branches: 0,
      m06_traffic_lifted: false,
      m07_swing_released: false,
      m08_blue_car_down: false,
      m08_balanced: false,
      m09_beams_knocked: 0,
      m10_structure_standing: false,
      m11_completely_in_circle: false,
      m11_partially_in_circle: false,
      m12_color_matching_circles: 1,
      m12_stack_heights: 1,
      m13_upgrades: 0,
      m14_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2019) {
    let score = 0;
    let warnings = [];

    const has_advantage = booleanMission(missions, 'm00_small_inspection_area');

    /*
     |
     | Mission 01
     |
     */

    const m01_robot_supported = booleanMission(missions, 'm01_robot_supported');

    if (m01_robot_supported) {
      score += 20;

      if (has_advantage) {
        score += 5;
      }
    }

    const m01_flags_raised = numericMission(missions, 'm01_flags_raised');

    if (m01_flags_raised > 0) {
      if (m01_robot_supported) {
        score += m01_flags_raised * 15;
      } else {
        warnings.push(Warnings2019.m01_bridge_requirement_not_met);
      }
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_unit_lowered = booleanMission(missions, 'm02_unit_lowered');

    if (m02_unit_lowered) {
      score += 20;

      if (has_advantage) {
        score += 10;
      }
    }

    const m02_supported_by_blue = booleanMission(missions, 'm02_supported_by_blue');

    if (m02_supported_by_blue) {
      score += 15;

      if (has_advantage && !m02_unit_lowered) {
        score += 10;
      }
    }

    if (booleanMission(missions, 'm02_in_blue_circle')) {
      if (m02_supported_by_blue) {
        score += 15;
      } else {
        warnings.push(Warnings2019.m02_circle_requirement_not_met);
      }
    }

    /*
     |
     | Mission 03
     |
     */

    if (booleanMission(missions, 'm03_drone_supported')) {
      score += 10;

      if (has_advantage) {
        score += 5;
      }
    }

    /*
     |
     | Mission 04
     |
     */

    if (booleanMission(missions, 'm04_bat_supported')) {
      score += 10;

      if (has_advantage) {
        score += 5;
      }
    }

    /*
     |
     | Mission 05
     |
     */

    const m05_score = numericMission(missions, 'm05_units_on_large_branches') * 10 +
      numericMission(missions, 'm05_units_on_small_branches') * 15;

    score += m05_score;

    if (has_advantage && m05_score > 0) {
      score += 5;
    }

    /*
     |
     | Mission 06
     |
     */

    if (booleanMission(missions, 'm06_traffic_lifted')) {
      score += 10;

      if (has_advantage) {
        score += 5;
      }
    }

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission(missions, 'm07_swing_released')) {
      score += 20;

      if (has_advantage) {
        score += 5;
      }
    }

    /*
     |
     | Mission 08
     |
     */

    const m08_balanced = booleanMission(missions, 'm08_balanced');

    if (m08_balanced) {
      score += 20;

      if (has_advantage) {
        score += 5;
      }
    }

    if (booleanMission(missions, 'm08_blue_car_down')) {
      if (m08_balanced) {
        warnings.push(Warnings2019.m08_cannot_score_both);
      } else {
        score += 15;

        if (has_advantage) {
          score += 5;
        }
      }
    }

    /*
     |
     | Mission 09
     |
     */

    const m09_score = numericMission(missions, 'm09_beams_knocked') * 10;

    score += m09_score;

    if (has_advantage && m09_score > 0) {
      score += 5;
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission(missions, 'm10_structure_standing')) {
      score += 20;

      if (has_advantage) {
        score += 5;
      }
    }

    /*
     |
     | Mission 11
     |
     */

    const m11_completely_in_circle = booleanMission(missions, 'm11_completely_in_circle');

    if (m11_completely_in_circle) {
      score += 15;

      if (has_advantage) {
        score += 5;
      }
    }

    if (booleanMission(missions, 'm11_partially_in_circle')) {
      if (m11_completely_in_circle) {
        warnings.push(Warnings2019.m11_cannot_score_both);
      } else {
        score += 10;

        if (has_advantage) {
          score += 5;
        }
      }
    }

    /*
     |
     | Mission 12
     |
     */

    const m12_score = numericMission(missions, 'm12_color_matching_circles') * 10 +
      numericMission(missions, 'm12_stack_heights') * 5;

    score += m12_score;

    if (has_advantage && m12_score > 0) {
      score += 5;
    }

    /*
     |
     | Mission 13
     |
     */

    const m13_score = numericMission(missions, 'm13_upgrades') * 10;

    score += m13_score;

    if (has_advantage && m13_score > 0) {
      score += 5;
    }

    /*
     |
     | Mission 14
     |
     */

    switch (numericMission(missions, 'm14_precision_tokens')) {
      case 6:
        score += 60;
        break;
      case 5:
        score += 45;
        break;
      case 4:
        score += 30;
        break;
      case 3:
        score += 20;
        break;
      case 2:
        score += 10;
        break;
      case 1:
        score += 5;
        break;
    }

    return {
      score,
      warnings,
    };
  }
}
