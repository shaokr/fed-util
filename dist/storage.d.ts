declare class Storage {
    storage: globalThis.Storage;
    constructor(props: globalThis.Storage);
    get longth(): number;
    get(key: string, G?: boolean): any;
    set(key: string, val: any, G?: boolean): void;
    remove(key: string, G?: boolean): void;
    clear(G?: boolean): void;
    has(key: string, G?: boolean): boolean;
}
export declare const local: Storage;
export declare const session: Storage;
declare const _default: {
    local: Storage;
    session: Storage;
};
export default _default;
