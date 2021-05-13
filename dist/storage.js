/**
 * h5 本地存储
 */
var localStorage = window.localStorage, sessionStorage = window.sessionStorage, location = window.location;
var KEY = location.pathname;
var getKEY = function (key, G) { return (G ? key : "" + KEY + key); };
var Storage = /** @class */ (function () {
    function Storage(props) {
        this.storage = props;
    }
    Object.defineProperty(Storage.prototype, "longth", {
        // 获取长度
        get: function () {
            var i = 0;
            for (var key in this.storage) {
                if (key.indexOf(KEY) === 0)
                    i++;
            }
            return i;
        },
        enumerable: false,
        configurable: true
    });
    // 获取
    Storage.prototype.get = function (key, G) {
        if (G === void 0) { G = false; }
        return JSON.parse(this.storage.getItem(getKEY(key, G)) || "null");
    };
    // 设置
    Storage.prototype.set = function (key, val, G) {
        if (G === void 0) { G = false; }
        this.storage.setItem(getKEY(key, G), JSON.stringify(val));
    };
    // 删除项
    Storage.prototype.remove = function (key, G) {
        if (G === void 0) { G = false; }
        this.storage.removeItem(getKEY(key, G));
    };
    // 清除全部
    Storage.prototype.clear = function (G) {
        if (G === void 0) { G = false; }
        if (G) {
            this.storage.clear();
        }
        else {
            for (var key in this.storage) {
                if (key.indexOf(KEY) === 0)
                    this.remove(key.replace(KEY, ""));
            }
        }
    };
    Storage.prototype.has = function (key, G) {
        if (G === void 0) { G = false; }
        return this.storage.hasOwnProperty(getKEY(key, G));
    };
    return Storage;
}());
export var local = new Storage(localStorage);
export var session = new Storage(sessionStorage);
export default {
    local: local,
    session: session,
};
//# sourceMappingURL=storage.js.map