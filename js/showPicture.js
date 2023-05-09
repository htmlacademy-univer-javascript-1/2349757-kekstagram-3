import {escKeydownHandler, areaClickHandler} from './util.js';


const SECTION = document.querySelector('.big-picture');
const IMG = SECTION.querySelector('.big-picture__img img');
const LIKES = SECTION.querySelector('.likes-count');
const COMMENTS = SECTION.querySelector('.comments-count');
const CLOSE_BUTTON = SECTION.querySelector('.big-picture__cancel');
const SOCIAL_CAPTION = SECTION.querySelector('.social__caption');
const socialComments = document.querySelector('.social__comments')

let escKeydown;
let areaClick;

const commentForm = document.querySelector('.social__footer');
const sentButton = commentForm.querySelector('.social__footer-btn');
sentButton.addEventListener('click', (evt) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = commentForm.querySelector('.social__picture').src;
  avatar.alt = "Аватар комментатора фотографии";
  avatar.width = "35";
  avatar.height = "35";

  const footerText = commentForm.querySelector('.social__footer-text');
  const socText = document.createElement("p");
  socText.classList.add("social__text");
  socText.textContent = footerText.value;

  newComment.appendChild(avatar);
  newComment.appendChild(socText);

  socialComments.appendChild(newComment);
  footerText.value = '';
})

export function onPictureClick(evt) {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const image = picture.querySelector('.picture__img');
    const likes = picture.querySelector('.picture__likes');
    const comments = picture.querySelector('.picture__comments');

    IMG.src = image.src;
    IMG.style.transform = image.style.transform;
    IMG.classList = image.classList;
    IMG.style.filter = image.style.filter;

    LIKES.textContent = likes.textContent;
    COMMENTS.textContent = comments.textContent;
    SOCIAL_CAPTION.textContent = image.alt;

    SECTION.classList.remove('hidden');
    CLOSE_BUTTON.addEventListener('click', closePicture);

    escKeydown = escKeydownHandler(document, closePicture);
    areaClick = areaClickHandler(document, '.big-picture', closePicture);

  }
}

function closePicture() {
  SECTION.classList.add('hidden');
  CLOSE_BUTTON.removeEventListener('click', closePicture);

  document.removeEventListener('keydown', escKeydown);
  document.removeEventListener('click', areaClick);
}
