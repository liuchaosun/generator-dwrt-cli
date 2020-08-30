/**
 *  生成一级路由的统一函数
 */
import React from 'react';
import {
  Switch, // 切割一块区域出来响应 router 变化
  Redirect, // 路由跳转
  Route, // 路由匹配命中
} from 'react-router-dom';

import { RouterDefault } from '@my-types/route.type';
/**
 * @param routes 路由配置数组， 包含 { path: '', component: () }
 */
export default function creatRoutes(routes: RouterDefault[]): JSX.Element | null {
  return routes.length > 0 ? (
    <Switch>
      {/* 当访问路径是 / 时重定向到默认首页 */}
      <Redirect exact from="/" to={routes[0].path} />
      {routes.map((tab) => {
        return (
          <Route exact path={tab.path} component={tab.component().default} key={tab.pageKey} />
        );
      })}
    </Switch>
  ) : null;
}
