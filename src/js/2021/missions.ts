import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2021,
    slug: 'cargo-connect',
    title: 'CARGO CONNECT',
    hashtag: '#CargoConnect',
    logo: '2021/logo.png',
    field: '2021/field.jpg',
    colors: {
      main: '#1e5aa8',
      missions: '#3c7b3b',
      scoring: '#a5ca18',
      penalties: '#000',
    },
  },
  warnings: {},
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
              points: 20,
              images: [
                '2021/m00.jpg',
              ],
            },
          ],
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
        top: 59,
        left: 72,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your Innovation Project Model has any part of it touching the CARGO CONNECT circle',
                fr: 'Votre projet innovant a une quelconque partie qui touche le cercle CARGO CONNECT',
              },
              handle: 'm01_innovation',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m01.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Unused Capacity',
        fr: 'Capacité inutilisée',
      },
      position: {
        top: 55,
        left: 20,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Partly full of contents',
                fr: 'En partie rempli de pièces',
              },
              handle: 'm02_partly',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m02.jpg',
              ],
            },
            {
              title: {
                en: 'Completely full of contents',
                fr: 'Complètement rempli de pièces',
              },
              handle: 'm02_completely',
              type: 'boolean',
              points: 30,
              images: [
                '2021/m02.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Unload Cargo Plane',
        fr: 'Décharger l’avion-cargo',
      },
      position: {
        top: 24,
        left: 20,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Cargo door rests completely down, touching its black frame',
                fr: 'La porte du cargo repose complètement vers le bas, en touchant son cadre noir',
              },
              handle: 'm03_prepared',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m03_prepared.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Container is completely separate from the plane',
                fr: 'Le conteneur est complètement séparé de l’avion',
              },
              handle: 'm03_unloaded',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m03_unloaded.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Transportation Journey',
        fr: 'Trajet des transports',
      },
      position: {
        top: 35,
        left: 39,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The truck has reached its destination, completely past its blue end line, on the mat',
                fr: 'Le camion a atteint sa destination, en dépassant complètement la ligne d’extrémité bleue du tapis',
              },
              handle: 'm04_truck',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m04_truck.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The airplane has reached its destination, completely past its blue end line, on the mat',
                fr: 'L’avion a atteint sa destination, en dépassant complètement la ligne d’extrémité bleue du tapis',
              },
              handle: 'm04_plane',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m04_plane.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Bonus of 10 points will be automatically added if both are selected',
          fr: 'Le bonus de 10 points sera automatiquement ajouté si les 2 options sont sélectionnées',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Switch Engine',
        fr: 'Changer le type de moteur',
      },
      position: {
        top: 21,
        left: 35,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The engine has been switched from diesel to electric so that the yellow bar rests all the way down/south',
                fr: 'Le moteur diesel a été remplacé par un moteur électrique, la barre jaune doit être complètement abaissée/au sud',
              },
              handle: 'm05_engine_switched',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m05.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Accident Avoidance',
        fr: 'Prévention des accidents',
      },
      position: {
        top: 20,
        left: 46,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Parked and not knocked down',
                fr: 'Parqué et pas renversé',
              },
              handle: 'm06_not_knocked_down',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m06_not_knocked_down.jpg',
              ],
            },
            {
              title: {
                en: 'Parked and knocked down',
                fr: 'Parqué et renversé',
              },
              handle: 'm06_knocked_down',
              type: 'boolean',
              points: 30,
              images: [
                '2021/m06_knocked_down.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Your robot is parked over the blue accident-avoidance line at the end of the match and the yellow panel is [...]',
          fr: 'À la fin du match, si votre robot est garé sur la ligne bleue de prévention des accidents et que le panneau jaune est [...]',
        },
        {
          en: 'If the black frame is knocked down at the end of the match, this mission does not score',
          fr: 'Si le cadre noir est renversé à la fin du match, la mission ne rapporte pas de points',
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Unload Cargo Ship',
        fr: 'Décharger le navire de charge',
      },
      position: {
        top: 24,
        left: 68,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The container is no longer touching the cargo ship’s east deck',
                fr: 'Le conteneur ne touche plus le pont est du navire',
              },
              handle: 'm07_not_touching',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m07_not_touching.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The container is completely east of the cargo ship’s east deck',
                fr: 'Le conteneur se trouve complètement à l’est du pont est du navire',
              },
              handle: 'm07_east_of_deck',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m07_east.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Air Drop',
        fr: 'Largage aérien',
      },
      position: {
        top: 20,
        left: 93,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The food package is separated from your helicopter',
                fr: 'Le colis de nourriture est séparé de votre hélicoptère',
              },
              handle: 'm08_separated',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m08_separated.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The food package is separated from the other field’s helicopter and is completely in your field’s CARGO CONNECT circle',
                fr: 'Le colis de nourriture est séparé de l’hélicoptère de l’autre terrain et se trouve complètement dans le cercle CARGO CONNECTE de votre terrain',
              },
              handle: 'm08_circle',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m08_circle.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Both teams have separated their food packages from their field’s helicopters',
                fr: 'Les deux équipes ont séparé leurs colis des hélicoptères de leurs terrains',
              },
              handle: 'm08_both_teams',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m08_both_teams.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Train Tracks',
        fr: 'Voies ferrées',
      },
      position: {
        top: 53,
        left: 93,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The train track is repaired so that it rests completely down/west',
                fr: 'La voie ferrée est réparée de sorte qu’elle repose complètement vers le bas/à l’ouest',
              },
              handle: 'm09_track_repaired',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m09_repaired.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The train has reached its destination, latched at the end of the tracks',
                fr: 'Le train a atteint sa destination, et est accroché au bout des voies',
              },
              handle: 'm09_destination_reached',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m09_destination.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Sorting Center',
        fr: 'Centre de tri',
      },
      position: {
        top: 76,
        left: 82,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The containers have been sorted so that the light orange container is the only container remaining completely in the blue sorting area box',
                fr: 'Les conteneurs ont été triés de sorte que le conteneur orange est le seul conteneur complètement dans la case bleue de la zone de tri',
              },
              handle: 'm10_sorted',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m10.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Home Delivery',
        fr: 'Livraison à domicile',
      },
      position: {
        top: 90,
        left: 83,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Package partly on doorstep',
                fr: 'Colis en partie sur le pas de la porte',
              },
              handle: 'm11_partly',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m11_partly.jpg',
              ],
            },
            {
              title: {
                en: 'Package completely on doorstep',
                fr: 'Colis complètement sur le pas de la porte',
              },
              handle: 'm11_completely',
              type: 'boolean',
              points: 30,
              images: [
                '2021/m11_completely.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Large Delivery',
        fr: 'Grand colis',
      },
      position: {
        top: 83,
        left: 61,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The turbine blade is touching only the blue holder and the mat',
                fr: 'L’aube de turbine ne touche que le support bleu et le tapis',
              },
              handle: 'm12_blade_mat',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m12_blade_mat.jpg',
              ],
            },
            {
              title: {
                en: 'The turbine blade is touching only the blue holder and nothing else',
                fr: 'L’aube de turbine ne touche que le support bleu et rien d’autre',
              },
              handle: 'm12_blade_nothing',
              type: 'boolean',
              points: 30,
              images: [
                '2021/m12_blade_nothing.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The chicken statue is upright with its base partly in its circle',
                fr: 'La statue de poulet est debout avec sa base en partie dans son cercle',
              },
              handle: 'm12_chicken_partly',
              type: 'boolean',
              points: 5,
              images: [
                '2021/m12_chicken_partly.jpg',
              ],
            },
            {
              title: {
                en: 'The chicken statue is upright with its base completely in its circle',
                fr: 'La statue de poulet est debout avec sa base complètement dans son cercle',
              },
              handle: 'm12_chicken_completely',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m12_chicken_completely.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Platooning Trucks',
        fr: 'Camions de peloton',
      },
      position: {
        top: 57,
        left: 52,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Both trucks are latched together completely outside of home',
                fr: 'Les deux camions sont complètement accrochés ensemble à l’extérieur de la Maison',
              },
              handle: 'm13_latched_together',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m13_together.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'A truck is latched to the bridge',
                fr: 'L’un des camions est accroché au pont',
              },
              handle: 'm13_latched_bridge',
              type: 'boolean',
              points: 10,
              images: [
                '2021/m13_bridge.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Bonus of 10 points will be automatically added if both are selected',
          fr: 'Le bonus de 10 points sera automatiquement ajouté si les 2 options sont sélectionnées',
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Bridge',
        fr: 'Pont',
      },
      position: {
        top: 60,
        left: 63,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Bridge deck(s) that have been lowered and rest on their center support',
                fr: 'Tabliers qui ont été abaissés et reposent sur le support central',
              },
              handle: 'm14_lowered',
              type: 'number',
              max: 2,
              points: 10,
              images: [
                '2021/m14.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Load Cargo',
        fr: 'Charger la cargaison',
      },
      position: {
        top: 33,
        left: 10,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Containers on and touching only the Platooning Trucks',
                fr: 'Conteneurs qui sont sur et qui touchent seulement les camions de peloton',
              },
              handle: 'm15_trucks',
              type: 'number',
              max: 2,
              points: 10,
              images: [
                '2021/m15_truck.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Containers on and touching only the Train',
                fr: 'Conteneurs qui sont sur et qui touchent seulement le train',
              },
              handle: 'm15_train',
              type: 'number',
              max: 2,
              points: 20,
              images: [
                '2021/m15_train.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Containers on and touching only the Cargo Ship’s West Deck',
                fr: 'Conteneurs qui sont sur et qui touchent seulement le pont ouest du navire',
              },
              handle: 'm15_ship',
              type: 'number',
              max: 2,
              points: 30,
              images: [
                '2021/m15_ship.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'A maximum of two containers can score per form of transportation',
          fr: 'Un maximum de deux conteneurs peut marquer des points par mode de transport',
        },
        {
          en: 'Containers can touch each other or have contents',
          fr: 'Les conteneurs peuvent se toucher ou avoir des pièces de contenu',
        },
        {
          en: 'Containers can touch the gray ends of the cargo ship’s west deck',
          fr: 'Les conteneurs peuvent toucher les extrémités grises du pont ouest du navire',
        },
        {
          en: 'Containers on Platooning Trucks must be completely outside of home',
          fr: 'Les conteneurs sur les camions doivent être complètement à l’extérieur de la Maison',
        },
      ],
    },
    {
      number: 16,
      title: {
        en: 'CARGO CONNECT',
        fr: 'CARGO CONNECTE',
      },
      position: {
        top: 66,
        left: 10,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Containers partly in any circle',
                fr: 'Conteneurs en partie dans l’un des cercles',
              },
              handle: 'm16_partly_any_circle',
              type: 'number',
              max: 8,
              points: 5,
              images: [
                '2021/m16_circle.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Completely partly in any circle',
                fr: 'Conteneurs complètement dans l’un des cercles',
              },
              handle: 'm16_completely_any_circle',
              type: 'number',
              max: 8,
              points: 10,
              images: [
                '2021/m16_circle.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The blue (not hinged) container is completely in the blue circle',
                fr: 'Le conteneur bleu (sans charnières) est complètement dans le cercle bleu',
              },
              handle: 'm16_blue_container',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m16_blue.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The lime green container is completely in the lime green circle',
                fr: 'Le conteneur vert lime est complètement dans le cercle vert lime',
              },
              handle: 'm16_lime_container',
              type: 'boolean',
              points: 20,
              images: [
                '2021/m16_lime.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Circles with at least one container completely in them',
                fr: 'Cercles ayant au moins un conteneur complètement à l’intérieur',
              },
              handle: 'm16_circles_with_container',
              type: 'number',
              max: 6,
              points: 10,
              images: [
                '2021/m16_circle.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Containers include gray, light orange, blue (not hinged), lime green, and blue (hinged)',
          fr: 'Les conteneurs sont gris, orange, bleu (sans charnières), vert lime et bleu (avec charnières)',
        },
      ],
    },
    {
      number: 17,
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
              handle: 'm17_precision_tokens',
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
                '2021/m17.jpg',
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
