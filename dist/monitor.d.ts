export default class Monitor {
    list: any;
    on: (fun?: any) => {
        key: string;
        off: () => void;
    };
    once: (fn?: any) => {
        key: string;
        off: () => void;
    };
    off: (key: string | number) => boolean;
    go: (...res: any) => any[];
    offAll: () => boolean;
}
