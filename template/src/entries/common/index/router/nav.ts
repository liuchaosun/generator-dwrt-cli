import { RouterDefault } from '@my-types/route.type';

export const demo1: RouterDefault = {
  label: '案例1页面',
  path: '/demo1',
  pageKey: 'demo1',
  component: (): JSX.Element => require('@pages/demo'),
};

export const demo2: RouterDefault = {
  label: '案例2页面',
  path: '/demo2',
  pageKey: 'demo2',
  component: (): JSX.Element => require('./demo2'),
};

export default [demo1, demo2];
