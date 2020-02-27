import * as m from 'mithril';
import OverlayImageGallery from './OverlayImageGallery';
import icon from '../helpers/icon';
import trans from '../helpers/trans';
import {MissionObject, Option, Task} from "../interfaces/ChallengeYear";

export default {
  view(vnode) {
    const task = vnode.attrs.task as Task;
    const option = vnode.attrs.option as Option;
    const missions = vnode.attrs.missions as MissionObject;

    return m('label.options', [
      m('input[type=checkbox]', {
        checked: missions[option.handle],
        onchange() {
          // We need to edit all the other options of that task,
          // switch the state of this option and disable all the others
          task.options.forEach(check_option => {
            if (check_option.handle === option.handle) {
              missions[check_option.handle] = !missions[option.handle];
            } else {
              missions[check_option.handle] = false;
            }
          });
        },
      }),
      m('.field-box.waves-effect', {
        className: missions[option.handle] ? ' active' : '',
      }, [
        m(OverlayImageGallery, {
          images: option.images,
        }),
        m('.description', [
          m('span.fake-checkbox', icon('check')),
          m('span.title', trans(option.title)),
          option.points && m('span.points', '+' + option.points),
        ]),
      ]),
    ]);
  },
}
