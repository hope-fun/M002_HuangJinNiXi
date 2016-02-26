var Model;
(function (Model) {
    /**
     * @author: zhu_jun
     * @date: 2015.12.26.
     */
    var DataStModel = (function () {
        function DataStModel() {
            /**
             * @挚友、技能.
             */
            this.friendSkillList = new Array();
        }
        var d = __define,c=DataStModel,p=c.prototype;
        return DataStModel;
    })();
    Model.DataStModel = DataStModel;
    egret.registerClass(DataStModel,'Model.DataStModel');
})(Model || (Model = {}));
