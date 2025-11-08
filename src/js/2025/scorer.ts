import {AbstractScorer, MissionObject} from '../interfaces/ChallengeYear';
import {booleanMission, numericMission} from '../helpers/missionStateRead';

enum Warnings2025 {
  m01_max_two_deposits,
  m02_max_three_sections,
  m03_bonus_requirement_not_met,
  m06_max_three_blocks,
  m08_max_three_pieces,
  m11_bonus_requirement_not_met,
  m14_max_seven_artifacts,
  m15_max_three_flags,
}

interface MissionObject2025 extends MissionObject {
  m00_small_inspection_area?: boolean
  m01_deposits?: number
  m01_brush?: boolean
  m02_sections?: number
  m03_minecart?: boolean
  m03_bonus?: boolean
  m04_artifact?: boolean
  m04_both_standing?: boolean
  m05_floor_upright?: boolean
  m06_blocks?: number
  m07_millstone?: boolean
  m08_preserved_pieces?: number
  m09_roof_raised?: boolean
  m09_wares_raised?: boolean
  m10_scale_tipped?: boolean
  m10_pan_removed?: boolean
  m11_artifacts_raised?: boolean
  m11_bonus?: boolean
  m12_sand_cleared?: boolean
  m12_ship_raised?: boolean
  m13_statue_raised?: boolean
  m14_artifacts?: number
  m15_sites_with_flag?: number
  m16_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2025, Warnings2025> {
  public warnings = Warnings2025;

  public initialMissionsState(): MissionObject2025 {
    return {
      m00_small_inspection_area: false,
      m01_deposits: 0,
      m01_brush: false,
      m02_sections: 0,
      m03_minecart: false,
      m03_bonus: false,
      m04_artifact: false,
      m04_both_standing: true,
      m05_floor_upright: false,
      m06_blocks: 0,
      m07_millstone: false,
      m08_preserved_pieces: 0,
      m09_roof_raised: false,
      m09_wares_raised: false,
      m10_scale_tipped: false,
      m10_pan_removed: false,
      m11_artifacts_raised: false,
      m11_bonus: false,
      m12_sand_cleared: false,
      m12_ship_raised: false,
      m13_statue_raised: false,
      m14_artifacts: 0,
      m15_sites_with_flag: 0,
      m16_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2025) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    /*
     |
     | Mission 01
     |
     */

    const m01_deposits = numericMission<MissionObject2025>(missions, 'm01_deposits');

    if (m01_deposits > 2) {
      warnings.push(Warnings2025.m01_max_two_deposits);
    }

    score += Math.min(m01_deposits, 2) * 10;

    if (booleanMission<MissionObject2025>(missions, 'm01_brush')) {
      score += 10;
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_sections = numericMission<MissionObject2025>(missions, 'm02_sections');

    if (m02_sections > 3) {
      warnings.push(Warnings2025.m02_max_three_sections);
    }

    score += Math.min(m02_sections, 3) * 10;

    /*
     |
     | Mission 03
     |
     */

    const m03_minecart = booleanMission<MissionObject2025>(missions, 'm03_minecart');

    if (m03_minecart) {
      score += 30;
    }

    if (booleanMission<MissionObject2025>(missions, 'm03_bonus')) {
      score += 10;

      if (!m03_minecart) {
        warnings.push(Warnings2025.m03_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 04
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm04_artifact')) {
      score += 30;
    }

    if (booleanMission<MissionObject2025>(missions, 'm04_both_standing')) {
      score += 10;
    }

    /*
     |
     | Mission 05
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm05_floor_upright')) {
      score += 30;
    }

    /*
     |
     | Mission 06
     |
     */

    const m06_blocks = numericMission<MissionObject2025>(missions, 'm06_blocks');

    if (m06_blocks > 3) {
      warnings.push(Warnings2025.m06_max_three_blocks);
    }

    score += Math.min(m06_blocks, 3) * 10;

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm07_millstone')) {
      score += 30;
    }

    /*
     |
     | Mission 08
     |
     */

    const m08_preserved_pieces = numericMission<MissionObject2025>(missions, 'm08_preserved_pieces');

    if (m08_preserved_pieces > 3) {
      warnings.push(Warnings2025.m08_max_three_pieces);
    }

    score += Math.min(m08_preserved_pieces, 3) * 10;

    /*
     |
     | Mission 09
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm09_roof_raised')) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm09_wares_raised')) {
      score += 10;
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm10_scale_tipped')) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm10_pan_removed')) {
      score += 10;
    }

    /*
     |
     | Mission 11
     |
     */

    const m11_artifacts_raised = booleanMission<MissionObject2025>(missions, 'm11_artifacts_raised');

    if (m11_artifacts_raised) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm11_bonus')) {
      score += 10;

      if (!m11_artifacts_raised) {
        warnings.push(Warnings2025.m11_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 12
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm12_sand_cleared')) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm12_ship_raised')) {
      score += 10;
    }

    /*
     |
     | Mission 13
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm13_statue_raised')) {
      score += 30;
    }

    /*
     |
     | Mission 14
     |
     */

    const m14_artifacts = numericMission<MissionObject2025>(missions, 'm14_artifacts');

    if (m14_artifacts > 7) {
      warnings.push(Warnings2025.m14_max_seven_artifacts);
    }

    score += Math.min(m14_artifacts, 7) * 5;

    /*
     |
     | Mission 15
     |
     */

    const m15_sites_with_flag = numericMission<MissionObject2025>(missions, 'm15_sites_with_flag');

    if (m15_sites_with_flag > 3) {
      warnings.push(Warnings2025.m15_max_three_flags);
    }

    score += Math.min(m15_sites_with_flag, 3) * 10;

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
