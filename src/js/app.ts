import * as m from 'mithril';
import StandaloneScoreboard from './components/StandaloneScoreboard';
import CreditsPage from "./components/CreditsPage";
import {years} from "./global";
import Layout from "./components/Layout";

require('materialize-css');

let isFirstMatch = true;

function createResolver(component, props = {}) {
  return {
    onmatch(args, requestedPath) {
      // On n'effectue pas le tracking de la première url ici
      // Le code analytics directement dans la page s'en charge
      // @ts-ignore
      if (!isFirstMatch && window._paq) {
        // @ts-ignore
        window._paq.push(['setCustomUrl', requestedPath]);
        // @ts-ignore
        window._paq.push(['trackPageView']);
      }

      isFirstMatch = false;
    },
    render: () => {
      return m(Layout, m(component, props));
    },
  };
}

const root = document.getElementById('js-scoreboard');

m.route.prefix = '';

const routes = {
  '/': createResolver({
    oninit() {
      // Redirect to the first year automatically
      m.route.set('/' + years[0].data.meta.year);
    },
    view() {
      return null;
    }
  }),
  '/credits': createResolver(CreditsPage),
};

years.forEach(year => {
  routes['/' + year.data.meta.year] = createResolver(StandaloneScoreboard, year);
});

m.route(root, '/', routes);
