import m from 'mithril';

export default function (key) {
  return m('i[aria-hidden=true].fa.fa-' + key);
}
