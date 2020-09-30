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
 * sys_i18n_resource_value 表实体类:国际化资源值
 *
 * @author pan
 * @since 2020-09-29
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("sys_i18n_resource_value")
@ApiModel
public class I18nResourceValue extends BaseEntity {

    private static final long serialVersionUID=1L;

    private Long languageId;

    @TableField("resource_id")
    private Long resourceId;

    @ApiModelProperty(value = "资源值")
    @TableField("resource_text")
    private String resourceText;

    public static final String LANGUAGE_ID = "language_id";

    public static final String RESOURCE_ID = "resource_id";

    public static final String RESOURCE_TEXT = "resource_text";

}
