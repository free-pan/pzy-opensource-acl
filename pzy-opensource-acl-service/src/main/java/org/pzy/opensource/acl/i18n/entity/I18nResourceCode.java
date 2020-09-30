package org.pzy.opensource.acl.i18n.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import org.pzy.opensource.mybatisplus.model.entity.BaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import java.time.*;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

/**
 * sys_i18n_resource_code 表实体类:国际化资源编码
 *
 * @author pan
 * @since 2020-09-27
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("sys_i18n_resource_code")
@ApiModel
public class I18nResourceCode extends BaseEntity {

    private static final long serialVersionUID=1L;

    @ApiModelProperty(value = "资源编码")
    @TableField("code")
    private String code;

    public static final String CODE = "code";

}
