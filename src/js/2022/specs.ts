import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2022 specifications test suite, based on the official scoring guide
 * @see https://www.firstlegoleague.org/season#resources
 */
describe('Robot Game 2022 specifications', function () {

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
    it('If your Innovation Project model is at least partly in the hydrogen plant target area: 10', function () {
      expect(scorer.getScore({
        m01_innovation: true,
      })).toEqual(10);
    });
  });

  describe('Mission 02', function () {
    it('If a fuel unit is in the fuel truck: 5 each', function () {
      expect(scorer.getScore({
        m02_units_in_truck: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m02_units_in_truck: 2,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m02_units_in_truck: 2,
      })).toHaveSize(0);
    });

    it('Bonus: If at least one fuel unit is in the fuel truck and the fuel truck is [...]: 10 added', function () {
      expect(scorer.getScore({
        m02_units_in_truck: 1,
        m02_bonus: true,
      })).toEqual(15);
      expect(scorer.getWarnings({
        m02_units_in_truck: 1,
        m02_bonus: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m02_units_in_truck: 0,
        m02_bonus: true,
      }).indexOf(scorer.warnings.m02_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 03', function () {
    it('If an energy unit is completely in the energy storage bin (max of three): 10 each', function () {
      expect(scorer.getScore({
        m03_units_in_bin: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m03_units_in_bin: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m03_units_in_bin: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m03_units_in_bin: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m03_units_in_bin: 4,
      }).indexOf(scorer.warnings.m03_max_three_units)).not.toEqual(-1);
    });

    it('If the energy unit is completely removed from the energy storage tray: 5', function () {
      expect(scorer.getScore({
        m03_removed_from_tray: true,
      })).toEqual(5);
    });

    it('Can combine', function () {
      expect(scorer.getScore({
        m03_units_in_bin: 1,
        m03_removed_from_tray: true,
      })).toEqual(15);
    });
  });

  describe('Mission 04', function () {
    it('If an energy unit has been completely removed from its starting circle: 5 each', function () {
      expect(scorer.getScore({
        m04_removed_from_circle: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m04_removed_from_circle: 2,
      })).toEqual(10);
    });

    it('Bonus: If all three energy units have been completely removed from their starting circles: 5 added', function () {
      expect(scorer.getScore({
        m04_removed_from_circle: 3,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m04_removed_from_circle: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m04_removed_from_circle: 4,
      }).indexOf(scorer.warnings.m04_max_three_units)).not.toEqual(-1);
    });
  });

  describe('Mission 05', function () {
    it('If your field’s orange connector is completely raised: 20', function () {
      expect(scorer.getScore({
        m05_connector_raised: true,
      })).toEqual(20);
    });

    it('Bonus: If both teams’ orange connectors are completely raised: 10 added', function () {
      expect(scorer.getScore({
        m05_connector_raised: true,
        m05_both_raised: true,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m05_connector_raised: true,
        m05_both_raised: true,
      })).toHaveSize(0);
    });

    it('Bonus requirement', function () {
      expect(scorer.getWarnings({
        m05_connector_raised: false,
        m05_both_raised: true,
      }).indexOf(scorer.warnings.m05_bonus_requirement_not_met)).not.toEqual(-1);
    });
  });

  describe('Mission 06', function () {
    it('If the hybrid car is no longer touching the ramp: 10', function () {
      expect(scorer.getScore({
        m06_car_off_ramp: true,
      })).toEqual(10);
    });

    it('If the hybrid unit is in the hybrid car: 10', function () {
      expect(scorer.getScore({
        m06_unit_in_car: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m06_car_off_ramp: true,
        m06_unit_in_car: true,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m06_car_off_ramp: true,
        m06_unit_in_car: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 07', function () {
    it('If an energy unit is no longer touching the wind turbine: 10 each', function () {
      expect(scorer.getScore({
        m07_units_removed: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m07_units_removed: 2,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m07_units_removed: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m07_units_removed: 4,
      }).indexOf(scorer.warnings.m07_max_three_units)).not.toEqual(-1);
    });
  });

  describe('Mission 08', function () {
    it('If the television is completely raised: 10', function () {
      expect(scorer.getScore({
        m08_raised: true,
      })).toEqual(10);
    });

    it('If an energy unit is completely in the green television slot: 10', function () {
      expect(scorer.getScore({
        m08_unit: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m08_raised: true,
        m08_unit: true,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m08_raised: true,
        m08_unit: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 09', function () {
    it('If the dinosaur toy is completely in the left home area: 10', function () {
      expect(scorer.getScore({
        m09_dino_in_left_home: true,
      })).toEqual(10);
    });

    it('[...] And there is an energy unit inside: 10', function () {
      expect(scorer.getScore({
        m09_unit_inside: true,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m09_unit_inside: true,
      })).toHaveSize(0);
    });

    it('[...] Or there is a rechargeable battery inside: 20', function () {
      expect(scorer.getScore({
        m09_battery_inside: true,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m09_battery_inside: true,
      })).toHaveSize(0);
    });

    it('Cannot score both', function () {
      expect(scorer.getWarnings({
        m09_unit_inside: true,
        m09_battery_inside: true,
      }).indexOf(scorer.warnings.m09_cannot_score_both)).not.toEqual(-1);
    });
  });

  describe('Mission 10', function () {
    it('If an energy unit is no longer touching the power plant: 5 each', function () {
      expect(scorer.getScore({
        m10_units_off_plant: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m10_units_off_plant: 2,
      })).toEqual(10);
    });

    it('Bonus: If all three energy units are no longer touching the power plant: 10 added', function () {
      expect(scorer.getScore({
        m10_units_off_plant: 3,
      })).toEqual(25);
      expect(scorer.getWarnings({
        m10_units_off_plant: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m10_units_off_plant: 4,
      }).indexOf(scorer.warnings.m10_max_three_units)).not.toEqual(-1);
    });
  });

  describe('Mission 11', function () {
    it('If the energy unit is no longer touching the hydroelectric dam: 20', function () {
      expect(scorer.getScore({
        m11_unit_off_dam: true,
      })).toEqual(20);
    });
  });

  describe('Mission 12', function () {
    it('If a looped water unit is completely in the water reservoir, touching the mat: 5 each', function () {
      expect(scorer.getScore({
        m12_water_in_reservoir: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m12_water_in_reservoir: 2,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m12_water_in_reservoir: 3
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m12_water_in_reservoir: 4,
      }).indexOf(scorer.warnings.m12_max_three_units)).not.toEqual(-1);
    });

    it('If a looped water unit is placed on a single red hook: 10 each hook', function () {
      expect(scorer.getScore({
        m12_hooks_with_water: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m12_hooks_with_water: 2,
      })).toEqual(20);
      expect(scorer.getWarnings({
        m12_hooks_with_water: 2,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m12_hooks_with_water: 3,
      }).indexOf(scorer.warnings.m12_max_two_hooks)).not.toEqual(-1);
    });
  });

  describe('Mission 13', function () {
    it('If an energy unit is completely in the hydrogen plant target area (max of three): 5 each', function () {
      expect(scorer.getScore({
        m13_units_in_hydrogen_plant: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m13_units_in_hydrogen_plant: 2,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m13_units_in_hydrogen_plant: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m13_units_in_hydrogen_plant: 4,
      }).indexOf(scorer.warnings.m13_max_three_units)).not.toEqual(-1);
    });
  });

  describe('Mission 14', function () {
    it('• If an energy unit is at least partly in the slot in the back of the toy factory (or in the red hopper) (max of three): 5 each', function () {
      expect(scorer.getScore({
        m14_units_in_factory: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m14_units_in_factory: 2,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m14_units_in_factory: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m14_units_in_factory: 4,
      }).indexOf(scorer.warnings.m14_max_three_units)).not.toEqual(-1);
    });

    it('If the mini dinosaur toy has been released: 10', function () {
      expect(scorer.getScore({
        m14_mini_dino_released: true,
      })).toEqual(10);
    });
  });

  describe('Mission 15', function () {
    it('If an energy unit is completely in the rechargeable battery target area (max of three): 5 each', function () {
      expect(scorer.getScore({
        m15_units_in_battery_area: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m15_units_in_battery_area: 2,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m15_units_in_battery_area: 3,
      })).toHaveSize(0);
      expect(scorer.getWarnings({
        m15_units_in_battery_area: 4,
      }).indexOf(scorer.warnings.m15_max_three_units)).not.toEqual(-1);
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
