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

      // When a list is provided, the index zero will be the value for number 1
      const indexForThisNumbersPointsOrLabel = number - 1;

      if (option.points_list) {
        if (number === 0) {
          pointsForThisOption = 0;
        } else if (indexForThisNumbersPointsOrLabel < option.points_list.length) {
          pointsForThisOption = option.points_list[indexForThisNumbersPointsOrLabel];
        }
      }

      let color = null;

      if (option.colors_list && number > 0 && indexForThisNumbersPointsOrLabel < option.colors_list.length) {
        // Color values from https://rebrickable.com/colors/
        switch (option.colors_list[indexForThisNumbersPointsOrLabel]) {
          case 'blue':
            color = '#36AEBF'; // Medium Azure
            break;
          case 'dark-green':
            color = '#237841';//green
            break;
          case 'grey':
            color = '#6D6E5C'; // dark grey
            break;
          case 'light-green':
            color = '#7DB538'; // bright green
            break;
          case 'magenta':
            color = '#923978';
            break;
          case 'orange':
            color = '#FE8A18';
            break;
          case 'red':
            color = '#C91A09';
            break;
          case 'yellow':
            color = '#F2CD37';
            break;
        }
      }

      inputs.push(m('.number.waves-effect', {
        className: missions[option.handle] === number ? ' active' : '',
        onclick() {
          missions[option.handle] = number;
        },
      }, [
        option.colors_list ? m('.color-disc', color ? {
          style: {
            backgroundColor: color,
          },
        } : {
          className: 'no-color',
        }) : m('.digit', number),
        pointsForThisOption !== null ? m('.points', (pointsForThisOption > 0 ? '+' : '') + pointsForThisOption) : null,
      ]));
    }

    return m('.option', [
      m('.field-box', {
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
