package org.pzy.opensource.acl.i18n.mapstruct;

import org.mapstruct.Mapper;
import org.pzy.opensource.acl.i18n.vo.*;
import org.pzy.opensource.acl.i18n.entity.*;
import org.pzy.opensource.acl.i18n.dto.*;
import org.pzy.opensource.comm.mapstruct.ComplexMapStruct;
import org.pzy.opensource.comm.mapstruct.StringDataMapper;

/**
 * sys_i18n_resource_value表相关领域对象转化类
 *
 * @author pan
 * @since 2020-09-29
 */
@Mapper(componentModel = "spring", uses = {StringDataMapper.class})
public interface I18nResourceValueMapStruct extends ComplexMapStruct<I18nResourceValueSearchDTO, I18nResourceValueAddDTO, I18nResourceValueEditDTO, I18nResourceValue, I18nResourceValueVO> {


}
