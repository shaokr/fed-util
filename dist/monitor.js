var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * 事件监听
 * Created by zombie on 2017/1/19.
 */
var keyCount = 1;
var Monitor = /** @class */ (function () {
    function Monitor() {
        var _this = this;
        this.list = {};
        // 注册
        this.on = function (fun) {
            if (fun === void 0) { fun = function () { }; }
            var key = "key-" + keyCount++ + "-" + +new Date();
            _this.list[key] = fun;
            return {
                key: key,
                off: function () {
                    _this.off(key);
                }
            };
        };
        // 注册一次执行后关闭
        this.once = function (fn) {
            if (fn === void 0) { fn = function () { }; }
            var _id = _this.on(function (res) {
                _id.off();
                return fn(res);
            });
            return _id;
        };
        // // 删除
        this.off = function (key) {
            delete _this.list[key];
            return true;
        };
        this.go = function () {
            var _a;
            var res = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                res[_i] = arguments[_i];
            }
            var resList = [];
            for (var key in _this.list) {
                try {
                    resList.push((_a = _this.list)[key].apply(_a, __spread(res)));
                }
                catch (e) {
                    resList.push(new Error(e));
                }
            }
            return resList;
        };
        // // 删除所有事件注册
        this.offAll = function () {
            _this.list = {};
            return true;
        };
    }
    return Monitor;
}());
export default Monitor;
//# sourceMappingURL=monitor.js.map