var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var Vector2 = (function () {
        function Vector2(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        var d = __define,c=Vector2,p=c.prototype;
        return Vector2;
    })();
    Model.Vector2 = Vector2;
    egret.registerClass(Vector2,'Model.Vector2');
})(Model || (Model = {}));
