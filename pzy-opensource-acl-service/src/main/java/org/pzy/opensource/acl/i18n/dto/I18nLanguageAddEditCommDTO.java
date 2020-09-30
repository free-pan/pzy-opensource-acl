package org.pzy.opensource.acl.i18n.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 添加和编辑的公共字段
 *
 * @author pan
 * @since 2020/9/29
 */
@Data
public class I18nLanguageAddEditCommDTO implements Serializable {
    @ApiModelProperty(value = "区域语言编码.最大长度:255", required = true)
    @Length(max = 255, message = "{language.code.error}")
    @NotBlank(message = "{language.code.error}")
    private String code;

    @ApiModelProperty(value = "区域语言名称.最大长度255", required = true)
    @Length(max = 255, message = "{language.name.error}")
    @NotBlank(message = "{language.name.error}")
    private String name;

    @ApiModelProperty(value = "显示优先级(值越大优先级越高.最小值:0 最大值:9999)")
    @Range(min = 0, max = 9999, message = "{language.displayPriority.error}")
    @NotNull(message = "{language.displayPriority.error}")
    private Integer displayPriority;
}
