export default {
  language: null as string | null,
  setLang(lang: string) {
    this.language = lang;
  },
  getLang(): string {
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
