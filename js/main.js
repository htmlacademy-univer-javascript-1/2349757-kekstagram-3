import { createPhoto } from "./data.js";
import { display } from "./display.js";
import './uploadPicture.js';

const photos = Array.from({length: 25}, createPhoto);
display(photos);
