/**
 * 解析参数等
 * shaokr 2020.8.18
 */
import qs from "qs";
/**
 * 传入url可解析url中的参数
 */
export var getParam = function (url) {
    var search = url.match(/\?([^#]+)/);
    if (search) {
        var _search = search[1];
        return qs.parse(_search);
    }
    return {};
};
// 输出给外面的param处理
var param = getParam(location.href);
var _debug = param.debug || window.debug;
if (typeof _debug !== "undefined") {
    param.debug = _debug;
}
export default param;
//# sourceMappingURL=param.js.map