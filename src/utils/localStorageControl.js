export const saveStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const readStorage = (key) => {
  localStorage.getItem(key);
};

export const removeStorage = (key) => {
  localStorage.removeItem(key);
};
