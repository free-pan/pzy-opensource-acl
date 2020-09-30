import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { getLanguageCode } from '@/utils/I18nUtil';

i18n
  // 加入Backend插件,用于从远程服务器获取国际化资源
  // 插件详见: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // 探测用户语言
  // 插件详见: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // 初始化配置
  // 所有配置详见: https://www.i18next.com/overview/configuration-options
  .init(
    {
      react: {
        // 是否需要在最外层加入Suspense标签
        useSuspense: false,
      },
      // 设置默认语言
      lng: getLanguageCode(),
      fallbackLng: getLanguageCode(),
      // 是否启用调试模式
      debug: false,
      //
      load: 'currentOnly',
      backend: {
        /**
         * 用于构建请求url
         * @param lngs 语言编码
         * @param namespaces 名称空间
         */
        loadPath: function (lngs: Array<string>, namespaces: Array<string>) {
          return `http://localhost:8000/api/language/resource/${lngs[0]}`;
        },
        /**
         * 用于对响应的结果进行结构转化
         * @param data 原始响应的字符串结果
         */
        parse: function (data: string) {
          const obj = eval('(' + data + ')');
          return obj.resp;
        },
        /**
         * 是否允许跨域
         */
        crossDomain: true,
        /**
         * 是否允许携带登录凭证
         */
        withCredentials: true,
      },
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    function (err, t) {
      // i18n插件初始化完成或异常时的回调函数
      console.log('国际化插件初始化完毕!', err);
    },
  );
export default i18n;
