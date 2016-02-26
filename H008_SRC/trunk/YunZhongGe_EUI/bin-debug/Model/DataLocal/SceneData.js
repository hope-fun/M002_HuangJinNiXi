var Model;
(function (Model) {
    /**
     * @author: zhu_jun
     * @date: 2016.02.24.
     * @场景动态信息是玩家属性,直接调用WebValue.
     */
    var SceneData = (function () {
        function SceneData(_dy, _st) {
            this.dy = _dy;
            this.st = _st;
        }
        var d = __define,c=SceneData,p=c.prototype;
        return SceneData;
    })();
    Model.SceneData = SceneData;
    egret.registerClass(SceneData,'Model.SceneData');
})(Model || (Model = {}));
