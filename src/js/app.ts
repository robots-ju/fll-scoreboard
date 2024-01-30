import * as m from 'mithril';
import StandaloneScoreboard from './components/StandaloneScoreboard';
import CreditsPage from './components/CreditsPage';
import {years} from './global';
import Layout from './components/Layout';

require('materialize-css');

let isFirstMatch = true;
let lastPath = null;

function createResolver(component, props = {}) {
  return {
    onmatch(args, requestedPath) {
      const path = requestedPath.split('#')[0];

      // The lastPath check is necessary because Mithril reacts to every change of hash,
      // but we are only interested in change of path without the hash
      if (!isFirstMatch && path !== lastPath) {
        // On n'effectue pas le tracking de la première url ici
        // Le code analytics directement dans la page s'en charge
        // @ts-ignore
        if (window._paq) {
          // @ts-ignore
          window._paq.push(['setCustomUrl', requestedPath]);
          // @ts-ignore
          window._paq.push(['trackPageView']);
        }
      }

      isFirstMatch = false;
      lastPath = path;
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
      m.route.set('/' + years[0].data.meta.slug);
    },
    view() {
      return null;
    }
  }),
  '/credits': createResolver(CreditsPage),
};

years.forEach(year => {
  routes['/' + year.data.meta.slug] = createResolver(StandaloneScoreboard, {
    key: year.data.meta.slug, // Prevent Mithril re-using a scoreboard and its scorer/hasher
    ...year,
  });
});

m.route(root, '/', routes);
