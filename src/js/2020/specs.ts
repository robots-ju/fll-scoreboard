import {FllScorer} from "./scorer";

const scorer = new FllScorer();

/**
 * Robot Game 2020 specifications test suite, based on the official English scoring guide
 * @see https://www.firstlegoleague.org/season
 * @see https://firstinspiresst01.blob.core.windows.net/first-game-changers/fll-challenge/FLL-Challenge-RGR-Final.pdf
 */
describe('Robot Game 2020 specifications', function () {

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
     * M15 Precision
     * > Field is 6: 60
     */
    it('Should score 60 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(60);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });

  describe('Mission 00', function () {
    it('If all your equipment fits in the small inspection space: 25', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true
      })).toEqual(25);
    });
  });

  describe('Mission 01', function () {
    it('[...] touching either the RePLAY logo or the gray area around the bench: 20 max', function () {
      expect(scorer.getScore({
        m01_innovation: true
      })).toEqual(20);
    });
  });

  describe('Mission 02', function () {
    it('If the bottom of the pointer is on magenta: 10, yellow: 15, blue: 20', function () {
      expect(scorer.getScore({
        m02_step: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m02_step: 2
      })).toEqual(15);

      expect(scorer.getScore({
        m02_step: 3
      })).toEqual(20);
    });
  });

  describe('Mission 03', function () {
    it('If only one slide figure is off the slide: 5', function () {
      expect(scorer.getScore({
        m03_figure_slide: 1
      })).toEqual(5);
    });

    it('If both slide figures are off the slide: 20', function () {
      expect(scorer.getScore({
        m03_figure_slide: 2
      })).toEqual(20);
    });

    it('If a slide figure is completely in home: 10 max', function () {
      expect(scorer.getScore({
        m03_figure_home: true
      })).toEqual(10);
    });

    it('If a slide figure is held completely off the mat by the heavy tire and is touching nothing else: 20 max', function () {
      expect(scorer.getScore({
        m03_figure_tire: true
      })).toEqual(20);
    });
  });

  describe('Mission 04', function () {
    it('If the bench is down flat: 10', function () {
      expect(scorer.getScore({
        m04_bench_down: true
      })).toEqual(10);
    });

    it('If the bench is down flat and there are cubes touching the mat in hopscotch spaces: 10 each space', function () {
      expect(scorer.getWarnings({
        m04_spaces_with_cubes: 1
      }).indexOf(scorer.warnings.m04_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m04_bench_down: true,
        m04_spaces_with_cubes: 1
      })).toEqual(10 + 10);

      expect(scorer.getScore({
        m04_bench_down: true,
        m04_spaces_with_cubes: 2
      })).toEqual(10 + 20);

      expect(scorer.getScore({
        m04_bench_down: true,
        m04_spaces_with_cubes: 3
      })).toEqual(10 + 30);

      expect(scorer.getScore({
        m04_bench_down: true,
        m04_spaces_with_cubes: 4
      })).toEqual(10 + 40);
    });

    it('If the backrest is completely out of both of its holes: 15', function () {
      expect(scorer.getScore({
        m04_backrest_removed: true
      })).toEqual(15);
    });
  });

  describe('Mission 05', function () {
    it('If there is a cube in the crate: 15', function () {
      expect(scorer.getScore({
        m05_cube_in_crate: true
      })).toEqual(15);
    });

    it('If the crate rests on the middle height’s white stopper: 15', function () {
      expect(scorer.getScore({
        m05_middle_height: true
      })).toEqual(15);
    });

    it('If the crate rests on the top height’s white stopper: 25', function () {
      expect(scorer.getScore({
        m05_top_height: true
      })).toEqual(25);
    });

    it('Score top height or middle height, not both', function () {
      expect(scorer.getWarnings({
        m05_middle_height: true,
        m05_top_height: true
      }).indexOf(scorer.warnings.m05_cannot_score_both)).not.toEqual(-1);
    });
  });

  describe('Mission 06', function () {
    it('If the robot passes completely through the pull-up bar’s upright frame at any time: 15 max', function () {
      expect(scorer.getScore({
        m06_pass_through: true
      })).toEqual(15);
    });

    it('If the pull-up bar holds 100% of the robot up off the mat at the end of the match: 30', function () {
      expect(scorer.getScore({
        m06_hold: true
      })).toEqual(30);
    });
  });

  describe('Mission 07', function () {
    it('If the robot’s controller is at least partly over the dance floor in a “dancing” motion at the end of the match: 20', function () {
      expect(scorer.getScore({
        m07_dancing: true
      })).toEqual(20);
    });

    it('you cannot score this plus the “held up” score from M06 in the same match', function () {
      expect(scorer.getWarnings({
        m06_hold: true,
        m07_dancing: true
      }).indexOf(scorer.warnings.m06_m07_cannot_score_both)).not.toEqual(-1);
    });
  });

  describe('Mission 08', function () {
    it('If both share models have sent only one cube [...] and those cubes color-match each other: 25 for each team', function () {
      expect(scorer.getScore({
        m08_matching_share: true
      })).toEqual(25);
    });

    it('[...] cubes completely in your frame or target: 5 each cube', function () {
      expect(scorer.getScore({
        m08_cubes_in_frame: 1
      })).toEqual(5);

      expect(scorer.getScore({
        m08_cubes_in_frame: 2
      })).toEqual(10);

      expect(scorer.getScore({
        m08_cubes_in_frame: 5
      })).toEqual(25);
    });

    it('at least one yellow cube completely in your target: 10 added', function () {
      expect(scorer.getScore({
        // Technically m08_cubes_in_frame should always score together but it's not really worth a warning
        m08_yellow_in_target: true
      })).toEqual(10);

      expect(scorer.getScore({
        m08_cubes_in_frame: 1,
        m08_yellow_in_target: true
      })).toEqual(5 + 10);
    });
  });

  describe('Mission 09', function () {
    it('If the light (blue tread) tire is white center up: 10', function () {
      expect(scorer.getScore({
        m09_light_tire_flipped: true
      })).toEqual(10);
    });

    it('If the heavy (black tread) tire is white center up: 15', function () {
      expect(scorer.getScore({
        m09_heavy_tire_flipped: true
      })).toEqual(15);
    });

    it('If white-center-up tires are completely in the large target circle: 5 each', function () {
      expect(scorer.getWarnings({
        m09_center_in_target: 1
      }).indexOf(scorer.warnings.m09_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getWarnings({
        m09_light_tire_flipped: true,
        m09_center_in_target: 2
      }).indexOf(scorer.warnings.m09_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getWarnings({
        m09_heavy_tire_flipped: true,
        m09_center_in_target: 2
      }).indexOf(scorer.warnings.m09_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m09_light_tire_flipped: true,
        m09_center_in_target: 1
      })).toEqual(10 + 5);

      expect(scorer.getWarnings({
        m09_light_tire_flipped: true,
        m09_center_in_target: 1
      }).length).toBe(0);

      expect(scorer.getScore({
        m09_heavy_tire_flipped: true,
        m09_center_in_target: 1
      })).toEqual(15 + 5);

      expect(scorer.getWarnings({
        m09_heavy_tire_flipped: true,
        m09_center_in_target: 1
      }).length).toBe(0);

      expect(scorer.getScore({
        m09_light_tire_flipped: true,
        m09_heavy_tire_flipped: true,
        m09_center_in_target: 2
      })).toEqual(10 + 15 + 10);

      expect(scorer.getWarnings({
        m09_light_tire_flipped: true,
        m09_heavy_tire_flipped: true,
        m09_center_in_target: 2
      }).length).toBe(0);
    });
  });

  describe('Mission 10', function () {
    it('If the cell phone is white side up and resting on only the mat: 15', function () {
      expect(scorer.getScore({
        m10_phone_flipped: true
      })).toEqual(15);
    });
  });

  describe('Mission 11', function () {
    it('[...] the pointer points to gray: 5, red: 10, orange: 15, yellow: 20, light green: 25, dark green: 30', function () {
      expect(scorer.getScore({
        m11_treadmill: 1
      })).toEqual(5);

      expect(scorer.getScore({
        m11_treadmill: 2
      })).toEqual(10);

      expect(scorer.getScore({
        m11_treadmill: 3
      })).toEqual(15);

      expect(scorer.getScore({
        m11_treadmill: 4
      })).toEqual(20);

      expect(scorer.getScore({
        m11_treadmill: 5
      })).toEqual(25);

      expect(scorer.getScore({
        m11_treadmill: 6
      })).toEqual(30);
    });
  });

  describe('Mission 12', function () {
    it('Completely outside the large circle: 15', function () {
      expect(scorer.getScore({
        m12_out_of_large_circle: true
      })).toEqual(15);
    });

    it('Completely in the small circle: 15 added', function () {
      expect(scorer.getWarnings({
        m12_in_small_circle: true
      }).indexOf(scorer.warnings.m12_requirement_not_met)).not.toEqual(-1);

      expect(scorer.getScore({
        m12_out_of_large_circle: true,
        m12_in_small_circle: true
      })).toEqual(30);
    });
  });

  describe('Mission 13', function () {
    it('If the stopper is under the lever and lever setting is blue: 10, magenta: 15, yellow: 20', function () {
      expect(scorer.getScore({
        m13_weight: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m13_weight: 2
      })).toEqual(15);

      expect(scorer.getScore({
        m13_weight: 3
      })).toEqual(20);
    });
  });

  describe('Mission 14', function () {
    it('Touching either the RePLAY logo or the gray area around the bench: 5 each', function () {
      expect(scorer.getScore({
        m14_logo_or_bench: 1
      })).toEqual(5);

      expect(scorer.getScore({
        m14_logo_or_bench: 2
      })).toEqual(10);

      expect(scorer.getScore({
        m14_logo_or_bench: 8
      })).toEqual(40);
    });

    it('Looped over a pull-up bar post as shown – maximum of four – and touching no equipment: 10 each', function () {
      expect(scorer.getScore({
        m14_pull_up_bar: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m14_pull_up_bar: 2
      })).toEqual(20);

      expect(scorer.getScore({
        m14_pull_up_bar: 3
      })).toEqual(30);

      expect(scorer.getScore({
        m14_pull_up_bar: 4
      })).toEqual(40);
    });

    it('Exists only 8 health units', function () {
      expect(scorer.getScore({
        m14_logo_or_bench: 4,
        m14_pull_up_bar: 4
      })).toEqual(20 + 40);

      expect(scorer.getWarnings({
        m14_logo_or_bench: 5,
        m14_pull_up_bar: 4
      }).indexOf(scorer.warnings.m14_max_eight_total)).not.toEqual(-1);

      expect(scorer.getWarnings({
        m14_logo_or_bench: 8,
        m14_pull_up_bar: 1
      }).indexOf(scorer.warnings.m14_max_eight_total)).not.toEqual(-1);
    });
  });

  describe('Mission 15', function () {
    it('[...] number of precision tokens left on the field is 1: 5, 2: 10, 3: 20, 4: 30, 5: 45, 6: 60', function () {
      expect(scorer.getScore({
        m15_precision_tokens: 6
      })).toEqual(60);

      expect(scorer.getScore({
        m15_precision_tokens: 5
      })).toEqual(45);

      expect(scorer.getScore({
        m15_precision_tokens: 4
      })).toEqual(30);

      expect(scorer.getScore({
        m15_precision_tokens: 3
      })).toEqual(20);

      expect(scorer.getScore({
        m15_precision_tokens: 2
      })).toEqual(10);

      expect(scorer.getScore({
        m15_precision_tokens: 1
      })).toEqual(5);
    });
  });
});
