import _ from "lodash";
import Monitor from "./monitor";
var default_1 = /** @class */ (function () {
    function default_1(props) {
        this.props = {
            duration: 60 * 1000,
            rate: 1000,
            isAutoStart: true,
        };
        this._timeProxy = { time: 0, timeI: 0 };
        this._onTick = new Monitor();
        this._onComplete = new Monitor();
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
    Object.defineProperty(default_1.prototype, "isStart", {
        /**
         * 是否开始计时
         */
        get: function () {
            return !!this._timeProxy.timeI;
        },
        enumerable: false,
        configurable: true
    });
    default_1.prototype._calculation = function () {
        var rate = this.props.rate;
        this._timeProxy.time -= rate;
        if (this._timeProxy.time < 0)
            this._timeProxy.time = 0;
        var time = this._timeProxy.time;
        if (time === 0) {
            this.stop();
            this._onComplete.go(time);
        }
        this._onTick.go(time);
    };
    /**
     * 开始
     */
    default_1.prototype.start = function () {
        var rate = this.props.rate;
        this._timeProxy.timeI = setInterval(this._calculation, rate);
        this._calculation();
    };
    /**
     * 暂停
     */
    default_1.prototype.stop = function () {
        clearInterval(this._timeProxy.timeI);
        this._timeProxy.timeI = 0;
    };
    /**
     * 终止
     */
    default_1.prototype.abort = function () {
        this.stop();
        this.reset();
    };
    /**
     * 重置
     */
    default_1.prototype.reset = function () {
        this._timeProxy.time = this.props.duration;
    };
    /**
     * 获取剩余时间
     */
    default_1.prototype.getRemainingTime = function () {
        return this._timeProxy.time;
    };
    return default_1;
}());
export default default_1;
//# sourceMappingURL=count-down.js.map