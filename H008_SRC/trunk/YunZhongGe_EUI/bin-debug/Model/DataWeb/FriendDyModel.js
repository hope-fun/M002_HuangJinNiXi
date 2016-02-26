var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var FriendDyModel = (function () {
        function FriendDyModel(_friendId, _level, _layerId) {
            this.friendId = _friendId;
            this.level = _level;
            this.layerId = _layerId;
        }
        var d = __define,c=FriendDyModel,p=c.prototype;
        return FriendDyModel;
    })();
    Model.FriendDyModel = FriendDyModel;
    egret.registerClass(FriendDyModel,'Model.FriendDyModel');
})(Model || (Model = {}));
