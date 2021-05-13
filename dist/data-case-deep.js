import _ from "lodash";
import fp from "lodash/fp";
var KeyList = {
    /**
     * 驼峰
     */
    get camel() {
        return _.camelCase;
    },
    /**
     * 中划线
     */
    get kebab() {
        return _.kebabCase;
    },
    /**
     * 小写空格
     */
    get lower() {
        return _.lowerCase;
    },
    /**
     * 下划线
     */
    get snake() {
        return _.snakeCase;
    },
    /**
     *  首字母大写空格
     */
    get start() {
        return _.startCase;
    },
    /**
     * 全大写空格
     */
    get upper() {
        return _.upperCase;
    },
};
/**
 * 递归驼峰化处理数据
 * @param data
 * @param depth
 * @returns
 */
var dataCaseDeep = function (data, key, depth) {
    if (key === void 0) { key = "camel"; }
    if (depth === void 0) { depth = 99; }
    if (depth <= 0) {
        return data;
    }
    var dataCase = fp.get(key, KeyList);
    if (fp.isArray(data)) {
        return _.map(data, function (item) { return dataCaseDeep(item, key, depth - 1); });
    }
    if (fp.isObject(data)) {
        data = _.mapValues(data, function (item) { return dataCaseDeep(item, key, depth - 1); });
        return _.mapKeys(data, function (item, key) { return dataCase(key); });
    }
    return data;
};
export default dataCaseDeep;
//# sourceMappingURL=data-case-deep.js.map