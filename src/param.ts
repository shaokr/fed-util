/**
 * 解析参数等
 * shaokr 2020.8.18
 */
import qs from "qs";
/**
 * 传入url可解析url中的参数
 */
export const getParam = (url: string): { [key: string]: any } => {
  let search = url.match(/\?([^#]+)/);
  if (search) {
    let _search = search[1];
    return qs.parse(_search);
  }
  return {};
};

// 输出给外面的param处理
const param = getParam(location.href);
const _debug = param.debug || window.debug;
if (typeof _debug !== "undefined") {
  param.debug = _debug;
}
export default param;
