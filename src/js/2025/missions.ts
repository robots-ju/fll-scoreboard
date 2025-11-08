import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2025,
    slug: 'unearthed',
    title: 'UNEARTHED',
    hashtag: '#UNEARTHED',
    logo: '2025/logo.svg',
    field: '2025/field.webp',
    colors: {
      main: '#ef4b2d',
      missions: '#e5ae32',
      scoring: '#ef4b2d',
      penalties: '#000',
    },
    no_equipment_constraint_icon: '2025/equipment-constraint.svg',
  },
  warnings: {
    m03_bonus_requirement_not_met: {
      mission: 3,
      en: 'Both options must be selected to score the bonus on mission 3',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 3',
    },
    m11_bonus_requirement_not_met: {
      mission: 11,
      en: 'Both options must be selected to score the bonus on mission 11',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 11',
    },
  },
  missions: [
    {
      number: 0,
      title: {
        en: 'Equipment Inspection',
        fr: 'Inspection de l’équipement',
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
                '2025/m00.png',
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
        en: 'Surface Brushing',
        fr: 'Brossage de surface',
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
                en: 'Soil deposits completely cleared, touching the mat',
                fr: 'Dépôts de sol entièrement dégagés et touchant le tapis',
              },
              handle: 'm01_deposits',
              type: 'number',
              points: 10,
              max: 2,
              images: [
                '2025/m01.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Archaeologist’s brush is not touching the dig site',
                fr: 'La brosse de l’archéologue ne touche pas le site de fouilles',
              },
              handle: 'm01_brush',
              type: 'boolean',
              points: 10,
              images: [
                '2025/m01-brush.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 2,
      title: {
        en: 'Map Reveal',
        fr: 'Révélation de la carte',
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
                en: 'Topsoil sections completely cleared',
                fr: 'Couches de terre végétale entièrement dégagées',
              },
              handle: 'm02_sections',
              type: 'number',
              points: 10,
              max: 3,
              images: [
                '2025/m02.webp',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Mineshaft Explorer',
        fr: 'Exploration de la mine',
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
                en: 'Team’s minecart is on the opposing team’s field',
                fr: 'Le wagonnet se trouve sur le terrain de l’équipe adverse',
              },
              handle: 'm03_minecart',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m03.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the opposing team’s minecart is on your team’s field',
                fr: 'Bonus: le wagonnet de l’équipe adverse est sur votre terrain',
              },
              handle: 'm03_bonus',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Your team’s minecart must pass completely through the mineshaft entry to score points for this mission',
          fr: 'Le wagonnet de votre équipe doit traverser intégralement l’entrée du puits de la mine pour marquer des points pour cette mission',
        },
        {
          en: 'It is not possible to earn the bonus if there is no opposing team or in remote competitions',
          fr: 'Il n’est pas possible d’obtenir le bonus s’il n’y a pas d’équipe adverse ou en compétition à distance',
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Careful Recovery',
        fr: 'Récupération délicate',
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
                en: 'Precious artifact is not touching the mine',
                fr: 'Le précieux artefact ne touche plus la mine',
              },
              handle: 'm04_artifact',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m04-artifact.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Both support structures are standing',
                fr: 'Les deux structures de support sont debout',
              },
              handle: 'm04_both_standing',
              type: 'boolean',
              points: 10,
              images: [
                '2025/m04-support.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 5,
      title: {
        en: 'Who Lived Here?',
        fr: 'Qui vivait ici ?',
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
                en: 'Structure floor is completely upright',
                fr: 'Le sol de la structure est entièrement redressé',
              },
              handle: 'm05_floor_upright',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m05.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 6,
      title: {
        en: 'Forge',
        fr: 'Forge',
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
                en: 'Ore blocks not touching the forge',
                fr: 'Blocs de minerai qui ne touchent pas la forge',
              },
              handle: 'm06_blocks',
              type: 'number',
              points: 10,
              max: 3,
              images: [
                '2025/m06.webp',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Technicians may open ore blocks by hand to reveal the fossilized artifact when completely in home (see Mission 14)',
          fr: 'Les techniciens peuvent ouvrir les blocs de minerai à la main pour révéler l’artefact fossilisé lorsqu’ils sont entièrement dans la zone « maison » (voir Mission 14)',
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Heavy Lifting',
        fr: 'Levage lourd',
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
                en: 'Millstone is no longer touching its base',
                fr: 'La meule ne touche plus sa base',
              },
              handle: 'm07_millstone',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m07.webp',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Silo',
        fr: 'Silo',
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
                en: 'Preserved pieces are outside the silo',
                fr: 'Denrées préservées à l’extérieur du silo',
              },
              handle: 'm08_preserved_pieces',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2025/m08.webp',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'What’s on Sale?',
        fr: 'Que trouve-t-on à vendre ?',
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
                en: 'Roof completely raised',
                fr: 'Le toit est entièrement relevé',
              },
              handle: 'm09_roof_raised',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m09.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Market wares raised',
                fr: 'Les marchandises sont relevées',
              },
              handle: 'm09_wares_raised',
              type: 'boolean',
              points: 10,
              images: [
                '2025/m09.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 10,
      title: {
        en: 'Tip the Scales',
        fr: 'La balance',
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
                en: 'Scale is tipped and touching the mat',
                fr: 'La balance est basculée et touche le tapis',
              },
              handle: 'm10_scale_tipped',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m10.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Scale pan is completely removed',
                fr: 'Le plateau de la balance est complètement retiré',
              },
              handle: 'm10_pan_removed',
              type: 'boolean',
              points: 10,
              images: [
                '2025/m10-pan.webp',
              ],
            },
          ],
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Angler Artifacts',
        fr: 'Grue portuaire',
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
                en: 'Artifacts are raised above the ground layer',
                fr: 'Les artefacts sont soulevés au-dessus du niveau du sol',
              },
              handle: 'm11_artifacts_raised',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m11.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the crane flag is at least partly lowered',
                fr: 'Bonus: et le drapeau de la grue est au moins partiellement abaissé',
              },
              handle: 'm11_bonus',
              type: 'boolean',
              points: 10,
              images: [
                '2025/m11-flag.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 12,
      title: {
        en: 'Salvage Operation',
        fr: 'Opération de sauvetage',
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
                en: 'Sand is completely cleared',
                fr: 'Le sable est entièrement dégagé',
              },
              handle: 'm12_sand_cleared',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m12.webp',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Ship is completely raised',
                fr: 'Le navire est entièrement soulevé',
              },
              handle: 'm12_ship_raised',
              type: 'boolean',
              points: 10,
              images: [
                '2025/m12.webp',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Sand is considered completely cleared when the pull activator is past the line on the mat',
          fr: 'Le sable est considéré comme entièrement dégagé lorsque l’activateur à tirage dépasse la ligne tracée sur le tapis',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 13,
      title: {
        en: 'Statue Rebuild',
        fr: 'Reconstruction de la statue',
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
                en: 'Statue is completely raised.',
                fr: 'La statue est entièrement redressée',
              },
              handle: 'm13_statue_raised',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m13.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 14,
      title: {
        en: 'Forum',
        fr: 'Forum',
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
                en: 'Artifacts touching the mat and at least partly in the forum',
                fr: 'Artefacts touchant le tapis et au moins partiellement dans le forum',
              },
              handle: 'm14_artifacts',
              type: 'number',
              max: 7,
              points: 5,
              images: [
                '2025/m14.webp',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 15,
      title: {
        en: 'Site Marking',
        fr: 'Marquage du site',
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
                en: 'Sites with a flag at least partly inside and touching the mat',
                fr: 'Emplacements avec un drapeau au moins partiellement à l’intérieur et en contact avec le tapis',
              },
              handle: 'm15_sites_with_flag',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2025/m15.webp',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Sites are outlined on the mat wireframe',
          fr: 'Les sites sont délimités par les lignes du tapis',
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
                '2025/precision.jpg',
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
