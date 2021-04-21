import _ from "lodash";
import fp from "lodash/fp";
const KeyList = {
  /**
   * 驼峰
   */
  camel: _.camelCase,
  /**
   * 中划线
   */
  kebab: _.kebabCase,
  /**
   * 小写空格
   */
  lower: _.lowerCase,
  /**
   * 下划线
   */
  snake: _.snakeCase,
  /**
   *  首字母大写空格
   */
  start: _.startCase,
  /**
   * 全大写空格
   */
  upper: _.upperCase,
};
/**
 * 递归驼峰化处理数据
 * @param data
 * @param depth
 * @returns
 */
const dataCaseDeep = (
  data: any,
  key: keyof typeof KeyList = "camel",
  depth = 99
): any => {
  if (depth <= 0) {
    return data;
  }
  const dataCase = fp.get(key, KeyList);
  if (fp.isArray(data)) {
    return _.map(data, (item) => dataCaseDeep(item, key, depth - 1));
  }
  if (fp.isObject(data)) {
    data = _.mapValues(data, (item) => dataCaseDeep(item, key, depth - 1));
    return _.mapKeys(data, (item, key) => dataCase(key));
  }
  return data;
};

export default dataCaseDeep;
