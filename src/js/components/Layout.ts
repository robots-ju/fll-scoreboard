import * as m from 'mithril';
import Menu from './Menu';

export default class Layout implements m.ClassComponent {
  view(vnode: m.Vnode) {
    return m('div', [
      m(Menu),
      vnode.children,
    ]);
  }
}
