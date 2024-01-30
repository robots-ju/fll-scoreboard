/*
 * FLL Robot Game Scorer 2017
 * @author Clark Winkelmann <clark.winkelmann@gmail.com>
 * @license MIT
 */

import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2017 specifications test suite, based on the official scoring guide
 * @see http://www.firstlegoleague.org/challenge
 * @see https://firstinspiresst01.blob.core.windows.net/fll/hydro-dynamics-challenge-a4.pdf
 */
describe('Robot Game 2017 specifications', function () {

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
     * 2017.08.29, M01 - PIPE REMOVAL
     * > *Move the Broken Pipe so it is completely in Base.
     * > 20 Points
     */
    it('Scores 20 points to bring broken pipe in base', function () {
      expect(scorer.getScore({
        m01_broken_pipe_in_base: true
      })).toEqual(20);
    });

  });

  describe('Mission 02', function () {

    /**
     * 2017.08.29, M02 – FLOW
     * > *Move a Big Water (one time maximum) to the other team’s field *only by turning the Pump System’s valve(s).
     * > 25 Points
     */
    it('Scores 25 points to move the water', function () {
      expect(scorer.getScore({
        m02_big_water_moved: true
      })).toEqual(25);
    });

  });

  describe('Mission 03', function () {

    /**
     * 2017.08.29, M03. ANIMAL CONSERVATION
     * > Move the Pump Addition so it has contact with the mat and that contact is completely in the Pump Addition target.
     * > 20 Points
     */
    it('Scores 20 points move the pump addition', function () {
      expect(scorer.getScore({
        m03_pump_addition_moved: true
      })).toEqual(20);
    });

  });

  describe('Mission 04', function () {

    /**
     * 2017.08.29, M04 – RAIN
     * > Make at least one Rain come out of the Rain Cloud.
     * > 20 Points
     */
    it('Scores 20 points to make the rain come out', function () {
      expect(scorer.getScore({
        m04_rain_came_out: true
      })).toEqual(20);
    });

  });

  describe('Mission 05', function () {

    /**
     * 2017.08.29, M05 - FILTER
     * > Move the Filter north until the lock latch drops.
     * > 30 Points
     */
    it('Scores 30 to move the filter north', function () {
      expect(scorer.getScore({
        m05_filter_moved_north: true
      })).toEqual(30);
    });

  });

  describe('Mission 06', function () {

    /**
     * 2017.08.29, M06 – WATER TREATMENT
     * > Make the Water Treatment model eject its Big Water, *only by moving the Toilet’s lever.
     * > 20 Points
     */
    it('Scores 20 points to eject the big water', function () {
      expect(scorer.getScore({
        m06_big_water_ejected: true
      })).toEqual(20);
    });

  });

  describe('Mission 07', function () {

    /**
     * 2017.08.29, M07 – FOUNTAIN
     * > Make the Fountain’s middle layer rise some obvious height and stay there, due only to a Big Water in the gray tub.
     * > 20 Points
     */
    it('Scores 20 points to rise the fountains layer', function () {
      expect(scorer.getScore({
        m07_fountain_layer_raised: true
      })).toEqual(20);
    });

  });

  describe('Mission 08', function () {

    /**
     * 2017.08.29, M08 – MANHOLE COVERS
     * > Flip Manhole cover(s) over, obviously past vertical *without it/them ever reaching Base.
     * > 15 Points EACH
     */
    it('Scores 15 per cover flipped', function () {
      expect(scorer.getScore({
        m08_manhole_covers_flipped: 1
      })).toEqual(15);

      expect(scorer.getScore({
        m08_manhole_covers_flipped: 2
      })).toEqual(15 * 2);

      expect(scorer.getWarnings({
        m08_manhole_covers_flipped: 3
      }).indexOf(scorer.warnings.m08_max_value_exceeded) !== -1).toEqual(true);
    });

    /**
     * 2017.08.29, M08 – MANHOLE COVERS
     * > FOR BONUS: Score 30 Manhole Cover points as described above WITH both covers completely in separate Tripod targets.
     * > 30 Points Added
     */
    it('Scores 30 additional points with the bonus', function () {
      expect(scorer.getScore({
        m08_manhole_covers_flipped: 2,
        m08_both_covers_in_separate_targets: true
      })).toEqual(15 * 2 + 30);
    });

    /**
     * 2017.08.29, M08 – MANHOLE COVERS
     * > FOR BONUS: Score 30 Manhole Cover points as described above WITH both covers completely in separate Tripod targets.
     * > 30 Points Added
     */
    it('Scores bonus only when requirements are met', function () {
      expect(scorer.getWarnings({
        m08_both_covers_in_separate_targets: true
      }).indexOf(scorer.warnings.m08_bonus_requirements_not_met) !== -1).toEqual(true);

      expect(scorer.getScore({
        m08_both_covers_in_separate_targets: true
      })).toEqual(0);

      expect(scorer.getWarnings({
        m08_manhole_covers_flipped: 1,
        m08_both_covers_in_separate_targets: true
      }).indexOf(scorer.warnings.m08_bonus_requirements_not_met) !== -1).toEqual(true);

      expect(scorer.getScore({
        m08_manhole_covers_flipped: 1,
        m08_both_covers_in_separate_targets: true
      })).toEqual(15);
    });

  });

  describe('Mission 09', function () {

    /**
     * 2017.08.29, M09 – TRIPOD
     * > Move the inspection camera Tripod so it is
     * > FOR PARTIAL SCORE: partly in either Tripod target, with all of its feet touching the mat.
     * > 15 Points
     */
    it('Scores 15 points to partly place the tripod', function () {
      expect(scorer.getScore({
        m09_tripod_partly_in_target: true
      })).toEqual(15);
    });

    /**
     * 2017.08.29, M09 – TRIPOD
     * > FOR FULL SCORE: completely in either Tripod target, with all of its feet touching the mat.
     * > 20 Points
     */
    it('Scores 20 points to completely place the tripod', function () {
      expect(scorer.getScore({
        m09_tripod_completely_in_target: true
      })).toEqual(20);
    });

    /**
     * 2017.08.29, M09 – TRIPOD
     * (Implicit because there's a partial and a full score)
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m09_tripod_partly_in_target: true,
        m09_tripod_completely_in_target: true
      }).indexOf(scorer.warnings.m09_cannot_score_both) !== -1).toEqual(true);
    });

  });

  describe('Mission 10', function () {

    /**
     * 2017.08.29, M10 – PIPE REPLACEMENT
     * > (Install the Optional Loop first, in Base, if you wish.) Move a New Pipe so it is where the broken one started, in full/flat contact with the mat.
     * > 20 Points
     */
    it('Scores 20 points to move the new pipe', function () {
      expect(scorer.getScore({
        m10_pipe_moved: true
      })).toEqual(20);
    });

  });

  describe('Mission 11', function () {

    /**
     * 2017.08.29, M11 – PIPE CONSTRUCTION
     * > (Install the Optional Loop first, in Base, if you wish.) Move a New Pipe so it is
     * > FOR PARTIAL SCORE: partly in its target, in full/flat contact with the mat.
     * > 15 Points
     */
    it('Scores 15 points to move the pipe partly in target', function () {
      expect(scorer.getScore({
        m11_pipe_partly_in_target: true
      })).toEqual(15);
    });

    /**
     * 2017.08.29, M11 – PIPE CONSTRUCTION
     * > (Install the Optional Loop first, in Base, if you wish.) Move a New Pipe so it is
     * > FOR FULL SCORE: completely in its target, in full/flat contact with the mat.
     * > 20 Points
     */
    it('Scores 20 points to move the pipe completely in target', function () {
      expect(scorer.getScore({
        m11_pipe_completely_in_target: true
      })).toEqual(20);
    });

    /**
     * 2017.08.29, M11 – PIPE CONSTRUCTION
     * (Implicit because there's a partial and a full score)
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m11_pipe_partly_in_target: true,
        m11_pipe_completely_in_target: true
      }).indexOf(scorer.warnings.m11_cannot_score_both) !== -1).toEqual(true);
    });

  });

  describe('Mission 12', function () {

    /**
     * 2017.08.29, M12 – SLUDGE
     * > Move the Sludge so it is touching the visible wood of any of the six drawn garden boxes.
     * > 30 Points
     */
    it('Scores 30 points to move the sludge', function () {
      expect(scorer.getScore({
        m12_sludge_touching_wood: true
      })).toEqual(30);
    });

  });

  describe('Mission 13', function () {

    /**
     * 2017.08.29, M13 – FLOWER
     * > Make the Flower rise some obvious height and stay there, due only to a Big Water in the brown pot.
     * > 30 Points
     */
    it('Scores 30 point to make the flower rise', function () {
      expect(scorer.getScore({
        m13_flower_raised: true
      })).toEqual(30);
    });

    /**
     * 2017.08.29, M13 – FLOWER
     * > FOR BONUS: Score Flower Points as described above WITH at least one Rain in the purple part, touching nothing but the Flower model.
     * > 30 Points Added
     */
    it('Scores 30 point to make the flower rise', function () {
      expect(scorer.getScore({
        m13_flower_raised: true,
        m13_rain_in_purple_part: true
      })).toEqual(30 + 30);
    });

    /**
     * 2017.08.29, M13 – FLOWER
     * > FOR BONUS: Score Flower Points as described above WITH at least one Rain in the purple part, touching nothing but the Flower model.
     * > 30 Points Added
     */
    it('Scores bonus only when requirements are met', function () {
      expect(scorer.getWarnings({
        m13_rain_in_purple_part: true
      }).indexOf(scorer.warnings.m13_bonus_requirements_not_met) !== -1).toEqual(true);

      expect(scorer.getScore({
        m13_rain_in_purple_part: true
      })).toEqual(0);
    });

  });

  describe('Mission 14', function () {

    /**
     * 2017.08.29, M14 – WATER WELL
     * > Move the Water Well so it has contact with the mat and that contact is
     * > FOR PARTIAL SCORE: partly in the Water Well target.
     * > 15 Points
     */
    it('Scores 15 points to partly place the well', function () {
      expect(scorer.getScore({
        m14_well_partly_in_target: true
      })).toEqual(15);
    });

    /**
     * 2017.08.29, M14 – WATER WELL
     * > Move the Water Well so it has contact with the mat and that contact is
     * > FOR FULL SCORE: completely in the Water Well target.
     * > 25 Points
     */
    it('Scores 25 points to partly place the well', function () {
      expect(scorer.getScore({
        m14_well_completely_in_target: true
      })).toEqual(25);
    });

    /**
     * 2017.08.29, M14 – WATER WELL
     * (Implicit because there's a partial and a full score)
     */
    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m14_well_partly_in_target: true,
        m14_well_completely_in_target: true
      }).indexOf(scorer.warnings.m14_cannot_score_both) !== -1).toEqual(true);
    });

  });

  describe('Mission 15', function () {

    /**
     * 2017.08.29, M15 – FIRE
     * > Make the fire drop *only by making the Firetruck apply direct force to the House’s lever.
     * > 25 Points
     */
    it('Scores 25 point to make the fire drop', function () {
      expect(scorer.getScore({
        m15_fire_dropped: true
      })).toEqual(25);
    });

  });

  describe('Mission 16', function () {

    /**
     * 2017.08.29, M16 – WATER COLLECTION
     * > [...]
     * > At least one Rain
     * > 10 Points
     */
    it('Scores 10 points for at least one rain', function () {
      expect(scorer.getScore({
        m16_rain_in_target: true
      })).toEqual(10);
    });

    /**
     * 2017.08.29, M16 – WATER COLLECTION
     * > [...]
     * > Big Water
     * > 10 Points EACH
     */
    it('Scores 10 points per big water', function () {
      expect(scorer.getScore({
        m16_big_water_in_target: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m16_big_water_in_target: 2
      })).toEqual(10 * 2);

      expect(scorer.getScore({
        m16_big_water_in_target: 4
      })).toEqual(10 * 4);
    });

    /**
     * 2017.08.29, M16 – WATER COLLECTION
     * > FOR BONUS: Score at least one Large Water in its target as described above WITH one on top, which is touching nothing but other water
     * > 30 Points
     * > (Maximum only one Bonus can score)
     */
    it('Scores 30 additional points for bonus', function () {
      expect(scorer.getScore({
        m16_big_water_in_target: 1,
        m16_big_water_stacked: true
      })).toEqual(10 + 30);

      expect(scorer.getScore({
        m16_big_water_in_target: 3,
        m16_big_water_stacked: true
      })).toEqual(10 * 3 + 30);
    });

    /**
     * 2017.08.29, M16 – WATER COLLECTION
     * > FOR BONUS: Score at least one Large Water in its target as described above WITH one on top, which is touching nothing but other water
     * > 30 Points
     * > (Maximum only one Bonus can score)
     */
    it('Scores bonus only when requirements are met', function () {
      expect(scorer.getWarnings({
        m16_big_water_stacked: true
      }).indexOf(scorer.warnings.m16_bonus_requirements_not_met) !== -1).toEqual(true);

      expect(scorer.getScore({
        m16_big_water_stacked: true
      })).toEqual(0);

      expect(scorer.getWarnings({
        m16_rain_in_target: true,
        m16_big_water_stacked: true
      }).indexOf(scorer.warnings.m16_bonus_requirements_not_met) !== -1).toEqual(true);

      expect(scorer.getScore({
        m16_rain_in_target: true,
        m16_big_water_stacked: true
      })).toEqual(10);
    });

  });

  describe('Mission 17', function () {

    /**
     * 2017.08.29, M17 – SLINGSHOT
     * > Move the Slingshot so it is completely in its target.
     * > 20 Points
     */
    it('Scores 20 points to move the slingshot', function () {
      expect(scorer.getScore({
        m17_slingshot_in_target: true
      })).toEqual(20);
    });

    /**
     * 2017.08.29, M17 – SLINGSHOT
     * > FOR BONUS: Score Slingshot points as described above WITH the Dirty Water and a Rain completely in the Slingshot target.
     * > 15 Points Added
     */
    it('Scores 15 additional points for bonus', function () {
      expect(scorer.getScore({
        m17_slingshot_in_target: true,
        m17_dirty_water_and_rain_in_target: true,
      })).toEqual(20 + 15);
    });

    /**
     * 2017.08.29, M17 – SLINGSHOT
     * > FOR BONUS: Score Slingshot points as described above WITH the Dirty Water and a Rain completely in the Slingshot target.
     * > 15 Points Added
     */
    it('Scores bonus only when requirements are met', function () {
      expect(scorer.getWarnings({
        m17_dirty_water_and_rain_in_target: true
      }).indexOf(scorer.warnings.m17_bonus_requirements_not_met) !== -1).toEqual(true);

      expect(scorer.getScore({
        m17_dirty_water_and_rain_in_target: true
      })).toEqual(0);
    });

  });

  describe('Mission 18', function () {

    /**
     * 2017.08.29, M18 – FAUCET
     * > Make the water level obviously more blue than white as seen from above the cup, *only by turning the Faucet handle.
     * > 25 Points
     */
    it('Scores 25 point to make the water blue', function () {
      expect(scorer.getScore({
        m18_water_obviously_blue: true
      })).toEqual(25);
    });

  });

  describe('Penalties', function () {

    /**
     * 2017.08.29, PENALTIES
     * > You can get up to six such penalties, worth
     * > -5 Points EACH
     */
    it('Costs 5 points per penalty', function () {
      expect(scorer.getScore({
        penalties: 1
      })).toEqual(-5);

      expect(scorer.getScore({
        penalties: 2
      })).toEqual(-5 * 2);

      expect(scorer.getScore({
        penalties: 6
      })).toEqual(-5 * 6);
    });

    /**
     * 2017.08.29, PENALTIES
     * > You can get up to six such penalties
     */
    it('Cannot be more than 6 penalties', function () {
      expect(scorer.getWarnings({
        penalties: 7
      }).indexOf(scorer.warnings.too_many_penalties) !== -1).toEqual(true);
    });

  });

});
