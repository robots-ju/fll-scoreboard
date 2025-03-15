import {AbstractScorer, MissionObject} from '../interfaces/ChallengeYear';
import {booleanMission, numericMission} from '../helpers/missionStateRead';

enum Warnings2024 {
  m01_bonus_requirement_not_met,
  m02_must_score_first,
  m03_max_three_segments,
  m04_must_score_first,
  m08_max_four_segments,
  m09_must_score_first,
  m11_max_two_whales,
  m12_max_five_krill,
  m14_max_two_trident_pieces,
  m15_max_three_samples,
  m15_max_two_trident_parts,
}

interface MissionObject2024 extends MissionObject {

  m00_small_inspection_area?: boolean
  m01_hanging?: boolean
  m01_bonus?: boolean
  m01_flipped?: boolean
  m02_cave?: boolean
  m02_habitat?: boolean
  m03_flipped?: boolean
  m03_segments?: number
  m04_nursery?: boolean
  m04_hanging?: boolean
  m05_latched?: boolean
  m06_raised?: boolean
  m07_outside?: boolean
  m08_segments?: number
  m09_released?: boolean
  m09_seep?: boolean
  m10_flag?: boolean
  m10_closer?: boolean
  m11_whales?: number
  m12_krill?: number
  m13_ship?: boolean
  m14_water?: boolean
  m14_seabed?: boolean
  m14_plankton?: boolean
  m14_trident_pieces?: number
  m15_samples?: number
  m15_trident_parts?: number
  m15_chest?: boolean
  m15_latch?: boolean
  m16_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2024, Warnings2024> {
  public warnings = Warnings2024;

  public initialMissionsState(): MissionObject2024 {
    return {
      m00_small_inspection_area: false,
      m01_hanging: false,
      m01_bonus: false,
      m01_flipped: false,
      m02_cave: false,
      m02_habitat: false,
      m03_flipped: false,
      m03_segments: 0,
      m04_nursery: false,
      m04_hanging: false,
      m05_latched: false,
      m06_raised: false,
      m07_outside: false,
      m08_segments: 0,
      m09_released: false,
      m09_seep: false,
      m10_flag: false,
      m10_closer: false,
      m11_whales: 0,
      m12_krill: 0,
      m13_ship: false,
      m14_water: false,
      m14_seabed: false,
      m14_plankton: false,
      m14_trident_pieces: 0,
      m15_samples: 0,
      m15_trident_parts: 0,
      m15_chest: false,
      m15_latch: false,
      m16_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2024) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    /*
     |
     | Mission 01
     |
     */

    const m01_hanging = booleanMission<MissionObject2024>(missions, 'm01_hanging');

    if (m01_hanging) {
      score += 20;
    }

    if (booleanMission<MissionObject2024>(missions, 'm01_bonus')) {
      if (m01_hanging) {
        score += 10;
      } else {
        warnings.push(Warnings2024.m01_bonus_requirement_not_met);
      }
    }

    if (booleanMission<MissionObject2024>(missions, 'm01_flipped')) {
      score += 20;
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_cave = booleanMission<MissionObject2024>(missions, 'm02_cave');

    if (m02_cave) {
      score += 20;
    }

    if (booleanMission<MissionObject2024>(missions, 'm02_habitat')) {
      score += 10;

      if (!m02_cave) {
        warnings.push(Warnings2024.m02_must_score_first);
      }
    }

    /*
     |
     | Mission 03
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm03_flipped')) {
      score += 20;
    }

    const m03_segments = numericMission<MissionObject2024>(missions, 'm03_segments');

    if (m03_segments > 3) {
      warnings.push(Warnings2024.m03_max_three_segments);
    }

    score += Math.min(m03_segments, 3) * 5;

    /*
     |
     | Mission 04
     |
     */

    const m04_nursery = booleanMission<MissionObject2024>(missions, 'm04_nursery');

    if (m04_nursery) {
      score += 20;
    }

    if (booleanMission<MissionObject2024>(missions, 'm04_hanging')) {
      score += 20;

      if (!m04_nursery) {
        warnings.push(Warnings2024.m04_must_score_first);
      }
    }

    /*
     |
     | Mission 05
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm05_latched')) {
      score += 30;
    }

    /*
     |
     | Mission 06
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm06_raised')) {
      score += 30;
    }

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm07_outside')) {
      score += 20;
    }

    /*
     |
     | Mission 08
     |
     */

    const m08_segments = numericMission<MissionObject2024>(missions, 'm08_segments');

    if (m08_segments > 4) {
      warnings.push(Warnings2024.m08_max_four_segments);
    }

    score += Math.min(m08_segments, 4) * 10;

    /*
     |
     | Mission 09
     |
     */

    const m09_released = booleanMission<MissionObject2024>(missions, 'm09_released');

    if (m09_released) {
      score += 20;
    }

    if (booleanMission<MissionObject2024>(missions, 'm09_seep')) {
      score += 10;

      if (!m09_released) {
        warnings.push(Warnings2024.m09_must_score_first);
      }
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm10_flag')) {
      score += 30;
    }

    if (booleanMission<MissionObject2024>(missions, 'm10_closer')) {
      score += 10;
    }

    /*
     |
     | Mission 11
     |
     */

    const m11_whales = numericMission<MissionObject2024>(missions, 'm11_whales');

    if (m11_whales > 2) {
      warnings.push(Warnings2024.m11_max_two_whales);
    } else if (m11_whales === 1) {
      score += 20;
    } else if (m11_whales === 2) {
      score += 30;
    }

    /*
     |
     | Mission 12
     |
     */

    const m12_krills = numericMission<MissionObject2024>(missions, 'm12_krill');

    if (m12_krills > 5) {
      warnings.push(Warnings2024.m12_max_five_krill);
    }

    score += Math.min(m12_krills, 5) * 10;

    /*
     |
     | Mission 13
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm13_ship')) {
      score += 20;
    }

    /*
     |
     | Mission 14
     |
     */

    if (booleanMission<MissionObject2024>(missions, 'm14_water')) {
      score += 5;
    }

    if (booleanMission<MissionObject2024>(missions, 'm14_seabed')) {
      score += 10;
    }

    if (booleanMission<MissionObject2024>(missions, 'm14_plankton')) {
      score += 10;
    }

    const m14_trident_pieces = numericMission<MissionObject2024>(missions, 'm14_trident_pieces');

    if (m14_trident_pieces > 2) {
      warnings.push(Warnings2024.m14_max_two_trident_pieces);
    } else if (m14_trident_pieces === 1) {
      score += 20;
    } else if (m14_trident_pieces === 2) {
      score += 30;
    }

    /*
     |
     | Mission 15
     |
     */

    const m15_samples = numericMission<MissionObject2024>(missions, 'm15_samples');

    if (m15_samples > 3) {
      warnings.push(Warnings2024.m15_max_three_samples);
    }

    score += Math.min(m15_samples, 3) * 5;

    const m15_trident_parts = numericMission<MissionObject2024>(missions, 'm15_trident_parts');

    if (m15_trident_parts > 2) {
      warnings.push(Warnings2024.m15_max_two_trident_parts);
    }

    score += Math.min(m15_trident_parts, 2) * 5;

    if (booleanMission<MissionObject2024>(missions, 'm15_chest')) {
      score += 5;
    }

    if (booleanMission<MissionObject2024>(missions, 'm15_latch')) {
      score += 20;
    }

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
