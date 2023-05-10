const form = document.querySelector('.img-upload__form');
const uploadButton = form.querySelector('.img-upload__submit');
export const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(
  form.querySelector('.text__description'),
  validateCaptionLength,
  'От 20 до 140 символов'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashTags,
  'Неверный формат хэштегов'
);

function validateCaptionLength(str) {
  return str.length >= 20 && str.length <= 140;
}

function validateHashTags(str) {
  if (str.length === 0) {
    return true;
  }

  const hashTags = str.split(' ');
  const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,20}$/;

  for (let i = 0; i < hashTags.length; i++) {
    if (!regex.test(hashTags[i])) {
      return false;
    }
  }

  for (let i = 0; i < hashTags.length - 1; i++) {
    for (let j = i + 1; j < hashTags.length; j++) {
      if (hashTags[i].substring(1).toLowerCase() === hashTags[j].substring(1).toLowerCase()) {
        return false;
      }
    }
  }

  return true;
}

function blockSubmitButton() {
  uploadButton.disabled = true;
  uploadButton.textContent = 'Загружаю...';
}

function unblockSubmitButton() {
  uploadButton.disabled = false;
  uploadButton.textContent = 'Опубликовать';
}

import { sendData } from "./api.js";
import { dataToInfo, displayErrorMessage, displaySuccessMessage } from "./util.js";
import { addNewPicture } from "./display-data.js"

export function submitForm(onSuccess) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const sentInformation = new FormData(evt.target);
      console.log(evt.target);
      sendData(
        () => {
          addNewPicture(dataToInfo(sentInformation));
          displaySuccessMessage();
          unblockSubmitButton();
          onSuccess();
        },
        () => {
          displayErrorMessage();
          unblockSubmitButton();
        },
        sentInformation,
      );
    }
  });
}
