import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Button, Checkbox, Menu, Popover, Tooltip, Dropdown } from 'antd';
import {
  ColumnHeightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { CheckboxOptionType, CheckboxValueType } from 'antd/lib/checkbox/Group';
import { SizeType } from 'antd/es/config-provider/SizeContext';

const CheckboxGroup = Checkbox.Group;

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

interface ViewColumnInfo {
  /**
   * 列标题
   */
  title: string;
  /**
   * 列名称
   */
  name: string;
}

interface SearchCardExtraProps {
  /**
   * 新建按钮标题. 默认:新建
   */
  newBtnTitle?: string | Function;
  /**
   * 列设置按钮标题.默认:列设置
   */
  columnSettingsBtnTitle?: string | Function;
  /**
   * 刷新按钮标题.默认:刷新
   */
  reloadBtnTitle?: string | Function;
  /**
   * 密度按钮标题.默认:密度
   */
  densityBtnTitle?: string | Function;
  /**
   * 全屏按钮标题.默认:全屏
   */
  fullscreenBtnTitle?: string | Function;
  /**
   * 取消全屏按钮标题.默认:取消全屏
   */
  cancelFullscreenBtnTitle?: string | Function;
  route?: RouteProps;
  /**
   * 新增按钮点击时回调
   */
  onNew: Function;
  /**
   * 密度改变回调
   */
  onDensity: (density: SizeType) => void;
  /**
   * 重新加载回调
   */
  onReload: Function;
  /**
   * 全屏/取消全屏按钮点击的回调
   */
  onFullScreenChange: Function;
  /**
   * 取消全屏按钮点击的回调
   */
  onCancelFullScreen?: Function;
  /**
   * 显示的列
   */
  columnList: Array<ViewColumnInfo | any>;
  /**
   * 选中所有列或取消所有列时触发
   */
  onViewColumnChange: (checkedValue: Array<CheckboxValueType>) => void;
}

const selectAll = (
  columnList: Array<ViewColumnInfo>,
): Array<CheckboxValueType> => {
  const tmpArr: Array<CheckboxValueType> = [];
  columnList.forEach((item) => {
    tmpArr.push(item.name);
  });
  return tmpArr;
};

const SearchCardExtra: React.FC<SearchCardExtraProps> = (props) => {
  const {
    columnList,
    onReload,
    onNew,
    onFullScreenChange,
    onViewColumnChange,
    onDensity,
    newBtnTitle = '新建',
    columnSettingsBtnTitle = '列设置',
    reloadBtnTitle = '刷新',
    densityBtnTitle = '密度',
    fullscreenBtnTitle = '全屏',
    cancelFullscreenBtnTitle = '取消全屏',
  } = props;
  const newBtnTitleStr = typeof (newBtnTitle) === 'string' ? newBtnTitle : newBtnTitle();
  const columnSettingsBtnTitleStr = typeof (columnSettingsBtnTitle) === 'string' ? columnSettingsBtnTitle : columnSettingsBtnTitle();
  const reloadBtnTitleStr = typeof (reloadBtnTitle) === 'string' ? reloadBtnTitle : reloadBtnTitle();
  const densityBtnTitleStr = typeof (densityBtnTitle) === 'string' ? densityBtnTitle : densityBtnTitle();
  const fullscreenBtnTitleStr = typeof (fullscreenBtnTitle) === 'string' ? fullscreenBtnTitle : fullscreenBtnTitle();
  const cancelFullscreenBtnTitleStr = typeof (cancelFullscreenBtnTitle) === 'string' ? cancelFullscreenBtnTitle : cancelFullscreenBtnTitle();
  const columnSettingsItemArr: Array<CheckboxOptionType | string> = [];
  const tmpArr: Array<CheckboxValueType> = [];
  columnList.forEach((item) => {
    columnSettingsItemArr.push({
      label: item.title,
      value: item.name,
    });
    tmpArr.push(item.name);
  });
  const [columnSettings, setColumnSettings] = useState<Array<CheckboxValueType>>(tmpArr);
  const [columnSettingsCheckedAll, setColumnSettingsCheckedAll] = useState<boolean>(true);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const columnSettingsPopoverContent = (
    <CheckboxGroup
      className={'winter-checkbox-group'}
      options={columnSettingsItemArr}
      value={columnSettings}
      onChange={(checkedList) => {
        setColumnSettings(checkedList);
        setColumnSettingsCheckedAll(checkedList.length === columnList.length);
        if (
          checkedList.length === columnList.length ||
          checkedList.length === 0
        ) {
          setIndeterminate(false);
        } else {
          setIndeterminate(true);
        }
        onViewColumnChange(checkedList);
      }}
    />
  );
  const columnSettingsPopoverTitle = (
    <Checkbox
      indeterminate={indeterminate}
      onChange={(e) => {
        setColumnSettingsCheckedAll(e.target.checked);
        setIndeterminate(false);
        let arr: Array<CheckboxValueType> = [];
        if (e.target.checked) {
          arr = selectAll(columnList);
        }
        setColumnSettings(arr);
        onViewColumnChange(arr);
      }}
      checked={columnSettingsCheckedAll}
    >
      {columnSettingsBtnTitleStr}
    </Checkbox>
  );
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => onDensity(undefined)}>
        <a>默认</a>
      </Menu.Item>
      <Menu.Item key="1" onClick={() => onDensity('middle')}>
        <a>中等</a>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => onDensity('small')}>
        <a>紧凑</a>
      </Menu.Item>
    </Menu>
  );

  // @ts-ignore
  const getPopupContainer = (triggerNode: HTMLElement): HTMLElement => document.getElementById('winterSearchPanelExtra');
  return (
    <div className={'searchPanelExtra'} id={'winterSearchPanelExtra'}>
      <Button type={'primary'} onClick={() => onNew()}>{newBtnTitleStr}</Button>
      <Tooltip
        placement="top"
        title={reloadBtnTitleStr}
        getPopupContainer={getPopupContainer}
      >
        <a onClick={() => onReload()}>
          <ReloadOutlined/>
        </a>
      </Tooltip>
      <Tooltip
        placement="top"
        title={densityBtnTitleStr}
        getPopupContainer={getPopupContainer}
      >
        <Dropdown
          overlay={menu}
          trigger={['click']}
          getPopupContainer={getPopupContainer}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <ColumnHeightOutlined/>
          </a>
        </Dropdown>
      </Tooltip>
      <Tooltip
        placement="top"
        title={columnSettingsBtnTitleStr}
        getPopupContainer={getPopupContainer}
      >
        <Popover
          placement={'bottom'}
          trigger={'click'}
          content={columnSettingsPopoverContent}
          title={columnSettingsPopoverTitle}
          getPopupContainer={getPopupContainer}
        >
          <a>
            <SettingOutlined/>
          </a>
        </Popover>
      </Tooltip>
      <Tooltip
        placement="top"
        title={fullScreen ? cancelFullscreenBtnTitleStr : fullscreenBtnTitleStr}
        getPopupContainer={getPopupContainer}
      >
        <a
          onClick={() => {
            const tmp = !fullScreen;
            setFullScreen(tmp);
            onFullScreenChange(tmp);
          }}
        >
          {fullScreen ? <FullscreenExitOutlined/> : <FullscreenOutlined/>}
        </a>
      </Tooltip>
    </div>
  );
};
export default memo(SearchCardExtra);
