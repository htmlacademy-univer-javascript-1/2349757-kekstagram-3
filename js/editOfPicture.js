
const scaleValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview');
const imgPrev = preview.querySelector('img');

let selectedEffect = 'none';

export function onEffectClick(evt) {
  selectedEffect = evt.target.value;
  setEffect(selectedEffect);
}

export function setEffect(effect) {
  selectedEffect = effect;
  imgPrev.className = '';
  imgPrev.classList.add(`effects__preview--${selectedEffect}`);
}

export const enlargeImage = () => {
  let percent = parseInt(scaleValue.value.slice(0, -1), 10) + 25;

  if (percent <= 100) {
    scaleValue.value = `${percent}%`;
    setScale(percent);
  } else {
    scaleValue.value = '100%';
  }
};

export const reduceImage = () => {
  let percent = parseInt(scaleValue.value.slice(0, -1), 10) - 25;

  if (percent >= 25) {
    scaleValue.value = `${percent}%`;
    setScale(percent);
  } else {
    scaleValue.value = '25%';
  }
};

export function setScale(value) {
  const scale = value/100;
  imgPrev.style.transform = `scale(${scale})`;
}
