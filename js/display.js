const picturePreview = (url, description) => {
  const preview= document.createElement('img');
  preview.classList.add('picture__img');

  preview.setAttribute('src', url);
  preview.setAttribute('height', 182);
  preview.setAttribute('width', 182);
  preview.setAttribute('alt', description);

  return preview;
}

const pictureElements = (comments, likes) => {
  const lik = document.createElement('span');
  lik.classList.add('picture__likes');
  lik.append(likes);

  const com = document.createElement('span');
  com.classList.add('picture__comments');
  com.append(comments);

  return(com, lik);
}

const pictureFromData = ({url, description, comments, likes}) => {
  const detailLink = document.createElement('a');
  detailLink.setAttribute('href', '#');
  detailLink.classList.add('picture');

  const picturePrev = picturePreview(url, description);

  const infoContainer = document.createElement('p');
  infoContainer.classList.add('picture__info');
  infoContainer.append(pictureElements(comments, likes));

  detailLink.append(picturePrev, infoContainer);
}

export const display = (data) => {
  const fragment = new DocumentFragment();

  fragment = data.map((picture) => {pictureFromData(picture)});

  const container = document.querySelector('.pictures');
  container.appendChild(fragment);
}
