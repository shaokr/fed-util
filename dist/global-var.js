import _ from 'lodash';
import fp from 'lodash/fp';
export var get = function (key) {
    try {
        if (window) {
            return fp.get(key, window);
        }
    }
    catch (e) {
        if (global) {
            return fp.get(key, global);
        }
    }
};
export var set = function (key, val) {
    try {
        if (window) {
            return _.set(window, key, val);
        }
    }
    catch (e) {
        if (global) {
            return _.set(global, key, val);
        }
    }
};
export default {
    get: get,
    set: set,
};
//# sourceMappingURL=global-var.js.map