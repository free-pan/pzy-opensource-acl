import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Result, Button } from 'antd';
import { history } from 'umi';
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

interface Page404Props {
  route?: RouteProps;
}

const Page404: React.FC<Page404Props> = (props) => {
  const { t } = useTranslation();
  return (
    <Result
      status="404"
      title="404"
      subTitle={t('pageNotFound')}
      extra={
        <Button type="primary" onClick={() => history.push('/backend/index')}>
          {t('goBackHome')}
        </Button>
      }
    />
  );
};
export default memo(Page404);
