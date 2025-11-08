import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2025 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/2025-26-season/challenge-resources
 */
describe('Robot Game 2025 specifications', function () {

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
     * M04 Careful Recovery
     * > Both support structures are standing: 10
     * M16 Precision
     * > number remaining: 6: 50
     */
    it('Should score 60 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(10 + 50);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });

  describe('Mission 00', function () {
    it('If your robot and all equipment fit completely in one launch area and under a height limit [...]: 20', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
      })).toEqual(20);
    });
  });

  describe('Mission 01', function () {
    it('Soil deposits are completely cleared touching the mat: 10 EACH', function () {
      expect(scorer.getScore({
        m01_deposits: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m01_deposits: 2,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m01_deposits: 2,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m01_deposits: 3,
      }).indexOf(scorer.warnings.m01_max_two_deposits)).not.toEqual(-1);
    });

    it('Archaeologist’s brush is not touching the dig site: 10', function () {
      expect(scorer.getScore({
        m01_brush: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m01_deposits: 2,
        m01_brush: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m01_deposits: 2,
        m01_brush: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 02', function () {
    it('Topsoil sections are completely cleared: 10 EACH', function () {
      expect(scorer.getScore({
        m02_sections: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m02_sections: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m02_sections: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m02_sections: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m02_sections: 4,
      }).indexOf(scorer.warnings.m02_max_three_sections)).not.toEqual(-1);
    });
  });

  describe('Mission 03', function () {
    it('Your team’s minecart is on the opposing team’s field: 30', function () {
      expect(scorer.getScore({
        m03_minecart: true,
      })).toEqual(30);
    });

    it('Bonus: and the opposing team’s minecart is on your team’s field: 10 ADDED', function () {
      expect(scorer.getScore({
        m03_minecart: true,
        m03_bonus: true,
      })).toEqual(30 + 10);
      expect(scorer.getWarnings({
        m03_minecart: true,
        m03_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m03_minecart: false,
        m03_bonus: true,
      }).indexOf(scorer.warnings.m03_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 04', function () {
    it('Precious artifact is not touching the mine: 30', function () {
      expect(scorer.getScore({
        m04_artifact: true,
      })).toEqual(30);
    });

    it('Both support structures are standing: 10', function () {
      expect(scorer.getScore({
        m04_both_standing: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m04_artifact: true,
        m04_both_standing: true,
      })).toEqual(30 + 10);
      expect(scorer.getWarnings({
        m04_artifact: true,
        m04_both_standing: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 05', function () {
    it('Structure floor is completely upright: 30', function () {
      expect(scorer.getScore({
        m05_floor_upright: true,
      })).toEqual(30);
    });
  });

  describe('Mission 06', function () {
    it('Ore blocks are not touching the forge: 10 EACH', function () {
      expect(scorer.getScore({
        m06_blocks: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m06_blocks: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m06_blocks: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m06_blocks: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m06_blocks: 4,
      }).indexOf(scorer.warnings.m06_max_three_blocks)).not.toEqual(-1);
    });
  });

  describe('Mission 07', function () {
    it('Millstone is no longer touching its base: 30', function () {
      expect(scorer.getScore({
        m07_millstone: true,
      })).toEqual(30);
    });
  });

  describe('Mission 08', function () {
    it('Preserved pieces are outside the silo: 10 EACH', function () {
      expect(scorer.getScore({
        m08_preserved_pieces: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m08_preserved_pieces: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m08_preserved_pieces: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m08_preserved_pieces: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m08_preserved_pieces: 4,
      }).indexOf(scorer.warnings.m08_max_three_pieces)).not.toEqual(-1);
    });
  });

  describe('Mission 09', function () {
    it('Roof is completely raised: 20', function () {
      expect(scorer.getScore({
        m09_roof_raised: true,
      })).toEqual(20);
    });

    it('Market wares are raised: 10', function () {
      expect(scorer.getScore({
        m09_wares_raised: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m09_roof_raised: true,
        m09_wares_raised: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m09_roof_raised: true,
        m09_wares_raised: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 10', function () {
    it('Scale is tipped and touching the mat: 20', function () {
      expect(scorer.getScore({
        m10_scale_tipped: true,
      })).toEqual(20);
    });

    it('Scale pan is completely removed: 10', function () {
      expect(scorer.getScore({
        m10_pan_removed: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m10_scale_tipped: true,
        m10_pan_removed: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m10_scale_tipped: true,
        m10_pan_removed: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 11', function () {
    it('Artifacts are raised above the ground layer: 20', function () {
      expect(scorer.getScore({
        m11_artifacts_raised: true,
      })).toEqual(20);
    });

    it('Bonus: and the crane flag is at least partly lowered: 10 ADDED', function () {
      expect(scorer.getScore({
        m11_artifacts_raised: true,
        m11_bonus: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m11_artifacts_raised: true,
        m11_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m11_artifacts_raised: false,
        m11_bonus: true,
      }).indexOf(scorer.warnings.m11_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 12', function () {
    it('Sand is completely cleared: 20', function () {
      expect(scorer.getScore({
        m12_sand_cleared: true,
      })).toEqual(20);
    });

    it('Ship is completely raised: 10', function () {
      expect(scorer.getScore({
        m12_ship_raised: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m12_sand_cleared: true,
        m12_ship_raised: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m12_sand_cleared: true,
        m12_ship_raised: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 13', function () {
    it('Statue is completely raised: 30', function () {
      expect(scorer.getScore({
        m13_statue_raised: true,
      })).toEqual(30);
    });
  });

  describe('Mission 14', function () {
    it('Artifacts touching the mat and at least partly in the forum: 5 EACH', function () {
      expect(scorer.getScore({
        m14_artifacts: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m14_artifacts: 2,
      })).toEqual(10);
      expect(scorer.getScore({
        m14_artifacts: 3,
      })).toEqual(15);
      expect(scorer.getWarnings({
        m14_artifacts: 3,
      })).toHaveSize(0);
      expect(scorer.getScore({
        m14_artifacts: 7,
      })).toEqual(35);
      expect(scorer.getWarnings({
        m14_artifacts: 7,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m14_artifacts: 8,
      }).indexOf(scorer.warnings.m14_max_seven_artifacts)).not.toEqual(-1);
    });
  });

  describe('Mission 15', function () {
    it('Sites with a flag at least partly inside and touching the mat: 10 EACH', function () {
      expect(scorer.getScore({
        m15_sites_with_flag: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m15_sites_with_flag: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m15_sites_with_flag: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m15_sites_with_flag: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m15_sites_with_flag: 4,
      }).indexOf(scorer.warnings.m15_max_three_flags)).not.toEqual(-1);
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
