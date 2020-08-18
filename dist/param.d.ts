/**
 * 解析参数等
 * shaokr 2020.8.18
 */
import qs from "qs";
/**
 * 传入url可解析url中的参数
 */
export declare const getParam: (url: string) => qs.ParsedQs;
declare const param: qs.ParsedQs;
export default param;
