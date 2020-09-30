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
 * sys_i18n_resource_value 表DTO类: 用于新增操作时接收客户端参数
 *
 * @author pan
 * @since 2020-09-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nResourceValueAddDTO implements Serializable {

    private static final long serialVersionUID=1L;

    private Long languageId;

    private Long resourceId;

    @ApiModelProperty(value = "资源值")
    private String resourceText;

}
