import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'dva';
import LanguageSelect from '@/components/LanguageSelect';
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

interface BizLanguageSelectProps {
  route?: RouteProps;
  style?: object;
}

const BizLanguageSelect: React.FC<BizLanguageSelectProps> = (props) => {
  const { i18n } = useTranslation();
  const { style } = props;
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
      <LanguageSelect
        onChange={onLanguageChange}
        languageList={languageList}
        style={style}
      />
    </>
  );
};
export default memo(BizLanguageSelect);
