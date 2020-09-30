package org.pzy.opensource.acl.i18n.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;

import org.pzy.opensource.domain.vo.PageVO;
import org.pzy.opensource.domain.PageT;

import lombok.extern.slf4j.Slf4j;
import org.pzy.opensource.acl.i18n.entity.*;
import org.pzy.opensource.acl.i18n.dao.*;
import org.pzy.opensource.acl.i18n.vo.*;
import org.pzy.opensource.acl.i18n.dto.*;
import org.pzy.opensource.acl.i18n.mapstruct.*;
import org.pzy.opensource.acl.i18n.service.I18nLanguageService;
import org.pzy.opensource.mybatisplus.service.ServiceTemplate;
import org.pzy.opensource.mybatisplus.util.PageUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Propagation;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

/**
 * sys_i18n_language 表相关服务实现类
 *
 * @author pan
 * @since 2020-09-27
 */
@Slf4j
@Service
@Validated
@CacheConfig(cacheNames = I18nLanguageServiceImpl.CACHE_NAME)
public class I18nLanguageServiceImpl extends ServiceTemplate<I18nLanguageDAO, I18nLanguage> implements I18nLanguageService {

    public static final String CACHE_NAME = "I18nLanguageServiceImpl";

    @Autowired
    private I18nLanguageMapStruct mapStruct;

    @CacheEvict(allEntries = true, beforeInvocation = true)
    @Override
    public void clearCache() {
        if (log.isDebugEnabled()) {
            log.debug("清除[{}]服务类缓存!", this.getClass().getName());
        }
    }

    @Cacheable(sync = true)
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED, readOnly=true)
    @Override
    public PageT<I18nLanguageVO> pageAndCache(I18nLanguageSearchDTO dto){
        if(null==dto){
            return PageT.EMPTY();
        }
        // 查询关键词去空格
        I18nLanguageSearchDTO condition = mapStruct.searchDtoToSearchDTO(dto);
        // 系统的分页条件转换为mybatis plus的分页条件
        IPage<I18nLanguage> mybatisPlusPageCondition = toMybatisPlusPage(condition.getPg());
        // 构建mybatis plus查询条件
        QueryWrapper<I18nLanguage> queryWrapper = buildQueryWrapper();
        // mybatis plus分页查询
        IPage<I18nLanguage> mybatisPlusPageResult = super.page(mybatisPlusPageCondition, queryWrapper);
        // mybatis plus分页结果, 转系统分页结果
        List<I18nLanguageVO> voList = this.mapStruct.entityToDTO(mybatisPlusPageResult.getRecords());
        return PageUtil.mybatisPlusPage2PageT(mybatisPlusPageResult, voList);
    }

    @CacheEvict(allEntries = true)
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    @Override
    public Long saveAndClearCache(@Valid @NotNull I18nLanguageAddDTO dto){
        // 对象转换
        I18nLanguage entity = mapStruct.addSourceToEntity(dto);
        // 持久化
        boolean optSuc = super.save(entity);
        return entity.getId();
    }

    @Cacheable(sync = true)
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED, readOnly=true)
    @Override
    public I18nLanguageVO getByIdAndCache(Serializable id){
        if (null == id) {
            return null;
        }
        I18nLanguage entity = super.getById(id);
        return this.mapStruct.entityToDTO(entity);
    }

    @CacheEvict(allEntries = true)
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    @Override
    public boolean updateByIdAndClearCache(@Valid @NotNull I18nLanguageEditDTO dto){
        // 对象转换
        I18nLanguage entity = this.mapStruct.editSourceToEntity(dto);
        return super.updateById(entity);
    }

    @CacheEvict(allEntries = true)
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    @Override
    public boolean removeByIdAndClearCache(Serializable id){
        if(null==id){
            return false;
        }
        // 如果表和实体符合系统的逻辑删除规范, 请调用 super.baseMapper.logicDeleteById(id) 方法进行逻辑删除
        return super.removeById(id);
    }
}
