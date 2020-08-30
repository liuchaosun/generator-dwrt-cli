/**
 * 路由模块配置
 */
export interface RouterDefault {
  path: string; // 路由页面对应的 url
  label: string; // 当前模块的 title
  pageKey: string; // 当前模块的路由标识
  component: () => any; // 模块对应的组件
}
