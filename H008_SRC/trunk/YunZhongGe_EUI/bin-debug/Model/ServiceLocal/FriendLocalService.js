var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun.
     * @data: 2016.01.15.
     *
     */
    var FriendLocalService = (function () {
        function FriendLocalService() {
        }
        var d = __define,c=FriendLocalService,p=c.prototype;
        d(FriendLocalService, "FriendSkillTypeAll"
            /**
             * @挚友模块提供的所有伤害提升率.
             */
            ,function () {
                return FriendLocalService.friendSkillTypeAll;
            }
        );
        /**
         * @挚友模块提供的暴击伤害加成率.
         */
        FriendLocalService.FriendSkillTypeCrit = function () {
            return FriendLocalService.friendSkillTypeCrit;
        };
        /**
         * @挚友模块提供的暴击率加成率.
         */
        FriendLocalService.FriendSkillTypeCritProbability = function () {
            return FriendLocalService.friendSkillTypeCritProbability;
        };
        d(FriendLocalService, "FriendSkillTypeClick"
            /**
             * @挚友模块提供的点击伤害加成率.
             */
            ,function () {
                return FriendLocalService.friendSkillTypeClick;
            }
        );
        d(FriendLocalService, "FriendSkillTypeCoin"
            /**
             * @挚友模块提供的铜币掉落数量加成率.
             */
            ,function () {
                return FriendLocalService.friendSkillTypeClick;
            }
        );
        d(FriendLocalService, "FriendSkillTypeBoxCoin"
            /**
             * @挚友模块提供的宝箱铜币掉落数量加成率.
             */
            ,function () {
                return FriendLocalService.friendSkillTypeClick;
            }
        );
        d(FriendLocalService, "FriendSkilTypeBoss"
            /**
             * @挚友模块提供的Boss伤害加成率.
             */
            ,function () {
                return FriendLocalService.friendSkillTypeBoss;
            }
        );
        /**
         * @设置挚友数据.
         */
        FriendLocalService.setFriendList = function () {
            Model.PlayerLocalService.PlayerData.dy.friendDamage = 0; //重置总秒伤.
            FriendLocalService.friendSkillTypeAll = 0;
            FriendLocalService.friendSkillTypeCrit = 0;
            FriendLocalService.friendSkillTypeCritProbability = 0;
            FriendLocalService.friendSkillTypeClick = 0;
            FriendLocalService.friendSkillTypeCoin = 0;
            FriendLocalService.friendSkillTypeBoxCoin = 0;
            FriendLocalService.friendSkillTypeBoss = 0;
            if (FriendLocalService.friendList) {
                for (var i = 0; i < FriendLocalService.friendList.length; i++) {
                    FriendLocalService.updateFriendData(FriendLocalService.friendList[i]);
                }
            }
            else {
                FriendLocalService.friendList = [];
                for (var i = 0; i < Model.WebValue.dataStModel.friendSkillList.length; i++) {
                    //                    if()var noBuyList: MagicWeaponData[] = Enumerable.From(MagicWeaponService.MagicWeaponList).Where(x=> x.dy == null).ToArray();//取出
                    var dy = Enumerable.From(Model.WebValue.dataDyModel.friendModelList).Where(function (x) { return x.friendId == Model.WebValue.dataStModel.friendSkillList[i].id; }).FirstOrDefault(null);
                    //                    if(i >= WebValue.dataDyModel.friendModelList.length) {//动态数据没有的强制赋值null.
                    //                        WebValue.dataDyModel.friendModelList[i] = null;
                    //                    }
                    var data = new Model.FriendData(dy, Model.WebValue.dataStModel.friendSkillList[i]);
                    FriendLocalService.updateFriendData(data);
                    FriendLocalService.friendList.push(data);
                }
            }
            return FriendLocalService.friendList;
        };
        /**
         * @获取挚友数据.
         */
        FriendLocalService.getFriendList = function () {
            return FriendLocalService.friendList;
        };
        /**
         * @购买或升级后更新挚友信息.
         */
        FriendLocalService.updateFriendData = function (_data) {
            _data.layerPercent = 0;
            //            _data.recruitCost = Model.MainInfoLocalService.toTenConversion(_data.st.recruitCost,_data.st.recruitCostMagnitude); by zhu_jun,2016.02.20.
            //            PlayerLocalService.changeGold(_data.st.recruitCost,_data.st.recruitCostMagnitude);
            //            PlayerLocalService.changeGold();//TODO: by zhu_jun,2016.02.23.上面几句应该都没用了,如果没问题过段时间可以删掉.
            //            console.log("zhujun: _data.st.upgrade base damage " + _data.st.baseDamage);
            _data.dpsBase = Model.MainInfoLocalService.toTenConversion(_data.st.baseDamage, _data.st.baseDamageMagnitude);
            if (_data.dy) {
                FriendLocalService.layerMatch(_data); //设置挚友层级对自身的加成，注意:必须要先算层级加成.
                //                console.log("zhujun: _data.st.upgrade base cost " + _data.st.upgradeBaseCost);
                _data.upgradeBaseCost = Model.MainInfoLocalService.toTenConversion(_data.st.upgradeBaseCost, _data.st.baseCostMagnitude);
                _data.upgradeCost = FriendLocalService.friendUpgradeCost(_data.upgradeBaseCost, _data.st.upgradeCostMultiple, _data.dy.level); //这个要在算效果之前调用.
                _data.layerCost = FriendLocalService.layerCost(_data.upgradeCost);
                _data.layerMatchLevel = FriendLocalService.layerMatchLevel(_data.dy.level);
                //                if(_isUpgrade) {//升级时是先加后算。//by zhu_jun,2016.02.19.
                //                    PlayerLocalService.PlayerData.dy.friendDamage += _data.dpsDelta;//升级加总值的时候，加的是插值.
                //                    PlayerLocalService.PlayerData.FriendDamageUnit = MainInfoLocalService.toUnitConversion(PlayerLocalService.PlayerData.dy.friendDamage);
                //                    _data.dps = FriendLocalService.setFriendEffect(_data);//设置挚友单个挚友伤害.
                //                    _data.DpsAndUnit = MainInfoLocalService.toUnitConversion(_data.dps);
                //                    _data.dpsNext = FriendLocalService.setFriendEffect(_data,true);
                //                    _data.DpsNextAndUnit = MainInfoLocalService.toUnitConversion(_data.dpsNext);
                //                    _data.dpsDelta = _data.dpsNext - _data.dps;
                //                    _data.DpsDeltaUnit = MainInfoLocalService.toUnitConversion(_data.dpsDelta);
                //                } else {//解锁是先算后加.
                _data.dps = FriendLocalService.setFriendEffect(_data); //设置挚友单个挚友伤害.
                _data.dpsNext = FriendLocalService.setFriendEffect(_data, true);
                _data.DpsNextAndUnit = Model.MainInfoLocalService.toUnitConversion(_data.dpsNext);
                _data.dpsDelta = _data.dpsNext - _data.dps;
                Model.PlayerLocalService.PlayerData.dy.friendDamage += _data.dps; //最后把所有的单个技能秒伤效果相加，得到挚友总秒伤
            }
            else {
                _data.upgradeBaseCost = Model.MainInfoLocalService.toTenConversion(_data.st.upgradeBaseCost, _data.st.baseCostMagnitude);
                _data.upgradeCost = FriendLocalService.friendUpgradeCost(_data.upgradeBaseCost, _data.st.upgradeCostMultiple, 1); //这个要在算效果之前调用.
                //                _data.UpgradeCostAndUnit = Model.MainInfoLocalService.toUnitConversion(_data.upgradeCost);
                _data.layerCost = FriendLocalService.layerCost(_data.upgradeCost);
                //                _data.LayerCostAndUnit = Model.MainInfoLocalService.toUnitConversion(_data.layerCost);
                _data.dps = FriendLocalService.setFriendEffect(_data);
                _data.DpsAndUnit = Model.MainInfoLocalService.toUnitConversion(_data.dps);
                _data.dpsDelta = _data.dps;
                _data.DpsDeltaUnit = _data.DpsAndUnit;
                Model.PlayerLocalService.PlayerData.dy.friendDamage += 0; //最后把所有的单个技能秒伤效果相加，得到挚友总秒伤
            }
        };
        /**
         * @挚友技能升级效果计算公式.
         * @技能效果=base_damage*upgrade_damage_multiple ^（技能等级-1）
         * @_type: 挚友或挚友技能
         * @技能效果=skill_effect_value + skill_effect_add*（技能等级-1）
         * @单个技能秒伤效果=挚友技能升级效果*（1+N）
         * @获取挚友加成 1.挚友技能效果里的提升本技能伤害（FRIEND_SKILL_TYPE_SLEF）2.提升所有伤害（FRIEND_SKILL_TYPE_ALL）
         * @获取神器加成 1.神兵效果里的增加挚友伤害（WEAPON_TYPE_ADD_COMMON），2.增加所有武学伤害（WEAPON_TYPE_ADD_ALL_SKILL_DAMAGE）
         * @兼容_data.dy==null时，数据初始化.
         */
        FriendLocalService.setFriendEffect = function (_data, isNext) {
            if (isNext === void 0) { isNext = false; }
            if (_data.dy) {
                if (isNext) {
                    var effect = _data.dpsBase * Math.pow(_data.st.upgradeDamageMultiple, _data.dy.level);
                }
                else {
                    var effect = _data.dpsBase * Math.pow(_data.st.upgradeDamageMultiple, _data.dy.level - 1);
                }
                //                Console.log("zhujun: effect base " + effect);
                switch (_data.Type) {
                    case Model.FriendType.FRIEND_TYPE_FRIEND:
                        effect = effect * (100 + _data.layerPercent + FriendLocalService.FriendSkillTypeAll + Model.MagicWeaponService.AddCommon) / 100;
                        break;
                    case Model.FriendType.FRIEND_TYPE_SKILL:
                        effect = effect * (100 + _data.layerPercent + FriendLocalService.FriendSkillTypeAll + Model.MagicWeaponService.AddCommon + Model.MagicWeaponService.AddAllSkillDamage) / 100;
                        break;
                    default:
                        alert("挚友类型错误,请联系客服 ! ");
                        break;
                }
            }
            else {
                var effect = _data.dpsBase * Math.pow(_data.st.upgradeDamageMultiple, 0);
                //                Console.log("zhujun: var effect: number = _data.st.baseDamage * Math.pow(_data.st.upgradeDamageconsolee,0); " + effect);
                switch (_data.Type) {
                    case Model.FriendType.FRIEND_TYPE_FRIEND:
                        effect = effect * (100 + FriendLocalService.FriendSkillTypeAll + Model.MagicWeaponService.AddCommon) / 100;
                        break;
                    case Model.FriendType.FRIEND_TYPE_SKILL:
                        effect = effect * (100 + FriendLocalService.FriendSkillTypeAll + Model.MagicWeaponService.AddCommon + Model.MagicWeaponService.AddAllSkillDamage) / 100;
                        break;
                    default:
                        alert("挚友类型错误,请联系客服 ! ");
                        break;
                }
            }
            //            Console.log("zhujun: effect extra " + effect);
            return effect;
        };
        FriendLocalService.friendUpgradeCost = function (_upgradeBaseCost, _upgradeCostMultiple, _level) {
            console.log("zhujun: _upgradeBaseCost " + _upgradeBaseCost);
            var value = 0;
            for (var i = 1; i < _level; i++) {
            }
            var value = _upgradeBaseCost * Math.pow(_upgradeCostMultiple, _level - 1);
            return value;
        };
        /**
         * @层级开启消耗铜币公式：
         * @层级开启消耗铜币= upgrade_base_cost * upgrade_cost_multiple^(层级开启等级-1)*5
         */
        FriendLocalService.layerCost = function (_friendCost) {
            var value = _friendCost * 5;
            return value;
        };
        /**
         * @根据等级计算挚友当前可开启的层级.
         */
        FriendLocalService.layerMatchLevel = function (_level) {
            var layer = 0;
            if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelFirst) <= _level && _level < parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelSecond)) {
                return layer = 1;
            }
            else if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelSecond) <= _level && _level < parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelThird)) {
                return layer = 2;
            }
            else if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelThird) <= _level && _level < parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelFourth)) {
                return layer = 3;
            }
            else if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelFourth) <= _level && _level < parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelFifth)) {
                return layer = 4;
            }
            else if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelFifth) <= _level && _level < parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelSixth)) {
                return layer = 5;
            }
            else if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelSixth) <= _level && _level < parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelSeventh)) {
                return layer = 6;
            }
            else if (parseInt(Model.WebValue.dataStModel.sysConfigModel.openFriendSkillLevelSeventh) <= _level) {
                return layer = 7;
            }
            else {
                return layer;
            }
        };
        /**
         * @层级匹配.
         * @设置挚友层级加成效果对自身的影响以及对全局性的影响.
         * @不要break,几层就进几个case.
         */
        FriendLocalService.layerMatch = function (_data) {
            switch (_data.dy.layerId) {
                case 7:
                    FriendLocalService.setFriendLayerEffect(_data.SeventhLayerType, _data.st.seventhLayerValue, _data);
                case 6:
                    FriendLocalService.setFriendLayerEffect(_data.SixthLayerType, _data.st.sixthLayerValue, _data);
                case 5:
                    FriendLocalService.setFriendLayerEffect(_data.FifthLayerType, _data.st.fifthLayerValue, _data);
                case 4:
                    FriendLocalService.setFriendLayerEffect(_data.FourthLayerType, _data.st.fourthLayerValue, _data);
                case 3:
                    FriendLocalService.setFriendLayerEffect(_data.ThirdLayerType, _data.st.thirdLayerValue, _data);
                case 2:
                    FriendLocalService.setFriendLayerEffect(_data.SecondLayerType, _data.st.secondLayerValue, _data);
                case 1:
                    FriendLocalService.setFriendLayerEffect(_data.FirstLayerType, _data.st.firstLayerValue, _data);
                    break;
                case 0:
                    _data.layerPercent = 0;
                    console.log("zhujun: no friend layer , until break ! ");
                    break;
                    consolefault: alert("技能层级数据异常,请联系客服人员 ! ");
                    break;
            }
        };
        /**
         * @设置好友层级加成.
         */
        FriendLocalService.setFriendLayerEffect = function (_type, _value, _data) {
            switch (_type) {
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_SLEF:
                    _data.layerPercent += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_ALL:
                    FriendLocalService.friendSkillTypeAll += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_CRIT:
                    FriendLocalService.friendSkillTypeCrit += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_CRIT_PROBABILITY:
                    FriendLocalService.friendSkillTypeCritProbability += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_CLICK:
                    FriendLocalService.friendSkillTypeClick += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_COIN:
                    FriendLocalService.friendSkillTypeCoin += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_BOX_COIN:
                    FriendLocalService.friendSkillTypeBoxCoin += _value;
                    break;
                case Model.SkillFloorType.FRIEND_SKILL_TYPE_BOSS:
                    FriendLocalService.friendSkillTypeBoss += _value;
                    break;
                default:
                    alert("挚友层级类型有误,请联系客服人员 ! ");
                    break;
            }
        };
        /**
         * @挚友或挚友技能购买成功回调用.
         */
        FriendLocalService.buySuccessedCallBack = function (_data) {
            _data.dy = new Model.FriendDyModel(_data.st.id, 1, 0); //创建挚友对象.
            if (_data.RecruitMoneyType == Model.MoneyType.MONEY_TYPE_COIN) {
                Model.PlayerLocalService.changeGold(-_data.RecruitCost);
            }
            else if (_data.RecruitMoneyType == Model.MoneyType.MONEY_TYPE_YB) {
                Model.PlayerLocalService.changeSycee(-_data.st.recruitCost);
            }
            else {
                alert("您的货币类型不正确,请及时联系客服!");
            }
            Model.PlayerLocalService.initAllData();
        };
        /**
         * @挚友升级成功.
         */
        FriendLocalService.upgradeSuccessedCallBack = function (_data) {
            _data.dy.level += 1; //等级加1. 
            //            PlayerLocalService.changeGold(_data.upgradeCost,);
            Model.WebValue.dataDyModel.playerModel.gold -= _data.upgradeCost;
            Model.PlayerLocalService.initAllData();
        };
        /**
         * @层级解锁成功.
         */
        FriendLocalService.layerSuccessedCallBack = function (_data) {
            _data.dy.layerId += 1;
            Model.WebValue.dataDyModel.playerModel.gold -= _data.layerCost;
            //            FriendLocalService.updateFriendData(_data);
            Model.PlayerLocalService.initAllData();
            if (Model.WebValue.isDebug)
                console.log("zhujun: layer successed " + JSON.stringify(_data));
        };
        /**
         * @挚友提供的所有伤害提升率.
         */
        FriendLocalService.friendSkillTypeAll = 0;
        /**
         * @挚友模块提供的暴击伤害加成率.
         */
        FriendLocalService.friendSkillTypeCrit = 0;
        /**
         * @挚友模块提供的暴击率加成率.
         */
        FriendLocalService.friendSkillTypeCritProbability = 0;
        /**
         * @挚友模块提供的点击伤害加成率.
         */
        FriendLocalService.friendSkillTypeClick = 0;
        /**
         * @挚友模块提供的铜币掉落数量加成率.
         */
        FriendLocalService.friendSkillTypeCoin = 0;
        /**
         * @挚友模块提供的宝箱铜币掉落数量加成率.
         */
        FriendLocalService.friendSkillTypeBoxCoin = 0;
        /**
         * @挚友模块提供的Boss伤害加成率.
         */
        FriendLocalService.friendSkillTypeBoss = 0;
        /**
         * @挚友列表数据.
         */
        FriendLocalService.friendList = null;
        return FriendLocalService;
    })();
    Model.FriendLocalService = FriendLocalService;
    egret.registerClass(FriendLocalService,'Model.FriendLocalService');
})(Model || (Model = {}));
