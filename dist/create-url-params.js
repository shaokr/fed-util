/**
 * 处理url param
 */
import qs from 'qs';
/**
 * obj可以是字符串、数组、对象
 */
function createUrl(obj, url) {
    if (url === void 0) { url = false; }
    var _data = qs.stringify(obj);
    if (url !== false && typeof url === "string") {
        var urlArr = url.split("#");
        var _url = urlArr[0];
        var i = _url.indexOf("?");
        var _getParam = "?" + _data;
        if (~i) {
            if (i != _url.length - 1) {
                _getParam += "&";
            }
            _url = _url.replace(/(\?)/, _getParam);
        }
        else {
            _url += _getParam;
        }
        urlArr[0] = _url;
        return urlArr.join("#");
    }
    else {
        return _data;
    }
}
export default createUrl;
//# sourceMappingURL=create-url-params.js.map