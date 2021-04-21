import _ from "lodash";
import Monitor from "./monitor";
export default class {
    constructor(props) {
        this.props = {
            duration: 60 * 1000,
            rate: 1000,
            isAutoStart: true,
        };
        this._timeProxy = { time: 0, timeI: 0 };
        this._onTick = new Monitor();
        this._onComplete = new Monitor();
        this._calculation = () => {
            const { rate, duration } = this.props;
            if (duration !== 0) {
                this._timeProxy.time -= rate;
                if (this._timeProxy.time < 0)
                    this._timeProxy.time = 0;
                const { time } = this._timeProxy;
                if (time === 0) {
                    this.stop();
                    this._onComplete.go(time);
                }
            }
            else {
                this._timeProxy.time += rate;
            }
            this._onTick.go(this._timeProxy.time);
        };
        /**
         * 每次触发事件
         */
        this.onTick = this._onTick.on;
        /**
         * 完成
         */
        this.onComplete = this._onComplete.on;
        _.assign(this.props, props);
        this.reset();
        if (this.props.isAutoStart) {
            this.start();
        }
    }
    /**
     * 是否倒计时中
     */
    get isInTime() {
        return !!this._timeProxy.timeI;
    }
    /**
     * 开始
     */
    start() {
        const { rate } = this.props;
        this.stop();
        this._timeProxy.timeI = setInterval(this._calculation, rate);
        this._calculation();
    }
    /**
     * 暂停
     */
    stop() {
        clearInterval(this._timeProxy.timeI);
        this._timeProxy.timeI = 0;
    }
    /**
     * 终止
     */
    abort() {
        this.stop();
        this.reset();
    }
    /**
     * 重置
     */
    reset() {
        this._timeProxy.time = this.props.duration;
    }
    /**
     * 获取剩余时间
     */
    getRemainingTime() {
        return this._timeProxy.time;
    }
}
//# sourceMappingURL=count-down.js.map