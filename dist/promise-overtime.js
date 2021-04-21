const promiseOvertime = (promise, time = 10000, data = false) => {
    const overtime = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
    return Promise.race([overtime, promise]);
};
export const promiseOvertimeApi = (promise, time = 10000, data = {
    isSuccess: false,
    message: "连接超时",
}) => {
    return promiseOvertime(promise, time, data);
};
export default promiseOvertime;
//# sourceMappingURL=promise-overtime.js.map