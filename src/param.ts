/**
 * 解析参数等
 * shaokr 2020.8.18
 */
import qs from "qs";
import { get } from "./global-var";
/**
 * 传入url可解析url中的参数
 */
export const getParam = (url: string): { [key: string]: any } => {
  if (url) {
    let search = url.match(/\?([^#]+)/);
    if (search) {
      let _search = search[1];
      return qs.parse(_search);
    }
  }
  return {};
};

// 输出给外面的param处理
const param = getParam(get("location")?.href);
const _debug = param.debug || get("debug");
if (typeof _debug !== "undefined") {
  param.debug = _debug;
}
export default param;
