import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { RouteProps } from '@/services/Data';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'umi';

interface PageTitleProps {
  route?: RouteProps;
  /**
   * 是否返回纯文字. 默认:true
   */
  pureText?: boolean;
  /**
   * 是否启用国际化. 默认:true
   */
  i18n?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { t } = useTranslation();
  const { pureText = true, i18n = true } = props;

  // @ts-ignore
  const currentSelectedMenuData = useSelector(
    (state) => state.GlobalModel.currentSelectedMenuData,
  );

  if (currentSelectedMenuData) {
    let name = currentSelectedMenuData.name;
    if (i18n) {
      name = t(currentSelectedMenuData.i18n);
      if (pureText) {
        return name;
      } else {
        return (
          <Helmet>
            <title>{name}</title>
          </Helmet>
        );
      }
    } else {
      if (pureText) {
        return name;
      } else {
        return (
          <Helmet>
            <title>{name}</title>
          </Helmet>
        );
      }
    }
  } else {
    return;
  }
};
export default memo(PageTitle);
