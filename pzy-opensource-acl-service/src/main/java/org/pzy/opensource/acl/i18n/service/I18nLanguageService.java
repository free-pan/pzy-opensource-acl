package org.pzy.opensource.acl.i18n.service;

import org.pzy.opensource.acl.i18n.entity.I18nLanguage;
import org.pzy.opensource.acl.i18n.dto.*;
import org.pzy.opensource.acl.i18n.vo.*;
import com.baomidou.mybatisplus.extension.service.IService;
import org.pzy.opensource.domain.PageT;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.io.Serializable;


/**
 * sys_i18n_language 表相关服务接口
 *
 * @author pan
 * @since 2020-09-27
 */
public interface I18nLanguageService extends IService<I18nLanguage> {

    /**
     * 清除该服务相关的缓存
     */
    void clearCache() ;

    /**
     * 分页查询并将结果缓存
     *
     * @param dto 查询条件
     * @return 查询结果
     */
    PageT<I18nLanguageVO> pageAndCache(I18nLanguageSearchDTO dto);

    /**
    * 新增, 并清除缓存
    *
    * @param dto 待新增数据
    * @return 新增数据id
    */
    Long saveAndClearCache(@Valid @NotNull I18nLanguageAddDTO dto);

    /**
     * 根据id查询, 并缓存
     *
     * @param id 主键ID
     */
    I18nLanguageVO getByIdAndCache(Serializable id);

    /**
    * 根据id更新, 并清除缓存
    *
    * @param dto 待更新对象
    * @return 是否更新成功
    */
    boolean updateByIdAndClearCache(@Valid @NotNull I18nLanguageEditDTO dto);

    /**
     * 根据id删除, 并清除缓存
     *
     * @param id 主键ID
     */
    boolean removeByIdAndClearCache(Serializable id);
}
