import AllRoutes from './nav';
import { RouterDefault } from '@my-types/route.type';

/**
 * @param pages 用户权限内的模块
 */
export default function (pages: string[]): RouterDefault[] {
  return pages.length > 0
    ? AllRoutes.filter((item: RouterDefault) => pages.indexOf(item.pageKey) > -1)
    : AllRoutes;
}
