import AjaxUtil from '@/utils/AjaxUtil';

const searchLanguageListUrl = '/api/language';
const searchMenuListUrl = '/api/menu';

/**
 * 查询语言列表
 */
export function searchLanguageList() {
  return AjaxUtil.get(searchLanguageListUrl);
}

/**
 * 查询菜单列表
 */
export function searchMenuList() {
  return AjaxUtil.get(searchMenuListUrl);
}
