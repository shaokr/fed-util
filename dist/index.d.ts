/// <reference types="qs" />
import monitor from "./monitor";
import param from "./param";
export { monitor, param };
declare const _default: {
    promiseClass: () => import("./promise-class").PromiseClass;
    monitor: typeof monitor;
    param: import("qs").ParsedQs;
};
export default _default;
