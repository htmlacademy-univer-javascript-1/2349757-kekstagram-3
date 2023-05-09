import { onDisplayClick } from "./showPicture.js";

const CONTAINER_PICTURES = document.querySelector('.pictures');

const createPicture = ({url, alternative, comments, likes}, pictureTemplate) => {
  const element = pictureTemplate.cloneNode(true);
  const image = element.querySelector('.picture__img');
  const commentsElement = element.querySelector('.picture__comments');
  const likesElement = element.querySelector('.picture__likes');
  image.src = url;
  commentsElement.textContent = comments;
  likesElement.textContent = likes;
  image.alt = alternative;

  return element;
}



export const displayData = (data) => {
  const template = document.querySelector('#picture').content;
  const pictureTemplate = template.querySelector('.picture');

  const fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++){
    fragment.append(createPicture(data[i], pictureTemplate));
  }


  CONTAINER_PICTURES.append(fragment);
  CONTAINER_PICTURES.addEventListener('click', onDisplayClick);
}
