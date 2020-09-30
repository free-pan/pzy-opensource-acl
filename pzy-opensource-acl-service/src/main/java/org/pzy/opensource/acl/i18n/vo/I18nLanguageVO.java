package org.pzy.opensource.acl.i18n.vo;

import com.baomidou.mybatisplus.annotation.TableName;
import org.pzy.opensource.mybatisplus.model.entity.LogicDelBaseEntity;

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
 * sys_i18n_language 表VO类: 用于服务端返回客户端数据
 *
 * @author pan
 * @since 2020-09-27
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nLanguageVO implements Serializable {

    private static final long serialVersionUID=1L;

    @ApiModelProperty(value = "区域语言编码")
    private String code;
    @ApiModelProperty(value = "区域语言名称")
    private String name;
    @ApiModelProperty(value = "显示优先级(值越大优先级越高.最大值:9999)")
    private Integer displayPriority;


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

    @ApiModelProperty(value = "是否作废. 1.未作废 0.已作废")
    private Integer invalid;

    @ApiModelProperty(value = "废弃操作人id")
    private Long invalidOperatorId;

    @ApiModelProperty(value = "废弃时间")
    private LocalDateTime invalidTime;

    @ApiModelProperty(value = "执行作废操作的操作人姓名")
    private String invalidName;

    @ApiModelProperty(value = "创建人姓名")
    private String creatorName;

    @ApiModelProperty(value = "编辑人姓名")
    private String editorName;

}
