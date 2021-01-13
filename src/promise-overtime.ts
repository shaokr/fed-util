const promiseOvertime = (
  promise: Promise<any>,
  time: number = 10000,
  data: any = false
) => {
  const overtime = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
  return Promise.race([overtime, promise]);
};
export const promiseOvertimeApi = (
  promise: Promise<any>,
  time: number = 10000,
  data: any = {
    isSuccess: false,
    message: "连接超时",
  }
) => {
  return promiseOvertime(promise, time, data);
};
export default promiseOvertime;
