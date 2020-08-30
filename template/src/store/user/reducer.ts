// 资源引入
import { AnyAction } from 'redux';
import { UPDATE_USER_PAGES } from './const';
import { UserStoreState } from '@my-types/store.types';

const userState: UserStoreState = {
  userPages: [],
};

export default function updateReducer(state = userState, action: AnyAction): UserStoreState {
  switch (action.type) {
    case UPDATE_USER_PAGES:
      return { ...state, userPages: action.payload };
    default:
      return state;
  }
}
