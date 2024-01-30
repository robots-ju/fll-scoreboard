import * as m from 'mithril';
import Configuration from '../utils/Configuration';

interface OverlayImageGalleryAttrs {
  images: string[]
}

export default class OverlayImageGallery implements m.ClassComponent<OverlayImageGalleryAttrs> {
  view(vnode: m.Vnode<OverlayImageGalleryAttrs>) {
    return m('.images', vnode.attrs.images.map(
      (image, key) => m('.image', {
        key,
        style: {
          backgroundImage: 'url(' + Configuration.imagePath + image + ')',
        },
      })
    ));
  }
}
