export default (function (promise, time, data) {
    if (time === void 0) { time = 10000; }
    if (data === void 0) { data = false; }
    var overtime = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, time);
    });
    return Promise.race([overtime, promise]);
});
//# sourceMappingURL=promise-overtime.js.map