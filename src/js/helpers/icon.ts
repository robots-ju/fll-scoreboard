import * as m from 'mithril';

export default function icon(key: string) {
  return m('i[aria-hidden=true].fa.fa-' + key);
}
