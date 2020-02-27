import * as m from 'mithril';
import lang from '../helpers/lang';
import {texts, years} from "../global";

const Link = {
  view(vnode) {
    return m('li', {
      className: m.route.get() === vnode.attrs.href ? ' active' : '',
    }, m(m.route.Link, {
      href: vnode.attrs.href,
      className: 'waves-effect',
    }, vnode.children));
  }
};

export default {
  oncreate(vnode) {
    M.Sidenav.init(vnode.dom);
  },
  onremove(vnode) {
    M.Sidenav.getInstance(vnode.dom).destroy();
  },
  view(vnode) {
    return m('ul.sidenav#menu', {
      onclick() {
        M.Sidenav.getInstance(vnode.dom).close();
      },
    }, [
      years.map(year => m(Link, {
        href: '/' + year.data.meta.slug,
      }, year.data.meta.year + ' ' + year.data.meta.title)),
      m(Link, {
        href: '/credits',
      }, 'Credits'),
      m('li.expand'),
      Object.keys(texts.locales).map(
        locale => m('li', {
          className: lang.getLang() === locale ? 'active' : '',
        }, m('a.waves-effect', {
          href: '#',
          onclick() {
            lang.setLang(locale);
          },
        }, texts.locales[locale]))
      ),
    ]);
  },
}
