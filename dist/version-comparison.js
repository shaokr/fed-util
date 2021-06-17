import _ from "lodash";
export var gt = function (value, other) {
    var valueList = _.split(value, ".");
    var otherList = _.split(other, ".");
    var result = false;
    _.forEach(valueList, function (val, index) {
        var _otherVal = _.get(otherList, [index], 0);
        if (_.lt(val, _otherVal)) {
            return false;
        }
        if (_.gt(val, _otherVal)) {
            result = true;
            return false;
        }
    });
    return result;
};
export var eq = function (value, other) {
    var valueList = _.split(value, ".");
    var otherList = _.split(other, ".");
    if (valueList.length < otherList.length) {
        var a = valueList;
        valueList = otherList;
        otherList = a;
    }
    var result = !!valueList.length;
    _.forEach(valueList, function (val, index) {
        var _otherVal = _.get(otherList, [index], 0);
        if (!(val == _otherVal)) {
            result = false;
            return false;
        }
    });
    return result;
};
export var gte = function (value, other) {
    return eq(value, other) || gt(value, other);
};
export var lt = function (value, other) { return !gte(value, other); };
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
export default default_1;
//# sourceMappingURL=version-comparison.js.map