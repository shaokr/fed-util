export interface PromiseClass extends Promise<any> {
  reject: Function;
  resolve: Function;
}

export default () => {
  let _reject = () => {};
  let _resolve = () => {};
  const _promise: any = new Promise((resolve, reject) => {
    _reject = reject;
    _resolve = resolve;
  });
  _promise.reject = _reject;
  _promise.resolve = _resolve;
  return _promise as PromiseClass;
};
