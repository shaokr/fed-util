declare const KeyList: {
    /**
     * 驼峰
     */
    camel: (string?: string | undefined) => string;
    /**
     * 中划线
     */
    kebab: (string?: string | undefined) => string;
    /**
     * 小写空格
     */
    lower: (string?: string | undefined) => string;
    /**
     * 下划线
     */
    snake: (string?: string | undefined) => string;
    /**
     *  首字母大写空格
     */
    start: (string?: string | undefined) => string;
    /**
     * 全大写空格
     */
    upper: (string?: string | undefined) => string;
};
/**
 * 递归驼峰化处理数据
 * @param data
 * @param depth
 * @returns
 */
declare const dataCaseDeep: (data: any, key?: keyof typeof KeyList, depth?: number) => any;
export default dataCaseDeep;
