export default (function () {
    var _reject;
    var _resolve;
    var _promise = new Promise(function (resolve, reject) {
        _reject = function (data) {
            if (_promise.state === "pending") {
                _promise.state = "rejected";
                reject(data);
            }
        };
        _resolve = function (data) {
            if (_promise.state === "pending") {
                _promise.state = "fulfilled";
                resolve(data);
            }
        };
    });
    _promise.reject = _reject;
    _promise.resolve = _resolve;
    _promise.state = "pending";
    return _promise;
});
//# sourceMappingURL=promise-class.js.map