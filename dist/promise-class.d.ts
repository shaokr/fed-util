export interface PromiseClass extends Promise<any> {
    reject: Function;
    resolve: Function;
}
declare const _default: () => PromiseClass;
export default _default;
