export default (function () {
    var _reject;
    var _resolve;
    var _promise = new Promise(function (resolve, reject) {
        _reject = reject;
        _resolve = resolve;
    });
    _promise.reject = _reject;
    _promise.resolve = _resolve;
    return _promise;
});
//# sourceMappingURL=promise-class.js.map