import { onPictureClick } from "./showPicture.js";
import { getRandomInt } from "./util.js";

const template = document.querySelector('#picture').content;
const pictureTemplate = template.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

export function addNewPicture(options) {

  const picture = pictureTemplate.cloneNode(true);
  const pictureImage = picture.querySelector('.picture__img');
  const pictureComments = picture.querySelector('.picture__comments');
  const pictureLikes = picture.querySelector('.picture__likes');

  pictureComments.textContent = getRandomInt(0, 100);
  pictureLikes.textContent = getRandomInt(0, 200);

  pictureImage.style.transform = options.scale;
  pictureImage.classList.add(options.class);
  pictureImage.style.filter = options.filter;
  pictureImage.src = options.src;
  const description = options.description;
  pictureImage.alt = `${description}`;

  picturesContainer.append(picture);
}

const createPicture = ({url, description, comments, likes}) => {
  const picture = pictureTemplate.cloneNode(true);

  const pictureComments = picture.querySelector('.picture__comments');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureImage = picture.querySelector('.picture__img');

  pictureImage.src = url;
  pictureComments.textContent = comments;
  pictureLikes.textContent = likes;
  pictureImage.alt = description;

  return picture;
}

export const displayData = (data) => {

  const fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    fragment.append(createPicture(data[i]));
  }

  picturesContainer.append(fragment);
  picturesContainer.addEventListener('click', onPictureClick);
}


