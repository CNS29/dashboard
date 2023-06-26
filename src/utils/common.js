// Mock translate function
export function t(str) {
  return str;
}

export function getLocalStorageByKey(key = '') {
  return localStorage.getItem(key);
}

export function setLocalStorageByKey([key, value]) {
  return localStorage.setItem(key, value);
}
