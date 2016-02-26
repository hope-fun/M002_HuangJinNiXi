var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun
     * @date: 2016.01.06.
     * @神器弹窗本地数据对象.
     */
    var MagicWeaponData = (function () {
        /**
         * @_dy:神器动态信息.
         * @_st:神器静态信息.
         */
        function MagicWeaponData(_dy, _st) {
            this.dy = _dy;
            this.st = _st;
        }
        var d = __define,c=MagicWeaponData,p=c.prototype;
        d(p, "TypeFirst"
            /**
             * @神器效果1的加成类型.
             */
            ,function () {
                return Model.MagicWeaponEffectType[this.st.weaponEffectTypeFirst];
            }
        );
        d(p, "TypeSecond"
            /**
             * @神器效果2的加成类型.
             */
            ,function () {
                return Model.MagicWeaponEffectType[this.st.weaponEffectTypeSecond];
            }
        );
        return MagicWeaponData;
    })();
    Model.MagicWeaponData = MagicWeaponData;
    egret.registerClass(MagicWeaponData,'Model.MagicWeaponData');
})(Model || (Model = {}));
