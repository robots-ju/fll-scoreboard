import {AbstractScorer, MissionObject, Year} from "./interfaces/ChallengeYear";

const texts = {
  locales: {
    en: "English",
    fr: "Français",
  },
  strings: {
    prev: {
      en: "Previous",
      fr: "Précédent",
    },
    next: {
      en: "Next",
      fr: "Suivant",
    },
    close: {
      en: "Close",
      fr: "Fermer",
    },
    launch_wizard: {
      en: "Launch wizard",
      fr: "Lancer l'assistant",
    },
    about: {
      en: "The Robots-JU Scoreboard is an unofficial Robot Game scoreboard for the FIRST LEGO League #IntoOrbit season",
      fr: "Le Scoreboard Robots-JU est un tableau de score non officiel pour le Robot-Game de la FIRST LEGO League #IntoOrbit",
    },
    reset: {
      en: "Reset score",
      fr: "Remettre à zéro",
    },
  },
};

interface YearLink {
  scorer: AbstractScorer<MissionObject, any>
  data: Year
}

const years: YearLink[] = [
  {
    scorer: new (require('./2019/scorer').FllScorer),
    data: require('./2019/missions').data,
  },
  {
    scorer: new (require('./2018/scorer').FllScorer),
    data: require('./2018/missions').data,
  },
  {
    scorer: new (require('./2017/scorer').FllScorer),
    data: require('./2017/missions').data,
  },
  {
    scorer: new (require('./2016/scorer').FllScorer),
    data: require('./2016/missions').data,
  },
];

export {
  texts,
  years,
};
