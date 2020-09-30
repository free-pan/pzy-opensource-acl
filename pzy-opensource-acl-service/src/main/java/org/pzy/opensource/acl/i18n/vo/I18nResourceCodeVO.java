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
 * sys_i18n_resource_code 表VO类: 用于服务端返回客户端数据
 *
 * @author pan
 * @since 2020-09-27
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nResourceCodeVO implements Serializable {

    private static final long serialVersionUID=1L;

    @ApiModelProperty(value = "资源编码")
    private String code;


    @ApiModelProperty(value = "")
    private Long id;

    @ApiModelProperty(value = "创建人")
    private Long creatorId;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createTime;

    @ApiModelProperty(value = "编辑人")
    private Long editorId;

    @ApiModelProperty(value = "编辑时间")
    private LocalDateTime editTime;

    @ApiModelProperty(value = "创建人姓名")
    private String creatorName;

    @ApiModelProperty(value = "编辑人姓名")
    private String editorName;

}
