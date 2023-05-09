import { getRandom } from "./util.js";

const ids = [];

export const createPhoto = () => {
  let id = getRandom(1, 25);
  while (ids.indexOf(id) !== -1) {
    id = getRandom(1, 25);
  };
  
  ids.push(id);
  return {
    id: id,
    url: `/photos/${id}.jpg`,
    description: `Photo number ${id}`,
    likes: getRandom(10, 100),
    comments: getRandom(0, 100)
  };
}
