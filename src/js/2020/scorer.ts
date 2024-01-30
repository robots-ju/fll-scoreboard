import {AbstractScorer, MissionObject} from '../interfaces/ChallengeYear';
import {booleanMission, numericMission} from '../helpers/missionStateRead';

enum Warnings2020 {
  m04_requirement_not_met,
  m05_cannot_score_both,
  m06_m07_cannot_score_both,
  m09_requirement_not_met,
  m12_requirement_not_met,
  m14_max_eight_total,
}

interface MissionObject2020 extends MissionObject {
  m00_small_inspection_area?: boolean
  m01_innovation?: boolean
  m02_step?: number
  m03_figure_slide?: number
  m03_figure_home?: boolean
  m03_figure_tire?: boolean
  m04_bench_down?: boolean
  m04_spaces_with_cubes?: number
  m04_backrest_removed?: boolean
  m05_cube_in_crate?: boolean
  m05_middle_height?: boolean
  m05_top_height?: boolean
  m06_pass_through?: boolean
  m06_hold?: boolean
  m07_dancing?: boolean
  m08_matching_share?: boolean
  m08_cubes_in_frame?: number
  m08_yellow_in_target?: boolean
  m09_light_tire_flipped?: boolean
  m09_heavy_tire_flipped?: boolean
  m09_center_in_target?: number
  m10_phone_flipped?: boolean
  m11_treadmill?: number
  m12_out_of_large_circle?: boolean
  m12_in_small_circle?: boolean
  m13_weight?: number
  m14_logo_or_bench?: number
  m14_pull_up_bar?: number
  m15_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2020, Warnings2020> {
  public warnings = Warnings2020;

  public initialMissionsState(): MissionObject2020 {
    return {
      m00_small_inspection_area: false,
      m01_innovation: false,
      m02_step: 0,
      m03_figure_slide: 0,
      m03_figure_home: false,
      m03_figure_tire: false,
      m04_bench_down: false,
      m04_spaces_with_cubes: 0,
      m04_backrest_removed: false,
      m05_cube_in_crate: false,
      m05_middle_height: false,
      m05_top_height: false,
      m06_pass_through: false,
      m06_hold: false,
      m07_dancing: false,
      m08_matching_share: false,
      m08_cubes_in_frame: 0,
      m08_yellow_in_target: false,
      m09_light_tire_flipped: false,
      m09_heavy_tire_flipped: false,
      m09_center_in_target: 0,
      m10_phone_flipped: false,
      m11_treadmill: 0,
      m12_out_of_large_circle: false,
      m12_in_small_circle: false,
      m13_weight: 0,
      m14_logo_or_bench: 0,
      m14_pull_up_bar: 0,
      m15_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2020) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission(missions, 'm00_small_inspection_area')) {
      score += 25;
    }

    /*
     |
     | Mission 01
     |
     */

    if (booleanMission(missions, 'm01_innovation')) {
      score += 20;

    }

    /*
     |
     | Mission 02
     |
     */


    const m02_value = numericMission(missions, 'm02_step');

    if (m02_value) {
      score += 5 + (m02_value * 5);
    }

    /*
     |
     | Mission 03
     |
     */

    const m03_figure_slide = numericMission(missions, 'm03_figure_slide');

    if (m03_figure_slide >= 2) {
      score += 20;
    } else if (m03_figure_slide >= 1) {
      score += 5;
    }

    if (booleanMission(missions, 'm03_figure_home')) {
      score += 10;
    }

    if (booleanMission(missions, 'm03_figure_tire')) {
      score += 20;
    }

    /*
     |
     | Mission 04
     |
     */

    const m04_bench_down = booleanMission(missions, 'm04_bench_down');

    if (m04_bench_down) {
      score += 10;
    }

    const m04_spaces_with_cubes = numericMission(missions, 'm04_spaces_with_cubes');

    if (m04_spaces_with_cubes) {
      if (m04_bench_down) {
        score += m04_spaces_with_cubes * 10;
      } else {
        warnings.push(Warnings2020.m04_requirement_not_met);
      }
    }

    if (booleanMission(missions, 'm04_backrest_removed')) {
      score += 15;
    }

    /*
     |
     | Mission 05
     |
     */

    if (booleanMission(missions, 'm05_cube_in_crate')) {
      score += 15;
    }

    const m05_top_height = booleanMission(missions, 'm05_top_height');

    if (booleanMission(missions, 'm05_middle_height')) {
      score += 15;

      if (m05_top_height) {
        warnings.push(Warnings2020.m05_cannot_score_both);
      }
    } else if (m05_top_height) {
      score += 25;
    }

    /*
     |
     | Mission 06
     |
     */

    if (booleanMission(missions, 'm06_pass_through')) {
      score += 15;
    }

    const m06_hold = booleanMission(missions, 'm06_hold');

    if (m06_hold) {
      score += 30;
    }

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission(missions, 'm07_dancing')) {
      if (m06_hold) {
        warnings.push(Warnings2020.m06_m07_cannot_score_both);
      } else {
        score += 20;
      }
    }

    /*
     |
     | Mission 08
     |
     */

    if (booleanMission(missions, 'm08_matching_share')) {
      score += 25;
    }

    score += numericMission(missions, 'm08_cubes_in_frame') * 5;

    if (booleanMission(missions, 'm08_yellow_in_target')) {
      score += 10;
    }

    /*
     |
     | Mission 09
     |
     */

    let tires_flipped_total = 0;

    if (booleanMission(missions, 'm09_light_tire_flipped')) {
      score += 10;
      tires_flipped_total += 1;
    }

    if (booleanMission(missions, 'm09_heavy_tire_flipped')) {
      score += 15;
      tires_flipped_total += 1;
    }

    const m09_center_in_target = numericMission(missions, 'm09_center_in_target');

    if (tires_flipped_total < m09_center_in_target) {
      warnings.push(Warnings2020.m09_requirement_not_met);
    } else {
      score += m09_center_in_target * 5;
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission(missions, 'm10_phone_flipped')) {
      score += 15;
    }

    /*
     |
     | Mission 11
     |
     */

    score += numericMission(missions, 'm11_treadmill') * 5;

    /*
     |
     | Mission 12
     |
     */

    const m12_out_of_large_circle = booleanMission(missions, 'm12_out_of_large_circle');

    if (m12_out_of_large_circle) {
      score += 15;
    }

    if (booleanMission(missions, 'm12_in_small_circle')) {
      if (m12_out_of_large_circle) {
        score += 15;
      } else {
        warnings.push(Warnings2020.m12_requirement_not_met);
      }
    }

    /*
     |
     | Mission 13
     |
     */

    const m13_value = numericMission(missions, 'm13_weight');

    if (m13_value) {
      score += 5 + (m13_value * 5);
    }

    /*
     |
     | Mission 14
     |
     */

    const m14_logo_or_bench = numericMission(missions, 'm14_logo_or_bench');
    const m14_pull_up_bar = numericMission(missions, 'm14_pull_up_bar');

    if (m14_logo_or_bench + m14_pull_up_bar > 8) {
      warnings.push(Warnings2020.m14_max_eight_total);
    }

    score += m14_logo_or_bench * 5;
    score += m14_pull_up_bar * 10;

    /*
     |
     | Mission 15
     |
     */

    switch (numericMission(missions, 'm15_precision_tokens')) {
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
