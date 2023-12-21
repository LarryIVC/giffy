export const API_URL = `https://api.giphy.com/v1`
export const API_KEY = '3ZKkAdDmGkJ1XVHB0LnFewAfPx08s3y2'

export function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}