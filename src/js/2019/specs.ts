import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2019 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/season/robot-game/missions.html
 */
describe('Robot Game 2019 specifications', function () {

  describe('Scorer initial state', function () {
    /**
     * The scorer script should only take into account what is given in
     * the missions state argument
     */
    it('Should score no points if nothing is given', function () {
      expect(scorer.getScore({})).toEqual(0);
    });

    /**
     * Doing nothing scores points
     * SETUP
     * > One white unit
     * > Six precision tokens
     * M12 Design & build
     * > LOCATION: 10 Each Circle
     * > HEIGHT: 5 Each Level
     * M14 Precision
     * > Field is 6: 60
     * 60 + 10 + 5 = 75
     */
    it('Should score 75 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(75);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });

  describe('Game Advantage', function () {
    /**
     * Missions notes
     * > If your Robot and all its equipment fi t in the 'Small Inspection Area', the advantage for this game is
     * > 5 points added to each Mission where you score ANY points. Exceptions: Mission 14 doesn't apply, and for
     * > Mission 2, you get 10 added instead of 5.
     */
    it('Scores no additional points if no missions score any point', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true
      })).toEqual(0);
    });

    it('Scores 5 additional points for mission 1', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m01_robot_supported: true,
      })).toEqual(20 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m01_robot_supported: true,
        m01_flags_raised: 1,
      })).toEqual(20 + 15 + 5);
    });

    it('Scores 5 additional points for mission 3', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m03_drone_supported: true,
      })).toEqual(10 + 5);
    });

    it('Scores 5 additional points for mission 4', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m04_bat_supported: true,
      })).toEqual(10 + 5);
    });

    it('Scores 5 additional points for mission 5', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m05_units_on_large_branches: 1,
      })).toEqual(10 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m05_units_on_small_branches: 1,
      })).toEqual(15 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m05_units_on_large_branches: 1,
        m05_units_on_small_branches: 1,
      })).toEqual(10 + 15 + 5);
    });

    it('Scores 5 additional points for mission 6', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m06_traffic_lifted: true,
      })).toEqual(10 + 5);
    });

    it('Scores 5 additional points for mission 7', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m07_swing_released: true,
      })).toEqual(20 + 5);
    });

    it('Scores 5 additional points for mission 8', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m08_blue_car_down: true,
      })).toEqual(15 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m08_balanced: true,
      })).toEqual(20 + 5);
    });

    it('Scores 5 additional points for mission 9', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m09_beams_knocked: 1,
      })).toEqual(10 + 5);
    });

    it('Scores 5 additional points for mission 10', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m10_structure_standing: true,
      })).toEqual(20 + 5);
    });

    it('Scores 5 additional points for mission 11', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m11_completely_in_circle: true,
      })).toEqual(15 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m11_partially_in_circle: true,
      })).toEqual(10 + 5);
    });

    it('Scores 5 additional points for mission 12', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m12_color_matching_circles: 1,
      })).toEqual(10 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m12_stack_heights: 1,
      })).toEqual(5 + 5);

      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m12_color_matching_circles: 1,
        m12_stack_heights: 1,
      })).toEqual(10 + 5 + 5);
    });

    it('Scores 5 additional points for mission 13', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m13_upgrades: 1,
      })).toEqual(10 + 5);
    });

    it('Scores 5 additional points for multiple missions', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m01_robot_supported: true,
        m03_drone_supported: true,
      })).toEqual(20 + 10 + 2 * 5);
    });

    /**
     * Missions notes
     * > Exceptions: Mission 14 doesn't apply
     */
    it('Scores no additional points for mission 14', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m14_precision_tokens: 1,
      })).toEqual(5); // points for 1 precision token
    });

    /**
     * Missions notes
     * > Exceptions: [...] and for Mission 2, you get 10 added instead of 5
     */
    it('Scores 10 additional points if mission 2 score any point', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m02_unit_lowered: true,
      })).toEqual(20 + 10);
    });
  });

  describe('Mission 01', function () {
    /**
     * M1 Elevated places
     * > If the Robot is Supported by the Bridge: 20
     */
    it('Scores 20 points if the robot is supported by the bridge', function () {
      expect(scorer.getScore({
        m01_robot_supported: true
      })).toEqual(20);
    });

    /**
     * M1 Elevated places
     * > If one or more Flags are clearly raised any distance, only by the Robot: 15 Each Flag
     */
    it('Scores 15 points per raised flag', function () {
      expect(scorer.getScore({
        m01_robot_supported: true,
        m01_flags_raised: 1,
      })).toEqual(20 + 15);

      expect(scorer.getScore({
        m01_robot_supported: true,
        m01_flags_raised: 2,
      })).toEqual(20 + 15 * 2);
    });

    /**
     * M1 Elevated places
     * > You can only get Flag points if you get Bridge points
     */
    it('Bridge points are required for flag points', function () {
      expect(scorer.getWarnings({
        m01_flags_raised: 1,
      }).indexOf(scorer.warnings.m01_bridge_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m01_flags_raised: 1,
      })).toEqual(0);
    });
  });

  describe('Mission 02', function () {
    /**
     * M2 Crane
     * > If the Hooked Blue Unit is clearly lowered any distance from the Guide Hole: 20
     */
    it('Scores 20 points to lower the crane', function () {
      expect(scorer.getScore({
        m02_unit_lowered: true
      })).toEqual(20);
    });

    /**
     * M2 Crane
     * > If the Hooked Blue Unit is clearly Independent and Supported by another Blue Unit: 15
     */
    it('Scores 15 points when supported by another blue unit', function () {
      expect(scorer.getScore({
        m02_supported_by_blue: true
      })).toEqual(15);
    });

    /**
     * M2 Crane
     * > If the Hooked Blue Unit is clearly Independent and Supported by another Blue Unit
     * > and Level 1 is Completely in the Blue Circle: 15
     */
    it('Scores 15 points when completely in circle', function () {
      expect(scorer.getScore({
        m02_supported_by_blue: true,
        m02_in_blue_circle: true,
      })).toEqual(15 + 15);
    });

    /**
     * M2 Crane
     * > **and** Level 1 is Completely in the Blue Circle
     */
    it('Support points required for circle points', function () {
      expect(scorer.getWarnings({
        m02_in_blue_circle: true,
      }).indexOf(scorer.warnings.m02_circle_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m02_in_blue_circle: true,
      })).toEqual(0);
    });
  });

  describe('Mission 03', function () {
    /**
     * M03 Inspection drone
     * > If the Inspection Drone is Supported by axle (A) on the Bridge: 10
     */
    it('Scores 10 points to hang the drone', function () {
      expect(scorer.getScore({
        m03_drone_supported: true
      })).toEqual(10);
    });
  });

  describe('Mission 04', function () {
    /**
     * M04 Design for wildlife
     * > If the Bat is Supported by branch (B) on the Tree: 10
     */
    it('Scores 10 points to hang the bat', function () {
      expect(scorer.getScore({
        m04_bat_supported: true
      })).toEqual(10);
    });
  });

  describe('Mission 05', function () {
    /**
     * M05 Treehouse
     * > If a Unit is Independent and Supported by the Tree’s Large Branches: 10 Each Unit
     */
    it('Scores 10 points per unit in the large branches', function () {
      expect(scorer.getScore({
        m05_units_on_large_branches: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m05_units_on_large_branches: 2
      })).toEqual(10 * 2);
    });

    /**
     * M05 Treehouse
     * > If a Unit is Independent and Supported by the Tree’s Small Branches: 15 Each Unit
     */
    it('Scores 15 points per unit in the small branches', function () {
      expect(scorer.getScore({
        m05_units_on_small_branches: 1
      })).toEqual(15);

      expect(scorer.getScore({
        m05_units_on_small_branches: 2
      })).toEqual(15 * 2);
    });
  });

  describe('Mission 06', function () {
    /**
     * M06 Traffic jam
     * > If the Traffic Jam is lifted, [...]: 10
     */
    it('Scores 10 points to lift traffic jam', function () {
      expect(scorer.getScore({
        m06_traffic_lifted: true
      })).toEqual(10);
    });
  });

  describe('Mission 07', function () {
    /**
     * M07 Swing
     * > If the Swing is released: 20
     */
    it('Scores 20 points to release swing', function () {
      expect(scorer.getScore({
        m07_swing_released: true
      })).toEqual(20);
    });
  });

  describe('Mission 08', function () {
    /**
     * M08 Elevator
     * > Blue Car Down: 15
     */
    it('Scores 15 points to move elevator down', function () {
      expect(scorer.getScore({
        m08_blue_car_down: true
      })).toEqual(15);
    });

    /**
     * M08 Elevator
     * > Balanced: 20
     */
    it('Scores 20 points to balance elevator', function () {
      expect(scorer.getScore({
        m08_balanced: true
      })).toEqual(20);
    });

    /**
     * M08 Elevator
     * > (Score one or the other)
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m08_blue_car_down: true,
        m08_balanced: true,
      }).indexOf(scorer.warnings.m08_cannot_score_both)).not.toEqual(-1);

      expect(scorer.getScore({
        m08_blue_car_down: true,
        m08_balanced: true,
      })).toEqual(20);
    });
  });

  describe('Mission 09', function () {
    /**
     * M09 Safety factor
     * > 10 Each Beam
     */
    it('Scores 10 points per beam', function () {
      expect(scorer.getScore({
        m09_beams_knocked: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m09_beams_knocked: 2
      })).toEqual(10 * 2);

      expect(scorer.getScore({
        m09_beams_knocked: 6
      })).toEqual(10 * 6);
    });
  });

  describe('Mission 10', function () {
    /**
     * M10 Steel construction
     * > If the Steel Structure is standing, [...]: 20
     */
    it('Scores 20 points when standing', function () {
      expect(scorer.getScore({
        m10_structure_standing: true
      })).toEqual(20);
    });
  });

  describe('Mission 11', function () {
    /**
     * M11 Innovative architecture
     * > Completely In any Circle: 15
     */
    it('Scores 15 points when completely in circle', function () {
      expect(scorer.getScore({
        m11_completely_in_circle: true
      })).toEqual(15);
    });

    /**
     * M11 Innovative architecture
     * > partly in any Circle: 10
     */
    it('Scores 10 points when partly in circle', function () {
      expect(scorer.getScore({
        m11_partially_in_circle: true
      })).toEqual(10);
    });

    /**
     * M11 Innovative architecture
     * > (score one or the other)
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m11_completely_in_circle: true,
        m11_partially_in_circle: true,
      }).indexOf(scorer.warnings.m11_cannot_score_both)).not.toEqual(-1);

      expect(scorer.getScore({
        m11_completely_in_circle: true,
        m11_partially_in_circle: true,
      })).toEqual(15);
    });
  });

  describe('Mission 12', function () {
    /**
     * M12 Design & build
     * > LOCATION: 10 Each Circle
     */
    it('Scores 10 points per circle', function () {
      expect(scorer.getScore({
        m12_color_matching_circles: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m12_color_matching_circles: 2
      })).toEqual(10 * 2);
    });

    /**
     * M12 Design & build
     * > HEIGHT: 5 Each Level
     */
    it('Scores 5 points per level', function () {
      expect(scorer.getScore({
        m12_stack_heights: 1
      })).toEqual(5);

      expect(scorer.getScore({
        m12_stack_heights: 2
      })).toEqual(5 * 2);
    });
  });

  describe('Mission 13', function () {
    /**
     * M13 Sustainability upgrades
     * > 10 Each Upgrade
     */
    it('Scores 10 points per upgrade', function () {
      expect(scorer.getScore({
        m13_upgrades: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m13_upgrades: 2
      })).toEqual(10 * 2);
    });
  });

  describe('Mission 14', function () {
    /**
     * M14 Precision
     * > Field is 6: 60 / 5: 45 / 4: 30 / 3: 20 / 2: 10 / 1: 5
     */
    it('Scores 60/50/30/20/10/5 points', function () {
      expect(scorer.getScore({
        m14_precision_tokens: 6
      })).toEqual(60);

      expect(scorer.getScore({
        m14_precision_tokens: 5
      })).toEqual(45);

      expect(scorer.getScore({
        m14_precision_tokens: 4
      })).toEqual(30);

      expect(scorer.getScore({
        m14_precision_tokens: 3
      })).toEqual(20);

      expect(scorer.getScore({
        m14_precision_tokens: 2
      })).toEqual(10);

      expect(scorer.getScore({
        m14_precision_tokens: 1
      })).toEqual(5);
    });
  });
});
