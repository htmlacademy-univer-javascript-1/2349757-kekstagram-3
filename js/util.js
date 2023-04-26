export function getRandom (min, max) {
  if (max < min) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (Math.abs(max - min) + 1)) + min;
}

export function checkLength(str, len){
  str = String(str);
  len = Number(len);
  if (len < 0){
    return 0;
  }
  return str.length <= len;
}
