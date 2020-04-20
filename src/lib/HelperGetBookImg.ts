// import IMG from '@assets/img/missingbook.png';

import {VolumeInfo} from '@ts/types';

export default (volumeInfo: VolumeInfo) => {
  if (volumeInfo.imageLinks) {
    const {imageLinks} = volumeInfo;
    if (imageLinks.extraLarge) {
      return imageLinks.extraLarge;
    }
    if (imageLinks.large) {
      return imageLinks.large;
    }
    if (imageLinks.medium) {
      return imageLinks.medium;
    }
    if (imageLinks.small) {
      return imageLinks.small;
    }
    if (imageLinks.smallThumbnail) {
      return imageLinks.smallThumbnail;
    }
    if (imageLinks.thumbnail) {
      return imageLinks.thumbnail;
    }
  }
  return require('@assets/img/missingbook.png');
};
