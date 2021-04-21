import _ from "lodash";
import fp from "lodash/fp";
var isBodyFilePrototype = function (val) {
    return fp.includes(Object.prototype.toString.call(val))([
        "[object File]",
        "[object Blob]",
    ]);
};
// 判断参数类型是否含文件
var isBodyFile = function (params) {
    var result = false;
    var twoforEachObj = [];
    _.forEach(params, function (val) {
        if (typeof val !== "undefined" && isBodyFilePrototype(val)) {
            result = true;
            return false;
        }
        else if (typeof val === "object") {
            twoforEachObj.push(val);
        }
    });
    if (!result) {
        _.forEach(twoforEachObj, function (val) {
            result = isBodyFile(val);
            return !result;
        });
    }
    return result;
};
export default isBodyFile;
//# sourceMappingURL=is-file.js.map