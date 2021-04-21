export interface PromiseClass<T> extends Promise<T> {
  reject: (value: T) => void;
  resolve: (reason?: any) => void;
}

export default <T = any>() => {
  let _reject: any;
  let _resolve: any;
  const _promise: PromiseClass<T> = new Promise((resolve, reject) => {
    _reject = reject;
    _resolve = resolve;
  }) as any;
  _promise.reject = _reject;
  _promise.resolve = _resolve;
  return _promise;
};
