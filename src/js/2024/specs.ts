import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2024 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/2024-25-season/challenge-resources/season-documents
 */
describe('Robot Game 2024 specifications', function () {

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
    it('If your robot and all equipment fit completely in one launch area and under a height limit [...]: 20', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
      })).toEqual(20);
    });
  });

  describe('Mission 01', function () {
    it('If the coral tree is hanging on the coral tree support: 20', function () {
      expect(scorer.getScore({
        m01_hanging: true,
      })).toEqual(20);
    });

    it('Bonus: and the bottom of the coral tree is in its holder: 10 ADDED', function () {
      expect(scorer.getScore({
        m01_hanging: true,
        m01_bonus: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m01_hanging: true,
        m01_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m01_hanging: false,
        m01_bonus: true,
      }).indexOf(scorer.warnings.m01_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 02', function () {
    it('If the shark is no longer touching the cave: 20', function () {
      expect(scorer.getScore({
        m02_cave: true,
      })).toEqual(20);
    });

    it('If the shark is touching the mat and is at least partly in the shark habitat: 10', function () {
      expect(scorer.getScore({
        m02_habitat: true,
      })).toEqual(10);
    });
  });

  describe('Mission 03', function () {
    it('If the coral reef is flipped up, not touching the mat: 20', function () {
      expect(scorer.getScore({
        m03_flipped: true,
      })).toEqual(20);
    });

    it('If a reef segment is standing upright, outside of home, and touching the mat: 5 EACH', function () {
      expect(scorer.getScore({
        m03_segments: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m03_segments: 2,
      })).toEqual(10);
      expect(scorer.getScore({
        m03_segments: 3,
      })).toEqual(15);
      expect(scorer.getWarnings({
        m03_segments: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m03_segments: 4,
      }).indexOf(scorer.warnings.m03_max_three_segments)).not.toEqual(-1);
    });
  });

  describe('Mission 04', function () {
    it('If the scuba diver is no longer touching the coral nursery: 20', function () {
      expect(scorer.getScore({
        m04_nursery: true,
      })).toEqual(20);
    });

    it('If the scuba diver is hanging on the coral reef support: 20', function () {
      expect(scorer.getScore({
        m04_hanging: true,
      })).toEqual(20);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m04_nursery: true,
        m04_hanging: true,
      })).toEqual(20 + 20);
      expect(scorer.getWarnings({
        m04_nursery: true,
        m04_hanging: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 05', function () {
    it('If the angler fish is latched within the shipwreck: 30', function () {
      expect(scorer.getScore({
        m05_latched: true,
      })).toEqual(30);
    });
  });

  describe('Mission 06', function () {
    it('If the shipwreck’s mast is completely raised: 30', function () {
      expect(scorer.getScore({
        m06_raised: true,
      })).toEqual(30);
    });
  });

  describe('Mission 07', function () {
    it('If the treasure chest is completely outside the kraken’s nest: 20', function () {
      expect(scorer.getScore({
        m07_outside: true,
      })).toEqual(20);
    });
  });

  describe('Mission 08', function () {
    it('If an artificial habitat stack segment is completely flat and upright: 10 EACH', function () {
      expect(scorer.getScore({
        m08_segments: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m08_segments: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m08_segments: 3,
      })).toEqual(30);
      expect(scorer.getScore({
        m08_segments: 4,
      })).toEqual(40);
      expect(scorer.getWarnings({
        m08_segments: 4,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m08_segments: 5,
      }).indexOf(scorer.warnings.m08_max_four_segments)).not.toEqual(-1);
    });
  });

  describe('Mission 09', function () {
    it('If the unknown creature is released: 20', function () {
      expect(scorer.getScore({
        m09_released: true,
      })).toEqual(20);
    });

    it('If the unknown creature is at least partly in the cold seep: 10', function () {
      expect(scorer.getScore({
        m09_seep: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m09_released: true,
        m09_seep: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m09_released: true,
        m09_seep: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 10', function () {
    it('If your team’s yellow flag is down: 30', function () {
      expect(scorer.getScore({
        m10_flag: true,
      })).toEqual(30);
    });

    it('If the submersible is clearly closer to the opposing field: 10', function () {
      expect(scorer.getScore({
        m10_closer: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m10_flag: true,
        m10_closer: true,
      })).toEqual(30 + 10);
      expect(scorer.getWarnings({
        m10_flag: true,
        m10_closer: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 11', function () {
    it('If one whale is revealed: 20, Bonus: If both whales are revealed: 10 ADDED', function () {
      expect(scorer.getScore({
        m11_whales: 1,
      })).toEqual(20);
      expect(scorer.getScore({
        m11_whales: 2,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m11_whales: 2,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m11_whales: 3,
      }).indexOf(scorer.warnings.m11_max_two_whales)).not.toEqual(-1);
    });
  });

  describe('Mission 12', function () {
    it('Krill at least partly in the whale’s mouth: 10 EACH', function () {
      expect(scorer.getScore({
        m12_krill: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m12_krill: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m12_krill: 3,
      })).toEqual(30);
      expect(scorer.getScore({
        m12_krill: 4,
      })).toEqual(40);
      expect(scorer.getScore({
        m12_krill: 5,
      })).toEqual(50);
      expect(scorer.getWarnings({
        m12_krill: 5,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m12_krill: 6,
      }).indexOf(scorer.warnings.m12_max_five_krill)).not.toEqual(-1);
    });
  });

  describe('Mission 13', function () {
    it('If the ship is in the new shipping lane, touching the mat: 20', function () {
      expect(scorer.getScore({
        m13_ship: true,
      })).toEqual(20);
    });
  });

  describe('Mission 14', function () {
    it('If the water sample is completely outside the water sample area: 5', function () {
      expect(scorer.getScore({
        m14_water: true,
      })).toEqual(5);
    });

    it('If the seabed sample is no longer touching the seabed: 10', function () {
      expect(scorer.getScore({
        m14_seabed: true,
      })).toEqual(10);
    });

    it('If the plankton sample is no longer touching the kelp forest: 10', function () {
      expect(scorer.getScore({
        m14_plankton: true,
      })).toEqual(10);
    });

    it('If a piece of the trident is no longer touching the shipwreck: 20, Bonus: If both pieces are no longer touching the shipwreck: 10 ADDED', function () {
      expect(scorer.getScore({
        m14_trident_pieces: 1,
      })).toEqual(20);
      expect(scorer.getScore({
        m14_trident_pieces: 2,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m14_trident_pieces: 2,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m14_trident_pieces: 3,
      }).indexOf(scorer.warnings.m14_max_two_trident_pieces)).not.toEqual(-1);
    });

    it('Can score all', function () {
      expect(scorer.getScore({
        m14_water: true,
        m14_seabed: true,
        m14_plankton: true,
        m14_trident_pieces: 2,
      })).toEqual(5 + 10 + 10 + 20 + 10);
      expect(scorer.getWarnings({
        m14_water: true,
        m14_seabed: true,
        m14_plankton: true,
        m14_trident_pieces: 2,
      })).toHaveSize(0);
    });
  });

  describe('Mission 15', function () {
    it('Sample(s): 5 EACH', function () {
      expect(scorer.getScore({
        m15_samples: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m15_samples: 2,
      })).toEqual(10);
      expect(scorer.getScore({
        m15_samples: 3,
      })).toEqual(15);
      expect(scorer.getWarnings({
        m15_samples: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m15_samples: 4,
      }).indexOf(scorer.warnings.m15_max_three_samples)).not.toEqual(-1);
    });

    it('Trident Part(s): 5 EACH', function () {
      expect(scorer.getScore({
        m15_trident_parts: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m15_trident_parts: 2,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m15_trident_parts: 2,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m15_trident_parts: 3,
      }).indexOf(scorer.warnings.m15_max_two_trident_parts)).not.toEqual(-1);
    });

    it('Treasure Chest: 5', function () {
      expect(scorer.getScore({
        m15_chest: true,
      })).toEqual(5);
    });

    it('If the port’s latch is at least partly in the research vessel’s loop: 20', function () {
      expect(scorer.getScore({
        m15_latch: true,
      })).toEqual(20);
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
