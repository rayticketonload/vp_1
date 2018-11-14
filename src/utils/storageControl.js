// 写入 localStorage
export const savels = (key, value) => localStorage.setItem(key, value);
// 读取 localStorage
export const readls = key => localStorage.getItem(key);
// 删除 localStorage
export const removels = key => localStorage.removeItem(key);


// 写入 sessionStorage
export const savess = (key, value) => sessionStorage.setItem(key, value);
// 读取 sessionStorage
export const readss = key => sessionStorage.getItem(key);
// 删除 sessionStorage
export const removess = key => sessionStorage.removeItem(key);
// 删除所有 sessionStorage
export const clearss = () => sessionStorage.clear();
