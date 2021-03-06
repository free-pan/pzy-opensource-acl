import { BackendPageDataStruct, AjaxResponse } from '@/services/Data';
import AjaxUtil from '@/utils/AjaxUtil';
import { BACKEND_WEB_API_BASE_URL } from '@/services/BackendApiUtil';
import WinterUtil from '@/utils/WinterUtil';

const I18N_WEB_API_BASE_URL = BACKEND_WEB_API_BASE_URL + '/i18n';

const searchLanguageUrl = I18N_WEB_API_BASE_URL + '/language';
const addLanguageUrl = I18N_WEB_API_BASE_URL + '/language';
const editLanguageUrl = I18N_WEB_API_BASE_URL + '/language';
const searchLanguageByIdUrl = I18N_WEB_API_BASE_URL + '/language/{id}';

export default {
  /**
   * 区域语言查询
   * @param kw 查询关键词
   * @param pg 分页参数
   */
  searchLanguage: function({
                             kw,
                             pg = { page: 1, size: 10 },
                           }: {
    kw: string;
    pg?: BackendPageDataStruct;
  }) {
    console.log('searchLanguage kw', kw);
    return AjaxUtil.get(searchLanguageUrl, {
      kw: kw,
      'pg.page': pg.page,
      'pg.size': pg.size,
    });
  },
  /**
   * 添加语言
   * @param obj
   */
  addLanguage: function(obj: any) {
    return AjaxUtil.bodyPost(addLanguageUrl, obj);
  },
  /**
   * 编辑语言
   * @param obj
   */
  editLanguage: function(obj: any) {
    return AjaxUtil.bodyPut(editLanguageUrl, obj);
  },
  /**
   * 获取详细信息
   * @param id
   */
  searchLanguageById: function(id: string) {
    const url = WinterUtil.convertRealUrl(editLanguageUrl, { id });
    return AjaxUtil.get(url);
  },
};
