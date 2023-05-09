export function getRandom (min, max) {
  if (min < 0 || min > max){
    return 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max){
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkLength(str, len){
  str = String(str);
  len = Number(len);
  if (len < 0){
    return 0;
  }
  return str.length <= len;
}
