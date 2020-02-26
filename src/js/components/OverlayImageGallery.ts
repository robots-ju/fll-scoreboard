import * as m from 'mithril';
import Configuration from '../utils/Configuration';

export default {
  view(vnode) {
    return m('.images', vnode.attrs.images.map(
      (image, key) => m('.image', {
        key,
        style: {
          backgroundImage: 'url(' + Configuration.imagePath + image + ')',
        },
      })
    ));
  },
}
