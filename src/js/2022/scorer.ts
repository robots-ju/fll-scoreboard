import {AbstractScorer, MissionObject} from '../interfaces/ChallengeYear';
import {booleanMission, numericMission} from '../helpers/missionStateRead';

enum Warnings2022 {
  m02_bonus_requirement_not_met,
  m03_max_three_units,
  m04_max_three_units,
  m05_bonus_requirement_not_met,
  m07_max_three_units,
  m09_cannot_score_both,
  m10_max_three_units,
  m12_max_three_units,
  m12_max_two_hooks,
  m13_max_three_units,
  m14_max_three_units,
  m15_max_three_units,
}

interface MissionObject2022 extends MissionObject {

  m00_small_inspection_area?: boolean
  m01_innovation?: boolean
  m02_units_in_truck?: number
  m02_bonus?: boolean
  m03_units_in_bin?: number
  m03_removed_from_tray?: boolean
  m04_removed_from_circle?: number
  m05_connector_raised?: boolean
  m05_both_raised?: boolean
  m06_car_off_ramp?: boolean
  m06_unit_in_car?: boolean
  m07_units_removed?: number
  m08_raised?: boolean
  m08_unit?: boolean
  m09_dino_in_left_home?: boolean
  m09_unit_inside?: boolean
  m09_battery_inside?: boolean
  m10_units_off_plant?: number
  m11_unit_off_dam?: boolean
  m12_water_in_reservoir?: number
  m12_hooks_with_water?: number
  m13_units_in_hydrogen_plant?: number
  m14_units_in_factory?: number
  m14_mini_dino_released?: boolean
  m15_units_in_battery_area?: number
  m16_precision_tokens?: number
}

export class FllScorer extends AbstractScorer<MissionObject2022, Warnings2022> {
  public warnings = Warnings2022;

  public initialMissionsState(): MissionObject2022 {
    return {
      m00_small_inspection_area: false,
      m01_innovation: false,
      m02_units_in_truck: 0,
      m02_bonus: false,
      m03_units_in_bin: 0,
      m03_removed_from_tray: false,
      m04_removed_from_circle: 0,
      m05_connector_raised: false,
      m05_both_raised: false,
      m06_car_off_ramp: false,
      m06_unit_in_car: false,
      m07_units_removed: 0,
      m08_raised: false,
      m08_unit: false,
      m09_dino_in_left_home: false,
      m09_unit_inside: false,
      m09_battery_inside: false,
      m10_units_off_plant: 0,
      m11_unit_off_dam: false,
      m12_water_in_reservoir: 0,
      m12_hooks_with_water: 0,
      m13_units_in_hydrogen_plant: 0,
      m14_units_in_factory: 0,
      m14_mini_dino_released: false,
      m15_units_in_battery_area: 0,
      m16_precision_tokens: 6,
    };
  }

  public computeMissions(missions: MissionObject2022) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission<MissionObject2022>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    /*
     |
     | Mission 01
     |
     */

    if (booleanMission<MissionObject2022>(missions, 'm01_innovation')) {
      score += 10;
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_units_in_truck = numericMission<MissionObject2022>(missions, 'm02_units_in_truck');

    score += m02_units_in_truck * 5;

    if (booleanMission<MissionObject2022>(missions, 'm02_bonus')) {
      if (m02_units_in_truck >= 1) {
        score += 10;
      } else {
        warnings.push(Warnings2022.m02_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 03
     |
     */

    const m03_units_in_bin = numericMission<MissionObject2022>(missions, 'm03_units_in_bin');

    score += m03_units_in_bin * 10;

    if (m03_units_in_bin > 3) {
      warnings.push(Warnings2022.m03_max_three_units);
    }

    if (booleanMission<MissionObject2022>(missions, 'm03_removed_from_tray')) {
      score += 5;
    }

    /*
     |
     | Mission 04
     |
     */

    const m04_removed_from_circle = numericMission<MissionObject2022>(missions, 'm04_removed_from_circle');

    score += m04_removed_from_circle * 5;

    if (m04_removed_from_circle >= 3) {
      score += 5;
    }

    if (m04_removed_from_circle > 3) {
      warnings.push(Warnings2022.m04_max_three_units);
    }

    /*
     |
     | Mission 05
     |
     */

    const m05_connector_raised = booleanMission<MissionObject2022>(missions, 'm05_connector_raised');

    if (m05_connector_raised) {
      score += 20;
    }

    if (booleanMission<MissionObject2022>(missions, 'm05_both_raised')) {
      if (m05_connector_raised) {
        score += 10;
      } else {
        warnings.push(Warnings2022.m05_bonus_requirement_not_met);
      }
    }

    /*
     |
     | Mission 06
     |
     */

    if (booleanMission<MissionObject2022>(missions, 'm06_car_off_ramp')) {
      score += 10;
    }

    if (booleanMission<MissionObject2022>(missions, 'm06_unit_in_car')) {
      score += 10;
    }

    /*
     |
     | Mission 07
     |
     */

    const m07_units_removed = numericMission<MissionObject2022>(missions, 'm07_units_removed');

    score += m07_units_removed * 10;

    if (m07_units_removed > 3) {
      warnings.push(Warnings2022.m07_max_three_units);
    }

    /*
     |
     | Mission 08
     |
     */

    if (booleanMission<MissionObject2022>(missions, 'm08_raised')) {
      score += 10;
    }

    if (booleanMission<MissionObject2022>(missions, 'm08_unit')) {
      score += 10;
    }

    /*
     |
     | Mission 09
     |
     */

    if (booleanMission<MissionObject2022>(missions, 'm09_dino_in_left_home')) {
      score += 10;
    }

    const m09_unit_inside = booleanMission<MissionObject2022>(missions, 'm09_unit_inside');

    if (m09_unit_inside) {
      score += 10;
    }

    if (booleanMission<MissionObject2022>(missions, 'm09_battery_inside')) {
      if (m09_unit_inside) {
        warnings.push(Warnings2022.m09_cannot_score_both);
      } else {
        score += 20;
      }
    }

    /*
     |
     | Mission 10
     |
     */

    const m10_units_off_plant = numericMission<MissionObject2022>(missions, 'm10_units_off_plant');

    score += m10_units_off_plant * 5;

    if (m10_units_off_plant >= 3) {
      score += 10;
    }

    if (m10_units_off_plant > 3) {
      warnings.push(Warnings2022.m10_max_three_units);
    }

    /*
     |
     | Mission 11
     |
     */

    if (booleanMission<MissionObject2022>(missions, 'm11_unit_off_dam')) {
      score += 20;
    }

    /*
     |
     | Mission 12
     |
     */

    const m12_water_in_reservoir = numericMission<MissionObject2022>(missions, 'm12_water_in_reservoir');

    score += m12_water_in_reservoir * 5;

    if (m12_water_in_reservoir > 3) {
      warnings.push(Warnings2022.m12_max_three_units);
    }

    const m12_hooks_with_water = numericMission<MissionObject2022>(missions, 'm12_hooks_with_water');

    score += m12_hooks_with_water * 10;

    if (m12_hooks_with_water > 2) {
      warnings.push(Warnings2022.m12_max_two_hooks);
    }

    /*
     |
     | Mission 13
     |
     */

    const m13_units_in_hydrogen_plant = numericMission<MissionObject2022>(missions, 'm13_units_in_hydrogen_plant');

    score += m13_units_in_hydrogen_plant * 5;

    if (m13_units_in_hydrogen_plant > 3) {
      warnings.push(Warnings2022.m13_max_three_units);
    }

    /*
     |
     | Mission 14
     |
     */

    const m14_units_in_factory = numericMission<MissionObject2022>(missions, 'm14_units_in_factory');

    score += m14_units_in_factory * 5;

    if (m14_units_in_factory > 3) {
      warnings.push(Warnings2022.m14_max_three_units);
    }

    if (booleanMission(missions, 'm14_mini_dino_released')) {
      score += 10;
    }

    /*
     |
     | Mission 15
     |
     */

    const m15_units_in_battery_area = numericMission<MissionObject2022>(missions, 'm15_units_in_battery_area');

    score += m15_units_in_battery_area * 5;

    if (m15_units_in_battery_area > 3) {
      warnings.push(Warnings2022.m15_max_three_units);
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
