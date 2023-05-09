import { displayData } from "./display-data.js";
import { loadPictures } from "./api.js";
import { submitForm } from "./validation.js";
import { closeUploadModal } from "./uploadPicture.js";
import './uploadPicture.js';


loadPictures(
  (photos) => {
    displayData(photos);
  },
  () => {
    showErrorMessage();
  }
);

submitForm(closeUploadModal);

