var Model;
(function (Model) {
    /**
     * @Data:组织VM所需要的数据.
     * @author: zhu_jun
     * @date: 2016.01.05.
     */
    var MainInfoData = (function () {
        function MainInfoData() {
        }
        var d = __define,c=MainInfoData,p=c.prototype;
        d(p, "getSkillDyList"
            /**
             * @获取技能动态列表.
             */
            ,function () {
                return Model.WebValue.dataDyModel.skillModelList;
            }
        );
        d(p, "getSkillStList"
            /**
             * @获取技能静态列表.
             */
            ,function () {
                return Model.WebValue.dataStModel.skillList;
            }
        );
        return MainInfoData;
    })();
    Model.MainInfoData = MainInfoData;
    egret.registerClass(MainInfoData,'Model.MainInfoData');
})(Model || (Model = {}));
