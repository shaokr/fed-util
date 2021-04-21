/**
 * 事件监听
 * Created by zombie on 2017/1/19.
 */
let keyCount = 1;
export default class Monitor {
    constructor() {
        this.list = {};
        // 注册
        this.on = (fun = () => { }) => {
            const key = `key-${keyCount++}-${+new Date()}`;
            this.list[key] = fun;
            return {
                key,
                off: () => {
                    this.off(key);
                }
            };
        };
        // 注册一次执行后关闭
        this.once = (fn = () => { }) => {
            const _id = this.on((res) => {
                _id.off();
                return fn(res);
            });
            return _id;
        };
        // // 删除
        this.off = (key) => {
            delete this.list[key];
            return true;
        };
        this.go = (...res) => {
            const resList = [];
            for (const key in this.list) {
                try {
                    resList.push(this.list[key](...res));
                }
                catch (e) {
                    resList.push(new Error(e));
                }
            }
            return resList;
        };
        // // 删除所有事件注册
        this.offAll = () => {
            this.list = {};
            return true;
        };
    }
}
//# sourceMappingURL=monitor.js.map