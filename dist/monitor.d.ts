export default class Monitor<T = any> {
    list: {
        [key: string]: any;
    };
    on: (fun: (data: T) => void) => {
        key: string;
        off: () => void;
    };
    once: (fn: (data: T) => string) => {
        key: string;
        off: () => void;
    };
    off: (key: string | number) => boolean;
    go: (...res: any) => any[];
    offAll: () => boolean;
}
