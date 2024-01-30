/*
 * FLL Robot Game Scorer 2016
 * @author Clark Winkelmann <clark.winkelmann@gmail.com>
 * @license MIT
 */

import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2016 specifications test suite, based on the official scoring guide
 * @see http://www.first-lego-league.org/en/fll/robot-game/missions.html
 * @see http://www.firstlegoleague.org/sites/default/files/animal-allies/animal-allies-challenge-document.pdf
 */
describe('Robot Game 2016 specifications', function() {

  describe('Scorer initial state', function() {

    /**
     * The scorer script should only take into account what is given in
     * the missions state argument
     */
    it('Should score no points if nothing is given', function()
    {
      expect(scorer.getScore({})).toEqual(0);
    });

    /**
     * This year we are lucky as the initial state of the game scores 0 points
     */
    it('Should score no points for initial state', function()
    {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(0);
    });

    it('Should be no warnings with initial state', function()
    {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });

  });

  describe('Mission 01', function() {

    /**
     * 2016.08.30, M01. SHARK-TRANSPORT
     * > OPTION 1: Tank and shark are completely in target 1.
     * > Points: 7
     */
    it('Scores 7 points for option 1', function()
    {
      expect(scorer.getScore({
        m01_tank_and_shark_in_target1: true
      })).toEqual(7);
    });

    /**
     * 2016.08.30, M01. SHARK-TRANSPORT
     * > OPTION 2: Tank and shark are completely in target 2.
     * > Points: 10
     */
    it('Scores 10 points for option 2', function()
    {
      expect(scorer.getScore({
        m01_tank_and_shark_in_target2: true
      })).toEqual(10);
    });

    /**
     * 2016.08.30, M01. SHARK-TRANSPORT
     * > BONUS: Added only if a target score is earned - shark is touching only the tank floor and no wall.
     * > Points: 20
     */
    it('Scores 20 points for bonus', function()
    {
      expect(scorer.getScore({
        m01_tank_and_shark_in_target1: true,
        m01_shark_not_touching_wall: true
      })).toEqual(7 + 20);

      expect(scorer.getScore({
        m01_tank_and_shark_in_target2: true,
        m01_shark_not_touching_wall: true
      })).toEqual(10 + 20);
    });

    /**
     * 2016.08.30, M01. SHARK-TRANSPORT
     * > BONUS: Added only if a target score is earned - [...]
     */
    it('Cannot score bonus alone', function()
    {
      expect(scorer.getWarnings({
        m01_shark_not_touching_wall: true
      }).indexOf(scorer.warnings.m01_cannot_score_bonus_alone) !== -1).toEqual(true);
    });

    /**
     * 2016.08.30, M01. SHARK-TRANSPORT
     * > OPTION 1: Tank and shark are completely in target 1
     * and
     * > OPTION 2: Tank and shark are completely in target 2
     *
     * Given the tank and shark must be COMPLETELY in a target to score,
     * both options cannot score at once
     */
    it('Cannot score both options', function()
    {
      expect(scorer.getWarnings({
        m01_tank_and_shark_in_target1: true,
        m01_tank_and_shark_in_target2: true
      }).indexOf(scorer.warnings.m01_cannot_score_both_options) !== -1).toEqual(true);
    });

  });

  describe('Mission 02', function() {

    /**
     * 2016.08.30, M02. SERVICE DOG
     * > The warning fence is down.
     * > Points: 15
     */
    it('Scores 15 points to lower the fence', function()
    {
      expect(scorer.getScore({
        m02_fence_is_down: true
      })).toEqual(15);
    });

  });

  describe('Mission 03', function() {

    /**
     * 2016.08.30, M03. ANIMAL CONSERVATION
     * > Two identical animals are completely on the same side.
     * > Points: 20 per pair
     */
    it('Scores 20 points per pair of animals', function()
    {
      expect(scorer.getScore({
        m03_pairs_of_animals: 1
      })).toEqual(20);

      expect(scorer.getScore({
        m03_pairs_of_animals: 2
      })).toEqual(20 * 2);

      /**
       * MISSING: test for max
       */
    });

  });

  describe('Mission 04', function() {

    /**
     * 2016.08.30, M04. FEEDING
     * > A piece of food is completely in a target area.
     * > Points: 10 per piece
     */
    it('Scores 10 points per piece', function()
    {
      expect(scorer.getScore({
        m04_pieces_of_food: 1
      })).toEqual(10);

      expect(scorer.getScore({
        m04_pieces_of_food: 2
      })).toEqual(10 * 2);

      /**
       * MISSING: test for max
       */
    });

  });

  describe('Mission 05', function() {

    /**
     * 2016.08.30, M05. BIOMIMICRY
     * > OPTION 1: The biomimicry wall completely supports all the weight of the white gecko.
     * > Points: 15
     */
    it('Scores 15 points for the white gecko', function()
    {
      expect(scorer.getScore({
        m05_white_gecko_on_wall: true
      })).toEqual(15);
    });

    /**
     * 2016.08.30, M05. BIOMIMICRY
     * > OPTION 2: The biomimicry wall completely supports all the weight of the robot.
     * > Points: 32
     */
    it('Scores 32 points for the robot', function()
    {
      expect(scorer.getScore({
        m05_robot_on_wall: true
      })).toEqual(32);
    });

  });

  describe('Mission 06', function() {

    /**
     * 2016.08.30, M06. MILKING AUTOMATION
     * > OPTION 1: milk and manure have all rolled out.
     * > Points: 15
     */
    it('Scores 15 points for milk and manure', function()
    {
      expect(scorer.getScore({
        m06_milk_and_manure_out: true
      })).toEqual(15);
    });

    /**
     * 2016.08.30, M06. MILKING AUTOMATION
     * > OPTION 2: milk has all rolled out, but not manure.
     * > Points: 20
     */
    it('Scores 20 points for milk alone', function()
    {
      expect(scorer.getScore({
        m06_milk_only_out: true
      })).toEqual(20);
    });

    /**
     * 2016.08.30, PDF
     * "OR"
     *
     * The "OR" is not present in the HANDS-on documentation, but it is in
     * the official PDF
     */
    it('Cannot score both', function()
    {
      expect(scorer.getWarnings({
        m06_milk_and_manure_out: true,
        m06_milk_only_out: true
      }).indexOf(scorer.warnings.m06_cannot_score_both_options) !== -1).toEqual(true);
    });

  });

  describe('Mission 07', function() {

    /**
     * 2016.08.30, M07. PANDA RELEASE
     * > The slider looks fully open clockwise.
     * > Points: 10
     */
    it('Scores 10 points to open the slider', function()
    {
      expect(scorer.getScore({
        m07_slider_open: true
      })).toEqual(10);
    });

  });

  describe('Mission 08', function() {

    /**
     * 2016.08.30, M08. CAMERA RECOVERY
     * > End of the match: The camera is completely in base.
     * > Points: 15
     */
    it('Scores 15 points to bring camera in base', function()
    {
      expect(scorer.getScore({
        m08_camera_in_base: true
      })).toEqual(15);
    });

  });

  describe('Mission 09', function() {

    /**
     * 2016.08.30, M09. TRAINING AND RESEARCH
     * > OPTION 1: The dog & trainer are completely in the training & research area.
     * > Points: 12
     */
    it('Scores 12 points for the dog and trainer', function()
    {
      expect(scorer.getScore({
        m09_dog_and_trainer_in_area: true
      })).toEqual(12);
    });

    /**
     * 2016.08.30, M09. TRAINING AND RESEARCH
     * > OPTION 2: The zoologist is completely in the training & research area.
     * > Points: 15
     */
    it('Scores 15 points for the zoologist', function()
    {
      expect(scorer.getScore({
        m09_zoologist_in_area: true
      })).toEqual(15);
    });

    /**
     * 2016.11.04, M09. TRAINING AND RESEARCH
     * > OPTION 3: The manure samples are completely in the training & research area.
     * > Points: 5 per piece
     */
    it('Scores 5 points per manure sample', function()
    {
      expect(scorer.getScore({
        m09_pieces_of_manure_in_area: 1
      })).toEqual(5);

      expect(scorer.getScore({
        m09_pieces_of_manure_in_area: 2
      })).toEqual(5 * 2);

      /**
       * MISSING: test for max
       */
    });

  });

  describe('Mission 10', function() {

    /**
     * 2016.08.30, M10. BEE KEEPING
     * > OPTION 1: The bee is on the beehive and there is no honey in the beehive.
     * > Points: 12
     */
    it('Scores 12 points to place the bee', function()
    {
      expect(scorer.getScore({
        m10_bee_on_beehive: true
      })).toEqual(12);
    });

    /**
     * 2016.08.30, M10. BEE KEEPING
     * > OPTION 2: The bee is on the beehive and the honey is completely in base.
     * > Points: 15
     */
    it('Scores 15 points to place the bee and bring the honey', function()
    {
      expect(scorer.getScore({
        m10_bee_on_beehive_and_honey_in_base: true
      })).toEqual(15);
    });

    /**
     * 2016.08.30, M10. BEE KEEPING
     * > Constraints & Evaluation
     * > Only one option counts.
     */
    it('Cannot score both', function()
    {
      expect(scorer.getWarnings({
        m10_bee_on_beehive: true,
        m10_bee_on_beehive_and_honey_in_base: true
      }).indexOf(scorer.warnings.m10_cannot_score_both_options) !== -1).toEqual(true);
    });

  });

  describe('Mission 11', function() {

    /**
     * 2016.08.30, M11. PROSTHESIS
     * > OPTION 1: The prosthesis is fitted to the pet AND not held by the ref.
     * > Points: 9
     */
    it('Scores 9 points to fit prosthesis', function()
    {
      expect(scorer.getScore({
        m11_prosthesis_fitted: true
      })).toEqual(9);
    });

    /**
     * 2016.08.30, M11. PROSTHESIS
     * > OPTION 2: The prosthesis is fitted to the pet AND the pet is completely in its farm target
     * > Points: 15
     */
    it('Scores 15 points to fit prosthesis and place in farm', function()
    {
      expect(scorer.getScore({
        m11_prosthesis_fitted_and_in_farm: true
      })).toEqual(15);
    });

    /**
     * 2016.08.30, M11. PROSTHESIS
     * > Constraints & Evaluation
     * > Only one option counts.
     */
    it('Cannot score both', function()
    {
      expect(scorer.getWarnings({
        m11_prosthesis_fitted: true,
        m11_prosthesis_fitted_and_in_farm: true
      }).indexOf(scorer.warnings.m11_cannot_score_both_options) !== -1).toEqual(true);
    });

  });

  describe('Mission 12', function() {

    /**
     * 2016.08.30, M12. SEAL
     * > The seal is completely in base and not broken.
     * > Points: 1
     */
    it('Scores 1 point to bring seal in base', function()
    {
      expect(scorer.getScore({
        m12_seal_in_base: true
      })).toEqual(1);
    });

  });

  describe('Mission 13', function() {

    /**
     * 2016.08.30, M13. MILK IN BASE
     * > All 3 milk container are completely in base.
     * > Points: 1
     */
    it('Scores 1 point to bring milk in base', function()
    {
      expect(scorer.getScore({
        m13_milk_in_base: true
      })).toEqual(1);
    });

  });

  describe('Mission 14', function() {

    /**
     * 2016.08.30, M14. MILK ON THE RAMP
     * > OPTION 1: All 3 milk container are completely supported by the ramp.
     * > Points: 2
     */
    it('Scores 2 points to put milk on the ramp', function()
    {
      expect(scorer.getScore({
        m14_milk_on_ramp: true
      })).toEqual(2);
    });

    /**
     * 2016.08.30, M14. MILK ON THE RAMP
     * > OPTION 2: All 3 milk container are completely supported by the ramp.
     * > AND They’re the only things supported by the ramp. They’re the only things touching the ramp.
     * > Points: 3
     */
    it('Scores 3 points to put milk on the ramp and only thing', function()
    {
      expect(scorer.getScore({
        m14_milk_on_ramp_alone: true
      })).toEqual(3);
    });

    /**
     * 2016.08.30, M14. MILK ON THE RAMP
     * > OPTION 3: All 3 milk container are completely supported by the ramp.
     * > AND They’re the only things supported by the ramp. They’re the only things touching the ramp. They’re all standing.
     * > Points: 4
     */
    it('Scores 4 points to put milk on the ramp', function()
    {
      expect(scorer.getScore({
        m14_milk_on_ramp_alone_and_standing: true
      })).toEqual(4);
    });

    /**
     * MISSING: It is said in neither documentation whether the 3 options are mutually exclusive or not
     */

  });

  describe('Mission 15', function() {

    /**
     * 2016.11.04, M15. MANURE
     * > All 7 manure samples are in the trainings area.
     * > Points: 5 added to mission M09
     */
    it('Scores 5 point to have all samples in area', function()
    {
      expect(scorer.getScore({
        m15_all_samples_in_area: true
      })).toEqual(5);
    });

  });

  describe('Penalties', function() {

    /**
     * 2016.08.30, PENALTIES
     * > Penalty Points: - 6 per piece
     */
    it('Costs 6 points per penalty', function()
    {
      expect(scorer.getScore({
        penalties: 1
      })).toEqual(-6);

      expect(scorer.getScore({
        penalties: 2
      })).toEqual(-6 * 2);
    });

    /**
     * 2016.08.30, PENALTIES
     * > You can get up to five penalties.
     */
    it('Cannot be more than 5 penalties', function()
    {
      expect(scorer.getWarnings({
        penalties: 6
      }).indexOf(scorer.warnings.too_many_penalties) !== -1).toEqual(true);
    });

  });

});
