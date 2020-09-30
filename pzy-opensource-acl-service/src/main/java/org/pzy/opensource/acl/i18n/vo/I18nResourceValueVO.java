package org.pzy.opensource.acl.i18n.vo;

import com.baomidou.mybatisplus.annotation.TableName;
import org.pzy.opensource.mybatisplus.model.entity.BaseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import java.io.Serializable;
import java.time.*;

/**
 * sys_i18n_resource_value 表VO类: 用于服务端返回客户端数据
 *
 * @author pan
 * @since 2020-09-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nResourceValueVO implements Serializable {

    private static final long serialVersionUID=1L;
    @ApiModelProperty(value = "区域语言id")
    private Long languageId;
    @ApiModelProperty(value = "国际化资源id")
    private Long resourceId;
    @ApiModelProperty(value = "资源值")
    private String resourceText;


}
