import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2023 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/2023-24-season/season-documents
 */
describe('Robot Game 2023 specifications', function () {

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
     * M16 Precision
     * > number remaining: 6: 50
     */
    it('Should score 50 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(50);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });

  describe('Mission 00', function () {
    it('If your robot and all your equipment fit completely in one launch area [...]: 20', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
      })).toEqual(20);
    });
  });

  describe('Mission 01', function () {
    it('If the 3D cinema’s small red beam is completely to the right of the black frame: 20', function () {
      expect(scorer.getScore({
        m01_right: true,
      })).toEqual(20);
    });
  });

  describe('Mission 02', function () {
    it('If your theater’s red flag is down and the active scene color is: Blue: 10 Pink: 20 Orange: 30', function () {
      expect(scorer.getScore({
        m02_color: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m02_color: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m02_color: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m02_color: 4,
      }).indexOf(scorer.warnings.m02_invalid_color)).not.toEqual(-1);
    });

    it('Bonus: And if both teams’ active scenes match: Blue: 20 ADDED Pink: 30 ADDED Orange: 10 ADDED', function () {
      expect(scorer.getScore({
        m02_color: 1,
        m02_bonus: true,
      })).toEqual(10 + 20);
      expect(scorer.getScore({
        m02_color: 2,
        m02_bonus: true,
      })).toEqual(20 + 30);
      expect(scorer.getScore({
        m02_color: 3,
        m02_bonus: true,
      })).toEqual(30 + 10);
      expect(scorer.getWarnings({
        m02_color: 3,
        m02_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m02_color: 0,
        m02_bonus: true,
      }).indexOf(scorer.warnings.m02_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 03', function () {
    it('If the three immersive experience screens are raised: 20', function () {
      expect(scorer.getScore({
        m03_raised: true,
      })).toEqual(20);
    });
  });

  describe('Mission 04', function () {
    it('If your team’s LEGO art piece is at least partly in the museum target area: 10', function () {
      expect(scorer.getScore({
        m04_area: true,
      })).toEqual(10);
    });

    it('Bonus: And if the art piece is completely supported by the pedestal: 20 ADDED', function () {
      expect(scorer.getScore({
        m04_area: true,
        m04_bonus: true,
      })).toEqual(10 + 20);
      expect(scorer.getWarnings({
        m04_area: true,
        m04_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m04_area: false,
        m04_bonus: true,
      }).indexOf(scorer.warnings.m04_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 05', function () {
    it('If the augmented reality statue’s orange lever is rotated completely to the right: 30', function () {
      expect(scorer.getScore({
        m05_rotated: true,
      })).toEqual(30);
    });
  });

  describe('Mission 06', function () {
    it('If the lights’ orange lever is rotated completely downwards: 10', function () {
      expect(scorer.getScore({
        m06_lights: true,
      })).toEqual(10);
    });

    it('If the speakers’ orange lever is rotated completely to the left: 10', function () {
      expect(scorer.getScore({
        m06_speakers: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m06_lights: true,
        m06_speakers: true,
      })).toEqual(10 + 10);
      expect(scorer.getWarnings({
        m06_lights: true,
        m06_speakers: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 07', function () {
    it('If the hologram performer’s orange push activator is completely past the black stage set line: 20', function () {
      expect(scorer.getScore({
        m07_activated: true,
      })).toEqual(20);
    });
  });

  describe('Mission 08', function () {
    it('If the rolling camera’s white pointer is: (1): 10, (2): 20, (3): 30', function () {
      expect(scorer.getScore({
        m08_pointer: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m08_pointer: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m08_pointer: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m08_pointer: 4,
      }).indexOf(scorer.warnings.m08_invalid_pointer)).not.toEqual(-1);
    });
  });

  describe('Mission 09', function () {
    it('If the boat is touching the mat and is completely past the black scene line: 10', function () {
      expect(scorer.getScore({
        m09_boat: true,
      })).toEqual(10);
    });

    it('If the camera is touching the mat and is at least partly in the camera target area: 10', function () {
      expect(scorer.getScore({
        m09_camera: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m09_boat: true,
        m09_camera: true,
      })).toEqual(10 + 10);
      expect(scorer.getWarnings({
        m09_boat: true,
        m09_camera: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 10', function () {
    it('If a sound mixer slider is raised: 10 EACH', function () {
      expect(scorer.getScore({
        m10_sliders: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m10_sliders: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m10_sliders: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m10_sliders: 4,
      }).indexOf(scorer.warnings.m10_max_three_sliders)).not.toEqual(-1);
    });
  });

  describe('Mission 11', function () {
    it('If the light show’s white pointer is within zone: Yellow: 10 Green: 20 Blue: 30', function () {
      expect(scorer.getScore({
        m11_zone: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m11_zone: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m11_zone: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m11_zone: 4,
      }).indexOf(scorer.warnings.m11_invalid_zone)).not.toEqual(-1);
    });
  });

  describe('Mission 12', function () {
    it('If the chicken is intact and has moved from its starting position: 10', function () {
      expect(scorer.getScore({
        m12_moved: true,
      })).toEqual(10);
    });

    it('Bonus: And if the art piece is completely supported by the pedestal: 20 ADDED', function () {
      expect(scorer.getScore({
        m12_moved: true,
        m12_bonus: true,
      })).toEqual(10 + 20);
      expect(scorer.getWarnings({
        m12_moved: true,
        m12_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m12_moved: false,
        m12_bonus: true,
      }).indexOf(scorer.warnings.m12_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 13', function () {
    it('If the craft machine’s orange and white lid is completely open: 10', function () {
      expect(scorer.getScore({
        m13_lid: true,
      })).toEqual(10);
    });

    it('If the craft machine’s light pink latch is pointing straight down: 20', function () {
      expect(scorer.getScore({
        m13_latch: true,
      })).toEqual(20);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m13_lid: true,
        m13_latch: true,
      })).toEqual(10 + 20);
      expect(scorer.getWarnings({
        m13_lid: true,
        m13_latch: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 14', function () {
    it('If an audience member is completely in a target destination: 5 EACH MEMBER', function () {
      expect(scorer.getScore({
        m14_members: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m14_members: 3,
      })).toEqual(15);
      expect(scorer.getScore({
        m14_members: 5,
      })).toEqual(25);
      expect(scorer.getScore({
        m14_members: 7,
      })).toEqual(35);
      expect(scorer.getWarnings({
        m14_members: 8,
      }).indexOf(scorer.warnings.m14_max_seven_members)).not.toEqual(-1);
    });

    it('If a target destination has at least one audience member completely in: 5 EACH DESTINATION', function () {
      expect(scorer.getScore({
        m14_destinations: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m14_destinations: 3,
      })).toEqual(15);
      expect(scorer.getScore({
        m14_destinations: 5,
      })).toEqual(25);
      expect(scorer.getWarnings({
        m14_destinations: 8,
      }).indexOf(scorer.warnings.m14_max_seven_destinations)).not.toEqual(-1);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m14_members: 5,
        m14_destinations: 5,
      })).toEqual(50);
      expect(scorer.getWarnings({
        m14_members: 5,
        m14_destinations: 5,
      })).toHaveSize(0);
    });
  });

  describe('Mission 15', function () {
    it('If the following experts are at least partly in their target destinations: 10 EACH', function () {
      expect(scorer.getScore({
        m15_experts: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m15_experts: 3,
      })).toEqual(30);
      expect(scorer.getScore({
        m15_experts: 5,
      })).toEqual(50);
      expect(scorer.getWarnings({
        m15_experts: 6,
      }).indexOf(scorer.warnings.m15_max_five_experts)).not.toEqual(-1);
    });
  });

  describe('Mission 16', function () {
    it('If the number remaining is: 1: 10, 2: 15, 3: 25, 4: 35, 5: 50, 6: 50', function () {
      expect(scorer.getScore({
        m16_precision_tokens: 6
      })).toEqual(50);

      expect(scorer.getScore({
        m16_precision_tokens: 5
      })).toEqual(50);

      expect(scorer.getScore({
        m16_precision_tokens: 4
      })).toEqual(35);

      expect(scorer.getScore({
        m16_precision_tokens: 3
      })).toEqual(25);

      expect(scorer.getScore({
        m16_precision_tokens: 2
      })).toEqual(15);

      expect(scorer.getScore({
        m16_precision_tokens: 1
      })).toEqual(10);
    });
  });
});
