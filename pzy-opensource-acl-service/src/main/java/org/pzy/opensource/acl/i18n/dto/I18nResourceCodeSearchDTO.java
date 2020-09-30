package org.pzy.opensource.acl.i18n.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.pzy.opensource.domain.dto.KeywordDateRangeSearchDTO;
import org.pzy.opensource.domain.vo.PageVO;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

/**
 * I18nResourceCode查询条件
 *
 * @author pan
 * @date 2020-09-27
 */
@Data
public class I18nResourceCodeSearchDTO extends KeywordDateRangeSearchDTO {

    @ApiModelProperty(value = "分页条件")
    private PageVO pg;

    public I18nResourceCodeSearchDTO() {
        this.pg = new PageVO();
    }
}
