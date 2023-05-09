const SECTION = document.querySelector('.big-picture');
const IMG = SECTION.querySelector('.big-picture__img img');
const LIKES = SECTION.querySelector('.likes-count');
const COMMENTS = SECTION.querySelector('.comments-count');
const CLOSE_BUTTON = SECTION.querySelector('.big-picture__cancel');
const SOCIAL_CAPTION = SECTION.querySelector('.social__caption');

let escKeydown;
let areaClick;

export function onDisplayClick(evt) {
  const element = evt.target.closest('.picture');
  if (element) {
    const image = element.querySelector('.picture__img');
    const likes = element.querySelector('.picture__likes').textContent;
    const comments = element.querySelector('.picture__comments').textContent;

    IMG.src = image.src;
    IMG.style.transform = image.style.transform;
    IMG.classList = image.classList;
    IMG.style.filter = image.style.filter;

    LIKES.textContent = likes;
    COMMENTS.textContent = comments;
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


function areaClickHandler(element, selector, clickFunction) {
  function handler(evt) {
    if (evt.target === document.querySelector(selector)) {
      clickFunction();
    }
  }
  element.addEventListener('click', handler);

  return handler;
}


function escKeydownHandler(element, keydownFunction) {
  function handler(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      keydownFunction();
    }
  }

  element.addEventListener('keydown', handler);

  return handler;
}
