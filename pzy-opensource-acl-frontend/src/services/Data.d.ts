export interface BackendPageDataStruct {
  /**
   * 页号.值从1开始
   */
  page: number;
  /**
   * 分页大小.
   */
  size: number;
}

export interface MenuData {
  path: string;
  name: string;
  i18n?: string;
  children?: Array<MenuData>;
}

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

interface AjaxResponse {
  /**
   * 业务执行结果编码
   */
  code: string;
  /**
   * 业务是否执行成功
   */
  success: boolean;
  /**
   * 响应数据
   */
  resp: any;
  /**
   * 错误消息列表
   */
  msgList: Array<string>;
}
