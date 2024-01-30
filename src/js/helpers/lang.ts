export default {
  language: null as string | null,
  setLang(lang: string) {
    this.language = lang;
    window.localStorage.setItem('language', lang);
  },
  getLang(): string {
    if (this.language === null) {
      const saved = window.localStorage.getItem('language');

      if (saved === 'fr' || saved === 'en') {
        this.language = saved;
      } else if (window.navigator.language.indexOf('fr') !== -1) {
        this.language = 'fr';
      } else {
        this.language = 'en';
      }
    }

    return this.language;
  },
}
