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

export function escKeydownHandler(element, onKeydownFunction) {
  function handler(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      onKeydownFunction();
    }
  }
  element.addEventListener('keydown', handler);

  return handler;
}

export function areaClickHandler(element, selector, onClickFunction) {
  function handler(evt) {
    if (evt.target === document.querySelector(selector)) {
      onClickFunction();
    }
  }
  element.addEventListener('click', handler);

  return handler;
}

function addPrewiewInformation(information) {
  const prewiew = document.querySelector('.img-upload__preview img');
  information.src = prewiew.src;
  information.scale = prewiew.style.transform;
  information.class = prewiew.classList[0];
  information.filter = prewiew.style.filter;
}

export function convertDataToInformation(formData) {
  const information = {
    description: formData.get('description'),
    hashtags: formData.get('hashtags')
  };
  addPrewiewInformation(information);
  return information;
}

const body = document.querySelector('body');
const successMessageTemplate = body.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = body.querySelector('#error').content.querySelector('.error');
let onMessageEscKeydown;
let onAnotherAreaClick;

export function showSuccessMessage() {
  const successMessage = successMessageTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  successButton.addEventListener('click', closeSuccessMessage);
  onMessageEscKeydown = escKeydownHandler(document, closeSuccessMessage);
  onAnotherAreaClick = areaClickHandler(document, '.success', closeSuccessMessage);
  body.append(successMessage);
  successMessage.style.zIndex = '9999';
}

export function showErrorMessage() {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');
  errorButton.textContent = 'Закрыть';

  errorButton.addEventListener('click', closeErrorMessage);
  onMessageEscKeydown = escKeydownHandler(document, closeErrorMessage);
  onAnotherAreaClick = areaClickHandler(document, '.error', closeErrorMessage);
  body.append(errorMessage);
  errorMessage.style.zIndex = '9999';
}

function closeSuccessMessage() {
  const successButton = body.querySelector('.success__button');

  successButton.removeEventListener('click', closeSuccessMessage);
  document.removeEventListener('click', onAnotherAreaClick);
  document.removeEventListener('keydown', onMessageEscKeydown);

  body.querySelector('.success').remove();
}

function closeErrorMessage() {
  const errorButton = body.querySelector('.error__button');

  errorButton.removeEventListener('click', closeErrorMessage);
  document.removeEventListener('click', onAnotherAreaClick);
  document.removeEventListener('keydown', onMessageEscKeydown);

  body.querySelector('.error').remove();
}
