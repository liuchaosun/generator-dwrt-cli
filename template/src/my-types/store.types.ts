/**
 * demo 模块的 store state 对象
 * isInit: 是否初始化
 * demoMesg: demo展示信息
 */
export interface DemoStoreState {
  isInit: boolean;
  demoMesg: string;
  demoCheck: boolean;
}

/**
 * user 模块的 store state 对象
 */
export interface UserStoreState {
  userPages: string[];
}

export interface StoreState {
  demo: DemoStoreState;
  user: UserStoreState;
}
