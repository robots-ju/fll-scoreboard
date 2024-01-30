import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2020,
    slug: 'replay',
    title: 'RePLAY',
    hashtag: '#RePLAY',
    logo: '2020/replay-logo.png',
    field: '2020/replay-field.jpg',
    colors: {
      main: '#0095b9',
      missions: '#057f3d',
      scoring: '#0095b9',
      penalties: '#000',
    },
  },
  warnings: {
    m04_requirement_not_met: {
      mission: 4,
      en: 'Cubles can only score points is the bench is down flat',
      fr: 'Les cubes peuvent uniquement marquer des points si le banc est abaissé',
    },
    m06_m07_cannot_score_both: {
      mission: 6,
      en: 'Only one of M06 and M07 can be scored at the end of the match',
      fr: 'Une seule des missions M06 et M07 peut être marquée à la fin du match',
    },
    m09_requirement_not_met: {
      mission: 9,
      en: 'Not enough tires flipped for the second part of M09 ',
      fr: 'Pas assez de pneus retournés pour la seconde partie de M09',
    },
    m12_requirement_not_met: {
      mission: 12,
      en: 'Small circle points cannot be scored without large circle points',
      fr: 'Les points du petit cercle ne peuvent pas être marqués sans le grand cercle',
    },
    m14_max_eight_total: {
      mission: 14,
      en: 'A maximum of 8 units can be selected in M14',
      fr: 'Un maximum de 8 unités peuvent être saisies dans M14',
    },
  },
  missions: [
    {
      number: 0,
      title: {
        en: 'Equipment Inspection Bonus',
        fr: 'Bonus. Inspection d’équipement',
      },
      position: {
        top: 80,
        left: 28,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'All your equipment fits in the small inspection space',
                fr: 'Tout votre équipement tient dans le petit espace d’inspection',
              },
              handle: 'm00_small_inspection_area',
              type: 'boolean',
              points: 25,
              images: [
                '2020/m00.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 1,
      title: {
        en: 'Innovation Project',
        fr: 'Projet Innovant',
      },
      position: {
        top: 70,
        left: 52,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your Innovation Project has any part of it touching either the RePLAY logo or the gray area around the bench',
                fr: 'Votre projet innovant comporte une partie qui touche le logo ReJOUE ou la zone grise autour du banc',
              },
              handle: 'm01_innovation',
              type: 'boolean',
              points: 20,
              images: [
                '2020/m01_logo.jpg',
                '2020/m01_bench.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Step Counter',
        fr: 'Podomètre',
      },
      position: {
        top: 82,
        left: 67,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The bottom of the pointer is on',
                fr: 'Le bas du pointeur est sur',
              },
              handle: 'm02_step',
              type: 'number',
              max: 3,
              points_list: [10, 15, 20],
              colors_list: ['magenta', 'yellow', 'blue'],
              images: [
                '2020/m02.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Slide',
        fr: 'Glissoire',
      },
      position: {
        top: 48,
        left: 48,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Slide figures off the slide',
                fr: 'Figurines hors de la glissoire',
              },
              handle: 'm03_figure_slide',
              type: 'number',
              max: 2,
              points_list: [5, 20],
              images: [
                '2020/m03_off.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'A slide figure is completely in home',
                fr: 'Une figurine est complètement à la Maison',
              },
              handle: 'm03_figure_home',
              type: 'boolean',
              points: 10,
              images: [
                '2020/m03_home.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'A slide figure is held completely off the mat by the heavy tire and is touching nothing else',
                fr: 'Une figurine est complètement maintenue hors du tapis par le pneu lourd et ne touche à rien d’autre',
              },
              handle: 'm03_figure_tire',
              type: 'boolean',
              points: 20,
              images: [
                '2020/m03_tire.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Bench',
        fr: 'Banc',
      },
      position: {
        top: 46,
        left: 27,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The bench is down flat',
                fr: 'Le banc est complètement abaissé',
              },
              handle: 'm04_bench_down',
              type: 'boolean',
              points: 10,
              images: [
                '2020/m04_down.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The bench is down flat and there are cubes touching the mat in hopscotch spaces',
                fr: 'Le banc est complètement abaissé et qu’il y a des cubes touchant le tapis dans les espaces de marelle',
              },
              handle: 'm04_spaces_with_cubes',
              type: 'number',
              max: 4,
              points: 10,
              images: [
                '2020/m04_cubes.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The backrest is completely out of both of its holes',
                fr: 'Le dossier est complètement sorti de ses deux trous',
              },
              handle: 'm04_backrest_removed',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m04_removed.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Basketball',
        fr: 'Basketball',
      },
      position: {
        top: 21,
        left: 28,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'There is a cube in the crate',
                fr: 'Il y a un cube dans la caisse',
              },
              handle: 'm05_cube_in_crate',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m05_cube.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The crate rests on the middle height’s white stopper',
                fr: 'La caisse repose sur la butée blanche intermédiaire',
              },
              handle: 'm05_middle_height',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m05_cube.jpg',
              ],
            },
            {
              title: {
                en: 'The crate rests on the top height’s white stopper',
                fr: 'La caisse repose sur la butée blanche haute',
              },
              handle: 'm05_top_height',
              type: 'boolean',
              points: 25,
              images: [
                '2020/m05_top.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Pull-Up Bar',
        fr: 'Barre de traction',
      },
      position: {
        top: 55,
        left: 62,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The robot passes completely through the pull-up bar’s upright frame at any time',
                fr: 'Le robot traverse complètement le cadre vertical de la barre de traction à n’importe quel moment',
              },
              handle: 'm06_pass_through',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m06.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The pull-up bar holds 100% of the robot up off the mat at the end of the match',
                fr: 'La barre de traction retient 100 % du robot à la fin du match',
              },
              handle: 'm06_hold',
              type: 'boolean',
              points: 30,
              images: [
                '2020/m06.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Robot Dance',
        fr: 'Danse du robot',
      },
      position: {
        top: 17,
        left: 47,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The robot’s controller is at least partly over the dance floor in a "dancing" motion at the end of the match',
                fr: 'Le contrôleur du robot est au moins en partie sur la piste de danse et accomplit un mouvement de "danse" à la fin du match',
              },
              handle: 'm07_dancing',
              type: 'boolean',
              points: 20,
              images: [
                '2020/m07.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Boccia',
        fr: 'Boccia',
      },
      position: {
        top: 24,
        left: 62,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Both share models have sent only one cube anywhere onto the opposing field and those cubes color-match each other',
                fr: 'Les deux modèles de partage ont lancé un seul cube chacun n’importe où sur le terrain opposé et les deux couleurs correspondent',
              },
              handle: 'm08_matching_share',
              type: 'boolean',
              points: 25,
              images: [
                '2020/m08_share.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Cubes completely in your frame or target',
                fr: 'Cubes complètement dans votre cadre ou cible',
              },
              handle: 'm08_cubes_in_frame',
              type: 'number',
              max: 16,
              points: 5,
              images: [
                '2020/m08_frame.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'There is at least one yellow cube completely in your target',
                fr: 'Il y a au moins un cube jaune complètement dans votre cible',
              },
              handle: 'm08_yellow_in_target',
              type: 'boolean',
              points: 10,
              images: [
                '2020/m08_frame.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Tire Flip',
        fr: 'Retournement de pneu',
      },
      position: {
        top: 56,
        left: 76,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The light (blue tread) tire is white center up',
                fr: 'Le pneu léger (bande de roulement bleue) est orienté blanc vers le haut',
              },
              handle: 'm09_light_tire_flipped',
              type: 'boolean',
              points: 10,
              images: [
                '2020/m09_flip.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The heavy (black tread) tire is white center up',
                fr: 'Le pneu lourd (bande de roulement noire) est orienté blanc vers le haut',
              },
              handle: 'm09_heavy_tire_flipped',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m09_flip.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'White-center-up tires completely in the large target circle',
                fr: 'Pneus dont le centre blanc est vers le haut complètement dans le grand cercle cible',
              },
              handle: 'm09_center_in_target',
              type: 'number',
              max: 2,
              points: 5,
              images: [
                '2020/m09_circle.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Cell Phone',
        fr: 'Cellulaire',
      },
      position: {
        top: 17,
        left: 75,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The cell phone is white side up and resting on only the mat',
                fr: 'Le cellulaire est côté blanc vers le haut et repose uniquement sur le tapis',
              },
              handle: 'm10_phone_flipped',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m10.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Treadmill',
        fr: 'Tapis roulant',
      },
      position: {
        top: 73,
        left: 88,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The robot spins the rollers so the pointer points to',
                fr: 'Le robot fait tourner les rouleaux de sorte que le pointeur pointe vers',
              },
              handle: 'm11_treadmill',
              type: 'number',
              max: 6,
              points: 5,
              colors_list: [
                'grey',
                'red',
                'orange',
                'yellow',
                'light-green',
                'dark-green',
              ],
              images: [
                '2020/m11.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Row Machine',
        fr: 'Rameur',
      },
      position: {
        top: 51,
        left: 90,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The free wheel is completely outside the large circle',
                fr: 'La roue libre est complètement en dehors du grand cercle',
              },
              handle: 'm12_out_of_large_circle',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m12_large.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The free wheel is completely in the small circle',
                fr: 'La roue libre est complètement dans le petit cercle',
              },
              handle: 'm12_in_small_circle',
              type: 'boolean',
              points: 15,
              images: [
                '2020/m12_small.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Weight Machine',
        fr: 'Machine de musculation',
      },
      position: {
        top: 24,
        left: 88,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The stopper is under the lever and lever setting is',
                fr: 'La butée est sous le levier et le réglage du levier est',
              },
              handle: 'm13_weight',
              type: 'number',
              max: 3,
              points_list: [10, 15, 20],
              colors_list: ['blue', 'magenta', 'yellow'],
              images: [
                '2020/m13.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Health Units',
        fr: 'Unités de santé',
      },
      position: {
        top: 60,
        left: 12,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Health units touching either the RePLAY logo or the gray area around the bench',
                fr: 'Unités de santé en contact avec le logo ReJOUE ou la zone grise autour du banc',
              },
              handle: 'm14_logo_or_bench',
              type: 'number',
              max: 8,
              points: 5,
              images: [
                '2020/m14_logo.jpg',
                '2020/m14_bench.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Health units looped over a pull-up bar and touching no equipment',
                fr: 'Unités de santé accrochées à un montant de la barre de traction et ne touchant aucun équipement',
              },
              handle: 'm14_pull_up_bar',
              type: 'number',
              max: 4,
              points: 10,
              images: [
                '2020/m14_pull_up.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Precision',
        fr: 'Jetons de précision',
      },
      position: {
        top: 86,
        left: 94,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Precision Tokens left on the Field',
                fr: 'Jetons de précision restants sur le tapis',
              },
              handle: 'm15_precision_tokens',
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
                '2020/m15.jpg',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export {data};
