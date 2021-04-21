/**
 *
 */
import CountDown from "./count-down";
import createUrlParams from "./create-url-params";
import dataCaseDeep from "./data-case-deep";
import globalVar from "./global-var";
import isFile from "./is-file";
import promiseOvertime from "./promise-overtime";
import Monitor from "./monitor";
import promiseClass from "./promise-class";
export { CountDown, createUrlParams, dataCaseDeep, globalVar, isFile, promiseOvertime, Monitor, promiseClass, };
declare const _default: {
    CountDown: typeof CountDown;
    createUrlParams: typeof createUrlParams;
    dataCaseDeep: (data: any, key?: "start" | "camel" | "kebab" | "lower" | "snake" | "upper", depth?: number) => any;
    globalVar: {
        get: (key: string) => any;
        set: (key: string, val: any) => any;
    };
    isFile: (params: any) => boolean;
    promiseOvertime: (promise: Promise<any>, time?: number, data?: any) => Promise<any>;
    Monitor: typeof Monitor;
    promiseClass: <T = any>() => import("./promise-class").PromiseClass<T>;
};
export default _default;
