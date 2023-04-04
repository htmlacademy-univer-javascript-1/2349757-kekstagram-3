function getRandomInt (min, max){
  if (min >= max || min < 0){
    console.log('Неккоректные параметры диапазона');
    return
  }

  return Math.round(Math.random() * (max - min) + min);
}

function checkLengthStr(str, length){
  return str.length <= length
}
