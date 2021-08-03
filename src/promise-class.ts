export interface PromiseClass<T> extends Promise<T> {
  reject: (value: T) => void;
  resolve: (reason?: any) => void;
  state: "pending" | "fulfilled" | "rejected";
}

export default <T = any>() => {
  let _reject: any;
  let _resolve: any;
  const _promise: PromiseClass<T> = new Promise((resolve, reject) => {
    _reject = (data: any) => {
      if (_promise.state === "pending") {
        _promise.state = "rejected";
        reject(data);
      }
    };
    _resolve = (data: any) => {
      if (_promise.state === "pending") {
        _promise.state = "fulfilled";
        resolve(data);
      }
    };
  }) as any;
  _promise.reject = _reject;
  _promise.resolve = _resolve;
  _promise.state = "pending";
  return _promise;
};
