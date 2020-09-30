import React, { memo } from 'react';
import { useSelector } from 'dva';
import MenuBreadcrumb from '@/components/MenuBreadcrumb';
import { MenuData } from '@/services/Data';

interface RouteProps {
  /**
   * 当前路由的路径
   */
  path: string;
  /**
   * 路由路径是否需要完全匹配
   */
  exact: boolean;
}

interface BizMenuBreadcrumbProps {
  /**
   * 是否启用国际化. 默认:true
   */
  i18n?: boolean;
  /**
   * 是否显示面包屑. 默认:true
   */
  show?: boolean;
  /**
   * 额外加在面包屑头部的菜单
   */
  homeMenu?: MenuData;
  /**
   * 路由路径
   */
  pathname: string;
}

const BizMenuBreadcrumb: React.FC<BizMenuBreadcrumbProps> = (props) => {
  const { show = true, i18n = true, homeMenu, pathname } = props;

  // @ts-ignore
  const breadcrumbItemArr = useSelector(
    (state) => state.GlobalModel.breadcrumbItemArr,
  );

  return (
    <>
      <MenuBreadcrumb
        menuList={breadcrumbItemArr}
        pathname={pathname}
        i18n={i18n}
        show={show}
        homeMenu={homeMenu}
      />
    </>
  );
};
export default memo(BizMenuBreadcrumb);
