var Model;
(function (Model) {
    /**
     *
     * @author cai_haotian 2015.12.24.
     *
     */
    var MonsterStModel = (function () {
        function MonsterStModel() {
        }
        var d = __define,c=MonsterStModel,p=c.prototype;
        d(p, "MonsterType"
            /**
             * @怪物类型.
             */
            ,function () {
                return Model.MonsterType[this.monsterType];
            }
        );
        return MonsterStModel;
    })();
    Model.MonsterStModel = MonsterStModel;
    egret.registerClass(MonsterStModel,'Model.MonsterStModel');
})(Model || (Model = {}));
