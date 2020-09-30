package org.pzy.opensource.acl.i18n.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.pzy.opensource.acl.i18n.dto.I18nResourceCodeAddDTO;
import org.pzy.opensource.acl.i18n.dto.I18nResourceCodeEditDTO;
import org.pzy.opensource.acl.i18n.dto.I18nResourceCodeSearchDTO;
import org.pzy.opensource.acl.i18n.service.I18nResourceCodeService;
import org.pzy.opensource.acl.i18n.vo.I18nResourceCodeVO;
import org.pzy.opensource.domain.PageT;
import org.pzy.opensource.domain.ResultT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * I18nResourceCode 的rest服务
 *
 * @author pan
 * @since 2020-09-27
 */
@RestController
@RequestMapping("/i18n/resource-code")
@Api(tags = "I18nResourceCode的rest服务")
public class I18nResourceCodeController {

    @Autowired
    private I18nResourceCodeService service;

    @DeleteMapping("clear-cache")
    @ApiOperation(value = "I18nResourceCode清除缓存")
    public ResultT clearCache() {
        service.clearCache();
        return ResultT.success();
    }

    @GetMapping
    @ApiOperation(value = "I18nResourceCode分页查找", notes = "未找到匹配数据,结果数据为空集合")
    public ResultT<PageT<I18nResourceCodeVO>> searchPage(I18nResourceCodeSearchDTO dto) {
        PageT<I18nResourceCodeVO> result = service.pageAndCache(dto);
        return ResultT.success(result);
    }

    @PostMapping
    @ApiOperation(value = "I18nResourceCode新增", notes = "结果数据,为新增数据的id")
    public ResultT<Long> add(@Validated @RequestBody I18nResourceCodeAddDTO dto) {
        Long id = service.saveAndClearCache(dto);
        return ResultT.success(id);
    }

    @GetMapping("{id}")
    @ApiOperation(value = "I18nResourceCode详细查找", notes = "未找到匹配数据,结果数据为null")
    @ApiImplicitParam(name = "id", value = "唯一标识", dataType = "Long", paramType = "path", required = true, example = "1")
    public ResultT<I18nResourceCodeVO> searchById(@PathVariable("id") Long id) {
        I18nResourceCodeVO result = service.getByIdAndCache(id);
        return ResultT.success(result);
    }

    @PutMapping
    @ApiOperation(value = "I18nResourceCode编辑", notes = "结果数据,为实际的业务逻辑,是否执行成功")
    public ResultT<Boolean> edit(@Validated @RequestBody I18nResourceCodeEditDTO dto) {
        boolean optSuc = service.updateByIdAndClearCache(dto);
        return ResultT.success(optSuc);
    }

    @DeleteMapping("{id}")
    @ApiOperation(value = "I18nResourceCode删除", notes = "结果数据,为实际的业务逻辑,是否执行成功")
    @ApiImplicitParam(name = "id", value = "唯一标识", dataType = "Long", paramType = "path", required = true, example = "1")
    public ResultT<Boolean> removeById(@PathVariable("id") Long id) {
        boolean optSuc = service.removeByIdAndClearCache(id);
        return ResultT.success(optSuc);
    }

}