export default {
  language: null,
  setLang(lang) {
    this.language = lang;
  },
  getLang() {
    if (this.language === null) {
      if (window.navigator.language.indexOf('fr') !== -1) {
        this.language = 'fr';
      } else {
        this.language = 'en';
      }
    }

    return this.language;
  },
}
