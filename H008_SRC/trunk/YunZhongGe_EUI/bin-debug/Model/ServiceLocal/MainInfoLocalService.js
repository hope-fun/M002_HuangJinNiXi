var Model;
(function (Model) {
    /**
     * @Service增删改查.
     * @author: zhu_jun.
     * @date:2016.01.05.
     * @添加数据,更新数据,保存数据,获取数据,计算
     */
    var MainInfoLocalService = (function () {
        function MainInfoLocalService() {
        }
        var d = __define,c=MainInfoLocalService,p=c.prototype;
        /**
         * @by cai_haotian
         * @2016.1.13.
         * @modification: by zhu_jun,2016.01.15.
         * @从10进制到有单位换算
         * @返回的是一个数组0是数值1是单位
         */
        MainInfoLocalService.toUnitConversion = function (value) {
            var unitId = 1;
            while (value >= 1000) {
                value /= 1000;
                unitId += 1;
            }
            var result = String(value.toFixed(2) + MainInfoLocalService.getMagnitudeListById(unitId.toString()));
            return result;
        };
        /**
         * @by cai_haotian
         * @2016.1.13.
         * @modification: by zhu_jun,2016.01.15.
         * @从有单位到10进制换算
         * @返回的是一个10进制数
         */
        MainInfoLocalService.toTenConversion = function (value, unitId) {
            var result = value * Math.pow(1000, parseInt(unitId) - 1);
            return result;
        };
        /**
         * @by zhu_jun,2016.01.15.
         * @根据id，获取单位.
         */
        MainInfoLocalService.getMagnitudeListById = function (_id) {
            if (_id == undefined) {
                console.log("zhujun: unit id is undefined ! " + _id);
                return;
            }
            var list = Enumerable.From(Model.WebValue.dataStModel.magnitudeList);
            var result = list.Where(function (l) { return l.id == _id; }).First();
            var unit = result.magnitude;
            if (unit == "0") {
                unit = "";
            }
            return unit;
        };
        /**
         * @mainInfo界面所需要的数据对象.
         */
        MainInfoLocalService.mainInfoData = new Model.MainInfoData();
        return MainInfoLocalService;
    })();
    Model.MainInfoLocalService = MainInfoLocalService;
    egret.registerClass(MainInfoLocalService,'Model.MainInfoLocalService');
})(Model || (Model = {}));
