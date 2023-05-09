import { createPhoto } from "./data.js";
import { displayData } from "./display.js";
import './uploadPicture.js';

const photos = Array.from({length: 25}, createPhoto);
displayData(photos);
