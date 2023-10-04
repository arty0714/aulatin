import dic from '../assets/dictionary.json';

export function getLatin(char) {
  let result = '';

  const match = dic.find(obj => {
    if (obj.kir.big === char) {
      result = obj.lat.big;

      return true;
    } else if (obj.kir.small === char) {
      result = obj.lat.small;

      return true;
    }
  });

  if (match) return result;

  return char;
}