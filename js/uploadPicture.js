import {pristine} from "./validation.js";
import {reduceImage, enlargeImage, onEffectClick, setEffect, setScale} from './editOfPicture.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadPreview = uploadForm.querySelector('.img-upload__preview').querySelector('img');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadCancelButton = uploadForm.querySelector('.img-upload__cancel');
const effectsList = uploadForm.querySelector('.effects__list');
const scaleSmaller = uploadForm.querySelector('.scale__control--smaller');
const scaleBigger = uploadForm.querySelector('.scale__control--bigger');

uploadInput.addEventListener('change', function() {
  uploadOverlay.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');

  const image = uploadInput.files[0];
  const reader = new FileReader();

  reader.onloadend = function() {
    uploadPreview.src = reader.result;
  };
  reader.readAsDataURL(image);

  scaleSmaller.addEventListener('click', reduceImage);
  scaleBigger.addEventListener('click', enlargeImage);
  effectsList.addEventListener('change', onEffectClick);
});

uploadCancelButton.addEventListener('click', function() {
  closeUploadModal();
});

document.addEventListener('keydown', function(evt) {
  if (evt.key == "Escape") {
    closeUploadModal();
  }
})

export function closeUploadModal() {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  setEffect('none');
  setScale(100);
  pristine.reset();
  uploadForm.reset();
}
