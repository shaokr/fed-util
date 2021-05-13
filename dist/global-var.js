export var get = function (key) {
    try {
        if (window) {
            return window[key];
        }
    }
    catch (e) {
        if (global) {
            return global[key];
        }
    }
};
export var set = function (key, val) {
    try {
        if (window) {
            window[key] = val;
        }
    }
    catch (e) {
        if (global) {
            global[key] = val;
        }
    }
};
export default {
    get: get,
    set: set,
};
//# sourceMappingURL=global-var.js.map