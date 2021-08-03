declare type Fun<T, T2, T3, T4, T5, T6, T7, T8, T9> = (arg: T, arg2?: T2, arg3?: T3, arg4?: T4, arg5?: T5, arg6?: T6, arg7?: T7, arg8?: T8, arg9?: T9) => void;
export default class Monitor<T = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any> {
    list: {
        [key: string]: any;
    };
    on: (fun: Fun<T, T2, T3, T4, T5, T6, T7, T8, T9>) => {
        key: string;
        off: () => void;
    };
    once: (fn: Fun<T, T2, T3, T4, T5, T6, T7, T8, T9>) => {
        key: string;
        off: () => void;
    };
    off: (key: string | number) => boolean;
    go: (...res: any) => any[];
    offAll: () => boolean;
}
export {};
