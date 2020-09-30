interface AntdTableColumnInfo {
  /**
   * 列标题
   */
  title: any;
  /**
   * antd用到的key
   */
  key: string;
  /**
   * 与数据对应的属性名.默认与key相同,如果dataIndex明确null,则表示该列不与具体的数据对应
   */
  dataIndex?: string;
  /**
   * 自定义render函数
   */
  render?: Function;
}

export default {
  /**
   * 将列定义转换为antd的列定义以及SearchCardExtra需要的列定义
   * @param columnArr
   */
  columnDefineConvert(columnArr: Array<AntdTableColumnInfo>) {
    // 存放antd的列定义
    const antdColumnMap = {};
    // 存放SearchCardExtra的列定义
    const columnList = [];
    columnArr.map((item) => {
      const tmp = {
        title: item.title,
        key: item.key,
      };
      antdColumnMap[item.key] = tmp;
      columnList.push({
        name: item.key,
        title: item.title,
      });
      if (item.dataIndex !== null) {
        tmp['dataIndex'] = item.key;
      }
      if (item.render) {
        tmp['render'] = item.render;
      }
    });
    return { antdColumnMap, columnList };
  },
  /**
   * 将antdColumnMap中的列定义,按columnInfoList顺序,放入数组,并返回
   * @param antdColumnMap antd 表格的列定义, key为key,value为列定义
   * @param columnList 表格的列顺序
   */
  antdColumnSortByColumnInfo(antdColumnMap, columnInfoList) {
    const antdColumnArr = [];
    columnInfoList.map((item) => {
      antdColumnArr.push(antdColumnMap[item.name]);
    });
    return antdColumnArr;
  },
  /**
   * 将antdColumnMap中的列定义,按columnInfoList顺序,放入数组,并返回
   * @param antdColumnMap antd 表格的列定义, key为key,value为列定义
   * @param columnNameList 表格的列顺序
   */
  antdColumnSortByColumnName(antdColumnMap, columnNameList) {
    const antdColumnArr = [];
    columnNameList.map((item) => {
      antdColumnArr.push(antdColumnMap[item]);
    });
    return antdColumnArr;
  },
};
