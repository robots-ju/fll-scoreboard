/*
 * FLL Robot Game Scorer 2018
 * @author Clark Winkelmann <clark.winkelmann@gmail.com>
 * @license MIT
 */

import {FllScorer} from "./scorer";

const scorer = new FllScorer();

/**
 * Robot Game 2018 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/season/robot-game/missions.html
 */
describe('Robot Game 2018 specifications', function () {

  describe('Scorer initial state', function () {

    /**
     * The scorer script should only take into account what is given in
     * the missions state argument
     */
    it('Should score no points if nothing is given', function () {
      expect(scorer.getScore({})).toEqual(0);
    });

    /**
     * Nothing scores point by doing nothing, so the initial state core should be 0 points
     */
    it('Should score no points for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(0);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });

  });

  describe('Mission 01', function () {

    /**
     * 2018-08-04, M01. SPACE TRAVEL
     * > Vehicle payload rolled down the space travel ramp: 22
     */
    it('Scores 22 points to roll down vehicle payload', function () {
      expect(scorer.getScore({
        m01_vehicle: true
      })).toEqual(22);
    });

    /**
     * 2018-08-04, M01. SPACE TRAVEL
     * > Supply payload rolled down the space travel ramp: 14
     */
    it('Scores 14 points to roll down supply payload', function () {
      expect(scorer.getScore({
        m01_supply: true
      })).toEqual(14);
    });

    /**
     * 2018-08-04, M01. SPACE TRAVEL
     * > Crew payload rolled down the space travel ramp: 10
     */
    it('Scores 10 points to roll down creww payload', function () {
      expect(scorer.getScore({
        m01_crew: true
      })).toEqual(10);
    });

  });

  describe('Mission 02', function () {

    /**
     * 2018-08-04, M02. SOLAR PANEL ARRAY
     * > Both solar panels are angled toward the same field: 22 (for both teams)
     */
    it('Scores 22 points to angle toward the same field', function () {
      expect(scorer.getScore({
        m02_same: true
      })).toEqual(22);
    });

    /**
     * 2018-08-04, M02. SOLAR PANEL ARRAY
     * > Your solar panel is angled toward the other team’s field: 18
     */
    it('Scores 18 points to angle toward the other team\'s field', function () {
      expect(scorer.getScore({
        m02_other_team: true
      })).toEqual(18);
    });

  });

  describe('Mission 03', function () {

    /**
     * 2018-08-04, M03. 3D PRINTING
     * > The 2 × 4 brick ejected and completely in the northeast planet area: 22
     */
    it('Scores 22 points to eject the brick in the northeast area', function () {
      expect(scorer.getScore({
        m03_northeast: true
      })).toEqual(22);
    });

    /**
     * 2018-08-04, M03. 3D PRINTING
     * > The 2 × 4 brick ejected and not completely in the northeast planet area: 18
     */
    it('Scores 18 points to eject the brick not completely in the northeast area', function () {
      expect(scorer.getScore({
        m03_ejected: true
      })).toEqual(18);
    });

    /**
     * 2018-08-04, M03. 3D PRINTING
     * > OR
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m03_northeast: true,
        m03_ejected: true
      }).indexOf(scorer.warnings.m03_cannot_score_both)).not.toEqual(-1);

      expect(scorer.getScore({
        m03_northeast: true,
        m03_ejected: true
      })).toEqual(22);
    });

  });

  describe('Mission 04', function () {

    /**
     * 2018-08-04, M04. CRATER CROSSING
     * > Robot or agent-craft crossed the craters model completely: 20
     */
    it('Scores 20 points to cross the crater', function () {
      expect(scorer.getScore({
        m04_crossed: true
      })).toEqual(20);
    });

  });

  describe('Mission 05', function () {

    /**
     * 2018-08-04, M05. EXTRACTION
     * > Move all four core samples so they are no longer touching the axle that held them in the core site model: 16
     */
    it('Scores 16 to extract the models', function () {
      expect(scorer.getScore({
        m05_extracted: true
      })).toEqual(16);
    });

    /**
     * 2018-08-04, M05. EXTRACTION
     * > Place the gas core sample so it is touching the mat, and completely in the lander’s target circle: 12
     */
    it('Scores 12 to place gas in target', function () {
      expect(scorer.getScore({
        m05_extracted: true,
        m05_gas_target: true
      })).toEqual(16 + 12);
    });

    /**
     * 2018-08-04, M05. EXTRACTION
     * > Place the gas core sample completely in base: 10
     */
    it('Scores 10 to place gas in base', function () {
      expect(scorer.getScore({
        m05_extracted: true,
        m05_gas_base: true
      })).toEqual(16 + 10);
    });

    /**
     * 2018-08-04, M05. EXTRACTION
     * > OR
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m05_extracted: true,
        m05_gas_target: true,
        m05_gas_base: true
      }).indexOf(scorer.warnings.m05_cannot_score_both_gas)).not.toEqual(-1);
    });

    /**
     * 2018-08-04, M05. EXTRACTION
     * > Place the water core sample so it is supported only by the food growth chamber: 8
     */
    it('Scores 8 to place water in growth chamber', function () {
      expect(scorer.getScore({
        m05_extracted: true,
        m05_water: true
      })).toEqual(16 + 8);
    });

    /**
     * 2018-08-04, M05. EXTRACTION
     * > The robot needs to get all the core samples out of the core site model, then it has options for what to do with them as described here
     */
    it('First step is required for all other', function () {
      expect(scorer.getWarnings({
        m05_gas_target: true
      }).indexOf(scorer.warnings.m05_gas_requirements_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m05_gas_target: true
      })).toEqual(0);

      expect(scorer.getWarnings({
        m05_gas_base: true
      }).indexOf(scorer.warnings.m05_gas_requirements_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m05_gas_base: true
      })).toEqual(0);

      expect(scorer.getWarnings({
        m05_water: true
      }).indexOf(scorer.warnings.m05_water_requirements_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m05_water: true
      })).toEqual(0);
    });

  });

  describe('Mission 06', function () {

    /**
     * 2018-08-04, M06. SPACE STATION MODULES
     * > Move the cone module completely into base: 16
     */
    it('Scores 16 points to move cone', function () {
      expect(scorer.getScore({
        m06_cone: true
      })).toEqual(16);
    });

    /**
     * 2018-08-04, M06. SPACE STATION MODULES
     * > Insert the tube module into the habitation hub port, west side: 16
     */
    it('Scores 16 points to insert tube', function () {
      expect(scorer.getScore({
        m06_tube: true
      })).toEqual(16);
    });

    /**
     * 2018-08-04, M06. SPACE STATION MODULES
     * > Transfer/insert the dock module into the habitation hub port, east side: 14
     */
    it('Scores 14 points to insert dock', function () {
      expect(scorer.getScore({
        m06_dock: true
      })).toEqual(14);
    });

  });

  describe('Mission 07', function () {

    /**
     * 2018-08-04, M07. SPACE WALK EMERGENCY
     * > Astronaut completely in the habitation hub’s airlock chamber: 22
     */
    it('Scores 22 points to put astronaut completely in airlock', function () {
      expect(scorer.getScore({
        m07_completely: true
      })).toEqual(22);
    });

    /**
     * 2018-08-04, M07. SPACE WALK EMERGENCY
     * > Astronaut partly in the habitation hub’s airlock chamber: 18
     */
    it('Scores 18 points to put astronaut partly in airlock', function () {
      expect(scorer.getScore({
        m07_partly: true
      })).toEqual(18);
    });

    /**
     * 2018-08-04, M07. SPACE WALK EMERGENCY
     * > OR
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m07_completely: true,
        m07_partly: true
      }).indexOf(scorer.warnings.m07_cannot_score_both)).not.toEqual(-1);

      expect(scorer.getScore({
        m07_completely: true,
        m07_partly: true
      })).toEqual(22);
    });

  });

  describe('Mission 08', function () {

    /**
     * 2018-08-04, M08. AEROBIC EXERCISE
     * > Get the pointer tip completely in orange, or partly covering either of orange’s end-borders: 22
     */
    it('Scores 22 points to move tip to orange', function () {
      expect(scorer.getScore({
        m08_orange: true
      })).toEqual(22);
    });

    /**
     * 2018-08-04, M08. AEROBIC EXERCISE
     * > Get the pointer tip completely in white: 20
     */
    it('Scores 20 points to move tip to white', function () {
      expect(scorer.getScore({
        m08_white: true
      })).toEqual(20);
    });

    /**
     * 2018-08-04, M08. AEROBIC EXERCISE
     * > Get the pointer tip completely in gray, or partly covering either of gray’s end-borders: 18
     */
    it('Scores 18 points to move tip to grey', function () {
      expect(scorer.getScore({
        m08_grey: true
      })).toEqual(18);
    });

    /**
     * 2018-08-04, M08. AEROBIC EXERCISE
     * > OR
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m08_orange: true,
        m08_white: true
      }).indexOf(scorer.warnings.m08_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m08_orange: true,
        m08_white: true
      })).toEqual(22);

      expect(scorer.getWarnings({
        m08_white: true,
        m08_grey: true
      }).indexOf(scorer.warnings.m08_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m08_white: true,
        m08_grey: true
      })).toEqual(20);

      expect(scorer.getWarnings({
        m08_orange: true,
        m08_grey: true
      }).indexOf(scorer.warnings.m08_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m08_orange: true,
        m08_grey: true
      })).toEqual(22);

      expect(scorer.getWarnings({
        m08_orange: true,
        m08_white: true,
        m08_grey: true
      }).indexOf(scorer.warnings.m08_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m08_orange: true,
        m08_white: true,
        m08_grey: true
      })).toEqual(22);
    });

  });

  describe('Mission 09', function () {

    /**
     * 2018-08-04, M09. STRENGTH EXERCISE
     * > Lift the strength bar so the tooth-strip’s 4th hole comes at least partly into view as shown: 16
     */
    it('Scores 16 points to lift the bar', function () {
      expect(scorer.getScore({
        m09_lifted: true
      })).toEqual(16);
    });

  });

  describe('Mission 10', function () {

    /**
     * 2018-08-04, M10. FOOD PRODUCTION
     * > Spin the food growth chamber’s colors so the gray weight is DROPPED after green, but before tan, by moving the push bar: 16
     */
    it('Scores 16 points to spin to green', function () {
      expect(scorer.getScore({
        m10_green: true
      })).toEqual(16);
    });

  });

  describe('Mission 11', function () {

    /**
     * 2018-08-04, M11. ESCAPE VELOCITY
     * > Get the spacecraft to go so fast and high that it stays up, by pressing/hitting the strike pad: 24
     */
    it('Scores 24 points to get the spacecraft up', function () {
      expect(scorer.getScore({
        m11_high: true
      })).toEqual(24);
    });

  });

  describe('Mission 12', function () {

    /**
     * 2018-08-04, M12. SATELLITE ORBITS
     * > Move any part of a satellite on or above the area between the two lines of the outer orbit: 8 each
     */
    it('Scores 8 points per satellite', function () {
      expect(scorer.getScore({
        m12_satellites: 1
      })).toEqual(8);

      expect(scorer.getScore({
        m12_satellites: 2
      })).toEqual(8 * 2);

      expect(scorer.getScore({
        m12_satellites: 3
      })).toEqual(8 * 3);
    });

    /**
     * 2018-08-04, M12. SATELLITE ORBITS
     * > Possible scores: 0, 8, 16, 24
     */
    it('Cannot be more than 3 satellites', function () {
      expect(scorer.getWarnings({
        m12_satellites: 4
      }).indexOf(scorer.warnings.m12_max_value_exceeded)).not.toEqual(-1);

      expect(scorer.getScore({
        m12_satellites: 4
      })).toEqual(8 * 3);
    });

  });

  describe('Mission 13', function () {

    /**
     * 2018-08-04, M13. OBSERVATORY
     * > Get the pointer tip completely in orange, or partly covering either of orange’s end-borders: 20
     */
    it('Scores 20 point to get to orange', function () {
      expect(scorer.getScore({
        m13_orange: true
      })).toEqual(20);
    });

    /**
     * 2018-08-04, M13. OBSERVATORY
     * > Get the pointer tip completely in white: 18
     */
    it('Scores 18 point to get to white', function () {
      expect(scorer.getScore({
        m13_white: true
      })).toEqual(18);
    });

    /**
     * 2018-08-04, M13. OBSERVATORY
     * > Get the pointer tip completely in gray, or partly covering either of gray’s end-borders: 16
     */
    it('Scores 16 point to get to grey', function () {
      expect(scorer.getScore({
        m13_grey: true
      })).toEqual(16);
    });

    /**
     * 2018-08-04, M13. OBSERVATORY
     * > OR
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m13_orange: true,
        m13_white: true
      }).indexOf(scorer.warnings.m13_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m13_orange: true,
        m13_white: true
      })).toEqual(20);

      expect(scorer.getWarnings({
        m13_white: true,
        m13_grey: true
      }).indexOf(scorer.warnings.m13_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m13_white: true,
        m13_grey: true
      })).toEqual(18);

      expect(scorer.getWarnings({
        m13_orange: true,
        m13_grey: true
      }).indexOf(scorer.warnings.m13_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m13_orange: true,
        m13_grey: true
      })).toEqual(20);

      expect(scorer.getWarnings({
        m13_orange: true,
        m13_white: true,
        m13_grey: true
      }).indexOf(scorer.warnings.m13_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m13_orange: true,
        m13_white: true,
        m13_grey: true
      })).toEqual(20);
    });

  });

  describe('Mission 14', function () {

    /**
     * 2018-08-04, M14. METEOROID DEFLECTION
     * > Meteoroid(s) touch(es) the mat in the center section of the meteoroid catcher: 12 each
     */
    it('Scores 12 points per meteoroid in center section', function () {
      expect(scorer.getScore({
        m14_center: 1
      })).toEqual(12);

      expect(scorer.getScore({
        m14_center: 2
      })).toEqual(12 * 2);
    });

    /**
     * 2018-08-04, M14. METEOROID DEFLECTION
     * > Meteoroid(s) touch(es) the mat in either side section of the meteoroid catcher: 8 each
     */
    it('Scores 8 points per meteoroid in center side', function () {
      expect(scorer.getScore({
        m14_side: 1
      })).toEqual(8);

      expect(scorer.getScore({
        m14_side: 2
      })).toEqual(8 * 2);
    });

    /**
     * 2018-08-04, M14. METEOROID DEFLECTION
     * > Possible scores: 0, 8, 12, 16, 20, 24
     */
    it('Maximums', function () {
      expect(scorer.getWarnings({
        m14_center: 3
      }).indexOf(scorer.warnings.m14_max_combinations_exceeded)).not.toEqual(-1);

      expect(scorer.getScore({
        m14_center: 3
      })).toEqual(12 * 2);

      expect(scorer.getWarnings({
        m14_side: 3
      }).indexOf(scorer.warnings.m14_max_combinations_exceeded)).not.toEqual(-1);

      expect(scorer.getScore({
        m14_side: 3
      })).toEqual(8 * 2);

      expect(scorer.getWarnings({
        m14_center: 1,
        m14_side: 2
      }).indexOf(scorer.warnings.m14_max_combinations_exceeded)).not.toEqual(-1);

      expect(scorer.getScore({
        m14_center: 1,
        m14_side: 2
      })).toEqual(12 + 8);

      expect(scorer.getWarnings({
        m14_center: 2,
        m14_side: 1
      }).indexOf(scorer.warnings.m14_max_combinations_exceeded)).not.toEqual(-1);

      expect(scorer.getScore({
        m14_center: 2,
        m14_side: 1
      })).toEqual(12 * 2);
    });

  });

  describe('Mission 15', function () {

    /**
     * 2018-08-04, M15. LANDER TOUCH-DOWN
     * > Move the lander to be intact, touching the mat, and completely in its target circle: 22
     */
    it('Scores 22 point to land in target', function () {
      expect(scorer.getScore({
        m15_target: true
      })).toEqual(22);
    });

    /**
     * 2018-08-04, M15. LANDER TOUCH-DOWN
     * > Move the lander to be intact, touching the mat, and completely in the northeast planet area: 20
     */
    it('Scores 20 point to land on planet', function () {
      expect(scorer.getScore({
        m15_planet: true
      })).toEqual(20);
    });

    /**
     * 2018-08-04, M15. LANDER TOUCH-DOWN
     * > Move both parts of the lander completely into base: 16
     */
    it('Scores 16 point to move into base', function () {
      expect(scorer.getScore({
        m15_base: true
      })).toEqual(16);
    });

    /**
     * 2018-08-04, M15. LANDER TOUCH-DOWN
     * > OR
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m15_target: true,
        m15_planet: true
      }).indexOf(scorer.warnings.m15_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m15_target: true,
        m15_planet: true
      })).toEqual(22);

      expect(scorer.getWarnings({
        m15_planet: true,
        m15_base: true
      }).indexOf(scorer.warnings.m15_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m15_planet: true,
        m15_base: true
      })).toEqual(20);

      expect(scorer.getWarnings({
        m15_target: true,
        m15_base: true
      }).indexOf(scorer.warnings.m15_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m15_target: true,
        m15_base: true
      })).toEqual(22);

      expect(scorer.getWarnings({
        m15_target: true,
        m15_planet: true,
        m15_base: true
      }).indexOf(scorer.warnings.m15_cannot_score_multiple)).not.toEqual(-1);

      expect(scorer.getScore({
        m15_target: true,
        m15_planet: true,
        m15_base: true
      })).toEqual(22);
    });

  });

  describe('Penalties', function () {

    /**
     * 2018-08-04, INTERRUPTION PENALTIES
     * > If you interrupt the robot: minus 3 each time
     */
    it('Costs 3 points per penalty', function () {
      expect(scorer.getScore({
        penalties: 1
      })).toEqual(-3);

      expect(scorer.getScore({
        penalties: 2
      })).toEqual(-3 * 2);

      expect(scorer.getScore({
        penalties: 6
      })).toEqual(-3 * 6);
    });

    /**
     * 2018-08-04, INTERRUPTION PENALTIES
     Possible penalty totals: −18, −15, −12, −9, −6, −3, 0
     */
    it('Cannot be more than 6 penalties', function () {
      expect(scorer.getWarnings({
        penalties: 7
      }).indexOf(scorer.warnings.too_many_penalties)).not.toEqual(-1);

      expect(scorer.getScore({
        penalties: 7
      })).toEqual(-3 * 6);
    });

  });
});
