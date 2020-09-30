package org.pzy.opensource.acl.i18n.manager;

import org.pzy.opensource.acl.i18n.dao.I18nResourceCodeDAO;
import org.pzy.opensource.i18n.domain.bo.LocaleAndCodeBO;
import org.pzy.opensource.i18n.domain.vo.I18nMessageDataVO;
import org.pzy.opensource.i18n.manager.WinterI18nMessageReaderManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 国际化资源读取服务
 *
 * @author pan
 * @since 2020/9/27
 */
@Component
public class PzyI18nMessageManagerImpl implements WinterI18nMessageReaderManager {

    @Autowired
    private I18nResourceCodeDAO i18nResourceCodeDAO;

    @Override
    public I18nMessageDataVO searchByLocaleAndCode(LocaleAndCodeBO localeAndCodeBO) {
        return i18nResourceCodeDAO.findByLocaleAndCode(localeAndCodeBO);
    }
}
