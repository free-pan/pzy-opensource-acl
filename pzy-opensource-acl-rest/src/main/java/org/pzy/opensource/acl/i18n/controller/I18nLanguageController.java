package org.pzy.opensource.acl.i18n.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Validator;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiImplicitParam;
import org.pzy.opensource.acl.i18n.service.I18nLanguageService;
import org.pzy.opensource.acl.i18n.dto.*;
import org.pzy.opensource.acl.i18n.vo.*;
import org.pzy.opensource.domain.PageT;
import org.pzy.opensource.domain.ResultT;
import org.pzy.opensource.domain.vo.PageVO;

/**
 * I18nLanguage 的rest服务
 *
 * @author pan
 * @since 2020-09-27
 */
@RestController
@RequestMapping("/i18n/language")
@Api(tags = "I18nLanguage的rest服务")
public class I18nLanguageController {

    @Autowired
    private I18nLanguageService service;

    @DeleteMapping("clear-cache")
    @ApiOperation(value = "I18nLanguage清除缓存")
    public ResultT clearCache() {
        service.clearCache();
        return ResultT.success();
    }

    @GetMapping
    @ApiOperation(value = "I18nLanguage分页查找", notes = "未找到匹配数据,结果数据为空集合")
    public ResultT<PageT<I18nLanguageVO>> searchPage(I18nLanguageSearchDTO dto) {
        PageT<I18nLanguageVO> result = service.pageAndCache(dto);
        return ResultT.success(result);
    }

    @PostMapping
    @ApiOperation(value = "I18nLanguage新增", notes = "结果数据,为新增数据的id")
    public ResultT<Long> add(@Validated @RequestBody I18nLanguageAddDTO dto) {
        Long id = service.saveAndClearCache(dto);
        return ResultT.success(id);
    }

    @GetMapping("{id}")
    @ApiOperation(value = "I18nLanguage详细查找", notes = "未找到匹配数据,结果数据为null")
    @ApiImplicitParam(name = "id", value = "唯一标识", dataType = "Long", paramType = "path", required = true, example = "1")
    public ResultT<I18nLanguageVO> searchById(@PathVariable("id") Long id) {
        I18nLanguageVO result = service.getByIdAndCache(id);
        return ResultT.success(result);
    }

    @PutMapping
    @ApiOperation(value = "I18nLanguage编辑", notes = "结果数据,为实际的业务逻辑,是否执行成功")
    public ResultT<Boolean> edit(@Validated @RequestBody I18nLanguageEditDTO dto) {
        boolean optSuc = service.updateByIdAndClearCache(dto);
        return ResultT.success(optSuc);
    }

    @DeleteMapping("{id}")
    @ApiOperation(value = "I18nLanguage删除", notes = "结果数据,为实际的业务逻辑,是否执行成功")
    @ApiImplicitParam(name = "id", value = "唯一标识", dataType = "Long", paramType = "path", required = true, example = "1")
    public ResultT<Boolean> removeById(@PathVariable("id") Long id) {
        boolean optSuc = service.removeByIdAndClearCache(id);
        return ResultT.success(optSuc);
    }

}