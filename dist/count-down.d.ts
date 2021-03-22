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
    props: {
        duration: number;
        rate: number;
        isAutoStart: boolean;
    };
    private _timeProxy;
    private _onTick;
    private _onComplete;
    /**
     * 是否开始计时
     */
    get isStart(): boolean;
    constructor(props: Props);
    private _calculation;
    /**
     * 开始
     */
    start(): void;
    /**
     * 暂停
     */
    stop(): void;
    /**
     * 终止
     */
    abort(): void;
    /**
     * 重置
     */
    reset(): void;
    /**
     * 获取剩余时间
     */
    getRemainingTime(): number;
    /**
     * 每次触发事件
     */
    onTick: (fun?: any) => {
        key: string;
        off: () => void;
    };
    /**
     * 完成
     */
    onComplete: (fun?: any) => {
        key: string;
        off: () => void;
    };
}
export {};