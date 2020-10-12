import { Alert, message, notification } from 'antd';
import { ReactNode } from 'react';
import * as React from 'react';

interface AntdTableColumnInfo {
  /**
   * 列标题
   */
  title: any;
  /**
   * antd用到的key
   */
  key: string;
  /**
   * 与数据对应的属性名.默认与key相同,如果dataIndex明确null,则表示该列不与具体的数据对应
   */
  dataIndex?: string;
  /**
   * 自定义render函数
   */
  render?: Function;
}

export default {
  /**
   * 将列定义转换为antd的列定义以及SearchCardExtra需要的列定义
   * @param columnArr
   */
  columnDefineConvert(columnArr: Array<AntdTableColumnInfo>) {
    // 存放antd的列定义
    const antdColumnMap: any = {};
    // 存放SearchCardExtra的列定义
    const columnList: Array<object> = [];
    columnArr.map((item) => {
      const tmp: any = {
        title: item.title,
        key: item.key,
      };
      antdColumnMap[item.key] = tmp;
      columnList.push({
        name: item.key,
        title: item.title,
      });
      if (item.dataIndex !== null) {
        tmp['dataIndex'] = item.key;
      }
      if (item.render) {
        tmp['render'] = item.render;
      }
    });
    return { antdColumnMap, columnList };
  },
  /**
   * 将antdColumnMap中的列定义,按columnInfoList顺序,放入数组,并返回
   * @param antdColumnMap antd 表格的列定义, key为key,value为列定义
   * @param columnList 表格的列顺序
   */
  antdColumnSortByColumnInfo(antdColumnMap: any, columnInfoList: Array<any>): Array<any> {
    const antdColumnArr: Array<any> = [];
    columnInfoList.map((item) => {
      antdColumnArr.push(antdColumnMap[item.name]);
    });
    return antdColumnArr;
  },
  /**
   * 将antdColumnMap中的列定义,按columnInfoList顺序,放入数组,并返回
   * @param antdColumnMap antd 表格的列定义, key为key,value为列定义
   * @param columnNameList 表格的列顺序
   */
  antdColumnSortByColumnName(antdColumnMap: any, columnNameList: Array<any>): Array<any> {
    const antdColumnArr: Array<any> = [];
    columnNameList.map((item) => {
      antdColumnArr.push(antdColumnMap[item]);
    });
    return antdColumnArr;
  },
  /**
   * url请求无响应时的notify提示
   * @param type 可选值: success, info, warning, error
   * @param requestMethod 请求方式
   * @param url 请求地址
   * @param title notify标题
   * @param description 提示信息
   * @param duration 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
   */
  antdNoneResponseNotify(type: 'success' | 'info' | 'warning' | 'error', requestMethod: string, url: string, title: string, description: string | ReactNode, duration?: undefined | null | number) {
    notification[type]({
      duration: duration,
      message: title,
      description: (<div>
        <p>{requestMethod}&nbsp;&nbsp;{url}</p>
        <p>{description}</p>
      </div>),
    });
  },
  /**
   * notify提示
   * @param type 可选值: success, info, warning, error
   * @param title notify标题
   * @param description 提示信息
   * @param duration 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
   */
  antdNotify(type: 'success' | 'info' | 'warning' | 'error', title: string, description: string | ReactNode, duration?: undefined | null | number) {
    notification[type]({
      duration: duration,
      message: title,
      description: { description },
    });
  },
  /**
   * notify提示
   * @param type 可选值: success, info, warning, error
   * @param requestMethod 请求方式
   * @param url 请求地址
   * @param title notify标题
   * @param descriptionArr 提示信息集合
   * @param duration 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
   */
  antdNotifyArray(type: 'success' | 'info' | 'warning' | 'error', requestMethod: string, url: string, title: string, descriptionArr: Array<string>, duration?: undefined | null | number) {
    const arr: Array<ReactNode> = [<div>{requestMethod}&nbsp;&nbsp;{url}</div>];
    descriptionArr.forEach(item => {
      arr.push(<div>{item}</div>);
    });
    notification[type]({
      duration: duration,
      message: title,
      description: (<div>{arr}</div>),
    });
  },
  /**
   * 构建antd的警告提示
   * @param type
   * @param title
   * @param description
   * @param closable
   * @param onClose
   */
  antdAlert({ type = 'warning', title, description, closable = true, onClose }: { type?: 'success' | 'info' | 'warning' | 'error', title: string, description?: string, closable: boolean, onClose?: React.MouseEventHandler<HTMLButtonElement> }) {
    if (description) {
      if (closable) {
        return <Alert
          message={title}
          description={description}
          type={type}
          closable
          onClose={onClose}
          showIcon
        />;
      } else {
        return <Alert
          message={title}
          description={description}
          type={type}
          closable
          onClose={onClose}
          showIcon
        />;
      }
    } else {
      if (closable) {
        return <Alert
          message={title}
          type={type}
          closable
          onClose={onClose}
          showIcon
        />;
      } else {
        return <Alert
          message={title}
          type="warning"
          closable
          onClose={onClose}
          showIcon
        />;
      }
    }
  },
  /**
   * 显示警告提示弹窗
   * @param arr 提示消息数组
   * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭. 默认:10
   */
  warningArr(arr: Array<string>, duration = 10) {
    const tmpArr: Array<ReactNode> = [];
    arr.forEach(item => {
      tmpArr.push(<span>{item}<br/></span>);
    });
    message.warning(<span>{tmpArr}</span>, 10);
  },
  /**
   * 显示错误提示弹窗
   * @param arr 提示消息数组
   * @param duration 自动关闭的延时，单位秒。设为 0 时不自动关闭. 默认:10
   */
  errorArr(arr: Array<string>, duration = 10) {
    const tmpArr: Array<ReactNode> = [];
    arr.forEach(item => {
      tmpArr.push(<span>{item}<br/></span>);
    });
    message.error(<span>{tmpArr}</span>, 10);
  },
};
