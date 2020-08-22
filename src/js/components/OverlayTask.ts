import * as m from 'mithril';
import OverlayOptionBoolean from './OverlayOptionBoolean';
import OverlayOptionNumber from './OverlayOptionNumber';

export default {
  view(vnode) {
    const task = vnode.attrs.task;
    const missions = vnode.attrs.missions;

    return m('.task.options', {
      className: task.options.length > 1 ? ' multiple' : '',
    }, task.options.map(
      (option, key) => {
        switch (option.type) {
          case 'boolean':
            return m(OverlayOptionBoolean, {
              task,
              option,
              key,
              missions,
            });
          case 'number':
            return m(OverlayOptionNumber, {
              option,
              key,
              missions,
            });
        }

        console.warn('Invalid option type ' + option.type);
        return 'INVALID OPTION TYPE';
      }
    ));
  },
}
