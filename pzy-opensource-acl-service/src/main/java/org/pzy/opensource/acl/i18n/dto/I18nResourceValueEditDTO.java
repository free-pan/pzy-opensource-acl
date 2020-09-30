package org.pzy.opensource.acl.i18n.dto;

import com.baomidou.mybatisplus.annotation.TableName;
import org.pzy.opensource.mybatisplus.model.entity.BaseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

/**
 * sys_i18n_resource_value 表DTO类: 用于编辑操作时接收客户端参数
 *
 * @author pan
 * @since 2020-09-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nResourceValueEditDTO implements Serializable {

    private static final long serialVersionUID=1L;
    @ApiModelProperty(value = "区域语言id")
    private Long languageId;
    @ApiModelProperty(value = "国际化资源id")
    private Long resourceId;
    @ApiModelProperty(value = "资源值")
    private String resourceText;

}
