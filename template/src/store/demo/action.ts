import { AnyAction } from 'redux';

import { UPDATE_DEMO_CHECK, UPDATE_DEMO_MESSAGE } from './const';

/*****************同步更新 action start**********/
/**
 * 更新demo信息
 * @param data
 */
export const actionUpdateDemoMsg = function (data: string): AnyAction {
  return {
    type: UPDATE_DEMO_MESSAGE,
    payload: data,
  };
};

export const actionUpdateDemoCheck = (data: boolean): AnyAction => {
  return {
    type: UPDATE_DEMO_CHECK,
    payload: data,
  };
};
/*****************同步更新 action end**********/
