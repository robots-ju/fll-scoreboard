import * as m from 'mithril';
import Menu from "./Menu";

export default {
  view(vnode) {
    return m('div', [
      m(Menu),
      vnode.children,
    ]);
  },
}
