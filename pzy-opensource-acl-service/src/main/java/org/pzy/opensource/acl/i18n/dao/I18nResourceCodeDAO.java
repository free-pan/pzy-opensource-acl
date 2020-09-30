package org.pzy.opensource.acl.i18n.dao;

import org.pzy.opensource.acl.i18n.entity.I18nResourceCode;
import org.pzy.opensource.i18n.domain.bo.LocaleAndCodeBO;
import org.pzy.opensource.i18n.domain.vo.I18nMessageDataVO;
import org.pzy.opensource.mybatisplus.basemapper.WinterBaseMapper;
import org.springframework.stereotype.Repository;

/**
 * sys_i18n_resource_code 表DAO接口
 *
 * @author pan
 * @since 2020-09-27
 */
@Repository
public interface I18nResourceCodeDAO extends WinterBaseMapper<I18nResourceCode> {

    /**
     * 根据区域语言标识和国际化编码查找
     *
     * @param localeAndCodeBO
     * @return
     */
    I18nMessageDataVO findByLocaleAndCode(LocaleAndCodeBO localeAndCodeBO);
}
