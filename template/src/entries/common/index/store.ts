/**
 * redux 用来创建和组合全局变量的内容
 *
 * 然后通过 react-redux 来连接使用
 */
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { saveStore } from '@store/index';

// demo
import demoReducer from '@store/demo/reducer';
// user
import userReducer from '@store/user/reducer';

const logger = createLogger();

/**
 * 生产环境不打印 store log
 * 有的中间件有次序要求，使用前要查一下文档
 * 比如，logger 就一定要放在最后，否则输出结果会不正确,会输出一次错误数据
 */
const middleware =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(reduxThunk, logger)
    : applyMiddleware(reduxThunk);

const store = createStore(
  // 合并多模块
  combineReducers({
    demo: demoReducer,
    user: userReducer,
  }),
  middleware
);
// 保存 store
saveStore(store);

export default store;
