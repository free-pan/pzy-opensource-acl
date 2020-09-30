package org.pzy.opensource.acl.i18n.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

/**
 * sys_i18n_resource_code 表DTO类: 用于新增操作时接收客户端参数
 *
 * @author pan
 * @since 2020-09-27
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nResourceCodeAddEditCommDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "资源编码.最大长度:255", required = true)
    @NotBlank(message = "{i18n.resource.code.error}")
    @Length(max = 255, message = "{i18n.resource.code.error}")
    private String code;

}
