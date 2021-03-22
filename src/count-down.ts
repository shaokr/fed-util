import _ from "lodash";
import Monitor from "./monitor";
interface Props {
  /**
   * 结束时间(ms)
   * 默认: 60000
   */
  duration?: number;
  /**
   * 频率(ms)
   * 默认: 1000
   */
  rate?: number;
  /**
   * 是否自动开始
   * 默认: true
   */
  isAutoStart?: boolean;
}
export default class {
  props = {
    duration: 60 * 1000,
    rate: 1000,
    isAutoStart: true,
  };
  private _timeProxy = { time: 0, timeI: 0 };
  private _onTick = new Monitor();
  private _onComplete = new Monitor();
  /**
   * 是否倒计时中
   */
  get isInTime() {
    return !!this._timeProxy.timeI;
  }
  constructor(props: Props) {
    _.assign(this.props, props);
    this.reset();
    if (this.props.isAutoStart) {
      this.start();
    }
  }
  private _calculation() {
    const { rate } = this.props;
    this._timeProxy.time -= rate;
    if (this._timeProxy.time < 0) this._timeProxy.time = 0;
    const { time } = this._timeProxy;
    if (time === 0) {
      this.stop();
      this._onComplete.go(time);
    }
    this._onTick.go(time);
  }
  /**
   * 开始
   */
  start() {
    const { rate } = this.props;
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

  /**
   * 每次触发事件
   */
  onTick = this._onTick.on;

  /**
   * 完成
   */
  onComplete = this._onComplete.on;
}
