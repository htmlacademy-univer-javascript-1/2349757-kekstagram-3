import { getRandom } from "./util.js";

const ids = [];

export const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    size: ''
  },
  chrome: {
    name: 'chrome',
    step: 0.1,
    filter: 'grayscale',
    min: 0,
    max: 1,
    size: ''
  },
  sepia: {
    name: 'sepia',
    step: 0.1,
    filter: 'sepia',
    min: 0,
    max: 1,
    size: ''
  },
  marvin: {
    name: 'marvin',
    step: 1,
    filter: 'invert',
    min: 0,
    max: 100,
    size: '%'
  },
  phobos: {
    name: 'phobos',
    step: 0.1,
    filter: 'blur',
    min: 0,
    max: 3,
    size: 'px'
  },
  heat: {
    name: 'heat',
    step: 0.1,
    filter: 'brightness',
    min: 1,
    max: 3,
    size: ''
  }
};

export const createPhoto = () => {
  let id = getRandom(1, 25);
  while (ids.indexOf(id) !== -1) {
    id = getRandom(1, 25);
  };

  ids.push(id);
  return {
    id: id,
    url: `/photos/${id}.jpg`,
    alternative: `Photo number ${id}`,
    likes: getRandom(10, 100),
    comments: getRandom(0, 100)
  };
}
