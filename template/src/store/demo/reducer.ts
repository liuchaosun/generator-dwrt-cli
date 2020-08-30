// 资源引入
import { AnyAction } from 'redux';
import { DemoStoreState } from '@my-types/store.types';
import { UPDATE_DEMO_CHECK, UPDATE_DEMO_MESSAGE } from './const';

/**
 * demo 模块的配置集
 */
const initState: DemoStoreState = {
  isInit: false,
  demoMesg: '一个demo展示信息',
  demoCheck: false,
};

/**
 * demo 模块操作 state 的唯一权限函数
 * @param state 如果传入对象则使用传入的，否则使用默认的，一般情况下都是用默认的
 * @param action
 */
export default function updateReducer(state = initState, action: AnyAction): DemoStoreState {
  switch (action.type) {
    case UPDATE_DEMO_MESSAGE:
      return { ...state, demoMesg: action.payload };
    case UPDATE_DEMO_CHECK:
      return { ...state, demoCheck: action.payload };
    default:
      return state;
  }
}
