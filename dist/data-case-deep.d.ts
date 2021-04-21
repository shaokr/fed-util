declare const KeyList: {
    /**
     * 驼峰
     */
    readonly camel: (string?: string) => string;
    /**
     * 中划线
     */
    readonly kebab: (string?: string) => string;
    /**
     * 小写空格
     */
    readonly lower: (string?: string) => string;
    /**
     * 下划线
     */
    readonly snake: (string?: string) => string;
    /**
     *  首字母大写空格
     */
    readonly start: (string?: string) => string;
    /**
     * 全大写空格
     */
    readonly upper: (string?: string) => string;
};
/**
 * 递归驼峰化处理数据
 * @param data
 * @param depth
 * @returns
 */
declare const dataCaseDeep: (data: any, key?: keyof typeof KeyList, depth?: number) => any;
export default dataCaseDeep;
