import {AbstractScorer, MissionObject} from "../interfaces/ChallengeYear";

enum Warnings2016 {
  m01_cannot_score_bonus_alone,
  m01_cannot_score_both_options,
  m06_cannot_score_both_options,
  m10_cannot_score_both_options,
  m11_cannot_score_both_options,
  too_many_penalties,
}

interface MissionObject2016 extends MissionObject {
  m01_tank_and_shark_in_target1?: boolean,
  m01_tank_and_shark_in_target2?: boolean,
  m01_shark_not_touching_wall?: boolean,
  m02_fence_is_down?: boolean,
  m03_pairs_of_animals?: number,
  m04_pieces_of_food?: number,
  m05_white_gecko_on_wall?: boolean,
  m05_robot_on_wall?: boolean,
  m06_milk_and_manure_out?: boolean,
  m06_milk_only_out?: boolean,
  m07_slider_open?: boolean,
  m08_camera_in_base?: boolean,
  m09_dog_and_trainer_in_area?: boolean,
  m09_zoologist_in_area?: boolean,
  m09_pieces_of_manure_in_area?: number,
  m10_bee_on_beehive?: boolean,
  m10_bee_on_beehive_and_honey_in_base?: boolean,
  m11_prosthesis_fitted?: boolean,
  m11_prosthesis_fitted_and_in_farm?: boolean,
  m12_seal_in_base?: boolean,
  m13_milk_in_base?: boolean,
  m14_milk_on_ramp?: boolean,
  m14_milk_on_ramp_alone?: boolean,
  m14_milk_on_ramp_alone_and_standing?: boolean,
  m15_all_samples_in_area?: boolean,
  penalties?: number,
}

export class FllScorer extends AbstractScorer<MissionObject2016, Warnings2016> {
  public warnings = Warnings2016;

  public initialMissionsState(): MissionObject2016 {
    return {
      m01_tank_and_shark_in_target1: false,
      m01_tank_and_shark_in_target2: false,
      m01_shark_not_touching_wall: false,
      m02_fence_is_down: false,
      m03_pairs_of_animals: 0,
      m04_pieces_of_food: 0,
      m05_white_gecko_on_wall: false,
      m05_robot_on_wall: false,
      m06_milk_and_manure_out: false,
      m06_milk_only_out: false,
      m07_slider_open: false,
      m08_camera_in_base: false,
      m09_dog_and_trainer_in_area: false,
      m09_zoologist_in_area: false,
      m09_pieces_of_manure_in_area: 0,
      m10_bee_on_beehive: false,
      m10_bee_on_beehive_and_honey_in_base: false,
      m11_prosthesis_fitted: false,
      m11_prosthesis_fitted_and_in_farm: false,
      m12_seal_in_base: false,
      m13_milk_in_base: false,
      m14_milk_on_ramp: false,
      m14_milk_on_ramp_alone: false,
      m14_milk_on_ramp_alone_and_standing: false,
      m15_all_samples_in_area: false,
      penalties: 0,
    };
  }

  /**
   * Score calculator for the 2016 missions
   * Not intended to be used directly. See `getScore` and `getWarnings` instead
   * @param {Object} missions Associative array of the missions states
   * @returns {Object} Key-value output including `score` and `warnings`
   */
  public computeMissions(missions: MissionObject2016) {
    let score = 0;
    let warnings = [];

    /*
        |
        | Mission 01
        |
        */

    const m01_target1 = missions.hasOwnProperty('m01_tank_and_shark_in_target1') && missions.m01_tank_and_shark_in_target1;
    const m01_target2 = missions.hasOwnProperty('m01_tank_and_shark_in_target2') && missions.m01_tank_and_shark_in_target2;

    if (m01_target1) {
      /**
       * 2016.08.30, M01. SHARK-TRANSPORT
       * > OPTION 1: Tank and shark are completely in target 1.
       * > Points: 7
       */
      score += 7;
    }

    if (m01_target2) {
      /**
       * 2016.08.30, M01. SHARK-TRANSPORT
       * > OPTION 2: Tank and shark are completely in target 2.
       * > Points: 10
       */
      score += 10;
    }

    if (missions.hasOwnProperty('m01_shark_not_touching_wall') && missions.m01_shark_not_touching_wall) {
      /**
       * 2016.08.30, M01. SHARK-TRANSPORT
       * > BONUS: Added only if a target score is earned - shark is touching only the tank floor and no wall.
       * > Points: 20
       */
      if (m01_target1 || m01_target2) {
        score += 20;
      } else {
        warnings.push(Warnings2016.m01_cannot_score_bonus_alone);
      }
    }

    if (m01_target1 && m01_target2) {
      /**
       * 2016.08.30, M01. SHARK-TRANSPORT
       * > OPTION 1: Tank and shark are completely in target 1
       * and
       * > OPTION 2: Tank and shark are completely in target 2
       *
       * Given the tank and shark must be COMPLETELY in a target to score,
       * both options cannot score at once
       */
      warnings.push(Warnings2016.m01_cannot_score_both_options);
    }

    /*
        |
        | Mission 02
        |
        */

    if (missions.hasOwnProperty('m02_fence_is_down')) {
      /**
       * 2016.08.30, M02. SERVICE DOG
       * > The warning fence is down.
       * > Points: 15
       */
      score += missions.m02_fence_is_down ? 15 : 0;
    }

    /*
        |
        | Mission 03
        |
        */

    if (missions.hasOwnProperty('m03_pairs_of_animals')) {
      /**
       * 2016.08.30, M03. ANIMAL CONSERVATION
       * > Two identical animals are completely on the same side.
       * > Points: 20 per pair
       */
      score += missions.m03_pairs_of_animals * 20;
    }

    /*
        |
        | Mission 04
        |
        */

    if (missions.hasOwnProperty('m04_pieces_of_food')) {
      /**
       * 2016.08.30, M04. FEEDING
       * > A piece of food is completely in a target area.
       * > Points: 10 per piece
       */
      score += missions.m04_pieces_of_food * 10;
    }

    /*
        |
        | Mission 05
        |
        */

    if (missions.hasOwnProperty('m05_white_gecko_on_wall')) {
      /**
       * 2016.08.30, M05. BIOMIMICRY
       * > OPTION 1: The biomimicry wall completely supports all the weight of the white gecko.
       * > Points: 15
       */
      score += missions.m05_white_gecko_on_wall ? 15 : 0;
    }

    if (missions.hasOwnProperty('m05_robot_on_wall')) {
      /**
       * 2016.08.30, M05. BIOMIMICRY
       * > OPTION 2: The biomimicry wall completely supports all the weight of the robot.
       * > Points: 32
       */
      score += missions.m05_robot_on_wall ? 32 : 0;
    }

    /*
        |
        | Mission 06
        |
        */

    const m06_option1 = missions.hasOwnProperty('m06_milk_and_manure_out') && missions.m06_milk_and_manure_out;
    const m06_option2 = missions.hasOwnProperty('m06_milk_only_out') && missions.m06_milk_only_out;

    if (m06_option1) {
      /**
       * 2016.08.30, M06. MILKING AUTOMATION
       * > OPTION 1: milk and manure have all rolled out.
       * > Points: 15
       */
      score += 15;
    }

    if (m06_option2) {
      /**
       * 2016.08.30, M06. MILKING AUTOMATION
       * > OPTION 2: milk has all rolled out, but not manure.
       * > Points: 20
       */
      score += 20;
    }

    if (m06_option1 && m06_option2) {
      /**
       * 2016.08.30, PDF
       * "OR"
       *
       * The "OR" is not present in the HANDS-on documentation, but it is in
       * the official PDF
       */
      warnings.push(Warnings2016.m06_cannot_score_both_options);
    }

    /*
        |
        | Mission 07
        |
        */

    if (missions.hasOwnProperty('m07_slider_open')) {
      /**
       * 2016.08.30, M07. PANDA RELEASE
       * > The slider looks fully open clockwise.
       * > Points: 10
       */
      score += missions.m07_slider_open ? 10 : 0;
    }

    /*
        |
        | Mission 08
        |
        */

    if (missions.hasOwnProperty('m08_camera_in_base')) {
      /**
       * 2016.08.30, M08. CAMERA RECOVERY
       * > End of the match: The camera is completely in base.
       * > Points: 15
       */
      score += missions.m08_camera_in_base ? 15 : 0;
    }

    /*
        |
        | Mission 09
        |
        */

    if (missions.hasOwnProperty('m09_dog_and_trainer_in_area')) {
      /**
       * 2016.08.30, M09. TRAINING AND RESEARCH
       * > OPTION 1: The dog & trainer are completely in the training & research area.
       * > Points: 12
       */
      score += missions.m09_dog_and_trainer_in_area ? 12 : 0;
    }

    if (missions.hasOwnProperty('m09_zoologist_in_area')) {
      /**
       * 2016.08.30, M09. TRAINING AND RESEARCH
       * > OPTION 2: The zoologist is completely in the training & research area.
       * > Points: 15
       */
      score += missions.m09_zoologist_in_area ? 15 : 0;
    }

    if (missions.hasOwnProperty('m09_pieces_of_manure_in_area')) {
      /**
       * 2016.11.04, M09. TRAINING AND RESEARCH
       * > OPTION 3: The manure samples are completely in the training & research area.
       * > Points: 5 per piece
       */
      score += missions.m09_pieces_of_manure_in_area * 5;
    }

    /*
        |
        | Mission 10
        |
        */

    const m10_option1 = missions.hasOwnProperty('m10_bee_on_beehive') && missions.m10_bee_on_beehive;
    const m10_option2 = missions.hasOwnProperty('m10_bee_on_beehive_and_honey_in_base') && missions.m10_bee_on_beehive_and_honey_in_base;

    if (m10_option1) {
      /**
       * 2016.08.30, M10. BEE KEEPING
       * > OPTION 1: The bee is on the beehive and there is no honey in the beehive.
       * > Points: 12
       */
      score += 12;
    }

    if (m10_option2) {
      /**
       * 2016.08.30, M10. BEE KEEPING
       * > OPTION 2: The bee is on the beehive and the honey is completely in base.
       * > Points: 15
       */
      score += 15;
    }

    if (m10_option1 && m10_option2) {
      /**
       * 2016.08.30, M10. BEE KEEPING
       * > Constraints & Evaluation
       * > Only one option counts.
       */
      warnings.push(Warnings2016.m10_cannot_score_both_options);
    }

    /*
        |
        | Mission 11
        |
        */

    const m11_option1 = missions.hasOwnProperty('m11_prosthesis_fitted') && missions.m11_prosthesis_fitted;
    const m11_option2 = missions.hasOwnProperty('m11_prosthesis_fitted_and_in_farm') && missions.m11_prosthesis_fitted_and_in_farm;

    if (m11_option1) {
      /**
       * 2016.08.30, M11. PROSTHESIS
       * > OPTION 1: The prosthesis is fitted to the pet AND not held by the ref.
       * > Points: 9
       */
      score += 9;
    }

    if (m11_option2) {
      /**
       * 2016.08.30, M11. PROSTHESIS
       * > OPTION 2: The prosthesis is fitted to the pet AND the pet is completely in its farm target
       * > Points: 15
       */
      score += 15;
    }

    if (m11_option1 && m11_option2) {
      /**
       * 2016.08.30, M11. PROSTHESIS
       * > Constraints & Evaluation
       * > Only one option counts.
       */
      warnings.push(Warnings2016.m11_cannot_score_both_options);
    }

    /*
        |
        | Mission 12
        |
        */

    if (missions.hasOwnProperty('m12_seal_in_base')) {
      /**
       * 2016.08.30, M12. SEAL
       * > The seal is completely in base and not broken.
       * > Points: 1
       */
      score += missions.m12_seal_in_base ? 1 : 0;
    }

    /*
        |
        | Mission 13
        |
        */

    if (missions.hasOwnProperty('m13_milk_in_base')) {
      /**
       * 2016.08.30, M13. MILK IN BASE
       * > All 3 milk container are completely in base.
       * > Points: 1
       */
      score += missions.m13_milk_in_base ? 1 : 0;
    }

    /*
        |
        | Mission 14
        |
        */

    if (missions.hasOwnProperty('m14_milk_on_ramp')) {
      /**
       * 2016.08.30, M14. MILK ON THE RAMP
       * > OPTION 1: All 3 milk container are completely supported by the ramp.
       * > Points: 2
       */
      score += missions.m14_milk_on_ramp ? 2 : 0;
    }

    if (missions.hasOwnProperty('m14_milk_on_ramp_alone')) {
      /**
       * 2016.08.30, M14. MILK ON THE RAMP
       * > OPTION 2: All 3 milk container are completely supported by the ramp.
       * > AND They’re the only things supported by the ramp. They’re the only things touching the ramp.
       * > Points: 3
       */
      score += missions.m14_milk_on_ramp_alone ? 3 : 0;
    }

    if (missions.hasOwnProperty('m14_milk_on_ramp_alone_and_standing')) {
      /**
       * 2016.08.30, M14. MILK ON THE RAMP
       * > OPTION 3: All 3 milk container are completely supported by the ramp.
       * > AND They’re the only things supported by the ramp. They’re the only things touching the ramp. They’re all standing.
       * > Points: 4
       */
      score += missions.m14_milk_on_ramp_alone_and_standing ? 4 : 0;
    }

    /*
        |
        | Mission 15
        |
        */

    if (missions.hasOwnProperty('m15_all_samples_in_area')) {
      /**
       * 2016.11.04, M15. MANURE
       * > All 7 manure samples are in the trainings area.
       * > Points: 5 added to mission M09
       */
      score += missions.m15_all_samples_in_area ? 5 : 0;
    }

    /*
        |
        | Penalties
        |
        */

    if (missions.hasOwnProperty('penalties')) {
      /**
       * 2016.08.30, PENALTIES
       * > You can get up to five penalties.
       */
      if (missions.penalties > 5) {
        warnings.push(Warnings2016.too_many_penalties);
      }

      /**
       * 2016.08.30, PENALTIES
       * > Penalty Points: - 6 per piece
       */
      score += missions.penalties * -6;
    }

    return {
      score,
      warnings,
    };
  }
}
