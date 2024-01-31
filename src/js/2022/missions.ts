import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2022,
    slug: 'super-powered',
    title: 'SUPER POWERED',
    hashtag: '#SuperPowered',
    logo: '2022/logo.png',
    field: '2022/field.jpg',
    colors: {
      main: '#ec1d27',
      missions: '#e9aa0f',
      scoring: '#df8816',
      penalties: '#000',
    },
  },
  warnings: {
    m02_bonus_requirement_not_met: {
      mission: 2,
      en: 'Mission 2 bonus requires at least one fuel unit out of the truck',
      fr: 'Le bonus de la mission 2 nécessite qu\'une unité de carburant ait été retirée du camion',
    },
    m05_bonus_requirement_not_met: {
      mission: 5,
      en: 'Both options must be selected to score the bonus on mission 5',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 5',
    },
  },
  missions: [
    {
      number: 0,
      title: {
        en: 'Equipment Inspection',
        fr: 'Inspection de l\'équipement',
      },
      position: {
        top: 66,
        left: 15,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your robot and all your equipment fit completely in one launch area and are under a height limit of 305 mm',
                fr: 'Votre robot et tout votre équipement tiennent complètement dans une zone de lancement et leur hauteur est inférieure à la limite de 305 mm',
              },
              handle: 'm00_small_inspection_area',
              type: 'boolean',
              points: 20,
              images: [
                '2022/m00.png',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'During the pre-match inspection',
          fr: 'Au cours de l\'inspection d\'avant-match',
        },
      ],
    },
    {
      number: 1,
      title: {
        en: 'Innovation Project Model',
        fr: 'Modèle du Projet Innovant',
      },
      position: {
        top: 52,
        left: 44,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your Innovation Project model is at least partly in the hydrogen plant target area',
                fr: 'Le modèle de votre projet innovant est au moins partiellement dans la zone cible de la centrale à hydrogène',
              },
              handle: 'm01_innovation',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m01.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Oil Platform',
        fr: 'Plateforme pétrolière',
      },
      position: {
        top: 42,
        left: 16,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Fuel units in the fuel truck',
                fr: 'Unités de carburant dans le camion-citerne',
              },
              handle: 'm02_units_in_truck',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2022/m02_truck.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'At least one fuel unit is in the fuel truck and the fuel truck is at least partly over the fueling station target',
                fr: 'Au moins une unité de carburant se trouve dans le camion-citerne et celui-ci est partiellement sur la cible de la station-service',
              },
              handle: 'm02_bonus',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m02_bonus.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Energy Storage',
        fr: 'Stockage de l\'énergie',
      },
      position: {
        top: 24,
        left: 25,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Energy units completely in the energy storage bin',
                fr: 'Unités d\'énergie complètement dans l\'accumulateur',
              },
              handle: 'm03_units_in_bin',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2022/m03_bin.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The energy unit is completely removed from the energy storage tray',
                fr: 'Une unité d\'énergie est complètement retirée du tiroir d\'énergie',
              },
              handle: 'm03_removed_from_tray',
              type: 'boolean',
              points: 5,
              images: [
                '2022/m03_tray.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'All energy units stored in the energy storage bin may not be touching team equipment at the end of the match',
          fr: 'Toutes les unités d\'énergie stockées dans l\'accumulateur ne doivent pas être en contact avec l\'équipement de l\'équipe à la fin du match',
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Solar Farm',
        fr: 'Ferme solaire',
      },
      position: {
        top: 21,
        left: 37,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Energy units completely removed from their starting circle',
                fr: 'Unités d\'énergie complètement retirées de leur cercle de départ',
              },
              handle: 'm04_removed_from_circle',
              type: 'number',
              max: 3,
              points_list: [
                5,
                10,
                20,
              ],
              images: [
                '2022/m04.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Bonus of 5 points is included in the third option',
          fr: 'Le bonus de 5 points est inclus dans la 3e option',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Smart Grid',
        fr: 'Réseau électrique intelligent',
      },
      position: {
        top: 24,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your field\'s orange connector is completely raised',
                fr: 'Votre connecteur orange de terrain est complétement levé',
              },
              handle: 'm05_connector_raised',
              type: 'boolean',
              points: 20,
              images: [
                '2022/m05_own.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Both teams\' orange connectors are completely raised',
                fr: 'Les deux connecteurs de terrain sont complètement levés',
              },
              handle: 'm05_both_raised',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m05_both.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The smart grid model may not be touching team equipment at the end of the match',
          fr: 'Le REI ne doit pas être en contact avec l\'équipement de l\'équipe à la fin du match',
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Hybrid Car',
        fr: 'Voiture hybride',
      },
      position: {
        top: 15,
        left: 68,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The hybrid car is no longer touching the ramp',
                fr: 'La voiture hybride ne touche plus la rampe',
              },
              handle: 'm06_car_off_ramp',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m06_ramp.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The hybrid unit is in the hybrid car',
                fr: 'L\'unité hybride se trouve dans la voiture hybride',
              },
              handle: 'm06_unit_in_car',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m06_hybrid.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Wind Turbine',
        fr: 'Éolienne',
      },
      position: {
        top: 26,
        left: 81,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Energy units no longer touching the wind turbine',
                fr: 'Unités d\'énergie qui ne touchent plus l\'éolienne',
              },
              handle: 'm07_units_removed',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2022/m07.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Watch Television',
        fr: 'Regarder la télévision',
      },
      position: {
        top: 40,
        left: 91,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The television is completely raised',
                fr: 'Le téléviseur est complètement levé',
              },
              handle: 'm08_raised',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m08_raised.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'An energy unit is completely in the green television slot',
                fr: 'Une unité d\'énergie est complètement dans la fente verte du téléviseur',
              },
              handle: 'm08_unit',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m08_unit.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The watch television model and the energy unit in the green television slot may not be touching team equipment at the end of the match',
          fr: 'Le modèle de la télévision et l\'unité d\'énergie dans la fente verte du téléviseur ne doivent pas être en contact avec l\'équipement de l\'équipe à la fin du match',
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Dinosaur Toy',
        fr: 'Jouet dinosaure',
      },
      position: {
        top: 66,
        left: 84,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The dinosaur toy is completely in the left home area',
                fr: 'Le jouet dinosaure est complètement dans la zone de maison de gauche',
              },
              handle: 'm09_dino_in_left_home',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m09.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The dinosaur toy lid is completely closed and there is an energy unit inside',
                fr: 'Le capot du jouet dinosaure est complètement fermé et il contient une unité d\'énergie',
              },
              handle: 'm09_unit_inside',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m09.jpg',
              ],
            },
            {
              title: {
                en: 'The dinosaur toy lid is completely closed and there is a rechargeable battery inside',
                fr: 'Le capot du jouet dinosaure est complètement fermé et il est muni d\'une pile rechargeable',
              },
              handle: 'm09_battery_inside',
              type: 'boolean',
              points: 20,
              images: [
                '2022/m09.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Power Plant',
        fr: 'Centrale électrique',
      },
      position: {
        top: 76,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Energy units no longer touching the power plant',
                fr: 'Unité d\'énergies qui ne sont plus en contact avec la centrale électrique',
              },
              handle: 'm10_units_off_plant',
              type: 'number',
              max: 3,
              points_list: [
                5,
                10,
                25,
              ],
              images: [
                '2022/m10.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Bonus of 10 points is included into the third option',
          fr: 'Le bonus de 10 points est inclus dans la 3e option',
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Hydroelectric Dam',
        fr: 'Barrage hydro-électrique',
      },
      position: {
        top: 60,
        left: 28,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The energy unit is no longer touching the hydroelectric dam',
                fr: 'L\'unité d\'énergie n\'est plus en contact avec le barrage hydroélectrique',
              },
              handle: 'm11_unit_off_dam',
              type: 'boolean',
              points: 20,
              images: [
                '2022/m11.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Water Reservoir',
        fr: 'Réservoir d\'eau',
      },
      position: {
        top: 42,
        left: 35,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Looped water units completely in the water reservoir, touching the mat',
                fr: 'Unités d\'eau en boucle complètement dans le réservoir d\'eau, en contact avec le tapis',
              },
              handle: 'm12_water_in_reservoir',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2022/m12_reservoir.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Looped water unit placed on a single red hook',
                fr: 'Unité en boucle placée sur un seul crochet rouge',
              },
              handle: 'm12_hooks_with_water',
              type: 'number',
              max: 2,
              points: 10,
              images: [
                '2022/m12_hook.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The loop on the looped water unit may extend out of the water reservoir',
          fr: 'La boucle de l\'unité d\'eau en boucle peut dépasser du réservoir',
        },
        {
          en: 'Looped water units in the water reservoir or on red hooks may not be touching team equipment at the end of the match',
          fr: 'Les unités d\'eau en boucle dans le réservoir d\'eau ou sur les crochets rouges ne doivent pas être en contact avec l\'équipement de l\'équipe à la fin du match',
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Power-To-X',
        fr: 'Conversion d\'énergie',
      },
      position: {
        top: 48,
        left: 54,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Energy unit is completely in the hydrogen plant target area',
                fr: 'Unités d\'énergie complètement dans l\'usine de production d\'hydrogène',
              },
              handle: 'm13_units_in_hydrogen_plant',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2022/m13.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Toy Factory',
        fr: 'Fabrique de jouets',
      },
      position: {
        top: 58,
        left: 62,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Energy units at least partly in the slot in the back of the toy factory (or in the red hopper)',
                fr: 'Unités d\'énergie au moins partiellement dans la fente à l\'arrière de l\'usine de jouets (ou dans la trémie rouge)',
              },
              handle: 'm14_units_in_factory',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2022/m14_units.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The mini dinosaur toy has been released',
                fr: 'Le mini jouet dinosaure a été libéré',
              },
              handle: 'm14_mini_dino_released',
              type: 'boolean',
              points: 10,
              images: [
                '2022/m14_dino.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Energy units stored in the toy factory may not be touching team equipment at the end of the match',
          fr: 'Les unités d\'énergie stockées dans la fabrique à jouets ne doivent pas être en contact avec l\'équipement de l\'équipe à la fin du match',
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Rechargeable battery',
        fr: 'Batterie rechargeable',
      },
      position: {
        top: 41,
        left: 70,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'energy unit is completely in the rechargeable battery target area',
                fr: 'Unités d\'énergie complètement dans la zone cible de la batterie rechargeable',
              },
              handle: 'm15_units_in_battery_area',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2022/m15.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The rechargeable battery is not an energy unit',
          fr: 'La batterie rechargeable n\'est pas une unité d\'énergie',
        },
        {
          en: 'Energy units stored in the rechargeable battery target area may not be touching team equipment at the end of the match',
          fr: 'Les unités d\'énergie stockées dans la zone cible de la batterie rechargeable ne doivent pas entrer en contact avec l\'équipement de l\'équipe à la fin du match',
        },
      ],
    },
    {
      number: 16,
      title: {
        en: 'Precision',
        fr: 'Jetons de précision',
      },
      position: {
        top: 85,
        left: 93,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Precision Tokens left',
                fr: 'Jetons de précision restants',
              },
              handle: 'm16_precision_tokens',
              type: 'number',
              max: 6,
              points_list: [
                10,
                15,
                25,
                35,
                50,
                50,
              ],
              images: [
                '2022/precision.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'You can lose one precision token without it affecting your score',
          fr: 'Vous pouvez perdre un jeton de précision sans que cela nuise à votre score',
        },
      ],
    },
  ],
};

export {data};
