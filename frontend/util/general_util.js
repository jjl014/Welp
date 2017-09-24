export const addInputCallBack = (input, callback, delay) => {
  let timer = null;
  input.addEventListener('keypress', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      timer = null;
      callback();
    }, delay);
  });
  input = null;
};
