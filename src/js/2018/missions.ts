import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2018,
    slug: 'into-orbit',
    title: 'Into Orbit',
    hashtag: '#IntoOrbit',
    logo: '2018/into-orbit-logo.png',
    field: '2018/into-orbit-field.jpg',
    colors: {
      main: '#cb2128',
      missions: '#cb2128',
      scoring: '#f16518',
      penalties: '#442b82',
    },
  },
  warnings: {
    unknown: {
      en: 'The calculator returned an unknown warning: %warning%',
      fr: 'Le calculateur a retourné un avertissement non géré: %warning%',
    },
    m05_gas_requirements_not_met: {
      mission: 5,
      en: 'First part of M05 is required to score with gas sample',
      fr: 'Vous devez remplir la première partie de M05 pour pouvoir marquer avec l\'échantillon de gaz',
    },
    m05_water_requirements_not_met: {
      mission: 5,
      en: 'First part of M05 is required to score with water sample',
      fr: 'Vous devez remplir la première partie de M05 pour pouvoir marquer avec l\'échantillon d\'eau',
    },
    m14_max_combinations_exceeded: {
      mission: 14,
      en: 'You can\'t place more than 2 meteoroids between the two options of M14',
      fr: 'Vous ne pouvez pas placer plus de 2 météorites entre les deux options de M14',
    },
  },
  missions: [
    {
      number: 1,
      title: {
        en: 'Space travel',
        fr: 'Voyage spacial',
      },
      description: {
        en: 'The robot needs to send payload rockets (carts) rolling down the space travel ramp. The first cart is pre-set and ready to go, but the robot needs to load the other two from base',
        fr: 'Le robot doit allumer les fusées des charges pour faire rouler les chariots au bas de la rampe de lancement. Le premier chariot est pré-placé et prêt à partir, mais le robot doit charger les deux autres depuis la Base',
      },
      position: {
        top: 30,
        left: 10,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Vehicle payload rolled down the space travel ramp',
                fr: 'Charge utile "Véhicule" roulée au bas de la rampe',
              },
              handle: 'm01_vehicle',
              type: 'boolean',
              points: 22,
              images: [
                '2018/m01-vehicle.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Supply payload rolled down the space travel ramp',
                fr: 'Charge utile "Equipement" roulée au bas de la rampe',
              },
              handle: 'm01_supply',
              type: 'boolean',
              points: 14,
              images: [
                '2018/m01-supply.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Crew payload rolled down the space travel ramp',
                fr: 'Charge utile "Equipage" roulée au bas de la rampe',
              },
              handle: 'm01_crew',
              type: 'boolean',
              points: 10,
              images: [
                '2018/m01-crew.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'For each roll, the cart must be independent by the time it reaches the first track connec-tion ramp. Note: Only allowed method. Must be oberserved by the referee',
          fr: 'Pour chaque lancer, le chariot doit être indépendant lorsqu\'il atteint la connexion de la première rampe. Note: Seule méthode autorisée. Doit être observé par l\'arbitre',
        },
        {
          en: 'Start each payload clearly rolling down the space travel ramp. Note: Only allowed method. Must be oberserved by the referee',
          fr: '(contrainte non traduite)',
        },
        {
          en: 'As a mission requirement in any mission, the word "independent" means "not in con-tact with any of your equipment. As long as the cart clearly rolls independently past the first track connection, it\'s okay if it doesn\'t roll all the way east',
          fr: 'Comme pour toute mission, l\'adjectif "indépendant" signifie que l\'objet n\'est en contact avec aucun de vos équipements. Tant que le chariot roule clairement indépendamment au-delà de la connexion de la première rampe, c\'est bon même s\'il ne roule pas jusqu\'au bout est de la rampe',
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Solar panel array',
        fr: 'Alignement de panneaux solaires',
      },
      description: {
        en: 'Solar panels need to be angled toward or away from you, depending on strategy and conditions',
        fr: 'Les panneaux solaires doivent être orientés vers vous ou opposés à vous, selon votre stratégie et vos conditions',
      },
      position: {
        top: 16,
        left: 18,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Both solar panels are angled toward the same field',
                fr: 'Les deux panneaux solaires sont orientés vers le même terrain',
              },
              handle: 'm02_same',
              type: 'boolean',
              points: 22,
              images: [
                '2018/m02.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Your solar panel is angled toward the other team\'s field',
                fr: 'Votre panneau solaire est orienté vers le terrain de l\'autre équipe',
              },
              handle: 'm02_other_team',
              type: 'boolean',
              points: 18,
              images: [
                '2018/m02.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Results must be visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 3,
      title: {
        en: '3D printing',
        fr: 'Impression 3D',
      },
      description: {
        en: 'The robot needs to get a regolith core sample and place it into the 3D printer, which will cause the 2 × 4 brick to pop out. The ejected 2 × 4 brick can then be delivered elsewhere for more points',
        fr: 'Le robot doit prendre un échantillon de régolithe et le placer sur l\'imprimante 3D, ce qui fera sortir la brique 2 x 4. La brique 2 x 4 éjectée peut ensuite être déposée ailleurs pour obtenir plus de points',
      },
      position: {
        top: 21,
        left: 36,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The 2 × 4 brick ejected and completely in the northeast planet area',
                fr: 'Brique 2 × 4 éjectée et complètement dans la zone nord-est de la planète',
              },
              handle: 'm03_northeast',
              type: 'boolean',
              points: 22,
              images: [
                '2018/m03-northeast.jpg',
              ],
            },
            {
              title: {
                en: 'The 2 × 4 brick ejected and not completely in the northeast planet area',
                fr: 'Brique 2 × 4 éjectée et pas complètement dans la zone nord-est de la planète',
              },
              handle: 'm03_ejected',
              type: 'boolean',
              points: 18,
              images: [
                '2018/m03-ejected.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Results must be visible at the end of the match.',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'Eject the 2 × 4 brick by placing a regolith core sample into the 3D printer. Only allowed method. Must be observed by the referee',
          fr: 'Seule méthode autorisée: Ejecter la brique rouge en plaçant un morceau de régolithe dans l\'imprimante 3D. Cette manière de faire doit être observée par l\'arbitre',
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Crater crossing',
        fr: 'Traverse d\'un cratère',
      },
      description: {
        en: 'The robot or whatever agent-craft it sends out needs to cross the craters model completely, by driving directly over it. Not near it. Not around it',
        fr: 'Le robot, ou tout autre véhicule qu\'il envoie, doit traverser le cratère entièrement en passant directement au travers (pas à côté, ni en le contournant)',
      },
      position: {
        top: 33,
        left: 25,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Robot or agent-craft crossed the craters model completely',
                fr: 'Le robot ou son émissaire passe le cratère complètement',
              },
              handle: 'm04_crossed',
              type: 'boolean',
              points: 20,
              images: [
                '2018/m04.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'All weight-bearing features of the crossing equipment must cross completely between the towers. Only allowed method. Must be oberserved by the referee',
          fr: 'Tout le véhicule envoyé pour la traversée doit traverser le cratère entièrement en passant entre les deux tours. Seule méthode autorisée - doit être observée par l\'arbitre',
        },
        {
          en: 'Crossing must be from east to west, and make it completely past the flattened gate. Only allowed method. Must be oberserved by the referee',
          fr: 'La traversée doit se faire d\'est en ouest et le véhicule doit avoir complètement passé la barrière baissée. Seule méthode autorisée - doit être observée par l\'arbitre',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Extraction',
        fr: 'Extraction',
      },
      description: {
        en: 'The robot needs to get all the core samples out of the core site model, then it has options for what to do with them as described here, and in mission M03',
        fr: 'Le robot doit récupérer tous les échantillons de ressource en les extrayant du site. Il peut ensuite disposer de ces éléments comme décrit ci-dessous et dans la mission M03',
      },
      position: {
        top: 53,
        left: 32,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Move all four core samples so they are no longer touching the axle that held them in the core site model',
                fr: 'Déplacer les 4 échantillons pour qu\'ils ne touchent plus l\'axe du site principal',
              },
              handle: 'm05_extracted',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m05.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Place the gas core sample so it is touching the mat, and completely in the lander\'s target circle',
                fr: 'Placer l\'échantillon de gaz pour qu\'il touche le tapis de jeu et qu\'il soit complètement dans la cible d\'atterrissage',
              },
              handle: 'm05_gas_target',
              type: 'boolean',
              points: 12,
              images: [
                '2018/m05-gas-target.jpg',
              ],
            },
            {
              title: {
                en: 'Place the gas core sample completely in base',
                fr: 'Placer l\'échantillon de gaz complètement dans la Base',
              },
              handle: 'm05_gas_base',
              type: 'boolean',
              points: 10,
              images: [
                '2018/m05-gas-base.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Place the water core sample so it is supported only by the food growth chamber',
                fr: 'Placer l\'échantillon d\'eau pour qu\'il ne soit plus supporté que par la chambre de culture de nourriture',
              },
              handle: 'm05_water',
              type: 'boolean',
              points: 8,
              images: [
                '2018/m05-water.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Results must be visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Space station modules',
        fr: 'Modules de la station spatiale',
      },
      description: {
        en: 'The robot needs to remove and insert modules among the habitation hub\'s port holes',
        fr: 'Le robot doit enlever et insérer des parties de la station spatiale',
      },
      position: {
        top: 70,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Move the cone module completely into base',
                fr: 'Enlever le module conique et l\'apporter dans la base',
              },
              handle: 'm06_cone',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m06-cone.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Insert the tube module into the habitation hub port, west side',
                fr: 'Insérer le module tubulaire dans le connecteur du module principal, côté ouest',
              },
              handle: 'm06_tube',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m06-tube.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Transfer/insert the dock module into the habitation hub port, east side',
                fr: 'Transférer/insérer le module de stockage dans le connecteur du module principal, du côté est',
              },
              handle: 'm06_dock',
              type: 'boolean',
              points: 14,
              images: [
                '2018/m06-dock.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Results must be visible at the end of the match',
          fr: 'Visible à la fin du match',
        },
        {
          en: 'Inserted modules must not be touching anything except the habitation hub. Needs to be visible at the end of the match',
          fr: 'Les modules ne doivent toucher que le module principal et rien d\'autre. Visible à la fin du match',
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Space walk emergency',
        fr: 'Urgence lors d\'une sortie spatiale',
      },
      description: {
        en: 'The robot needs to get Gerhard\'s body into the airlock chamber',
        fr: 'Le robot doit mettre le corps de Gérard dans la chambre sas',
      },
      position: {
        top: 50,
        left: 48,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Astronaut completely in the habitation hub\'s airlock chamber',
                fr: 'Astronaute complètement dans le sas',
              },
              handle: 'm07_completely',
              type: 'boolean',
              points: 22,
              images: [
                '2018/m07-completely.jpg',
              ],
            },
            {
              title: {
                en: 'Astronaut partly in the habitation hub\'s airlock chamber',
                fr: 'Astronaute partiellement dans la chambre',
              },
              handle: 'm07_partly',
              type: 'boolean',
              points: 18,
              images: [
                '2018/m07-partly.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'For this mission, the word "body" includes all parts except the loop',
          fr: 'Pour cette mission, le mot "Corps" comprend toutes ses parties, à l\'exception de la boucle',
        },
        {
          en: 'Results must be visible at the end of the match.',
          fr: 'Le résultat doit être visible à la fin du match',
        },
      ],
    },
    {
      number: 8,
      title: {
        en: 'Aerobic exercise',
        fr: 'Aerobic',
      },
      description: {
        en: 'The robot needs to repeatedly move one or both of the exercise machine\'s handle assemblies to make the pointer advance',
        fr: 'Le robot doit déplacer l\'une ou les deux poignées de la machine pour faire avancer le pointeur',
      },
      position: {
        top: 16,
        left: 72,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Get the pointer tip completely in orange, or partly covering either of orange\'s end-borders',
                fr: 'Amener le pointeur complètement dans l\'orange, ou couvrant au moins en partie au moins les bords oranges',
              },
              handle: 'm08_orange',
              type: 'boolean',
              points: 22,
              images: [
                '2018/m08-orange.jpg',
              ],
            },
            {
              title: {
                en: 'Get the pointer tip completely in white',
                fr: 'Le pointeur est complètement dans la partie blanche',
              },
              handle: 'm08_white',
              type: 'boolean',
              points: 20,
              images: [
                '2018/m08-white.jpg',
              ],
            },
            {
              title: {
                en: 'Get the pointer tip completely in gray, or partly covering either of gray\'s end-borders',
                fr: 'Le pointeur est complètement dans le gris, ou couvre en partie les bords de la zone grise',
              },
              handle: 'm08_grey',
              type: 'boolean',
              points: 18,
              images: [
                '2018/m08-grey.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Advance the exercise machine\'s pointer along its dial by moving one or both of the handle assemblies. Only allowed method. Must be oberserved by the referee',
          fr: 'Faire avancer le pointeur en déplaçant une ou les deux poignées de machine. Seule méthode permise, l\'arbitre doit pouvoir l\'observer',
        },
        {
          en: 'Results must be visible at the end of the match',
          fr: 'Les résultats doivent être visibles à la fin du match',
        },
      ],
    },
    {
      number: 9,
      title: {
        en: 'Strength exercise',
        fr: 'Exercice de force',
      },
      description: {
        en: 'The robot needs to lift the strength bar to scoring height',
        fr: 'Le robot doit lever la barre de force jusqu\'à la hauteur suffisante pour marquer les points',
      },
      position: {
        top: 16,
        left: 58,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Lift the strength bar so the tooth-strip\'s 4th hole comes at least partly into view as shown',
                fr: 'Lever la barre de force afin que le 4e trou de la plaque dentée devienne au moins partiellement visible comme montré ci-dessous',
              },
              handle: 'm09_lifted',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m09.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Results must be visible at the end of the match',
          fr: 'Les résultats doivent être visibles à la fin du match',
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Food production',
        fr: 'Production de nourriture',
      },
      description: {
        en: 'Move the push bar the right distance at the right speed, to get into the green scoring range',
        fr: 'Déplacez la barre sur la bonne distance et à la bonne vitesse, pour atteindre la zone verte qui donne des points',
      },
      position: {
        top: 35,
        left: 65,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Spin the food growth chamber\'s colors so the gray weight is dropped after green, but before tan, by moving the push bar',
                fr: 'Tourner la chambre jusqu\'à ce que le poids gris tombe, après le vert, mais avant le marron, en poussant sur la barre',
              },
              handle: 'm10_green',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m10.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Result must be visible at the end of the match',
          fr: 'Les résultats doivent être visibles à la fin du match',
        },
        {
          en: 'Spin the food growth chamber\'s colors must be spun by moving the push bar. Only allowed method. Must be oberserved by the referee',
          fr: 'La chambre de culture doit être pivotée en poussant la barre. Seule méthode permise, l\'arbitre doit pouvoir l\'observer',
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Escape velocity',
        fr: 'Vitesse d\'echappement',
      },
      description: {
        en: 'The robot needs to impact the strike pad hard enough to keep the spacecraft from dropping back down',
        fr: 'Le robot doit frapper la plaque d\'impact assez fort pour empêcher le vaisseau de retomber',
      },
      position: {
        top: 85,
        left: 65,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Get the spacecraft to go so fast and high that it stays up, by pressing/hitting the strike pad',
                fr: 'Faire partir le vaisseau si vite et haut qu\'il reste en position haute, en pressant/frappant la plaque d\'impact',
              },
              handle: 'm11_high',
              type: 'boolean',
              points: 24,
              images: [
                '2018/m11.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Result must be visible at the end of the match',
          fr: 'Les résultats doivent être visibles à la fin du match',
        },
        {
          en: 'Activate the spacecraft by pressing/hitting the strike pad. Only allowed method. Must be oberserved by the referee',
          fr: 'Activer le vaisseau en pressant/frappant la plaque d\'impact. Seule méthode permise, l\'arbitre doit pouvoir l\'observer',
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Stellite orbits',
        fr: 'Orbites de satellite',
      },
      description: {
        en: 'The robot needs to move one or more satellites to the outer orbit',
        fr: 'Le robot doit placer un ou plusieurs satellites sur l\'orbite extérieure',
      },
      position: {
        top: 40,
        left: 80,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Move any part of a satellite on or above the area between the two lines of the outer orbit',
                fr: 'Déplacer l\'un ou l\'autre des satellites sur ou au-delà de l\'orbite extérieure',
              },
              handle: 'm12_satellites',
              type: 'number',
              max: 3,
              points: 8,
              images: [
                '2018/m12.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Result must be visible at the end of the match',
          fr: 'Le résultat doit être visible à la fin du match',
        },
      ],
    },
    {
      number: 13,
      title: {
        en: 'Observatory',
        fr: 'Observatoire',
      },
      description: {
        en: 'Rotate the observatory to a precise direction',
        fr: 'Tournez l\'observatoire dans une direction précise',
      },
      position: {
        top: 70,
        left: 80,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Get the pointer tip completely in orange, or partly covering either of orange\'s end-borders',
                fr: 'Positionner l\'indice du pointeur complètement dans l\'orange, ou pour qu\'il couvre une des extrémité de cette zone',
              },
              handle: 'm13_orange',
              type: 'boolean',
              points: 20,
              images: [
                '2018/m13-orange.jpg',
              ],
            },
            {
              title: {
                en: 'Get the pointer tip completely in white',
                fr: 'Positionner l\'indice du pointeur complètement dans le blanc',
              },
              handle: 'm13_white',
              type: 'boolean',
              points: 18,
              images: [
                '2018/m13-white.jpg',
              ],
            },
            {
              title: {
                en: 'Get the pointer tip completely in gray, or partly covering either of gray\'s end-borders',
                fr: 'Positionner l\'indice du pointeur complètement dans le gris ou s\'il couvre partiellement une des extrémités de cette zone',
              },
              handle: 'm13_grey',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m13-grey.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Result must be visible at the end of the match',
          fr: 'Le résultat est visible à la fin du match',
        },
      ],
    },
    {
      number: 14,
      title: {
        en: 'Meteroid deflection',
        fr: 'Déviation d\'une météorite',
      },
      description: {
        en: 'From west of the free-line, send one or both meteoroids independently to the meteoroid catcher',
        fr: 'De l\'ouest de la ligne, envoyez une ou deux météorites, indépendamment dans le piège',
      },
      position: {
        top: 50,
        left: 90,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Meteoroid(s) touch(es) the mat in the center section of the meteoroid catcher',
                fr: 'La météorite touche le tapis dans la section centrale du piège',
              },
              handle: 'm14_center',
              type: 'number',
              max: 2,
              points: 12,
              images: [
                '2018/m14-center.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Meteoroid(s) touch(es) the mat in either side section of the meteoroid catcher',
                fr: 'La météorite touche une des autres sections du piège',
              },
              handle: 'm14_side',
              type: 'number',
              max: 2,
              points: 8,
              images: [
                '2018/m14-side.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Result must be visible at the end of the match',
          fr: 'Le résultat doit être visible à la fin du match',
        },
        {
          en: 'The meteoroids need to be sent over the free-line to touch the mat in the meteoroid catcher. Only allowed method. Must be oberserved by the referee',
          fr: '(contrainte non traduite)',
        },
        {
          en: 'The meteoroids must be hit/released while they are clearly and completely west of the free-line. Only allowed method. Must be oberserved by the referee',
          fr: 'Les météorites doivent être poussées ou heurtées alors qu\'elles sont clairement et complètement à l\'ouest de la ligne de libération',
        },
        {
          en: 'While between hit/release and scoring position, the meteoroid must be clearly independent. Only allowed method. Must be oberserved by the referee',
          fr: 'Les météorites doivent être envoyées de l\'autre côté de la ligne libre, elles doivent être autonomes, aussitôt la ligne franchie. Méthode unique autorisée, surveillée par l\'arbitre',
        },
        {
          en: 'If ever the ring-set meteoroid is off its ring, you may remove the ring from the field by hand. This is a special exception to the rules',
          fr: '(contrainte non traduite)',
        },
      ],
    },
    {
      number: 15,
      title: {
        en: 'Lander touch-down',
        fr: 'Contact au sol de l\'atterrisseur',
      },
      description: {
        en: 'Get the lander to one of its targets intact, or at least get it to base',
        fr: 'Faites poser l\'atterrisseur sur une de ces cibles en douceur (un seul morceau) ou au moins dans la base',
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
                en: 'Move the lander to be intact, touching the mat, and completely in its target circle',
                fr: 'Atterrisseur intact qui touche le tapis et complètement dans la cible circulaire',
              },
              handle: 'm15_target',
              type: 'boolean',
              points: 22,
              images: [
                '2018/m15-target.jpg',
              ],
            },
            {
              title: {
                en: 'Move the lander to be intact, touching the mat, and completely in the northeast planet area',
                fr: 'Atterrisseur intact qui touche le tapis et complètement dans la zone de la planète nord-est',
              },
              handle: 'm15_planet',
              type: 'boolean',
              points: 20,
              images: [
                '2018/m15-planet.jpg',
              ],
            },
            {
              title: {
                en: 'Move both parts of the lander completely into base',
                fr: 'Déplacez les deux parties de l\'atterrisseur dans la base',
              },
              handle: 'm15_base',
              type: 'boolean',
              points: 16,
              images: [
                '2018/m15-base.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Result must be visible at the end of the match',
          fr: 'Le résultat doit être visible à la fin du match',
        },
        {
          en: 'The lander is "intact" if its parts are connected by at least two of its four tan location axles',
          fr: 'L\'atterrisseur est "intact" si ses parties sont connectées par au moins deux de ses axes beiges',
        },
      ],
    },
    {
      number: null,
      title: {
        en: 'Interruption penalties',
        fr: 'Pénalités d\'interruption',
      },
      description: {
        en: 'If you interrupt the robot: minus 3 each time',
        fr: 'Si vous interrompez le robot : moins 3 points à chaque fois',
      },
      position: {
        top: 85,
        left: 90,
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
              points: -3,
              images: [
                '2018/penalties.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Interruption needs to be observed by the referee',
          fr: 'L\'arbitre doit pouvoir observer l\'interruption',
        },
        {
          en: 'Upon penalty, the referee will place one penalty disc in the southeast triangle as a permanent interruption marker',
          fr: 'S\'il attribue une pénalité, l\'arbitre place un disque dans le triangle sud-est pour marquer l\'interruption',
        },
        {
          en: 'You can get up to six such penalties',
          fr: 'Vous pouvez avoir un maximum de 6 pénalités',
        },
        {
          en: 'If a penalty disc comes off the triangle, it is simply returned, with no effect on score',
          fr: 'Si un disque sort du triangle, il y est simplement remis et ça ne change pas le score',
        },
      ],
    },
  ],
};

export {data};
