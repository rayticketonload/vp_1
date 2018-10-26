// 写入 localStorage
export const saveStorage = (key, value) => localStorage.setItem(key, value);
// 读取 localStorage
export const readStorage = key => localStorage.getItem(key);
// 删除 localStorage
export const removeStorage = key => localStorage.removeItem(key);
