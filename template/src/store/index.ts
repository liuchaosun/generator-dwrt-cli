/**
 * 通常生成的 store 是作为参数传递给 redux 的 Provider 组件
 * 这里提供了一个存储的方式，后续想要使用的时候可以从这里取
 */

/* eslint-disable */
let store: any = null;

export const saveStore = (s: any): void => {
  store = s;
};

export const getStore = (): any => {
  return store;
};
