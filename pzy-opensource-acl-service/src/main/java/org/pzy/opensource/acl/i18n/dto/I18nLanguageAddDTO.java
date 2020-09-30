package org.pzy.opensource.acl.i18n.dto;

import com.baomidou.mybatisplus.annotation.TableName;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.pzy.opensource.mybatisplus.model.entity.LogicDelBaseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

/**
 * sys_i18n_language 表DTO类: 用于新增操作时接收客户端参数
 *
 * @author pan
 * @since 2020-09-27
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel
public class I18nLanguageAddDTO extends I18nLanguageAddEditCommDTO {

    private static final long serialVersionUID = 1L;

}
