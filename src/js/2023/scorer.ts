import {AbstractScorer, MissionObject} from '../interfaces/ChallengeYear';
import {booleanMission, numericMission} from '../helpers/missionStateRead';

enum Warnings2023 {
  m02_invalid_color,
  m02_bonus_requirement_not_met,
  m04_bonus_requirement_not_met,
  m08_invalid_pointer,
  m10_max_three_sliders,
  m11_invalid_zone,
  m12_bonus_requirement_not_met,
  m14_max_seven_members,
  m14_max_seven_destinations,
  m15_max_five_experts,
}

interface MissionObject2023 extends MissionObject {

  m00_small_inspection_area?: boolean
  m01_right?: boolean
  m02_color?: number
  m02_bonus?: boolean
  m03_raised?: boolean
  m04_area?: boolean
  m04_bonus?: boolean
  m05_rotated?: boolean
  m06_lights?: boolean
  m06_speakers?: boolean
  m07_activated?: boolean
  m08_pointer?: number
  m09_boat?: boolean
  m09_camera?: boolean
  m10_sliders?: number
  m11_zone?: number
  m12_moved?: boolean
  m12_bonus?: boolean
  m13_lid?: boolean
  m13_latch?: boolean
  m14_members?: number
  m14_destinations?: number
  m15_experts?: number
  m16_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2023, Warnings2023> {
  public warnings = Warnings2023;

  public initialMissionsState(): MissionObject2023 {
    return {
      m00_small_inspection_area: false,
      m01_right: false,
      m02_color: 0,
      m02_bonus: false,
      m03_raised: false,
      m04_area: false,
      m04_bonus: false,
      m05_rotated: false,
      m06_lights: false,
      m06_speakers: false,
      m07_activated: false,
      m08_pointer: 0,
      m09_boat: false,
      m09_camera: false,
      m10_sliders: 0,
      m11_zone: 0,
      m12_moved: false,
      m12_bonus: false,
      m13_lid: false,
      m13_latch: false,
      m14_members: 0,
      m14_destinations: 0,
      m15_experts: 0,
      m16_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2023) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    /*
     |
     | Mission 01
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm01_right')) {
      score += 20;
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_color = numericMission<MissionObject2023>(missions, 'm02_color');

    if (m02_color > 3) {
      warnings.push(Warnings2023.m02_invalid_color);
    }

    score += Math.min(m02_color, 3) * 10;

    if (booleanMission<MissionObject2023>(missions, 'm02_bonus')) {
      if (m02_color >= 1 && m02_color <= 3) {
        switch (m02_color) {
          case 1:
            score += 20;
            break;
          case 2:
            score += 30;
            break;
          case 3:
            score += 10;
            break;
        }
      } else {
        warnings.push(Warnings2023.m02_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 03
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm03_raised')) {
      score += 20;
    }

    /*
     |
     | Mission 04
     |
     */

    const m04_area = booleanMission<MissionObject2023>(missions, 'm04_area');

    if (m04_area) {
      score += 10;
    }

    if (booleanMission<MissionObject2023>(missions, 'm04_bonus')) {
      if (m04_area) {
        score += 20;
      } else {
        warnings.push(Warnings2023.m04_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 05
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm05_rotated')) {
      score += 30;
    }

    /*
     |
     | Mission 06
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm06_lights')) {
      score += 10;
    }

    if (booleanMission<MissionObject2023>(missions, 'm06_speakers')) {
      score += 10;
    }

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm07_activated')) {
      score += 20;
    }

    /*
     |
     | Mission 08
     |
     */

    const m08_pointer = numericMission<MissionObject2023>(missions, 'm08_pointer');

    if (m08_pointer > 3) {
      warnings.push(Warnings2023.m08_invalid_pointer);
    }

    score += Math.min(m08_pointer, 3) * 10;

    /*
     |
     | Mission 09
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm09_boat')) {
      score += 10;
    }

    if (booleanMission<MissionObject2023>(missions, 'm09_camera')) {
      score += 10;
    }

    /*
     |
     | Mission 10
     |
     */

    const m10_sliders = numericMission<MissionObject2023>(missions, 'm10_sliders');

    if (m10_sliders > 3) {
      warnings.push(Warnings2023.m10_max_three_sliders);
    }

    score += Math.min(m10_sliders, 3) * 10;

    /*
     |
     | Mission 11
     |
     */

    const m11_zone = numericMission<MissionObject2023>(missions, 'm11_zone');

    if (m11_zone > 3) {
      warnings.push(Warnings2023.m11_invalid_zone);
    }

    score += Math.min(m11_zone, 3) * 10;

    /*
     |
     | Mission 12
     |
     */

    const m12_moved = booleanMission<MissionObject2023>(missions, 'm12_moved');

    if (m12_moved) {
      score += 10;
    }

    if (booleanMission<MissionObject2023>(missions, 'm12_bonus')) {
      if (m12_moved) {
        score += 20;
      } else {
        warnings.push(Warnings2023.m12_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 13
     |
     */

    if (booleanMission<MissionObject2023>(missions, 'm13_lid')) {
      score += 10;
    }

    if (booleanMission<MissionObject2023>(missions, 'm13_latch')) {
      score += 20;
    }

    /*
     |
     | Mission 14
     |
     */

    const m14_members = numericMission<MissionObject2023>(missions, 'm14_members');

    if (m14_members > 7) {
      warnings.push(Warnings2023.m14_max_seven_members);
    }

    score += Math.min(m14_members, 7) * 5;

    const m14_destinations = numericMission<MissionObject2023>(missions, 'm14_destinations');

    if (m14_destinations > 7) {
      warnings.push(Warnings2023.m14_max_seven_destinations);
    }

    score += Math.min(m14_destinations, 7) * 5;

    /*
     |
     | Mission 15
     |
     */

    const m15_experts = numericMission<MissionObject2023>(missions, 'm15_experts');

    if (m15_experts > 5) {
      warnings.push(Warnings2023.m15_max_five_experts);
    }

    score += Math.min(m15_experts, 5) * 10;

    /*
     |
     | Mission 16
     |
     */

    switch (numericMission(missions, 'm16_precision_tokens')) {
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
