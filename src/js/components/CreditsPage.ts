import * as m from 'mithril';

export default {
  view() {
    return [
      m('header.scoreboard__header', [
        m('i.header-block.fas.fa-bars.sidenav-trigger', {
          'data-target': 'menu',
        }),
        m('h1..scoreboard__header__title.header-block', [
          m('em', 'Robots-JU'),
          ' FLL Scoreboard',
        ]),
      ]),
      m('.textpage', [
        m('h1', 'Credits'),
        m('p', [
          'Made by ',
          m('a', {
            href: 'https://clarkwinkelmann.com/',
          }, 'Clark Winkelmann'),
          ' for ',
          m('a', {
            href: 'https://robots-ju.ch/',
          }, 'Robots-JU'),
          '.',
        ]),
        m('p', [
          'Code is available on ',
          m('a', {
            href: 'https://github.com/robots-ju/fll-scoreboard',
          }, 'GitHub'),
          ' under the ',
          m('a', {
            href: 'https://github.com/robots-ju/fll-scoreboard/blob/master/LICENSE.txt',
          }, 'MIT license'),
          '.',
        ]),
        m('p', [
          'Logos and images come from for the ',
          m('a', {
            href: 'http://www.firstlegoleague.org/challenge',
          }, 'FIRST® LEGO® League'),
          ' Robot Game material.',
        ]),
        m('p', [
          'Older mission illustrations come from the ',
          m('a', {
            href: 'https://www.first-lego-league.org/en/season/robot-game/missions.html',
          }, 'HANDS on TECHNOLOGY'),
          ' missions overview page.',
        ]),
        m('p', [
          'English mission descriptions are copied from the official handbook.',
        ]),
        m('p', [
          'French mission descriptions are copied from the EPFL handbook (2016-2019) or HANDS on TECHNOLOGY handbook (2020).',
        ]),
      ]),
    ];
  }
}
