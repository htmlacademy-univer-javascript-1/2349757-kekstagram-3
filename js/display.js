const picturePrev = (url, descript) => {
  const picture= document.createElement('img');

  picture.classList.add('picture__img');

  picture.setAttribute('src', url);
  picture.setAttribute('height', 182);
  picture.setAttribute('width', 182);
  picture.setAttribute('alt', descript);

  return picture;
}

const createComponentsPicture = (comments, likes) => {

  const likesCount = document.createElement('span');
  likesCount.classList.add('picture__likes');
  likesCount.append(likes);

  const commentsCount = document.createElement('span');
  commentsCount.classList.add('picture__comments');
  commentsCount.append(comments);

  return(commentsCount, likesCount);
}

const createPicture = ({url, description, comments, likes}) => {

  const picture = picturePrev(url, description);

  const pictureInfo = document.createElement('p');
  pictureInfo.classList.add('picture__info');
  pictureInfo.append(createComponentsPicture(comments, likes));

  const pictureLink = document.createElement('a');
  pictureLink.setAttribute('href', '#');
  pictureLink.classList.add('picture');
  pictureLink.append(picture, pictureInfo);
}



export const displayData = (data) => {
  const fragment = new DocumentFragment();

  fragment = data.map((picture) => {createPicture(picture)});

  const picturesContainer = document.querySelector('.pictures');
  picturesContainer.appendChild(fragment);
}
