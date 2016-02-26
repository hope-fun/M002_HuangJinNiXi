var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var PlayerSkillLocalService = (function () {
        function PlayerSkillLocalService() {
        }
        var d = __define,c=PlayerSkillLocalService,p=c.prototype;
        d(PlayerSkillLocalService, "PlayerSkillList"
            /**
             * @获取获取玩家技能数据.
             */
            ,function () {
                return PlayerSkillLocalService.playerSkillList;
            }
        );
        /**
         * @获取挚友或技能列表.
         */
        PlayerSkillLocalService.setPlayerSkillList = function () {
            if (PlayerSkillLocalService.playerSkillList) {
                for (var i = 0; i < PlayerSkillLocalService.playerSkillList.length; i++) {
                    PlayerSkillLocalService.updataPlayerSkillData(PlayerSkillLocalService.playerSkillList[i]);
                }
            }
            else {
                PlayerSkillLocalService.playerSkillList = [];
                for (var i = 0; i < Model.WebValue.dataStModel.skillList.length; i++) {
                    //                    if(WebValue.dataDyModel.skillModelList.length <= i) {//动态数据没有的强制赋值null.
                    //                        WebValue.dataDyModel.skillModelList[i] = null;
                    //                    }
                    //by cai_haotian 2016.2.23.
                    var dy = Enumerable.From(Model.WebValue.dataDyModel.skillModelList).Where(function (x) { return x.skillId == Model.WebValue.dataStModel.skillList[i].id; }).FirstOrDefault(null);
                    var data = new Model.PlayerSkillData(dy, Model.WebValue.dataStModel.skillList[i]);
                    PlayerSkillLocalService.updataPlayerSkillData(data);
                    PlayerSkillLocalService.playerSkillList.push(data);
                }
            }
            return PlayerSkillLocalService.playerSkillList;
        };
        PlayerSkillLocalService.updataPlayerSkillData = function (_data) {
            PlayerSkillLocalService.setSkillEffect(_data);
            PlayerSkillLocalService.setSkillCost(_data);
        };
        /**
         * @设置升级效果相关属性.
         * @所有主角的技能升级效果计算公式:
         * @技能效果=skill_effect_value+skill_effect_add*（技能等级-1）
         */
        PlayerSkillLocalService.setSkillEffect = function (_data) {
            if (_data.dy) {
                _data.effect = _data.st.skillEffectValue + _data.st.skillEffectAdd * (_data.dy.level - 1);
                _data.effectNext = _data.st.skillEffectValue + _data.st.skillEffectAdd * _data.dy.level;
                _data.effectDelta = _data.effectNext - _data.effect;
            }
            else {
                _data.effect = _data.st.skillEffectValue;
                _data.effectNext = _data.st.skillEffectValue + _data.st.skillEffectAdd * 1;
                _data.effectDelta = _data.effectNext - _data.effect;
            }
            return _data.effect;
        };
        /**
         * @设置升级花费相关属性.
         * @升级消耗铜币=upgrade_base_cost * upgrde_cost_multiple^(当前技能等级-1) * 10^(当前技能等级*3)
         */
        PlayerSkillLocalService.setSkillCost = function (_data) {
            if (_data.dy) {
                _data.cost = _data.st.upgradeBaseCost * Math.pow(_data.st.upgradeCostMultiple, _data.dy.level - 1) * Math.pow(10, _data.dy.level * 3);
            }
            else {
                _data.cost = _data.st.upgradeBaseCost * Math.pow(_data.st.upgradeCostMultiple, 0) * Math.pow(10, 3);
            }
            return _data.cost;
        };
        /**
         * @玩家技能解锁成功.
         */
        PlayerSkillLocalService.unlockSuccessedCallBack = function (_data) {
            //TODO: 这边cdTime还需要加成.waiting.....
            _data.dy = new Model.SkillDyModel(_data.st.id, 0, _data.st.cdTime);
            //            PlayerSkillLocalService.setSkillEffect(_data);
            //            PlayerSkillLocalService.setSkillCost(_data);
            Model.PlayerLocalService.initAllData();
            return _data;
        };
        /**
         * @玩家技能升级成功.
         */
        PlayerSkillLocalService.upgradeSuccessedCallBack = function (_data) {
            Model.PlayerLocalService.PlayerData.dy.gold -= _data.cost;
            //            console.log("zhujun: upgradeSuccessedCallBack 1 " + JSON.stringify(_data));
            _data.dy.level += 1;
            //            PlayerSkillLocalService.setSkillEffect(_data);
            //            PlayerSkillLocalService.setSkillCost(_data);
            //            console.log("zhujun: upgradeSuccessedCallBack 2 " + JSON.stringify(_data));
            Model.PlayerLocalService.initAllData();
            return _data;
        };
        /**
         * @玩家技能list.
         */
        PlayerSkillLocalService.playerSkillList = null;
        return PlayerSkillLocalService;
    })();
    Model.PlayerSkillLocalService = PlayerSkillLocalService;
    egret.registerClass(PlayerSkillLocalService,'Model.PlayerSkillLocalService');
})(Model || (Model = {}));
