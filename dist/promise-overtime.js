var promiseOvertime = function (promise, time, data) {
    if (time === void 0) { time = 10000; }
    if (data === void 0) { data = false; }
    var overtime = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, time);
    });
    return Promise.race([overtime, promise]);
};
export var promiseOvertimeApi = function (promise, time, data) {
    if (time === void 0) { time = 10000; }
    if (data === void 0) { data = {
        isSuccess: false,
        message: "连接超时",
    }; }
    return promiseOvertime(promise, time, data);
};
export default promiseOvertime;
//# sourceMappingURL=promise-overtime.js.map