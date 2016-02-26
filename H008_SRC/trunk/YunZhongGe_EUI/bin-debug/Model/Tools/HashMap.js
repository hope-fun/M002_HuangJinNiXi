var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var HashMap = (function () {
        function HashMap() {
        }
        var d = __define,c=HashMap,p=c.prototype;
        p.Set = function (key, value) {
            this[key] = value;
        };
        p.Get = function (key) {
            return this[key];
        };
        p.Contains = function (key) {
            return this.Get(key) == null ? false : true;
        };
        p.Remove = function (key) {
            delete this[key];
        };
        /**
         * @未實現.
         */
        p.Clear = function () {
        };
        return HashMap;
    })();
    Model.HashMap = HashMap;
    egret.registerClass(HashMap,'Model.HashMap');
})(Model || (Model = {}));
