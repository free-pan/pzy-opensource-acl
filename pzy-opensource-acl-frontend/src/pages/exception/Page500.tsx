import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Result, Button } from 'antd';
import { Link } from 'umi';
import { useTranslation } from 'react-i18next';

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

interface Page403Props {
  route?: RouteProps;
}

const Page403: React.FC<Page403Props> = (props) => {
  const { t } = useTranslation();

  return (
    <Result
      status="500"
      title="500"
      style={{
        background: 'none',
      }}
      subTitle={t('desc500')}
      extra={
        <Link to="/">
          <Button type="primary">{t('goBackHome')}</Button>
        </Link>
      }
    />
  );
};
export default memo(Page403);
