import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2017,
    slug: 'hydro-dynamics',
    title: 'Hydro Dynamics',
    hashtag: '#HydroDynamics',
    logo: '2017/hydro-dynamics-logo.png',
    field: '2017/hydro-dynamics-field.jpg',
    colors: {
      main: '#183c72',
      missions: '#e7aa30',
      scoring: '#183c72',
      penalties: '#cc2229',
    },
  },
  warnings: {
    unknown: {
      en: 'The calculator returned an unknown warning: %warning%',
      fr: 'Le calculateur a retourné un avertissement non géré: %warning%',
    },
    'm08_bonus_requirements_not_met': {
      mission: 8,
      en: 'You don\'t meet the bonus requirements for M08',
      fr: 'Vous ne remplissez pas les conditions du bonus pour M08',
    },
    'm13_bonus_requirements_not_met': {
      mission: 13,
      en: 'You don\'t meet the bonus requirements for M13',
      fr: 'Vous ne remplissez pas les conditions du bonus pour M13',
    },
    'm16_bonus_requirements_not_met': {
      mission: 16,
      en: 'You don\'t meet the bonus requirements for M16',
      fr: 'Vous ne remplissez pas les conditions du bonus pour M16',
    },
    'm17_bonus_requirements_not_met': {
      mission: 17,
      en: 'You don\'t meet the bonus requirements for M17',
      fr: 'Vous ne remplissez pas les conditions du bonus pour M17',
    },
  },
  missions: [
    {
      number: 1,
      title: {
        en: 'Pipe removal',
        fr: 'Retrait de canalisation',
      },
      description: {
        en: 'Move the broken pipe so it is completely in base',
        fr: 'Déplacez le tuyau cassé afin qu’il soit complètement dans la Base',
      },
      position: {
        top: 48,
        left: 12,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The broken pipe is completely in base',
                fr: 'Le tuyau cassé est complètement dans la Base',
              },
              handle: 'm01_broken_pipe_in_base',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m01.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Flow',
        fr: 'Débit',
      },
      description: {
        en: 'Move a big water (one time maximum) to the other team’s field only by turning the pump system’s valve(s)',
        fr: 'Déplacez une Grande Eau dans le terrain de l’autre équipe seulement en tournant la(les) valve(s) du Système de Pompage',
      },
      position: {
        top: 14,
        left: 10,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'A big water is placed on the other team’s field',
                fr: 'Une Grande Eau est placée sur le terrain de l’autre équipe',
              },
              handle: 'm02_big_water_moved',
              type: 'boolean',
              points: 25,
              images: [
                '2017/m02.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'Only one big water is allowed to be placed on the other team’s field.',
          fr: 'Une seule Grande Eau peut être déplacée sur le terrain de l’autre équipe',
        },
        {
          en: 'Move the big water to the other team’s field only by turning the pump system’s valve(s)',
          fr: 'La Grande Eau ne peut être déplacée sur le terrain de l’autre équipe qu’en tournant la(les) valve(s) du Système de Pompage.',
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Pump addition',
        fr: 'Ajout de pompe',
      },
      description: {
        en: 'Move the pump addition so it has contact with the mat and that contact is completely in the pump addition target',
        fr: 'Déplacez la Pompe additionnelle afin qu’elle soit en contact avec le tapis et que ce contact soit complètement dans la zone-cible',
      },
      position: {
        top: 18,
        left: 20,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The pump addition has contact with the mat and that contact is completely in the pump addition target',
                fr: 'La Pompe additionnelle est en contact avec le tapis et ce contact est complètement dans la zone-cible',
              },
              handle: 'm03_pump_addition_moved',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m03.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Rain',
        fr: 'Pluie',
      },
      description: {
        en: 'Make at least one rain come out of the rain cloud',
        fr: 'Faire sortir du Nuage au moins un élément Pluie',
      },
      position: {
        top: 18,
        left: 34,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'At least one rain came out of the rain cloud',
                fr: 'Au moins un élément Pluie est hors du Nuage',
              },
              handle: 'm04_rain_came_out',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m04.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Filter',
        fr: 'Filtre',
      },
      description: {
        en: 'Move the filter north until the lock latch drops',
        fr: 'Déplacez le Filtre vers le nord jusqu’à ce que le loquet du verrou tombe',
      },
      position: {
        top: 35,
        left: 28,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The lock latch of the filter has dropped',
                fr: 'Le loquet du verrou est tombé',
              },
              handle: 'm05_filter_moved_north',
              type: 'boolean',
              points: 30,
              images: [
                '2017/m05.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Water treatment',
        fr: 'Traitement de l\'eau',
      },
      description: {
        en: 'Make the water treatment model eject its big water, only by moving the toilet’s lever',
        fr: 'Faites éjecter la Grande eau du modèle Traitement de l’eau, seulement en actionnant le levier des Toilettes',
      },
      position: {
        top: 53,
        left: 36,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The water treatment model ejected a big water',
                fr: 'Le modèle Traitement de l’eau a éjecté une Grande eau',
              },
              handle: 'm06_big_water_ejected',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m06.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'The water treatment model ejects its big water, only by moving the toilet’s lever',
          fr: 'Le résultat a été obtenu seulement en actionnant le levier des toilettes',
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Fountain',
        fr: 'Fontaine',
      },
      description: {
        en: 'Make the fountain’s middle layer rise some obvious height and stay there, due only to a big water in the gray tub',
        fr: 'Faites monter et rester élevée d’une hauteur visible la couche du milieu de la Fontaine, seulement grâce à une Grande eau dans le bassin gris',
      },
      position: {
        top: 85,
        left: 42,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The fountain’s middle layer rises some obvious height and stays there',
                fr: 'La couche du milieu de la Fontaine est visiblement élevée',
              },
              handle: 'm07_fountain_layer_raised',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m07.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'The fountain’s middle layer rises some obvious height, due only to a big water in the gray tub',
          fr: 'La fontaine s’est élevée seulement grâce à une Grande eau dans le bac gris',
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Manhole covers',
        fr: 'Plaques d\'égouts',
      },
      description: {
        en: 'Flip manhole cover(s) over, obviously past vertical without it/them ever reaching base',
        fr: 'Retournez les plaques, au-delà de la verticale de manière évidente, sans qu’elles passent par la Base',
      },
      position: {
        top: 37,
        left: 47,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Manhole cover(s) flipped over, obviously past vertical',
                fr: 'Plaque retournée, au-delà de la verticale de manière évidente',
              },
              handle: 'm08_manhole_covers_flipped',
              type: 'number',
              max: 2,
              points: 15,
              images: [
                '2017/m08_end1.jpg',
                '2017/m08_end2.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'BONUS: Score manhole cover points as described above with both covers completely in its targets',
                fr: 'BONUS: Marquez les points comme indiqué ci-dessus avec les 2 plaques complètement dans les cibles',
              },
              handle: 'm08_both_covers_in_separate_targets',
              type: 'boolean',
              points: 30,
              images: [
                '2017/m08_bonus.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'Manhole cover(s) flipped over, obviously past vertical',
          fr: 'Plaques retournées au-delà de la verticale de manière évidente',
        },
        {
          en: 'Manhole cover(s) flipped over without it/them ever reaching base',
          fr: 'Les plaques ne sont jamais passées par la Base',
        },
        {
          en: 'Each manhole cover is scored individually',
          fr: 'Chaque plaque donne des points individuellement',
        },
        {
          en: 'For Bonus both covers must be completely in separate tripod targets',
          fr: 'Pour le Bonus les 2 plaques doivent être dans les cibles',
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Tripod',
        fr: 'Trépied',
      },
      description: {
        en: 'Move the inspection camera tripod',
        fr: 'Déplacez le trépied de caméra dans une cible',
      },
      position: {
        top: 64,
        left: 64,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'OPTION 1: The camera tripod is partly in either tripod target, with all of its feet touching the mat',
                fr: 'OPTION 1: Le trépied est partiellement dans l’une des cibles, avec tous ses pieds touchant le tapis',
              },
              handle: 'm09_tripod_partly_in_target',
              type: 'boolean',
              points: 15,
              images: [
                '2017/m09_end1.jpg',
              ],
            },
            {
              title: {
                en: 'OPTION 2: The camera tripod is completely in either tripod target, with all of its feet touching the mat',
                fr: 'OPTION 2: Le trépied est complètement dans l’une des cibles, avec tous ses pieds touchant le tapis',
              },
              handle: 'm09_tripod_completely_in_target',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m09_end2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Pipe replacement',
        fr: 'Remplacement de canalisation',
      },
      description: {
        en: 'Replace the broken yellow pipe by a new blue pipe',
        fr: 'Remplacez le tuyau jaune cassé par un nouveau tuyau bleu',
      },
      position: {
        top: 53,
        left: 52,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The new blue pipe lies between both black pipes in full/flat contact with the mat',
                fr: 'Le nouveau tuyau bleu est placé entre les deux tuyaux noirs et à plat/en contact complet avec le tapis',
              },
              handle: 'm10_pipe_moved',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m10_end1.jpg',
                '2017/m10_end2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'Optional: Install first in base the optional loop on a blue pipe',
          fr: 'Optionnel: Installez d’abord dans la Base la boucle optionnelle sur un tuyau bleu',
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Pipe construction',
        fr: 'Construction de canalisation',
      },
      description: {
        en: 'Move a new pipe',
        fr: 'Déplacez un nouveau tuyau',
      },
      position: {
        top: 13,
        left: 55,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'OPTION 1: Move a new pipe so it is partly in its target, in full/flat contact (see Fig. 6 in M10) with the mat',
                fr: 'OPTION 1: Le nouveau tuyau est partiellement dans sa cible, à plat / en contact complet avec le tapis',
              },
              handle: 'm11_pipe_partly_in_target',
              type: 'boolean',
              points: 15,
              images: [
                '2017/m11_end1.jpg',
              ],
            },
            {
              title: {
                en: 'OPTION 2: Move a new pipe so it is completely in its target, in full/flat contact with the mat',
                fr: 'OPTION 2: Le nouveau tuyau est complètement dans sa cible, à plat / en contact complet avec le tapis',
              },
              handle: 'm11_pipe_completely_in_target',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m11_end2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'Optional: Install first in base the optional loop on a blue pipe',
          fr: 'Optionnel: Installez d’abord dans la Base la boucle optionnelle sur un tuyau bleu',
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Sludge',
        fr: 'Boue',
      },
      description: {
        en: 'Move the sludge so it is touching the visible wood of any of the six garden boxes',
        fr: 'Déplacez la Boue afin qu’elle touche le bois visible de n’importe laquelle des 6 jardinières dessinées',
      },
      position: {
        top: 62,
        left: 80,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Sludge touches the visible wood of any of the six garden boxes',
                fr: 'La Boue touche le bois visible de n’importe laquelle des 6 jardinières dessinées',
              },
              handle: 'm12_sludge_touching_wood',
              type: 'boolean',
              points: 30,
              images: [
                '2017/m12_end1.jpg',
                '2017/m12_end2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Flower',
        fr: 'Fleur',
      },
      description: {
        en: 'Make the Flower rise some obvious height and stay there, due only to a big water in the brown pot',
        fr: 'Faites s’élever d’une hauteur évidente et rester élevée la fleur, seulement grâce à une Grande eau dans le pot brun',
      },
      position: {
        top: 40,
        left: 69,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The Flower rises some obvious height and stays there',
                fr: 'La fleur est en position élevée et y reste',
              },
              handle: 'm13_flower_raised',
              type: 'boolean',
              points: 30,
              images: [
                '2017/m13_end1.jpg',
                '2017/m13_end2.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'BONUS: Score flower points as described above with at least one rain in the purple part, touching nothing but the flower model',
                fr: 'BONUS: Marquez les points comme indiqué ci-dessus avec au moins un élément Pluie dans la corolle violette, touchant uniquement le modèle Fleur',
              },
              handle: 'm13_rain_in_purple_part',
              type: 'boolean',
              points: 30,
              images: [
                '2017/m13_bonus.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'The flower rose due only to a big water placed there',
          fr: 'La fleur s’est élevée uniquement grâce à une Grande eau placée dans le pot brun',
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Water well',
        fr: 'Puits',
      },
      description: {
        en: 'Move the water well so it has contact with the mat in it’s target',
        fr: 'Déplacez le puits afin qu’il soit en contact avec le tapis dans sa cible',
      },
      position: {
        top: 45,
        left: 82,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'OPTION 1: The water well is moved so it has contact with the mat and that contact is partly in the water well target',
                fr: 'OPTION 1: Le puits est en contact avec le tapis et ce contact est partiellement dans la cible',
              },
              handle: 'm14_well_partly_in_target',
              type: 'boolean',
              points: 15,
              images: [
                '2017/m14_end1.jpg',
              ],
            },
            {
              title: {
                en: 'OPTION 2: The water well is moved so it has contact with the mat and that contact is completely in the water well target',
                fr: 'OPTION 2: Le puits est en contact avec le tapis et ce contact est complètement dans la cible',
              },
              handle: 'm14_well_completely_in_target',
              type: 'boolean',
              points: 25,
              images: [
                '2017/m14_end2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Fire',
        fr: 'Feu',
      },
      description: {
        en: 'Make the fire drop only by making the firetruck apply direct force to the house’s yellow lever',
        fr: 'Faites descendre le feu seulement en faisant appuyer le camion de pompier sur le levier jaune de la Maison',
      },
      position: {
        top: 18,
        left: 78,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The fire is dropped',
                fr: 'Le Feu est en position basse',
              },
              handle: 'm15_fire_dropped',
              type: 'boolean',
              points: 25,
              images: [
                '2017/m15.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'The fire is dropped only by making the firetruck apply direct force to the house’s yellow lever',
          fr: 'Le feu est descendu seulement grâce à l’action du camion de pompiers sur le levier jaune de la Maison',
        },
      ],
    },
    {
      number: 16,
      title: {
        en: 'Water collection',
        fr: 'Collecte d\'eau',
      },
      description: {
        en: 'Move or catch big water and/or rain water (one rain maximum; no dirty water) so it is touching the mat in the water target. The target may be moved. But the target mustn’t ever reach or cross the white off-limits line. Every water may be touching the target, and/or other water, but anything else',
        fr: 'Déplacez ou prenez des éléments Grande eau et/ou des éléments Pluie (une Pluie maximum; pas d’Eau sale) afin qu’ils touchent le tapis dans la cible. La cible peut être déplacée, mais ne doit jamais atteindre ou franchir la ligne blanche Limite. Chaque Eau/PLuie peut toucher la cible et/ou d’autres éléments Eau/Pluie, mais rien d’autre',
      },
      position: {
        top: 21,
        left: 92,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'OPTION 1: At least one rain is in the target and touches the mat',
                fr: 'OPTION 1: Au moins une Pluie est dans la cible et touche le tapis',
              },
              handle: 'm16_rain_in_target',
              type: 'boolean',
              points: 10,
              images: [
                '2017/m16_end1.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'OPTION 2: One or several big water(s) lie(s) in the target and touches the mat in it',
                fr: 'OPTION 2: Une ou plusieurs Grande eau est dans la cible et y touche le tapis',
              },
              handle: 'm16_big_water_in_target',
              type: 'number',
              max: 6,
              points: 10,
              images: [
                '2017/m16_end2.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'BONUS: Score at least one big water in its target as described above with one on top, which is touching nothing but other water',
                fr: 'BONUS: Marquez les points pour au moins une Grande Eau dans sa cible comme décrit ci-dessus avec une Eau posée dessus qui touche uniquement l’autre Eau',
              },
              handle: 'm16_big_water_stacked',
              type: 'boolean',
              points: 30,
              images: [
                '2017/m16_bonus.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'The big water/the rain water should be moved without the target ever getting to the white off-limits line, even barely',
          fr: 'Les éléments Grande eau/Pluie doivent être déplacés sans que la cible atteigne la ligne blanche Limite, à aucun moment',
        },
        {
          en: 'Water may be touching the target, and/or other water, but not be touching nor guided by anything else',
          fr: 'Les éléments Eau/Pluie peuvent toucher la cible, et/ou d’autres Eaux/Pluie, mais ne peuvent être touchés ou être guidés par rien d’autre',
        },
        {
          en: 'Each big water scores individual',
          fr: 'Chaque élément Eau/Pluie donne des points individuellement',
        },
        {
          en: 'Maximum one bonus can score',
          fr: '(Ce point est absent de la version française)',
        },
      ],
    },
    {
      number: 17,
      title: {
        en: 'Slingshot',
        fr: 'Purificateur slingshot',
      },
      description: {
        en: 'Move the slingshot so it is completely in its target',
        fr: 'Déplacez le purificateur afin qu’il soit complètement dans sa cible',
      },
      position: {
        top: 58,
        left: 94,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The slingshot it is completely in its target',
                fr: 'Le purificateur est complètement dans sa cible',
              },
              handle: 'm17_slingshot_in_target',
              type: 'boolean',
              points: 20,
              images: [
                '2017/m17_end.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'BONUS: Score slingshot points as described above with the dirty water and a rain completely in the slingshot target',
                fr: 'BONUS: Marquez les points pour le purificateur comme indiqué ci-dessus avec l’Eau sale et la Pluie complètement dans la cible',
              },
              handle: 'm17_dirty_water_and_rain_in_target',
              type: 'boolean',
              points: 15,
              images: [
                '2017/m17_bonus1.jpg',
                '2017/m17_bonus2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 18,
      title: {
        en: 'Faucet',
        fr: 'Robinet',
      },
      description: {
        en: 'Make the water level obviously more blue than white as seen from above the cup, only by turning the yellow faucet handle',
        fr: 'Faites apparaître le niveau de l’eau clairement plus bleu que blanc, en vue depuis le dessus de la tasse, seulement en tournant la poignée jaune du robinet',
      },
      position: {
        top: 76,
        left: 92,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The water level is obviously more blue than white as seen from above the cup',
                fr: 'Le niveau d’eau est clairement plus bleu que blanc en vue de dessus de la tasse',
              },
              handle: 'm18_water_obviously_blue',
              type: 'boolean',
              points: 25,
              images: [
                '2017/m18_end1.jpg',
                '2017/m18_end2.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'The water level is changed only by turning the yellow faucet handle',
          fr: 'Le niveau d’eau a été changé seulement en tournant la poignée du robinet',
        },
      ],
    },
    {
      number: null,
      title: {
        en: 'Penalties',
        fr: 'Pénalités',
      },
      description: {
        en: 'In the event of application of rule R14, the referee places one of the removed samples in the white triangle, in the southeast, as a permanent/untouchable interruption penalty. You can get up to 6 such penalties',
        fr: 'Dans le cas où la règle R14 (Interruption) s’applique, l’arbitre place l’un des disques dans le triangle blanc, en tant que pénalité permanente et intouchable. Vous pouvez avoir jusqu’à 6 pénalités',
      },
      position: {
        top: 83,
        left: 71,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Penalty points',
                fr: 'Points de pénalité',
              },
              handle: 'penalties',
              type: 'number',
              max: 6,
              points: -5,
              images: [
                '2017/penalties.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'After the match the referee keeps the not given penalties. They aren’t part of the game anymore',
          fr: 'A la fin du match l’arbitre garde les pénalités non données. Elles ne font plus partie du jeu',
        },
      ],
    },
  ],
};

export {data};
