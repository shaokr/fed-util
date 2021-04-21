import _ from 'lodash';
import fp from 'lodash/fp';
export const get = (key) => {
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
export const set = (key, val) => {
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
    get,
    set,
};
//# sourceMappingURL=global-var.js.map