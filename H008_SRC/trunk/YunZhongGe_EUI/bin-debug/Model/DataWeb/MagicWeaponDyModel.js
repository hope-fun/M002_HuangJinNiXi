var Model;
(function (Model) {
    /**
     * @author: zhu_jun.
     * @date: 2015.12.26.
     */
    var MagicWeaponDyModel = (function () {
        function MagicWeaponDyModel(_magicWeaponId, _level) {
            this.magicWeaponId = _magicWeaponId;
            this.level = _level;
        }
        var d = __define,c=MagicWeaponDyModel,p=c.prototype;
        return MagicWeaponDyModel;
    })();
    Model.MagicWeaponDyModel = MagicWeaponDyModel;
    egret.registerClass(MagicWeaponDyModel,'Model.MagicWeaponDyModel');
})(Model || (Model = {}));
