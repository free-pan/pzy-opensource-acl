import React, { memo, ReactDOM, useEffect, useState } from 'react';

import { Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

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

export interface LanguageData {
  name: string;
  code: string;
}

interface LanguageSelectProps {
  route?: RouteProps;
  languageList: Array<LanguageData>;
  style?: object;
  onChange: Function;
}

const LanguageSelect: React.FC<LanguageSelectProps> = (props) => {
  const { languageList, style, onChange } = props;
  const menuItemDomArr: Array<any> = [];

  // @ts-ignore
  const menuItemClick = ({ key }) => {
    onChange(key);
  };
  if (languageList) {
    languageList.forEach((item) => {
      menuItemDomArr.push(
        <Menu.Item key={item.code} onClick={menuItemClick}>
          {item.name}
        </Menu.Item>,
      );
    });
  }
  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  const menu = <Menu>{menuItemDomArr}</Menu>;
  return (
    <div style={style}>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <GlobalOutlined
            style={{ fontSize: '18px', color: 'rgba(0,0,0,0.85)' }}
          />
        </a>
      </Dropdown>
    </div>
  );
};
export default memo(LanguageSelect);
