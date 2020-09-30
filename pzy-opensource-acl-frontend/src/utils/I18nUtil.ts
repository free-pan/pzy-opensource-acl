import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { Locale } from 'antd/lib/locale-provider';

/**
 * 国际化资源映射
 */
export const I18N_MAPPING = {
  'zh-CN': zhCN,
  'en-US': enUS,
};
/**
 * 默认的区域编码
 */
export const DEFAULT_LANGUAGE_CODE = 'zh-CN';

const LANGUAGE_CODE_SESSION_STAGE_KEY = 'language_code';

/**
 * 根据国际化编码获取Locale对象
 * @param code 区域编码
 */
export function loadLocaleByCode(code: string): Locale {
  // @ts-ignore
  return I18N_MAPPING[code];
}

/**
 * 从sessionStage中获取,区域语言编码,如果不存在,则返回默认的区域语言编码
 */
export function getLanguageCode(): string {
  let languageCode = sessionStorage.getItem(LANGUAGE_CODE_SESSION_STAGE_KEY);
  languageCode = languageCode ? languageCode : DEFAULT_LANGUAGE_CODE;
  return languageCode;
}

/**
 * 设置区域语言编码(最终会保存到sessionStage中)
 * @param languageCode 区域语言编码
 */
export function setLanguageCode(languageCode: string) {
  sessionStorage.setItem(LANGUAGE_CODE_SESSION_STAGE_KEY, languageCode);
}
