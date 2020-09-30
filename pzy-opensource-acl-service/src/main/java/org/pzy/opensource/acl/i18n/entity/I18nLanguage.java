package org.pzy.opensource.acl.i18n.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import org.pzy.opensource.mybatisplus.model.entity.LogicDelBaseEntity;
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
 * sys_i18n_language 表实体类:区域语言
 *
 * @author pan
 * @since 2020-09-27
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("sys_i18n_language")
@ApiModel
public class I18nLanguage extends LogicDelBaseEntity {

    private static final long serialVersionUID=1L;

    @ApiModelProperty(value = "区域语言编码")
    @TableField("code")
    private String code;

    @ApiModelProperty(value = "区域语言名称")
    @TableField("name")
    private String name;

    @ApiModelProperty(value = "显示优先级(值越大优先级越高.最大值:9999)")
    @TableField("display_priority")
    private Integer displayPriority;

    public static final String CODE = "code";

    public static final String NAME = "name";

    public static final String DISPLAY_PRIORITY = "display_priority";

}
