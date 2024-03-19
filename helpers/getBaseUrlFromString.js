/**
https://www.google.com/search → www.google.com
*/
export function getBaseUrlFromString(str) {
  return str.split("/")[2];
}
