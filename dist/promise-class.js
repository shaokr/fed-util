export default () => {
    let _reject;
    let _resolve;
    const _promise = new Promise((resolve, reject) => {
        _reject = reject;
        _resolve = resolve;
    });
    _promise.reject = _reject;
    _promise.resolve = _resolve;
    return _promise;
};
//# sourceMappingURL=promise-class.js.map