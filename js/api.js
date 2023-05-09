

export function loadPictures(onSuccess, onFail) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      return response.json();
    })
    .then((picturesInfo) => {
      onSuccess(picturesInfo);
    })
    .catch(() => {
      onFail();
    });
}



export function sendData(onSuccess, onFail, body) {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}
