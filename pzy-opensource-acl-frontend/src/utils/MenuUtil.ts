/**
 * 根据 pathname,从 menuList 中查找匹配的节点,以及该节点所有的先辈节点
 * @param menuList
 * @param pathname
 */
import { MenuData } from '@/services/Data';

export const findAncestor = (
  menuList: Array<MenuData>,
  pathname: string,
): Array<MenuData> => {
  for (let idx in menuList) {
    if (menuList[idx].path === pathname) {
      return [menuList[idx]];
    } else if (menuList[idx].children) {
      // @ts-ignore
      const tmpArr = findAncestor(menuList[idx].children, pathname);
      if (tmpArr && tmpArr.length > 0) {
        return [menuList[idx], ...tmpArr];
      }
    }
  }
  return [];
};
