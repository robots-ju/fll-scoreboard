import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2024,
    slug: 'submerged',
    title: 'SUBMERGED',
    hashtag: '#SUBMERGED',
    logo: '2024/logo.png',
    field: '2024/field.jpg',
    colors: {
      main: '#ec1d27',
      missions: '#007633',
      scoring: '#ff007d',
      penalties: '#000',
    },
    no_equipment_constraint_icon: '2024/equipment-constraint.svg',
  },
  warnings: {
    m01_bonus_requirement_not_met: {
      mission: 1,
      en: 'Both options must be selected to score the bonus on mission 1',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 1',
    },
    m02_must_score_first: {
      mission: 1,
      en: 'First part of mission 2 is required with second part',
      fr: 'La première partie de la mission 2 doit être réussie avec la seconde partie',
    },
    m04_must_score_first: {
      mission: 1,
      en: 'First part of mission 4 is required with second part',
      fr: 'La première partie de la mission 2 doit être réussie avec la seconde partie',
    },
    m09_must_score_first: {
      mission: 1,
      en: 'First part of mission 9 is required with second part',
      fr: 'La première partie de la mission 2 doit être réussie avec la seconde partie',
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
                fr: 'Votre robot et tout votre équipement tiennent complètement dans une seule zone de lancement et leur hauteur est inférieure à la limite de 305 mm',
              },
              handle: 'm00_small_inspection_area',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m00.png',
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
        en: 'Coral Nursery',
        fr: 'Pépinière de coraux',
      },
      position: {
        top: 52,
        left: 14,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The coral tree is hanging on the coral tree support',
                fr: 'L\'arbre à corail est suspendu au support de l\'arbre à corail',
              },
              handle: 'm01_hanging',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m01.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the bottom of the coral tree is in its holder',
                fr: 'Bonus: le bas de l\'arbre à corail est dans son support',
              },
              handle: 'm01_bonus',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The coral buds are flipped up',
                fr: 'Les bourgeons sont tournés vers le haut',
              },
              handle: 'm01_flipped',
              type: 'boolean',
              points: 20,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 2,
      title: {
        en: 'Shark',
        fr: 'Suivi du requin',
      },
      position: {
        top: 20,
        left: 19,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The shark is no longer touching the cave',
                fr: 'Le requin ne touche plus la grotte',
              },
              handle: 'm02_cave',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m02.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The shark is touching the mat and is at least partly in the shark habitat',
                fr: 'Le requin touche le tapis et se trouve au moins partiellement dans son habitat',
              },
              handle: 'm02_habitat',
              type: 'boolean',
              points: 10,
              images: [
                '2024/m02_habitat.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Coral Reef',
        fr: 'Récif corallien',
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
                en: 'The coral reef is flipped up, not touching the mat',
                fr: 'Le récif de corail est retourné, sans toucher le tapis',
              },
              handle: 'm03_flipped',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m03.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Reef segments standing upright, outside of home, and touching the mat',
                fr: 'Fragments de récif debout, à l\'extérieur de la zone de départ, et touchant le tapis',
              },
              handle: 'm03_segments',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2024/m03_segments.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 4,
      title: {
        en: 'Scuba Diver',
        fr: 'Plongeur sous-marin',
      },
      position: {
        top: 40,
        left: 14,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The scuba diver is no longer touching the coral nursery',
                fr: 'Le plongeur ne touche plus la pépinière de corail',
              },
              handle: 'm04_nursery',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m04.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The scuba diver is hanging on the coral reef support',
                fr: 'Le plongeur est suspendu sur le support du récif de corail',
              },
              handle: 'm04_hanging',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m04.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The “coral nursery” includes any part of the Mission 1 mission model',
          fr: 'La “pépinière de corail” inclut toute partie du modèle de mission de la Mission 1',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Angler Fish',
        fr: 'Poisson-pêcheur',
      },
      position: {
        top: 49,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The angler fish is latched within the shipwreck',
                fr: 'Le poisson-pêcheur est repoussé dans l\'épave',
              },
              handle: 'm05_latched',
              type: 'boolean',
              points: 30,
              images: [
                '2024/m05.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Raise the Mast',
        fr: 'Relever le mât',
      },
      position: {
        top: 41,
        left: 39,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The shipwreck\'s mast is completely raised',
                fr: 'Le mât de l\'épave est complètement relevé',
              },
              handle: 'm06_raised',
              type: 'boolean',
              points: 30,
              images: [
                '2024/m06.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The shipwreck\'s mast is considered raised when the latch prevents it from returning to its starting position',
          fr: 'Le mât de l\'épave est considéré complètement relevé lorsque le loquet l\'empêche de revenir à sa position initiale',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 7,
      title: {
        en: 'Kraken\'s Treasure',
        fr: 'Trésor du Kraken',
      },
      position: {
        top: 54,
        left: 37,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The treasure chest is completely outside the kraken\'s nest',
                fr: 'Le coffre au trésor est complètement en dehors de l\'antre du Kraken',
              },
              handle: 'm07_activated',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m07.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 8,
      title: {
        en: 'Artificial Habitat',
        fr: 'Habitat artificiel',
      },
      position: {
        top: 78,
        left: 58,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Artificial habitat stack segments  completely flat and upright',
                fr: 'Segments de paquet d\'habitat artificiel  complètement dans le bon sens',
              },
              handle: 'm08_segments',
              type: 'number',
              max: 4,
              points: 10,
              images: [
                '2024/m08.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'There are four segments of the artificial habitat stack, each defined by its yellow base. A segment is considered upright when the crab is above its yellow base',
          fr: 'L\'empilement d\'habitats artificiels se compose de quatre segments, chacun étant défini par sa base jaune. Un segment est considéré comme vertical lorsque le crabe se trouve au-dessus de sa base jaune',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 9,
      title: {
        en: 'Unexpected Encounter',
        fr: 'Rencontre inattendue',
      },
      position: {
        top: 60,
        left: 60,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The unknown creature is released',
                fr: 'La créature inconnue est relâchée',
              },
              handle: 'm09_released',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m09.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The unknown creature is at least partly in the cold seep',
                fr: 'La créature inconnue est au moins partiellement dans le suintement froid',
              },
              handle: 'm09_seep',
              type: 'boolean',
              points: 10,
              images: [
                '2024/m09_seep.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Send over the Submersible',
        fr: 'Envoi du submersible',
      },
      position: {
        top: 19,
        left: 55,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your team\'s yellow flag is down',
                fr: 'Le drapeau jaune de votre équipe est baissé',
              },
              handle: 'm10_flag',
              type: 'boolean',
              points: 30,
              images: [
                '2024/m10.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The submersible is clearly closer to the opposing field',
                fr: 'Le submersible est clairement plus proche du terrain adverse',
              },
              handle: 'm10_closer',
              type: 'boolean',
              points: 10,
              images: [
                '2024/m10.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Teams may not block the opposing team. It is not possible to earn the points for the 2nd main requirement in remote competitions or if there is no opposing team',
          fr: 'Les équipes ne peuvent pas bloquer l\'équipe adverse. Il n\'est pas possible de gagner le bonus dans les compétitions à distance ou s\'il n\'y a pas d\'équipe adverse',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 11,
      title: {
        en: 'Sonar Discovery',
        fr: 'Découverte par sonar',
      },
      position: {
        top: 25,
        left: 68,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Whales revealed',
                fr: 'Baleines révélées',
              },
              handle: 'm11_whales',
              type: 'number',
              max: 2,
              points_list: [
                20,
                30,
              ],
              images: [
                '2024/m11.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Feed the Whale',
        fr: 'Nourrir la baleine',
      },
      position: {
        top: 20,
        left: 85,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Krill at least partly in the whale\'s mouth',
                fr: 'Krill au moins en partie dans la bouche de la baleine',
              },
              handle: 'm12_krill',
              type: 'number',
              max: 5,
              points: 10,
              images: [
                '2024/m12.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 13,
      title: {
        en: 'Change Shipping Lanes',
        fr: 'Changer de voies de navigation',
      },
      position: {
        top: 48,
        left: 81,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The ship is in the new shipping lane, touching the mat',
                fr: 'Le navire se trouve dans le nouveau couloir de navigation, en touchant le tapis',
              },
              handle: 'm13_ship',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m13.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Sample Collection',
        fr: 'Collecte d\'échantillons',
      },
      position: {
        top: 22,
        left: 47,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The water sample is completely outside the water sample area',
                fr: 'L\'échantillon d\'eau est complètement en dehors de sa zone d\'échantillonnage',
              },
              handle: 'm14_water',
              type: 'boolean',
              points: 5,
              images: [
                '2024/m14_water.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The seabed sample is no longer touching the seabed',
                fr: 'L\'échantillon de fond marin ne touche plus le fond marin',
              },
              handle: 'm14_seabed',
              type: 'boolean',
              points: 10,
              images: [
                '2024/m14_seabed.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The plankton sample is no longer touching the kelp forest',
                fr: 'L\'échantillon de plancton ne touche plus la forêt de varech',
              },
              handle: 'm14_plankton',
              type: 'boolean',
              points: 10,
              images: [
                '2024/m14_plankton.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Pieces of the trident no longer touching the shipwreck',
                fr: 'Pièces du trident qui ne touchent plus l\'épave',
              },
              handle: 'm14_trident_pieces',
              type: 'number',
              max: 2,
              points_list: [
                20,
                30,
              ],
              images: [
                '2024/m14_trident.jpg',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Research Vessel',
        fr: 'Navire de recherche',
      },
      description: {
        en: 'Any of the following are at least partly in the research vessel\'s cargo area',
        fr: 'L\'un des éléments suivants se trouve au moins en partie dans la zone de cargaison du navire de recherche',
      },
      position: {
        top: 82,
        left: 35,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Samples',
                fr: 'Échantillons',
              },
              handle: 'm15_samples',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2024/m15_samples.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Trident Parts',
                fr: 'Parties du Trident',
              },
              handle: 'm15_trident_parts',
              type: 'number',
              max: 2,
              points: 5,
              images: [
                '2024/m14_trident.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Treasure Chest',
                fr: 'Coffre au Trésor',
              },
              handle: 'm15_chest',
              type: 'boolean',
              points: 5,
              images: [
                '2024/m15_chest.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The port\'s latch is at least partly in the research vessel\'s loop',
                fr: 'Le loquet du port se trouve au moins en partie dans la boucle du navire de recherche',
              },
              handle: 'm15_latch',
              type: 'boolean',
              points: 20,
              images: [
                '2024/m15_boat.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
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
                '2024/precision.jpg',
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
