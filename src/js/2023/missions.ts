import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2023,
    slug: 'masterpiece',
    title: 'MASTERPIECE',
    hashtag: '#MASTERPIECE',
    logo: '2023/logo.png',
    field: '2023/field.jpg',
    colors: {
      main: '#ec1d27',
      missions: '#007633',
      scoring: '#ff007d',
      penalties: '#000',
    },
  },
  warnings: {
    m02_bonus_requirement_not_met: {
      mission: 2,
      en: 'Both options must be selected to score the bonus on mission 2',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 2',
    },
    m04_bonus_requirement_not_met: {
      mission: 4,
      en: 'Both options must be selected to score the bonus on mission 4',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 4',
    },
    m12_bonus_requirement_not_met: {
      mission: 12,
      en: 'Both options must be selected to score the bonus on mission 12',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 12',
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
        top: 71,
        left: 24,
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
                '2023/m00.png',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'During the pre-match inspection.',
          fr: 'Au cours de l\'inspection d\'avant-match.',
        },
      ],
    },
    {
      number: 1,
      title: {
        en: '3D Cinema',
        fr: 'Cinéma 3D',
      },
      position: {
        top: 45,
        left: 14,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The 3D cinema\'s small red beam is completely to the right of the black frame',
                fr: 'La petite brique rouge du cinéma 3D est complètement à droite du cadre noir',
              },
              handle: 'm01_right',
              type: 'boolean',
              points: 20,
              images: [
                '2023/m01.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Theater Scene Change',
        fr: 'Changement de décor',
      },
      position: {
        top: 24,
        left: 19,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your theater\'s red flag is down and the active scene color is',
                fr: 'Le drapeau rouge de votre théâtre est baissé et si la couleur du décor de la scène en cours est',
              },
              handle: 'm02_color',
              type: 'number',
              max: 3,
              points: 10,
              colors_list: [
                'medium-blue',
                'pink',
                'orange',
              ],
              images: [
                '2023/m02.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: And if both teams\' active scenes match',
                fr: 'Bonus: Et si les décors de la scène en cours des deux équipes sont identiques',
              },
              handle: 'm02_bonus',
              type: 'boolean',
              variable_points: true,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Teams may activate only their own model.',
          fr: 'Les équipes ne peuvent activer que leur propre modèle.',
        },
        {
          en: 'It is not possible to earn the bonus in remote competitions or if there is no opposing team.',
          fr: 'Il n\'est pas possible de gagner de bonus dans les compétitions à distance ou s\'il n\'y a pas d\'équipe adverse.',
        },
        {
          en: 'Scoreboard: Bonus points will be calculated and added directly to the total score.',
          fr: 'Scoreboard: Les poins bonus sont calculés et ajoutés directement au score total.',
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Immersive Experience',
        fr: 'Expérience immersive',
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
                en: 'The three immersive experience screens are raised',
                fr: 'Les trois écrans d\'expérience immersive sont levés',
              },
              handle: 'm03_raised',
              type: 'boolean',
              points: 20,
              images: [
                '2023/m03.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'To score, team equipment may not be touching the immersive experience model at the end of the match.',
          fr: 'Pour rapporter des points, l\'équipement de l\'équipe ne doit pas toucher le modèle d\'expérience immersive à la fin du match.',
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'MASTERPIECE',
        fr: 'Chef-d\'oeuvre',
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
                en: 'Your team\'s LEGO art piece is at least partly in the museum target area',
                fr: 'L\'oeuvre d\'art LEGO de votre équipe se trouve au moins partiellement dans la zone ciblée du musée',
              },
              handle: 'm04_area',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m04.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: And if the art piece is completely supported by the pedestal',
                fr: 'Bonus: Et si l\'oeuvre d\'oeuvre repose entièrement sur le socle',
              },
              handle: 'm04_bonus',
              type: 'boolean',
              points: 20,
              images: [
                '2023/m04_bonus.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'To score the bonus, at the end of the match, the art piece may only be touching the pedestal and the pedestal may not be touching any team equipment except the art piece.',
          fr: 'Pour obtenir le bonus, à la fin du match, l\'oeuvre d\'art ne peut être en contact qu\'avec le socle qui ne doit lui-même être en contact avec aucune partie de l\'équipement de l\'équipe sauf l\'oeuvre d\'art.',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Augmented Reality Statue',
        fr: 'Statue en réalité augmentée',
      },
      position: {
        top: 25,
        left: 64,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The augmented reality statue\'s orange lever is rotated completely to the right',
                fr: 'Le levier orange de la statue en réalité augmentée est complètement tourné vers la droite',
              },
              handle: 'm05_rotated',
              type: 'boolean',
              points: 30,
              images: [
                '2023/m05.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Music Concert Lights And Sounds',
        fr: 'Concert son et lumière',
      },
      position: {
        top: 16,
        left: 80,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The lights\' orange lever is rotated completely downwards',
                fr: 'Le levier orange des lumières a complètement pivoté vers le bas',
              },
              handle: 'm06_lights',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m06_lights.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The speakers\' orange lever is rotated completely to the left',
                fr: 'Le levier orange du haut-parleur a complètement pivoté vers la gauche',
              },
              handle: 'm06_speakers',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m06_speakers.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Hologram Performer',
        fr: 'Artiste en hologramme',
      },
      position: {
        top: 32,
        left: 83,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The hologram performer\'s orange push activator is completely past the black stage set line',
                fr: 'L\'activateur poussoir orange dépasse complètement la ligne repère noire de la scène',
              },
              handle: 'm07_activated',
              type: 'boolean',
              points: 20,
              images: [
                '2023/m07.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Rolling Camera',
        fr: 'Caméra mobile sur rails',
      },
      position: {
        top: 80,
        left: 63,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The rolling camera\'s white pointer is on or left of',
                fr: 'Le pointeur blanc de la caméra mobile est sur ou à gauche de',
              },
              handle: 'm08_pointer',
              type: 'number',
              max: 3,
              points: 10,
              colors_list: [
                'dark-blue',
                'medium-blue',
                'light-blue',
              ],
              images: [
                '2023/m08.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Movie Set',
        fr: 'Plateau de tournage',
      },
      position: {
        top: 76,
        left: 44,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The boat is touching the mat and is completely past the black scene line',
                fr: 'Le bateau touche le tapis et dépasse complètement la ligne repère noire du décor',
              },
              handle: 'm09_boat',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m09_boat.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The camera is touching the mat and is at least partly in the camera target area',
                fr: 'La caméra touche le tapis et se trouve au moins partiellement dans la zone ciblée de la caméra',
              },
              handle: 'm09_camera',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m09_camera.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The camera includes the loop, but not the string.',
          fr: 'La caméra inclut la boucle, mais pas la corde.',
        },
        {
          en: 'When scoring, the scene line extends vertically from the top to the bottom of the field.',
          fr: 'Au moment du pointage, la ligne du décor s\'étend verticalement du haut vers le bas du terrain.',
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Sound Mixer',
        fr: 'Table de mixage',
      },
      position: {
        top: 47,
        left: 30,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Sound mixer sliders raised',
                fr: 'Curseurs de la table de mixage en position haute',
              },
              handle: 'm10_sliders',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2023/m10.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'To score, team equipment may not be touching the sound mixer or sliders at the end of the match.',
          fr: 'Pour gagner des points, l\'équipement de l\'équipe ne doit pas être en contact avec la table de mixage ou les curseurs à la fin du match.',
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Light Show',
        fr: 'Jeu de lumière',
      },
      position: {
        top: 50,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The light show\'s white pointer is within zone',
                fr: 'Le pointeur blanc du jeu de lumière est dans la zone',
              },
              handle: 'm11_zone',
              type: 'number',
              max: 3,
              points: 10,
              colors_list: [
                'yellow',
                'light-green',
                'medium-blue',
              ],
              images: [
                '2023/m11.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Virtual Reality Artist',
        fr: 'Artiste en réalité virtuelle',
      },
      position: {
        top: 58,
        left: 63,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The chicken is intact and has moved from its starting position',
                fr: 'Le poulet est intact et s\'est déplacé de sa position initiale',
              },
              handle: 'm12_moved',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m12.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: And is over or completely past the lavender dot',
                fr: 'Bonus: Et il est au-dessus ou a complètement dépassé le point lavande',
              },
              handle: 'm12_bonus',
              type: 'boolean',
              points: 20,
              images: [
                '2023/m12_bonus.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Craft Creator',
        fr: 'Création artisanale',
      },
      position: {
        top: 44,
        left: 71,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The craft machine\'s orange and white lid is completely open',
                fr: 'Le couvercle orange et blanc de la machine artisanale est complètement ouvert',
              },
              handle: 'm13_lid',
              type: 'boolean',
              points: 10,
              images: [
                '2023/m13_lid.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The craft machine\'s light pink latch is pointing straight down',
                fr: 'Le verrou rose pâle de la machine artisanale pointe directement vers le bas',
              },
              handle: 'm13_latch',
              type: 'boolean',
              points: 20,
              images: [
                '2023/m13_latch.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Audience Delivery',
        fr: 'Transport du public',
      },
      position: {
        top: 61,
        left: 84,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Audience member completely in a target destination',
                fr: 'Membres du public complètement dans une destination cible',
              },
              handle: 'm14_members',
              type: 'number',
              max: 7,
              points: 5,
              images: [
                '2023/m14.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Target destinations with at least one audience member completely in',
                fr: 'Destinations cibles accueillant au moins complètement un membre du public',
              },
              handle: 'm14_destinations',
              type: 'number',
              max: 7,
              points: 5,
              images: [
                '2023/m14.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Expert Delivery',
        fr: 'Transport des experts',
      },
      position: {
        top: 77,
        left: 76,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Experts at least partly in their target destinations',
                fr: 'Experts au moins partiellement dans leur destination cible',
              },
              handle: 'm15_experts',
              type: 'number',
              max: 5,
              points: 10,
              images: [
                '2023/m15.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The expert includes the loop and the base.',
          fr: 'L\'expert inclut la boucle et la base.',
        },
      ],
    },
    {
      number: 16,
      title: {
        en: 'Precision Tokens',
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
                '2023/precision.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'You can lose one precision token without it affecting your score.',
          fr: 'Vous pouvez perdre un jeton de précision sans que cela nuise à votre score.',
        },
      ],
    },
  ],
};

export {data};
