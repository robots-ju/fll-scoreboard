import {Year} from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2016,
    slug: 'animal-allies',
    title: 'Animal Allies',
    hashtag: '#AnimalAllies',
    logo: '2016/animal-allies-logo.png',
    field: '2016/animal-allies-field.jpg',
    colors: {
      main: '#89cf25',
      missions: '#0da8d2',
      scoring: '#89cf25',
      penalties: '#ff6100',
    },
  },
  warnings: {},
  missions: [
    {
      number: 1,
      title: {
        en: 'Shark-transport',
        fr: 'Transport de requin',
      },
      description: {
        en: 'Move the shark to her new home not touching her tank’s walls',
        fr: 'Déplacez le requin jusqu’à son nouveau foyer sans qu’il touche les parois de son bac',
      },
      position: {
        top: 8,
        left: 28,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Tank and shark are completely in target 1',
                fr: 'Le bac et le requin sont complètement dans la cible 1',
              },
              handle: 'm01_tank_and_shark_in_target1',
              type: 'boolean',
              points: 7,
              images: [
                '2016/m01_end1.jpg',
              ],
            },
            {
              title: {
                en: 'Tank and shark are completely in target 2',
                fr: 'Le bac et le requin sont complètement dans la cible 2',
              },
              handle: 'm01_tank_and_shark_in_target2',
              type: 'boolean',
              points: 10,
              images: [
                '2016/m01_end2.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Added only if a target score is earned - shark is touching only the tank floor and no wall',
                fr: 'Ajouté uniquement si les points sont obtenus pour le placement du bac - le requin touche seulement le fond du bac et pas les parois',
              },
              handle: 'm01_shark_not_touching_wall',
              type: 'boolean',
              points: 20,
              images: [],
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
          en: 'Nothing is ever allowed to touch the shark except the tank !',
          fr: 'Rien ne doit toucher le requin à l’exception du bac, à aucun moment !',
        },
      ],
    },
    {
      number: 2,
      title: {
        en: 'Service dog',
        fr: 'Chien-guide',
      },
      description: {
        en: 'Drive past the visually impaired man, and the dog will do her job',
        fr: 'Passez devant l’homme handicapé de la vue, et le chien fera son travail',
      },
      position: {
        top: 12,
        left: 42,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The warning fence is down',
                fr: 'La barrière d’avertissement est abaissée',
              },
              handle: 'm02_fence_is_down',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m02_end.jpg',
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
          en: 'The fence is positioned horizontally on the mat because the robot has completely crossed it from the west, after traveling between the barriers',
          fr: 'La barrière doit être positionnée horizontalement parce que le robot l’a complètement franchie depuis l’ouest, après être passé entre les barrières',
        },
      ],
    },
    {
      number: 3,
      title: {
        en: 'Animal conservation',
        fr: 'Préservation des animaux',
      },
      description: {
        en: 'During the match, participating robots make the trays switch places. A switch is officially successful when the red axle causes the system to stop. Robots then have the option of removing the received animal and replacing it with a different animal for switching. The referee resets the red axle',
        fr: 'Pendant le match, les robots participants vont provoquer l’échange des plateaux. Un échange est officiellement réussi quand l’axe rouge provoque l’arrêt du système. Les robots ont alors l’option de déplacer l’animal reçu et de le remplacer par un animal différent pour l’échange. L’arbitre replace l’axe rouge',
      },
      position: {
        top: 8,
        left: 55,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Two identical animals are completely on the same side*',
                fr: 'Deux animaux identiques sont complètement du même côté*',
              },
              handle: 'm03_pairs_of_animals',
              type: 'number',
              max: 5,
              points: 20,
              images: [
                '2016/m03_end.jpg',
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
          en: 'Both teams get points for all pairs',
          fr: 'Les deux équipes obtiennent les points pour toutes les paires',
        },
        {
          en: 'Each pair must be created through rotation of the animal conservationmission model',
          fr: 'Chaque paire doit être créée en utilisant le modèle de mission de préservation des animaux',
        },
        {
          en: '*Side = is anywhere completely south of the symmetric line between fields, including that field’s storage areas',
          fr: '*Côté = tout endroit complètement au sud de la ligne symétrique entre les deux terrains, y compris la zone de stockage de ce terrain',
        },
      ],
    },
    {
      number: 4,
      title: {
        en: 'Feeding',
        fr: 'Alimentation',
      },
      description: {
        en: 'Deliver the food from the refrigerator to target animal areas',
        fr: 'Livrez la nourriture du réfrigérateur aux zones d’animaux cibles',
      },
      position: {
        top: 21,
        left: 33,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'A piece of food is completely in a target area',
                fr: 'Un élément de nourriture est complètement dans une zone cible',
              },
              handle: 'm04_pieces_of_food',
              type: 'number',
              max: 8,
              points: 10,
              images: [
                '2016/m04_end.jpg',
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
          en: 'Areas do not include the rectangles',
          fr: 'Les zones n’incluent pas les rectangles',
        },
        {
          en: 'If multiple pieces of food are in one area, all must match each other',
          fr: 'Si plusieurs éléments de nourriture sont dans une zone, ils doivent tous correspondre',
        },
      ],
    },
    {
      number: 5,
      title: {
        en: 'Biomimicry',
        fr: 'Biomimétisme',
      },
      description: {
        en: 'White (mechanical) gecko on the biomimicry Wall, and/or by seeing if the robot itself can get onto the wall',
        fr: 'Le gecko blanc (mécanique) est sur le mur de biomimétisme, et/ou on constate que le robot est également accroché au mur de biomimétisme',
      },
      position: {
        top: 20,
        left: 79,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The biomimicry wall completely supports all the weight of the white gecko',
                fr: 'Le mur de biomimétisme supporte complètement tout le poids du gecko blanc',
              },
              handle: 'm05_white_gecko_on_wall',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m05_end1.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The biomimicry wall completely supports all the weight of the robot',
                fr: 'Le mur de biomimétisme supporte complètement tout le poids du robot',
              },
              handle: 'm05_robot_on_wall',
              type: 'boolean',
              points: 32,
              images: [
                '2016/m05_end2.jpg',
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
          en: 'For an object to score, no part of it may be in contact with anything but the biomimicry wall and/or green gecko, except two scoring objects may be in contact with each other',
          fr: 'Pour qu’un objet rapporte des points, aucune de ses parties ne doit être en contact avec autre chose que le mur de biomimétisme et/ou le gecko vert, à l’exception de deux objets rapportant des points qui peuvent être en contact l’un avec l’autre',
        },
      ],
    },
    {
      number: 6,
      title: {
        en: 'Milking automation',
        fr: 'Traite automatisée',
      },
      description: {
        en: 'Guide the cow into the machine, then spin the machine until milk comes out. If you spin too far, manure also comes out',
        fr: 'Guidez la vache dans la machine, puis faites tourner la machine jusqu’à ce que le lait sorte. Si vous tournez trop loin, le fumier sortira aussi',
      },
      position: {
        top: 30,
        left: 60,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'milk and manure have all rolled out',
                fr: 'le lait et le fumier sont sortis de la machine',
              },
              handle: 'm06_milk_and_manure_out',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m06_end1.jpg',
              ],
            },
            {
              title: {
                en: 'milk has all rolled out, but not manure',
                fr: 'le lait est sorti, mais pas le fumier',
              },
              handle: 'm06_milk_only_out',
              type: 'boolean',
              points: 20,
              images: [
                '2016/m06_end2.jpg',
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
          en: 'The robot’s only movement of the milk and/or manure came by moving the red lever',
          fr: 'L’unique action du robot pour déplacer le lait et/ou le fumier vient du mouvement du levier rouge',
        },
      ],
    },
    {
      number: 7,
      title: {
        en: 'Panda release',
        fr: 'Libération des pandas',
      },
      description: {
        en: 'Convert the panda’s scene from facility care and observation to open wilderness',
        fr: 'Convertissez la station des pandas de centre de soin et d’observation en milieu sauvage',
      },
      position: {
        top: 46,
        left: 81,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The slider looks fully open clockwise',
                fr: 'La partie coulissante paraît complètement ouverte dans le sens des aiguilles d’une montre',
              },
              handle: 'm07_slider_open',
              type: 'boolean',
              points: 10,
              images: [
                '2016/m07_end.jpg',
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
      number: 8,
      title: {
        en: 'Camera recovery',
        fr: 'Récupération de la caméra',
      },
      description: {
        en: 'Bring the camera into base',
        fr: 'Amenez la camera dans la base',
      },
      position: {
        top: 65,
        left: 79,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The camera is completely in base',
                fr: 'La caméra est complètement dans la base',
              },
              handle: 'm08_camera_in_base',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m08_end.jpg',
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
      number: 9,
      title: {
        en: 'Training and research',
        fr: 'Entraînement et recherche',
      },
      description: {
        en: 'Bring the trainer and the dog and/or the zoologist and/or the manure samples into the training & research area',
        fr: 'Amenez l’entraîneur et le chien et/ou le Zoologiste et/ou les pièces de Fumier dans la Zone d’entraînement et de recherche',
      },
      position: {
        top: 63,
        left: 51,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The dog & trainer are completely in the training & research area',
                fr: 'Le chien et l’entraîneur sont complètement dans la zone d’entraînement et de recherche',
              },
              handle: 'm09_dog_and_trainer_in_area',
              type: 'boolean',
              points: 12,
              images: [
                '2016/m09_end1.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The zoologist is completely in the training & research area',
                fr: 'Le zoologiste est complètement dans la zone d’entraînement et de recherche',
              },
              handle: 'm09_zoologist_in_area',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m09_end2.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The manure samples are completely in the training & research area',
                fr: 'Les pièces de fumier sont complètement dans la zone d’entraînement et de recherche',
              },
              handle: 'm09_pieces_of_manure_in_area',
              type: 'number',
              max: 7,
              points: 5,
              images: [
                '2016/m09_end3.jpg',
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
          en: 'Only one manure sample may be transported at a time',
          fr: 'Vous pouvez transporter un seul élément de fumier à la fois',
        },
        {
          en: 'Only disc-shaped manure counts as samples',
          fr: 'Seules les pièces de fumier en forme de disque comptent',
        },
      ],
    },
    {
      number: 10,
      title: {
        en: 'Bee keeping',
        fr: 'Apiculture',
      },
      description: {
        en: 'Place the bee on the beehive and get the honey out',
        fr: 'Placez l’abeille sur la ruche et sortez le miel',
      },
      position: {
        top: 32,
        left: 46,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The bee is on the beehive and there is no honey in the beehive',
                fr: 'L’abeille est sur la ruche et il n’y a pas de miel dans la ruche',
              },
              handle: 'm10_bee_on_beehive',
              type: 'boolean',
              points: 12,
              images: [
                '2016/m10_end1.jpg',
              ],
            },
            {
              title: {
                en: 'The bee is on the beehive and the honey is completely in base',
                fr: 'L’abeille est sur la ruche et le miel est complètement dans la base',
              },
              handle: 'm10_bee_on_beehive_and_honey_in_base',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m10_end2.jpg',
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
          en: 'Only one option counts',
          fr: 'Vous ne pouvez valider qu’une seule option',
        },
      ],
    },
    {
      number: 11,
      title: {
        en: 'Prosthesis',
        fr: 'Prothèse',
      },
      description: {
        en: 'Fit the prosthesis where the legs of the pet (our little friend) should be, and send the pet to its place on the farm',
        fr: 'Fixez la prothèse là où les pattes arrières de votre animal de compagnie devraient être et envoyez l’animal à sa place à la ferme',
      },
      position: {
        top: 37,
        left: 28,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The prosthesis is fitted to the pet AND not held by the ref',
                fr: 'La prothèse est fixée à l’animal ET l’animal n’est pas détenu par l’arbitre',
              },
              handle: 'm11_prosthesis_fitted',
              type: 'boolean',
              points: 9,
              images: [
                '2016/m11_end1.jpg',
              ],
            },
            {
              title: {
                en: 'The prosthesis is fitted to the pet AND the pet is completely in its farm target',
                fr: 'La prothèse est fixée à l’animal ET l’animal est complètement dans la zone de ferme.',
              },
              handle: 'm11_prosthesis_fitted_and_in_farm',
              type: 'boolean',
              points: 15,
              images: [
                '2016/m11_end2.jpg',
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
          en: 'Only one option counts',
          fr: 'Vous ne pouvez valider qu’une seule option',
        },
      ],
    },
    {
      number: 12,
      title: {
        en: 'Seal',
        fr: 'Phoque',
      },
      description: {
        en: 'Bring the seal into base',
        fr: 'Amenez le phoque dans la base',
      },
      position: {
        top: 75,
        left: 72,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The seal is completely in base and not broken',
                fr: 'Le phoque est complètement dans la base et pas cassé',
              },
              handle: 'm12_seal_in_base',
              type: 'boolean',
              points: 1,
              images: [
                '2016/m12_end.jpg',
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
        en: 'Milk in base',
        fr: 'Lait dans la base',
      },
      description: {
        en: 'Bring all 3 milk container into base',
        fr: 'Amenez les 3 bidons de lait dans la Base',
      },
      position: {
        top: 45,
        left: 63,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'All 3 milk container are completely in base',
                fr: 'Les 3 bidons de lait sont complètement dans la base',
              },
              handle: 'm13_milk_in_base',
              type: 'boolean',
              points: 1,
              images: [
                '2016/m13_end.jpg',
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
      number: 14,
      title: {
        en: 'Milk on the ramp',
        fr: 'Lait sur la rampe',
      },
      description: {
        en: 'Bring all 3 milk container on the ramp',
        fr: 'Amenez les trois bidons de lait',
      },
      position: {
        top: 49,
        left: 39,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'All 3 milk container are completely supported by the ramp',
                fr: 'Les trois bidons de lait sont complètement supportés par la rampe',
              },
              handle: 'm14_milk_on_ramp',
              type: 'boolean',
              points: 2,
              images: [
                '2016/m14_end12.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'All 3 milk container are completely supported by the ramp AND They’re the only things supported by the ramp. They’re the only things touching the ramp',
                fr: 'Les trois bidons de lait sont complètement supportés par la rampe ET Ce sont les seuls objets supportés par la rampe. Ce sont les seuls objets touchant la rampe',
              },
              handle: 'm14_milk_on_ramp_alone',
              type: 'boolean',
              points: 3,
              images: [
                '2016/m14_end12.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'All 3 milk container are completely supported by the ramp AND They’re the only things supported by the ramp. They’re the only things touching the ramp. They’re all standing',
                fr: 'Les trois bidons de lait sont complètement supportés par la rampe ET Ce sont les seuls objets supportés par la rampe. Ce sont les seuls objets touchant la rampe. Ils sont tous debout',
              },
              handle: 'm14_milk_on_ramp_alone_and_standing',
              type: 'boolean',
              points: 4,
              images: [
                '2016/m14_end3.jpg',
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
        en: 'Manure',
        fr: 'Fumier',
      },
      description: {
        en: 'Transport 7 manure samples into the training and research area',
        fr: 'Amenez les 7 pièces de fumier dans la zone d’entraînement et de recherche',
      },
      position: {
        top: 60,
        left: 61,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'All 7 manure samples are in the trainings area',
                fr: 'Les 7 pièces de fumier sont dans la zone d’entraînement et de recherche',
              },
              handle: 'm15_all_samples_in_area',
              type: 'boolean',
              points: 5,
              images: [
                '2016/m15_end.jpg',
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
      number: null,
      title: {
        en: 'Penalties',
        fr: 'Pénalités',
      },
      description: {
        en: 'If the team interrupts the robot, there places one of the removed samples in the white triangle, in the southeast, as a permanent/untouchable interruption penalty. You can get up to five penalties.',
        fr: 'Si l’équipe interrompt le robot, l’arbitre place 1 des pièces de fumier qu’il garde dans le triangle blanc, dans le coin sud-ouest, en tant que pénalité d’interruption permanente/intouchable. Vous pouvez avoir jusqu’à 5 pénalités',
      },
      position: {
        top: 86,
        left: 80,
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
              max: 5,
              points: -6,
              images: [
                '2016/pen_end.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'After the match the referee puts the not given penalties (manure samples into the training and research station)',
          fr: 'Après le match l’arbitre dépose les pénalités qu’il n’a pas données (pièces de fumier) dans la zone d’entraînement et de recherche',
        },
      ],
    },
  ],
};

export {data};
