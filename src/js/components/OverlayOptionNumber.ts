import * as m from 'mithril';
import OverlayImageGallery from './OverlayImageGallery';
import trans from '../helpers/trans';
import {MissionObject, Option} from "../interfaces/ChallengeYear";

export default {
  view(vnode) {
    const option = vnode.attrs.option as Option;
    const missions = vnode.attrs.missions as MissionObject;

    let inputs = [];

    for (let number = 0; number <= option.max; number++) {
      let pointsForThisOption = null;

      if (option.points) {
        pointsForThisOption = option.points * number;
      }

      if (option.points_list) {
        if (number > 0) {
          pointsForThisOption = option.points_list[number - 1];
        } else {
          pointsForThisOption = 0;
        }
      }

      inputs.push(m('.number', {
        className: missions[option.handle] === number ? ' active' : '',
        onclick() {
          missions[option.handle] = number;
        },
      }, [
        m('.digit', number),
        pointsForThisOption !== null ? m('.points', (pointsForThisOption > 0 ? '+' : '') + pointsForThisOption) : null,
      ]));
    }

    return m('label.options', [
      m('.field-box.waves-effect', {
        className: missions[option.handle] ? ' active' : '',
      }, [
        m(OverlayImageGallery, {
          images: option.images,
        }),
        m('.description', [
          m('span.title', trans(option.title)),
          option.points && m('span.points', (option.points > 0 ? '+' : '') + option.points),
        ]),
        m('.numbers-input', inputs),
      ]),
    ]);
  },
}
