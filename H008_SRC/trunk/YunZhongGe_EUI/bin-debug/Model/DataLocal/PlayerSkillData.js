var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun
     * @data: 2016.01.14.
     *
     */
    var PlayerSkillData = (function () {
        function PlayerSkillData(_dy, _st) {
            this.dy = _dy;
            this.st = _st;
        }
        var d = __define,c=PlayerSkillData,p=c.prototype;
        d(p, "CostAndUnit"
            /**
             * @带单位技能花费.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.cost);
            }
        );
        d(p, "Description"
            /**
             * @技能描述.
             */
            ,function () {
                return this.st.description.replace("{}", this.effect.toString());
            }
        );
        return PlayerSkillData;
    })();
    Model.PlayerSkillData = PlayerSkillData;
    egret.registerClass(PlayerSkillData,'Model.PlayerSkillData');
})(Model || (Model = {}));
