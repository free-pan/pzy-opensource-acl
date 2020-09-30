import { AjaxResponse } from '@/services/Data';

/**
 * 提取响应数据
 * @param ajaxResponse 服务端的原始响应
 */
export function extractBizData(ajaxResponse: AjaxResponse) {
  return ajaxResponse.resp;
}
