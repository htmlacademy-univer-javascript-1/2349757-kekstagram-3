const pictureUploadForm = document.querySelector('#upload-select-image');
const pictureUploadOverlay = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureInput = pictureUploadForm.querySelector('#upload-file');
const overlayCloseButton = pictureUploadForm.querySelector('#upload-cancel');

function closeImageUploadModal() {
  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureUploadForm.reset();
}

pictureInput.addEventListener('change', function(evt) {
  pictureUploadOverlay.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
});

overlayCloseButton.addEventListener('click', function(evt) {
  closeImageUploadModal();
});
document.addEventListener('keydown', function(evt) {
  if (evt.key == "Escape") closeImageUploadModal();
})

pictureUploadForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  pictureUploadForm.submit();
  closeImageUploadModal();
});
