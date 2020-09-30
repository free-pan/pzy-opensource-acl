import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'umi';
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

interface MenuBreadcrumbProps {
  /**
   * 被作为面包屑展示的菜单数据
   */
  menuList?: Array<MenuData>;
  /**
   * 当前pathname
   */
  pathname: string;
  /**
   * 是否启用i18n. 默认:false
   */
  i18n?: boolean;
  /**
   * 额外加在面包屑头部的菜单
   */
  homeMenu?: MenuData;
  /**
   * 是否显示面包屑. 默认:true
   */
  show?: boolean;
}

const MenuBreadcrumb: React.FC<MenuBreadcrumbProps> = (props) => {
  const { show = true, homeMenu, menuList, pathname, i18n = false } = props;
  if (!show) {
    return <></>;
  }
  const { t } = useTranslation();

  const breadcrumbItemArr: Array<any> = [];
  if (homeMenu) {
    let name = homeMenu.name;
    if (i18n) {
      // @ts-ignore
      name = t(homeMenu.i18n);
    }
    if (homeMenu.path) {
      breadcrumbItemArr.push(
        <Breadcrumb.Item>
          <Link to={homeMenu.path}>{name}</Link>
        </Breadcrumb.Item>,
      );
    } else {
      breadcrumbItemArr.push(<Breadcrumb.Item>{name}</Breadcrumb.Item>);
    }
  }
  if (menuList) {
    menuList.map((item, idx) => {
      let name = item.name;
      if (i18n) {
        // @ts-ignore
        name = t(item.i18n);
      }
      if (item.path && idx < menuList.length - 1) {
        breadcrumbItemArr.push(
          <Breadcrumb.Item key={idx}>
            <Link to={item.path}>{name}</Link>
          </Breadcrumb.Item>,
        );
      } else {
        breadcrumbItemArr.push(
          <Breadcrumb.Item key={idx}>{name}</Breadcrumb.Item>,
        );
      }
    });
  }

  return (
    <>
      <Breadcrumb>{breadcrumbItemArr}</Breadcrumb>
    </>
  );
};
export default memo(MenuBreadcrumb);
