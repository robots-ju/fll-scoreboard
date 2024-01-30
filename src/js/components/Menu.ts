import * as m from 'mithril';
import lang from '../helpers/lang';
import {texts, years} from '../global';

interface LinkAttrs {
  href: string
}

class Link implements m.ClassComponent<LinkAttrs> {
  view(vnode: m.Vnode<LinkAttrs>) {
    const currentPathWithoutHash = m.route.get().split('#')[0];

    return m('li', {
      className: currentPathWithoutHash === vnode.attrs.href ? ' active' : '',
    }, m(m.route.Link, {
      href: vnode.attrs.href,
      className: 'waves-effect',
    }, vnode.children));
  }
}

export default class Menu implements m.ClassComponent {
  oncreate(vnode: m.VnodeDOM) {
    M.Sidenav.init(vnode.dom);
  }

  onremove(vnode: m.VnodeDOM) {
    M.Sidenav.getInstance(vnode.dom).destroy();
  }

  view(vnode: m.Vnode) {
    return m('ul.sidenav#menu', {
      onclick() {
        M.Sidenav.getInstance((vnode as m.VnodeDOM).dom).close();
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
  }
}
