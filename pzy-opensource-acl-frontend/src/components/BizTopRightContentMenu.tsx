import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import TopRightContentMenu from '@/components/TopRightContentMenu';
import { setLanguageCode } from '@/utils/I18nUtil';
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

interface BizTopRightContentMenuProps {
  route?: RouteProps;
}

const BizTopRightContentMenu: React.FC<BizTopRightContentMenuProps> = (
  props,
) => {
  const { i18n } = useTranslation();
  const effectMethods = {
    searchLanguageList: 'GlobalModel/searchLanguageList',
    setSelectedLanguageCode: 'GlobalModel/setSelectedLanguageCode',
  };

  const dispatch = useDispatch();

  // @ts-ignore
  let languageList = useSelector((state) => state.GlobalModel.languageList);

  // 仅在组件第一次初始化时调用
  useEffect(() => {
    // 执行dva 中自定义 effect方法
    dispatch({
      type: effectMethods.searchLanguageList,
      payload: {},
    });
  }, []);

  const onLanguageChange = (code: string) => {
    setLanguageCode(code);
    dispatch({
      type: effectMethods.setSelectedLanguageCode,
      payload: { selectedLanguageCode: code },
    });
    i18n.changeLanguage(code);
  };

  return (
    <>
      <TopRightContentMenu
        languageList={languageList}
        onLanguageChange={onLanguageChange}
      />
    </>
  );
};
export default memo(BizTopRightContentMenu);
