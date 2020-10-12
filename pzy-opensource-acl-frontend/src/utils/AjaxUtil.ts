import { extend, ResponseError } from 'umi-request';
import qs from 'qs';
import AntdUtil from '@/utils/AntdUtil';

/**
 * 默认超时时间10秒
 * @type {number}
 */
const defaultTimeout = 10;

// @ts-ignore
const defaultErrorHandler = function(error) {
  console.log('error', error.request);
  const { url, options } = error.request;
  const { method } = options;
  const { response = {}, message = '', data = {} } = error;
  console.log('error response', response);
  console.log('error message', message);
  console.log('error data', data);
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    switch (error.response.status) {
      case 400: {
        // 业务逻辑验证未通过,使用警告弹窗
        AntdUtil.errorArr(error.data.msgList);
        break;
      }
      case 403: {
        // 操作权限或数据权限不足,使用警告弹窗
        message.error('权限不足,操作无法继续!');
        break;
      }
      case 404: {
        // 资源或数据不存在,使用错误弹窗
        message.error('资源或数据不存在!');
        break;
      }
      case 408: {
        // 请求超时,使用警告notify
        AntdUtil.antdNotifyArray('warning', method, url, '请求超时', ['网络或后端服务超时!'], null);
        break;
      }
      case 405: {
        // 客户端请求方式错误,使用错误notify
      }
      case 406: {
        // 客户端请求参数格式错误,使用错误notify
      }
      case 500: {
        // 服务端非预期异常,使用错误notify
        AntdUtil.antdNotifyArray('error', method, url, '后端服务异常', error.data.msgList, null);
        break;
      }
      case 503: {
        // 服务端停机或过载,使用错误notify
        AntdUtil.antdNotifyArray('error', method, url, '后端服务异常', ['服务停机或过载!'], null);
        break;
      }
      case 401: {
        // 未登录,转入登录界面
        break;
      }
    }
  } else {
    // 请求初始化时出错或者没有响应返回的处理方式
    AntdUtil.antdNoneResponseNotify('error', method, url, 'web请求无响应', message, null);
  }

  throw error; // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return;
};

const extendRequest = extend({
  timeout: defaultTimeout * 1000,
  errorHandler: defaultErrorHandler,
  getResponse: true,
  credentials: 'include',
  paramsSerializer: function(params) {
    return qs.stringify(params, { indices: true, allowDots: true });
  },
});

export interface UmiRequestConfig {
  /**
   * 是否使用缓存. 默认:false
   */
  useCache: boolean;
  /**
   * 超时时间.单位:秒
   */
  timeout: number;
  /**
   * 额外的请求头
   */
  headers: HeadersInit;
  /**
   * 是否包含响应头信息. 默认:false
   */
  getResponse: boolean;
  /**
   * 自定义异常处理回调方法.可选
   */
  errorHandler: (error: ResponseError) => void
}

export default {
  /**
   * 普通的form表单提交方式
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @returns {Promise<any>}
   */
  formPost(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.post(url, {
      data,
      headers,
      timeout: timeout * 1000,
      useCache,
      requestType: 'form',
      getResponse,
      errorHandler,
    });
  },

  /**
   * post请求使用request body传参
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   */
  bodyPost(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = true,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.post(url, {
      data,
      headers,
      timeout: timeout * 1000,
      useCache,
      requestType: 'json',
      getResponse,
      errorHandler,
    });
  },

  /**
   * post实现文件下载
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:true
   * @return 结果中默认含响应头, 获取响应头方式: request('/api/v1/some/api', { getResponse: true })..then(({ data, response}) => { response.headers.get('Content-Type'); })
   */
  bodyPostDownload(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = true,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.post(url, {
      data,
      getResponse,
      useCache,
      responseType: 'blob', // 表明返回服务器返回的数据类型
      timeout: timeout * 1000,
      headers,
      errorHandler,
    });
  },

  /**
   * 普通的form表单提交方式patch方式
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @returns {Promise<any>}
   */
  formPatch(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.patch(url, {
      data,
      headers,
      timeout: timeout * 1000,
      useCache,
      requestType: 'form',
      getResponse,
      errorHandler,
    });
  },

  /**
   * patch请求使用request body传参
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   */
  bodyPatch(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.patch(url, {
      data,
      headers,
      timeout: timeout * 1000,
      useCache,
      requestType: 'json',
      getResponse,
      errorHandler,
    });
  },

  /**
   * 发送Put请求
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @return 结果中默认不包含响应头,如果需要包含响应头,请设置 getResponse 为 true
   */
  bodyPut(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.put(url, {
      data,
      getResponse,
      useCache,
      timeout: timeout * 1000,
      headers,
    });
  },
  /**
   * 发送Put请求
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @return 结果中默认不包含响应头,如果需要包含响应头,请设置 getResponse 为 true
   */
  formPut(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.put(url, {
      requestType: 'form',
      data,
      useCache,
      timeout: timeout * 1000,
      headers,
      errorHandler,
    });
  },
  /**
   * 发送delete请求
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @return 结果中默认不包含响应头,如果需要包含响应头,请设置 getResponse 为 true
   */
  delete(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    return extendRequest.delete(url, {
      useCache,
      getResponse,
      data,
      timeout: timeout * 1000,
      headers,
      errorHandler,
    });
  },
  /**
   * 发送get请求
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @return 结果中默认不包含响应头,如果需要包含响应头,请设置 getResponse 为 true
   */
  get(
    url: string,
    data = {},
    {
      useCache = false,
      timeout = defaultTimeout,
      headers = {},
      getResponse = false,
      errorHandler = defaultErrorHandler,
    } = {},
  ) {
    console.log('useCache', useCache);
    return extendRequest.get(url, {
      useCache,
      params: data,
      getResponse,
      timeout: timeout * 1000,
      headers,
      errorHandler,
    });
  },
  /**
   * 文件上传
   * @param url {string} 请求url地址
   * @param data {Object} 提交的数据
   * @param useCache {boolean} 是否使用缓存[默认只对get启用缓存]
   * @param timeout {number} 超时时间. 单位:秒
   * @param headers 其它额外的请求头
   * @param getResponse {boolean} 是否包含响应头信息. 默认:false
   * @return 结果中默认不包含响应头,如果需要包含响应头,请设置 getResponse 为 true
   */
  upload(
    url: string,
    formData: any,
    { timeout = defaultTimeout, headers = {}, getResponse = false, errorHandler = defaultErrorHandler } = {},
  ) {
    return extendRequest(url, {
      method: 'post',
      getResponse,
      data: formData,
      timeout: timeout * 1000,
      headers,
      errorHandler,
    });
  },
};
