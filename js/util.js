export function getRandomInt(min, max) {
  if (min > max || min < 0){
    return 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkLength(str, len) {
  len = Number(len);
  str = String(str);

  if (len < 0) {
    return 0;
  }

  return str.length <= len;
}

const body = document.querySelector('body');
const successTemplate = body.querySelector('#success').content;
const successMessageTemp = successTemplate.querySelector('.success');
const errorTemplate =  body.querySelector('#error').content;
const errorMessageTemp = errorTemplate.querySelector('.error');

let escKeydown;
let areaClick;

export function displaySuccessMessage() {

  const message = successMessageTemp.cloneNode(true);
  const successButton = message.querySelector('.success__button');

  successButton.addEventListener('click', closeSuccess);
  escKeydown = escKeydownHandler(document, closeSuccess);
  areaClick = areaClickHandler(document, '.success', closeSuccess);

  body.append(message);
  message.style.zIndex = '9999';
}

function closeSuccess() {
  const successButton = body.querySelector('.success__button');

  successButton.removeEventListener('click', closeSuccess);
  document.removeEventListener('click', areaClick);
  document.removeEventListener('keydown', escKeydown);

  body.querySelector('.success').remove();
}

export function displayErrorMessage() {
  const message = errorMessageTemp.cloneNode(true);
  const errorButton = message.querySelector('.error__button');

  errorButton.textContent = 'Закрыть';

  errorButton.addEventListener('click', closeError);
  escKeydown = escKeydownHandler(document, closeError);
  areaClick = areaClickHandler(document, '.error', closeError);

  body.append(message);
  message.style.zIndex = '9999';
}

function closeError() {
  const errorButton = body.querySelector('.error__button');

  errorButton.removeEventListener('click', closeError);
  document.removeEventListener('click', areaClick);
  document.removeEventListener('keydown', escKeydown);

  body.querySelector('.error').remove();
}

export function escKeydownHandler(element, fun) {
  function handler(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      fun();
    }
  }
  element.addEventListener('keydown', handler);

  return handler;
}

export function areaClickHandler(element, selector, fun) {
  function handler(evt) {
    if (evt.target === document.querySelector(selector)) {
      fun();
    }
  }
  element.addEventListener('click', handler);

  return handler;
}

function addNewPreview(info) {
  const uploadPreview = document.querySelector('.img-upload__preview img');
  info.src = uploadPreview.src;
  info.scale = uploadPreview.style.transform;
  info.class = uploadPreview.classList[0];
  info.filter = uploadPreview.style.filter;
}

export function dataToInfo(data) {
  const info = {
    description: data.get('description'),
    hashtags: data.get('hashtags')
  };
  addNewPreview(info);
  return info;
}
