var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun
     * @date: 2016.02.02.
     *
     */
    var SkillDyModel = (function () {
        function SkillDyModel(_skillId, _level, _cdTime) {
            this.skillId = _skillId;
            this.level = _level;
            this.cdTime = _cdTime;
        }
        var d = __define,c=SkillDyModel,p=c.prototype;
        return SkillDyModel;
    })();
    Model.SkillDyModel = SkillDyModel;
    egret.registerClass(SkillDyModel,'Model.SkillDyModel');
})(Model || (Model = {}));
