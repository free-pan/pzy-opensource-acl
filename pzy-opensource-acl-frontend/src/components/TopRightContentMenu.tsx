import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { history } from 'umi';

import { Menu, Badge, Modal } from 'antd';
import {
  NotificationOutlined,
  UserOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

import styles from './TopRightContentMenu.less';
import { LanguageData } from './LanguageSelect';
import { useTranslation } from 'react-i18next';

const { SubMenu } = Menu;

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

interface TopRightContentMenuProps {
  route?: RouteProps;
  languageList?: Array<LanguageData>;
  onLanguageChange: Function;
}

const TopRightContentMenu: React.FC<TopRightContentMenuProps> = (props) => {
  const { t } = useTranslation();
  const { languageList, onLanguageChange } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = ({ domEvent, item, key, keyPath }: any) => {
    if (key === 'exit') {
      setVisible(true);
      return;
    }
    if (keyPath.length === 2 && keyPath[1] === 'I18nSubMenu') {
      onLanguageChange(keyPath[0]);
      return;
    }
  };

  const languageMenuItemArr: Array<any> = [];
  if (languageList) {
    languageList.map((item) => {
      languageMenuItemArr.push(
        <Menu.Item key={item.code}>{item.name}</Menu.Item>,
      );
    });
  }

  const onExitOk = () => {
    setVisible(false);
    history.push('/page/login');
  };
  const onExitCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Menu onClick={handleClick} mode="horizontal" selectedKeys={[]}>
        <Menu.Item key="notify">
          <Badge dot>
            <NotificationOutlined />
          </Badge>
        </Menu.Item>
        <SubMenu key="I18nSubMenu" icon={<GlobalOutlined />} title="文a">
          {languageMenuItemArr}
        </SubMenu>
        <SubMenu key="UserSubMenu" icon={<UserOutlined />} title="张三">
          <Menu.Item key="userProfile">{t('userProfile')}</Menu.Item>
          <Menu.Item key="setting">{t('setting')}</Menu.Item>
          <Menu.Item key="exit">{t('exit')}</Menu.Item>
        </SubMenu>
        <Menu.Item key="source">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitee
          </a>
        </Menu.Item>
      </Menu>
      <Modal
        title={t('optConfirm')}
        visible={visible}
        onOk={onExitOk}
        onCancel={onExitCancel}
      >
        {t('logoutConfirm')}
      </Modal>
    </div>
  );
};
export default memo(TopRightContentMenu);
