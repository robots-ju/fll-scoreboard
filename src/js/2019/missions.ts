import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2019,
    slug: 'city-shaper',
    title: 'City Shaper',
    hashtag: '#CityShaper',
    logo: '2019/city-shaper-logo.png',
    field: '2019/city-shaper-field.jpg',
    colors: {
      main: '#00375a',
      missions: '#e7aa30',
      scoring: '#1e5aa8',
      penalties: '#000',
    },
  },
  warnings: {
    unknown: {
      en: 'The calculator returned an unknown warning: %warning%',
      fr: 'Le calculateur a retourné un avertissement non géré: %warning%',
    },
    m01_bridge_requirement_not_met: {
      mission: 1,
      en: 'You can only get Flag points if you get Bridge points',
      fr: 'Vous pouvez uniquement obtenir les points de drapeaux si vous obtenez les points de pont',
    },
    m02_circle_requirement_not_met: {
      mission: 2,
      en: 'You must score the blue unit supported by another unit to score the circle',
      fr: 'Vous devez obtenir les points d\'unitée supportée pour obtenir les points de cercle',
    },
  },
  missions: [
    {
      number: 0,
      title: {
        en: 'Game advantage',
        fr: 'Avantages de partie',
      },
      position: {
        top: 80,
        left: 25,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Robot fits in the Small Inspection Area',
                fr: 'Le robot et ses outils rentrent dans la petite zone',
              },
              handle: 'm00_small_inspection_area',
              type: 'boolean',
              images: [
                '2019/m00.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 1,
      title: {
        en: 'Elevated places',
        fr: 'Endroits surélevés',
      },
      position: {
        top: 12,
        left: 51,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Robot is Supported by the Bridge',
                fr: 'Le robot est supporté par le pont',
              },
              handle: 'm01_robot_supported',
              type: 'boolean',
              points: 20,
              images: [
                '2019/m01_bridge.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Flags raised',
                fr: 'Drapeaux clairement levés seulement par le robot',
              },
              handle: 'm01_flags_raised',
              type: 'number',
              max: 2,
              points: 15,
              images: [
                '2019/m01_flag.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Crane',
        fr: 'Grue',
      },
      position: {
        top: 30,
        left: 29,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Crane clearly lowered any distance from the Guide Hole',
                fr: 'La grue est clairement baissée par rapport à la position de départ',
              },
              handle: 'm02_unit_lowered',
              type: 'boolean',
              points: 22,
              images: [
                '2019/m02_lowered.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Independent and Supported by another Blue Unit',
                fr: 'L\'unité bleue est independante et posée sur une autre unité bleue',
              },
              handle: 'm02_supported_by_blue',
              type: 'boolean',
              points: 15,
              images: [
                '2019/m02_supported.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Level 1 is Completely in the Blue Circle',
                fr: 'Le premier étage est complètement dans le cercle bleu',
              },
              handle: 'm02_in_blue_circle',
              type: 'boolean',
              points: 15,
              images: [
                '2019/m02_circle.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Inspection drone',
        fr: 'Drone d\'inspection',
      },
      position: {
        top: 24,
        left: 46,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Inspection Drone is Supported by axle (A) on the Bridge',
                fr: 'Le drone d’inspection est supporté par la poutre (A) du pont',
              },
              handle: 'm03_drone_supported',
              type: 'boolean',
              points: 10,
              images: [
                '2019/m03.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Design for wildlife',
        fr: 'Conception pour la vie sauvage',
      },
      position: {
        top: 36,
        left: 43,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Bat is Supported by branch (B) on the Tree',
                fr: 'La chauve-souris est supportée par la branche (B) de l’arbre',
              },
              handle: 'm04_bat_supported',
              type: 'boolean',
              points: 10,
              images: [
                '2019/m04.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Treehouse',
        fr: 'Maison dans les arbres',
      },
      description: {
        en: 'If Units are Independent and Supported by the Tree',
        fr: 'Unités indépendantes et supportées par des arbres',
      },
      position: {
        top: 45,
        left: 52,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'On the Large Branches',
                fr: 'Sur les grandes branches',
              },
              handle: 'm05_units_on_large_branches',
              type: 'number',
              max: 16, // 4 pieces or each 4 colors
              points: 10,
              images: [
                '2019/m05_large.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'On the Small Branches',
                fr: 'Sur les petites branches',
              },
              handle: 'm05_units_on_small_branches',
              type: 'number',
              max: 16, // 4 pieces or each 4 colors
              points: 15,
              images: [
                '2019/m05_small.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Traffic jam',
        fr: 'Embouteillages',
      },
      position: {
        top: 84,
        left: 56,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Traffic Jam is lifted',
                fr: 'L’embouteillage est levé',
              },
              handle: 'm06_traffic_lifted',
              type: 'boolean',
              points: 10,
              images: [
                '2019/m06.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Swing',
        fr: 'Balançoire',
      },
      position: {
        top: 80,
        left: 78,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Swing is released',
                fr: 'La balançoire est relâchée',
              },
              handle: 'm07_swing_released',
              type: 'boolean',
              points: 10,
              images: [
                '2019/m07.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Elevator',
        fr: 'Ascenseur',
      },
      description: {
        en: 'If the Elevator’s moving parts are Independent, and Supported only by its hinges as shown, in the following position',
        fr: 'Si les parties mobiles sont indépendantes, supportées uniquement par leurs propres charnières, et est dans la position suivante',
      },
      position: {
        top: 40,
        left: 82,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Blue Car Down',
                fr: 'Voiture bleue en bas',
              },
              handle: 'm08_blue_car_down',
              type: 'boolean',
              points: 15,
              images: [
                '2019/m08_down.jpg',
              ],
            },
            {
              title: {
                en: 'Balanced',
                fr: 'En équilibre',
              },
              handle: 'm08_balanced',
              type: 'boolean',
              points: 20,
              images: [
                '2019/m08_balanced.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Safety factor',
        fr: 'Facteur de sécurité',
      },
      description: {
        en: 'If the Test Building is Independent and Supported only by the blue beams, and some beams have been knocked out at least half way',
        fr: 'Si la construction de test est indépendante et supportée uniquement par les barres bleues, et quelques barres ont été abaissées au moins de la moitié du mouvement possible',
      },
      position: {
        top: 60,
        left: 91,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Beams knocked out',
                fr: 'Barres descendues',
              },
              handle: 'm09_beams_knocked',
              type: 'number',
              max: 6,
              points: 10,
              images: [
                '2019/m09.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Steel construction',
        fr: 'Construction métallique',
      },
      description: {
        en: 'If the Steel Structure is standing, and is Independent, and Supported only by its hinges as shown',
        fr: 'Si la structure en acier est debout, indépendante et soutenue par ses fixations uniquement',
      },
      position: {
        top: 20,
        left: 78,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Steel Structure is standing',
                fr: 'La structure en acier est debout',
              },
              handle: 'm10_structure_standing',
              type: 'boolean',
              points: 20,
              images: [
                '2019/m10.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Innovative architecture',
        fr: 'Architecture innovante',
      },
      description: {
        en: 'If there is a team-designed Structure clearly bigger than a Blue Building Unit, built only from your white LEGO bricks',
        fr: 'Si l’objet conçu par l’équipe est clairement plus grand qu’une unité Bleue, construit uniquement à partir de vos pièces LEGO blanches',
      },
      position: {
        top: 70,
        left: 12,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Completely In any Circle',
                fr: 'Complètement dans un des cercles',
              },
              handle: 'm11_completely_in_circle',
              type: 'boolean',
              points: 15,
              images: [
                '2019/m11.jpg',
              ],
            },
            {
              title: {
                en: 'Partly in any Circle',
                fr: 'Partiellement dans un des cercles',
              },
              handle: 'm11_partially_in_circle',
              type: 'boolean',
              points: 10,
              images: [
                '2019/m11.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Design & build',
        fr: 'Conception & construction',
      },
      position: {
        top: 50,
        left: 12,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Circles with at least one color-matching Unit Completely In',
                fr: 'Cercles avec au moins une unité de la couleurs correspondante complètement à l’intérieur',
              },
              handle: 'm12_color_matching_circles',
              type: 'number',
              max: 3, // 3 colors are available. The max is also 3 in the official score sheet
              points: 10,
              images: [
                '2019/m12_color.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Total stack heights',
                fr: 'Étages',
              },
              handle: 'm12_stack_heights',
              type: 'number',
              max: 28, // 4 red, 4 beige, 4 white can each count up to 2, 4 blue can count up to 1 each
              points: 5,
              images: [
                '2019/m12_height.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Sustainability upgrades',
        fr: 'Améliorations pour développement durable',
      },
      description: {
        en: 'If an Upgrade (solar panels, roof garden, insulation) is Independent, and Supported only by a Stack which is at least partly in any Circle',
        fr: 'Si une amélioration ​(panneau solaire, jardin de toit, isolation)​ est indépendante et supportée uniquement par une pile qui est au moins partiellement dans un cercle',
      },
      position: {
        top: 30,
        left: 12,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Upgrades',
                fr: 'Améliorations',
              },
              handle: 'm13_upgrades',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2019/m13.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Precision',
        fr: 'Précision',
      },
      position: {
        top: 88,
        left: 94,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Precision Tokens left on the Field',
                fr: 'Points de précision restants sur le tapis',
              },
              handle: 'm14_precision_tokens',
              type: 'number',
              max: 6,
              points_list: [
                5,
                10,
                20,
                30,
                45,
                60,
              ],
              images: [
                '2019/m14.jpg',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export {data};
