import {AbstractScorer, MissionObject} from "../interfaces/ChallengeYear";
import {booleanMission, numericMission} from "../helpers/missionStateRead";

enum Warnings2018 {
  m03_cannot_score_both,
  m05_cannot_score_both_gas,
  m05_gas_requirements_not_met,
  m05_water_requirements_not_met,
  m07_cannot_score_both,
  m08_cannot_score_multiple,
  m12_max_value_exceeded,
  m13_cannot_score_multiple,
  m14_max_combinations_exceeded,
  m15_cannot_score_multiple,
  too_many_penalties,
}

interface MissionObject2018 extends MissionObject {
  m01_vehicle?: boolean,
  m01_supply?: boolean,
  m01_crew?: boolean,
  m02_same?: boolean,
  m02_other_team?: boolean,
  m03_northeast?: boolean,
  m03_ejected?: boolean,
  m04_crossed?: boolean,
  m05_extracted?: boolean,
  m05_gas_target?: boolean,
  m05_gas_base?: boolean,
  m05_water?: boolean,
  m06_cone?: boolean,
  m06_tube?: boolean,
  m06_dock?: boolean,
  m07_completely?: boolean,
  m07_partly?: boolean,
  m08_orange?: boolean,
  m08_white?: boolean,
  m08_grey?: boolean,
  m09_lifted?: boolean,
  m10_green?: boolean,
  m11_high?: boolean,
  m12_satellites?: number,
  m13_orange?: boolean,
  m13_white?: boolean,
  m13_grey?: boolean,
  m14_center?: number,
  m14_side?: number,
  m15_target?: boolean,
  m15_planet?: boolean,
  m15_base?: boolean,
  penalties?: number,
}

export class FllScorer extends AbstractScorer<MissionObject2018, Warnings2018> {
  public warnings = Warnings2018;

  public initialMissionsState(): MissionObject2018 {
    return {
      m01_vehicle: false,
      m01_supply: false,
      m01_crew: false,
      m02_same: false,
      m02_other_team: false,
      m03_northeast: false,
      m03_ejected: false,
      m04_crossed: false,
      m05_extracted: false,
      m05_gas_target: false,
      m05_gas_base: false,
      m05_water: false,
      m06_cone: false,
      m06_tube: false,
      m06_dock: false,
      m07_completely: false,
      m07_partly: false,
      m08_orange: false,
      m08_white: false,
      m08_grey: false,
      m09_lifted: false,
      m10_green: false,
      m11_high: false,
      m12_satellites: 0,
      m13_orange: false,
      m13_white: false,
      m13_grey: false,
      m14_center: 0,
      m14_side: 0,
      m15_target: false,
      m15_planet: false,
      m15_base: false,
      penalties: 0,
    };
  }

  public computeMissions(missions: MissionObject2018) {
    let score = 0;
    let warnings = [];

    /*
     |
     | Mission 01
     |
     */

    if (booleanMission(missions, 'm01_vehicle')) {
      /**
       * 2018-08-04, M01. SPACE TRAVEL
       * > Vehicle payload rolled down the space travel ramp: 22
       */
      score += 22;
    }

    if (booleanMission(missions, 'm01_supply')) {
      /**
       * 2018-08-04, M01. SPACE TRAVEL
       * > Supply payload rolled down the space travel ramp: 14
       */
      score += 14;
    }

    if (booleanMission(missions, 'm01_crew')) {
      /**
       * 2018-08-04, M01. SPACE TRAVEL
       * > Crew payload rolled down the space travel ramp: 10
       */
      score += 10;
    }

    /*
     |
     | Mission 02
     |
     */

    if (booleanMission(missions, 'm02_same')) {
      /**
       * 2018-08-04, M02. SOLAR PANEL ARRAY
       * > Both solar panels are angled toward the same field: 22 (for both teams)
       */
      score += 22;
    }

    if (booleanMission(missions, 'm02_other_team')) {
      /**
       * 2018-08-04, M02. SOLAR PANEL ARRAY
       * > Your solar panel is angled toward the other team’s field: 18
       */
      score += 18;
    }

    /*
     |
     | Mission 03
     |
     */

    const m03_northeast = booleanMission(missions, 'm03_northeast');

    if (m03_northeast) {
      /**
       * 2018-08-04, M03. 3D PRINTING
       * > The 2 × 4 brick ejected and completely in the northeast planet area: 22
       */
      score += 22;
    }

    if (booleanMission(missions, 'm03_ejected')) {
      /**
       * 2018-08-04, M03. 3D PRINTING
       * > The 2 × 4 brick ejected and not completely in the northeast planet area: 18
       * > OR
       */
      if (m03_northeast) {
        warnings.push(Warnings2018.m03_cannot_score_both);
      } else {
        score += 18;
      }
    }

    /*
     |
     | Mission 04
     |
     */

    if (booleanMission(missions, 'm04_crossed')) {
      /**
       * 2018-08-04, M04. CRATER CROSSING
       * > Robot or agent-craft crossed the craters model completely: 20
       */
      score += 20;
    }

    /*
     |
     | Mission 05
     |
     */

    const m05_extracted = booleanMission(missions, 'm05_extracted');

    if (m05_extracted) {
      /**
       * 2018-08-04, M05. EXTRACTION
       * > Move all four core samples so they are no longer touching the axle that held them in the core site model: 16
       */
      score += 16;
    }

    const m05_gas_target = booleanMission(missions, 'm05_gas_target');

    if (m05_gas_target) {
      /**
       * 2018-08-04, M05. EXTRACTION
       * > Place the gas core sample so it is touching the mat, and completely in the lander’s target circle: 12
       */
      if (m05_extracted) {
        score += 12;
      } else {
        warnings.push(Warnings2018.m05_gas_requirements_not_met);
      }
    }

    if (booleanMission(missions, 'm05_gas_base')) {
      if (!m05_extracted) {
        /**
         * 2018-08-04, M05. EXTRACTION
         * > OR
         */
        warnings.push(Warnings2018.m05_gas_requirements_not_met);
      } else if (!m05_gas_target) {
        // Only keep one, give priority to "target" as it scores most
        /**
         * 2018-08-04, M05. EXTRACTION
         * > Place the gas core sample completely in base: 10
         */
        score += 10;
      } else {
        /**
         * 2018-08-04, M05. EXTRACTION
         * > OR
         */
        warnings.push(Warnings2018.m05_cannot_score_both_gas);
      }
    }

    if (booleanMission(missions, 'm05_water')) {
      /**
       * 2018-08-04, M05. EXTRACTION
       * > Place the water core sample so it is supported only by the food growth chamber: 8
       */
      if (m05_extracted) {
        score += 8;
      } else {
        warnings.push(Warnings2018.m05_water_requirements_not_met);
      }
    }

    /*
     |
     | Mission 06
     |
     */

    if (booleanMission(missions, 'm06_cone')) {
      /**
       * 2018-08-04, M06. SPACE STATION MODULES
       * > Move the cone module completely into base: 16
       */
      score += 16;
    }

    if (booleanMission(missions, 'm06_tube')) {
      /**
       * 2018-08-04, M06. SPACE STATION MODULES
       * > Insert the tube module into the habitation hub port, west side: 16
       */
      score += 16;
    }

    if (booleanMission(missions, 'm06_dock')) {
      /**
       * 2018-08-04, M06. SPACE STATION MODULES
       * > Transfer/insert the dock module into the habitation hub port, east side: 14
       */
      score += 14;
    }

    /*
     |
     | Mission 07
     |
     */

    const m07_completely = booleanMission(missions, 'm07_completely');

    if (m07_completely) {
      /**
       * 2018-08-04, M07. SPACE WALK EMERGENCY
       * > Astronaut completely in the habitation hub’s airlock chamber: 22
       */
      score += 22;
    }

    if (booleanMission(missions, 'm07_partly')) {
      /**
       * 2018-08-04, M07. SPACE WALK EMERGENCY
       * > Astronaut partly in the habitation hub’s airlock chamber: 18
       * > OR
       */
      if (m07_completely) {
        warnings.push(Warnings2018.m07_cannot_score_both);
      } else {
        score += 18;
      }
    }

    /*
     |
     | Mission 08
     |
     */

    const m08_orange = booleanMission(missions, 'm08_orange');

    if (m08_orange) {
      /**
       * 2018-08-04, M08. AEROBIC EXERCISE
       * > Get the pointer tip completely in orange, or partly covering either of orange’s end-borders: 22
       */
      score += 22;
    }

    const m08_white = booleanMission(missions, 'm08_white');

    if (m08_white && !m08_orange) {
      /**
       * 2018-08-04, M08. AEROBIC EXERCISE
       * > Get the pointer tip completely in white: 20
       */
      score += 20;
    }

    const m08_grey = booleanMission(missions, 'm08_grey');

    if (m08_grey && !m08_orange && !m08_white) {
      /**
       * 2018-08-04, M08. AEROBIC EXERCISE
       * > Get the pointer tip completely in gray, or partly covering either of gray’s end-borders: 18
       */
      score += 18;
    }

    /**
     * 2018-08-04, M08. AEROBIC EXERCISE
     * > OR
     */
    if (Number(m08_orange) + Number(m08_white) + Number(m08_grey) > 1) {
      warnings.push(Warnings2018.m08_cannot_score_multiple);
    }

    /*
     |
     | Mission 09
     |
     */

    if (booleanMission(missions, 'm09_lifted')) {
      /**
       * 2018-08-04, M09. STRENGTH EXERCISE
       * > Lift the strength bar so the tooth-strip’s 4th hole comes at least partly into view as shown: 16
       */
      score += 16;
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission(missions, 'm10_green')) {
      /**
       * 2018-08-04, M10. FOOD PRODUCTION
       * > Spin the food growth chamber’s colors so the gray weight is DROPPED after green, but before tan, by moving the push bar: 16
       */
      score += 16;
    }

    /*
     |
     | Mission 11
     |
     */

    if (booleanMission(missions, 'm11_high')) {
      /**
       * 2018-08-04, M11. ESCAPE VELOCITY
       * > Get the spacecraft to go so fast and high that it stays up, by pressing/hitting the strike pad: 24
       */
      score += 24;
    }

    /*
     |
     | Mission 12
     |
     */

    let m12_satellites = numericMission(missions, 'm12_satellites');

    if (m12_satellites > 3) {
      /**
       * 2018-08-04, M12. SATELLITE ORBITS
       * > Possible scores: 0, 8, 16, 24
       */
      warnings.push(Warnings2018.m12_max_value_exceeded);

      m12_satellites = 3;
    }

    if (m12_satellites > 0) {
      /**
       * 2018-08-04, M12. SATELLITE ORBITS
       * > Move any part of a satellite on or above the area between the two lines of the outer orbit: 8 each
       */
      score += m12_satellites * 8;
    }

    /*
     |
     | Mission 13
     |
     */

    const m13_orange = booleanMission(missions, 'm13_orange');

    if (m13_orange) {
      /**
       * 2018-08-04, M13. OBSERVATORY
       * > Get the pointer tip completely in orange, or partly covering either of orange’s end-borders: 20
       */
      score += 20;
    }

    const m13_white = booleanMission(missions, 'm13_white');

    if (m13_white && !m13_orange) {
      /**
       * 2018-08-04, M13. OBSERVATORY
       * > Get the pointer tip completely in white: 18
       */
      score += 18;
    }

    const m13_grey = booleanMission(missions, 'm13_grey');

    if (m13_grey && !m13_orange && !m13_white) {
      /**
       * 2018-08-04, M13. OBSERVATORY
       * > Get the pointer tip completely in gray, or partly covering either of gray’s end-borders: 16
       */
      score += 16;
    }

    /**
     * 2018-08-04, M13. OBSERVATORY
     * > OR
     */
    if (Number(m13_orange) + Number(m13_white) + Number(m13_grey) > 1) {
      warnings.push(Warnings2018.m13_cannot_score_multiple);
    }

    /*
     |
     | Mission 14
     |
     */

    let m14_center = numericMission(missions, 'm14_center');
    let m14_side = numericMission(missions, 'm14_side');

    /**
     * 2018-08-04, M14. METEOROID DEFLECTION
     * > Possible scores: 0, 8, 12, 16, 20, 24
     */
    if (m14_center + m14_side > 2) {
      warnings.push(Warnings2018.m14_max_combinations_exceeded);

      // Keep only 2 of whatever was given. Give priority to center as it is higher ranking
      m14_center = Math.min(m14_center, 2);
      m14_side = Math.min(m14_side, 2 - m14_center);
    }

    if (m14_center > 0) {
      /**
       * 2018-08-04, M14. METEOROID DEFLECTION
       * > Meteoroid(s) touch(es) the mat in the center section of the meteoroid catcher: 12 each
       */
      score += m14_center * 12;
    }

    if (m14_side > 0) {
      /**
       * 2018-08-04, M14. METEOROID DEFLECTION
       * > Meteoroid(s) touch(es) the mat in either side section of the meteoroid catcher: 8 each
       */
      score += m14_side * 8;
    }

    /*
     |
     | Mission 15
     |
     */

    const m15_target = booleanMission(missions, 'm15_target');

    if (m15_target) {
      /**
       * 2018-08-04, M15. LANDER TOUCH-DOWN
       * > Move the lander to be intact, touching the mat, and completely in its target circle: 22
       */
      score += 22;
    }

    const m15_planet = booleanMission(missions, 'm15_planet');

    if (m15_planet && !m15_target) {
      /**
       * 2018-08-04, M15. LANDER TOUCH-DOWN
       * > Move the lander to be intact, touching the mat, and completely in the northeast planet area: 20
       */
      score += 20;
    }

    const m15_base = booleanMission(missions, 'm15_base');

    if (m15_base && !m15_target && !m15_planet) {
      /**
       * 2018-08-04, M15. LANDER TOUCH-DOWN
       * > Move both parts of the lander completely into base: 16
       */
      score += 16;
    }

    /**
     * 2018-08-04, M15. LANDER TOUCH-DOWN
     * > OR
     */
    if (Number(m15_target) + Number(m15_planet) + Number(m15_base) > 1) {
      warnings.push(Warnings2018.m15_cannot_score_multiple);
    }

    /*
     |
     | Penalties
     |
     */

    if (missions.hasOwnProperty('penalties')) {
      let penalties = missions.penalties;

      /**
       * 2018-08-04, INTERRUPTION PENALTIES
       Possible penalty totals: −18, −15, −12, −9, −6, −3, 0
       */
      if (penalties > 6) {
        warnings.push(Warnings2018.too_many_penalties);

        penalties = 6;
      }

      if (penalties > 0) {
        /**
         * 2018-08-04, INTERRUPTION PENALTIES
         * > If you interrupt the robot: minus 3 each time
         */
        score += penalties * -3;
      }

    }

    return {
      score,
      warnings,
    };
  }
}
