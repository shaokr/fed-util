export interface PromiseClass<T> extends Promise<T> {
    reject: (value: T) => void;
    resolve: (reason?: any) => void;
}
declare const _default: <T = any>() => PromiseClass<T>;
export default _default;
