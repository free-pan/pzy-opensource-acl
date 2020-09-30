/**
 * 用于进行登录权限校验
 * @author pan
 */
import React, { memo, useEffect, useState } from 'react';
import { Redirect } from 'umi';

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

interface AuthProps {
  route: RouteProps;
}

const Auth: React.FC<AuthProps> = (props) => {
  const isLogin = true;
  console.log('Auth执行');
  if (isLogin) {
    // 登录则继续跳转
    return <>{props.children}</>;
  } else {
    // 未登录则转入登录界面
    return <Redirect to={'/page/login'} />;
  }
};
export default memo(Auth);
