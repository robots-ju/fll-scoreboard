import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2021 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/season/robot-game/missions.html
 */
describe('Robot Game 2021 specifications', function () {

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
     * M12 Design & build
     * > Chick statue is completely in circle: 10
     * M17 Precision
     * > 6 on field: 50
     * 50 + 10 = 60
     */
    it('Should score 60 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(60);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });


  describe('Mission 00', function () {
    it('If all your equipment fits in the small inspection space: 20', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
      })).toEqual(20);
    });
  });

  describe('Mission 01', function () {
    it('If your Innovation Project Model has the following: 20', function () {
      expect(scorer.getScore({
        m01_innovation: true,
      })).toEqual(20);
    });
  });

  describe('Mission 02', function () {
    it('Partly full of contents: 20', function () {
      expect(scorer.getScore({
        m02_partly: true,
      })).toEqual(20);
    });

    it('Completely full of contents: 30', function () {
      expect(scorer.getScore({
        m02_completely: true,
      })).toEqual(30);
    });

    it('Partly or completely, not both', function () {
      expect(scorer.getWarnings({
        m02_partly: true,
        m02_completely: true,
      }).indexOf(scorer.warnings.m02_cannot_score_both)).not.toEqual(-1);
    });
  });

  describe('Mission 03', function () {
    it('Prepared for unloading: 20', function () {
      expect(scorer.getScore({
        m03_prepared: true,
      })).toEqual(20);
    });

    it('Unloaded: 10', function () {
      expect(scorer.getScore({
        m03_unloaded: true,
      })).toEqual(10);
    });

    it('Prepared and unloaded: adds up', function () {
      expect(scorer.getScore({
        m03_prepared: true,
        m03_unloaded: true,
      })).toEqual(30);
    });
  });

  describe('Mission 04', function () {
    it('Truck: 10', function () {
      expect(scorer.getScore({
        m04_truck: true,
      })).toEqual(10);
    });

    it('Plane: 10', function () {
      expect(scorer.getScore({
        m04_plane: true,
      })).toEqual(10);
    });

    it('Truck and plane: bonus', function () {
      expect(scorer.getScore({
        m04_truck: true,
        m04_plane: true,
      })).toEqual(30);
    });
  });

  describe('Mission 05', function () {
    it('Engine switched: 20', function () {
      expect(scorer.getScore({
        m05_engine_switched: true,
      })).toEqual(20);
    });
  });

  describe('Mission 06', function () {
    it('Not knocked down: 20', function () {
      expect(scorer.getScore({
        m06_not_knocked_down: true,
      })).toEqual(20);
    });

    it('Knocked down: 30', function () {
      expect(scorer.getScore({
        m06_knocked_down: true,
      })).toEqual(30);
    });

    it('Partly or completely, not both', function () {
      expect(scorer.getWarnings({
        m06_not_knocked_down: true,
        m06_knocked_down: true,
      }).indexOf(scorer.warnings.m06_cannot_score_both)).not.toEqual(-1);
    });
  });

  describe('Mission 07', function () {
    it('No longer touching deck: 20', function () {
      expect(scorer.getScore({
        m07_not_touching: true,
      })).toEqual(20);
    });

    it('East of deck: 10', function () {
      expect(scorer.getScore({
        m07_east_of_deck: true,
      })).toEqual(10);
    });

    it('Not touching and east: adds up', function () {
      expect(scorer.getScore({
        m07_not_touching: true,
        m07_east_of_deck: true,
      })).toEqual(30);
    });
  });

  describe('Mission 08', function () {
    it('Separated from your helicopter: 20', function () {
      expect(scorer.getScore({
        m08_separated: true,
      })).toEqual(20);
    });

    it('In your field\'s circle: 10', function () {
      expect(scorer.getScore({
        m08_circle: true,
      })).toEqual(10);
    });

    it('Both teams: 10', function () {
      expect(scorer.getScore({
        m08_both_teams: true,
      })).toEqual(10);
    });

    it('Tasks add up', function () {
      expect(scorer.getScore({
        m08_separated: true,
        m08_circle: true,
      })).toEqual(30);

      expect(scorer.getScore({
        m08_separated: true,
        m08_both_teams: true,
      })).toEqual(30);

      expect(scorer.getScore({
        m08_circle: true,
        m08_both_teams: true,
      })).toEqual(20);

      expect(scorer.getScore({
        m07_not_touching: true,
        m07_east_of_deck: true,
        m08_both_teams: true,
      })).toEqual(40);
    });
  });

  describe('Mission 09', function () {
    it('Repaired: 20', function () {
      expect(scorer.getScore({
        m09_track_repaired: true,
      })).toEqual(20);
    });

    it('Reached destination: 20', function () {
      expect(scorer.getScore({
        m09_destination_reached: true,
      })).toEqual(20);
    });

    it('Repaired and reached destination: adds up', function () {
      expect(scorer.getScore({
        m09_track_repaired: true,
        m09_destination_reached: true,
      })).toEqual(40);
    });
  });

  describe('Mission 10', function () {
    it('Containers sorted: 20', function () {
      expect(scorer.getScore({
        m10_sorted: true,
      })).toEqual(20);
    });
  });

  describe('Mission 11', function () {
    it('Partly: 20', function () {
      expect(scorer.getScore({
        m11_partly: true,
      })).toEqual(20);
    });

    it('Completely: 30', function () {
      expect(scorer.getScore({
        m11_completely: true,
      })).toEqual(30);
    });

    it('Partly or completely, not both', function () {
      expect(scorer.getWarnings({
        m11_partly: true,
        m11_completely: true,
      }).indexOf(scorer.warnings.m11_cannot_score_both)).not.toEqual(-1);
    });
  });

  describe('Mission 12', function () {
    it('Turbine blade mat: 20', function () {
      expect(scorer.getScore({
        m12_blade_mat: true,
      })).toEqual(20);
    });

    it('Turbine blade nothing else: 30', function () {
      expect(scorer.getScore({
        m12_blade_nothing: true,
      })).toEqual(30);
    });

    it('Turbine blade mat or nothing else, not both', function () {
      expect(scorer.getWarnings({
        m12_blade_mat: true,
        m12_blade_nothing: true,
      }).indexOf(scorer.warnings.m12_cannot_score_both_blade)).not.toEqual(-1);
    });

    it('Chicken statue partly: 20', function () {
      expect(scorer.getScore({
        m12_chicken_partly: true,
      })).toEqual(5);
    });

    it('Chicken statue nothing completely: 30', function () {
      expect(scorer.getScore({
        m12_chicken_completely: true,
      })).toEqual(10);
    });

    it('Chicken statue partly or completely, not both', function () {
      expect(scorer.getWarnings({
        m12_chicken_partly: true,
        m12_chicken_completely: true,
      }).indexOf(scorer.warnings.m12_cannot_score_both_chicken)).not.toEqual(-1);
    });
  });

  describe('Mission 13', function () {
    it('Latched together: 10', function () {
      expect(scorer.getScore({
        m13_latched_together: true,
      })).toEqual(10);
    });

    it('Latched to bridge: 10', function () {
      expect(scorer.getScore({
        m13_latched_bridge: true,
      })).toEqual(10);
    });

    it('Together and bridge: bonus', function () {
      expect(scorer.getScore({
        m13_latched_together: true,
        m13_latched_bridge: true,
      })).toEqual(30);
    });
  });

  describe('Mission 14', function () {
    it('Lowered: 10 each', function () {
      expect(scorer.getScore({
        m14_lowered: 1,
      })).toEqual(10);

      expect(scorer.getScore({
        m14_lowered: 2,
      })).toEqual(20);
    });

    it('Lowered: max of 2', function () {
      expect(scorer.getScore({
        m14_lowered: 3,
      })).toEqual(20);

      expect(scorer.getScore({
        m14_lowered: 99,
      })).toEqual(20);
    });
  });

  describe('Mission 15', function () {
    it('Platooning Trucks: 10 each', function () {
      expect(scorer.getScore({
        m15_trucks: 1,
      })).toEqual(10);

      expect(scorer.getScore({
        m15_trucks: 2,
      })).toEqual(20);
    });

    it('Platooning Trucks: max 20 points', function () {
      expect(scorer.getScore({
        m15_trucks: 3,
      })).toEqual(20);

      expect(scorer.getScore({
        m15_trucks: 99,
      })).toEqual(20);
    });

    it('Train: 20 each', function () {
      expect(scorer.getScore({
        m15_train: 1,
      })).toEqual(20);

      expect(scorer.getScore({
        m15_train: 2,
      })).toEqual(40);
    });

    it('Train: max 40 points', function () {
      expect(scorer.getScore({
        m15_train: 3,
      })).toEqual(40);

      expect(scorer.getScore({
        m15_train: 99,
      })).toEqual(40);
    });

    it('Cargo Ship’s West Deck: 30 each', function () {
      expect(scorer.getScore({
        m15_ship: 1,
      })).toEqual(30);

      expect(scorer.getScore({
        m15_ship: 2,
      })).toEqual(60);
    });

    it('Cargo Ship’s West Deck: max 60 points', function () {
      expect(scorer.getScore({
        m15_ship: 3,
      })).toEqual(60);

      expect(scorer.getScore({
        m15_ship: 99,
      })).toEqual(60);
    });
  });

  describe('Mission 16', function () {
    it('Partly in any circle: 5 each', function () {
      expect(scorer.getScore({
        m16_partly_any_circle: 1,
      })).toEqual(5);

      expect(scorer.getScore({
        m16_partly_any_circle: 2,
      })).toEqual(10);

      expect(scorer.getScore({
        m16_partly_any_circle: 10,
      })).toEqual(50);
    });

    it('Completely in any circle: 10 each', function () {
      expect(scorer.getScore({
        m16_completely_any_circle: 1,
      })).toEqual(10);

      expect(scorer.getScore({
        m16_completely_any_circle: 2,
      })).toEqual(20);

      expect(scorer.getScore({
        m16_completely_any_circle: 10,
      })).toEqual(100);
    });

    it('Blue in blue: 20', function () {
      expect(scorer.getScore({
        m16_blue_container: true,
      })).toEqual(20);
    });

    it('Lime in lime: 20', function () {
      expect(scorer.getScore({
        m16_lime_container: true,
      })).toEqual(20);
    });

    it('Circles with at least: 10 each', function () {
      expect(scorer.getScore({
        m16_circles_with_container: 1,
      })).toEqual(10);

      expect(scorer.getScore({
        m16_circles_with_container: 2,
      })).toEqual(20);

      expect(scorer.getScore({
        m16_circles_with_container: 6,
      })).toEqual(60);
    });

    it('Tasks add up', function () {
      expect(scorer.getScore({
        m16_partly_any_circle: 1,
        m16_completely_any_circle: 1,
        m16_blue_container: true,
        m16_lime_container: true,
        m16_circles_with_container: 1,
      })).toEqual(65);
    });
  });

  describe('Mission 17', function () {
    it('number of precision tokens left on the field is 1: 10, 2: 15, 3: 25, 4: 35, 5: 50, 6: 50', function () {
      expect(scorer.getScore({
        m17_precision_tokens: 6
      })).toEqual(50);

      expect(scorer.getScore({
        m17_precision_tokens: 5
      })).toEqual(50);

      expect(scorer.getScore({
        m17_precision_tokens: 4
      })).toEqual(35);

      expect(scorer.getScore({
        m17_precision_tokens: 3
      })).toEqual(25);

      expect(scorer.getScore({
        m17_precision_tokens: 2
      })).toEqual(15);

      expect(scorer.getScore({
        m17_precision_tokens: 1
      })).toEqual(10);
    });
  });
});
