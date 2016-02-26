var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun
     * @date: 2016.01.17.
     */
    var MagicWeaponService = (function () {
        function MagicWeaponService() {
        }
        var d = __define,c=MagicWeaponService,p=c.prototype;
        d(MagicWeaponService, "MagicWeaponList"
            /**
             * @获取神器数据.
             */
            ,function () {
                return MagicWeaponService.magicWeaponList;
            }
            /**
             * @设置神器数据.
             */
            ,function (_data) {
                MagicWeaponService.magicWeaponList = _data;
            }
        );
        d(MagicWeaponService, "BuyCost"
            /**
             * @神器的购买价格.
             */
            ,function () {
                return MagicWeaponService.buyCost;
            }
        );
        d(MagicWeaponService, "AddCommon"
            /**
             * @挚友伤害和挚友技能加成值.
             */
            ,function () {
                return MagicWeaponService.addCommon;
            }
        );
        d(MagicWeaponService, "CutEnemyCount"
            /**
             * @减少关卡需要击杀的敌人数量.
             */
            ,function () {
                return MagicWeaponService.cutEnemyCount;
            }
        );
        d(MagicWeaponService, "AddOffLineCoin"
            /**
             * @增加游戏离线时的金币.
             */
            ,function () {
                return MagicWeaponService.addOffLineCoin;
            }
        );
        d(MagicWeaponService, "CutSkillSealTime"
            /**
             * @减少武学解除封印时间.
             */
            ,function () {
                return MagicWeaponService.cutSkillSealTime;
            }
        );
        d(MagicWeaponService, "CutID1SkillCD"
            /**
             * @减少破风剑诀技能冷却时间.
             */
            ,function () {
                return MagicWeaponService.cutID1SkillCD;
            }
        );
        d(MagicWeaponService, "AddCoin"
            /**
             * @提升铜币数量.
             */
            ,function () {
                return MagicWeaponService.addCoin;
            }
        );
        d(MagicWeaponService, "CutBossHp"
            /**
             * @减少boss血量.
             */
            ,function () {
                return MagicWeaponService.cutBossHp;
            }
        );
        d(MagicWeaponService, "AddID3SkillTime"
            /**
             * @增加破空霸拳技能的持续时间.
             */
            ,function () {
                return MagicWeaponService.addID3SkillTime;
            }
        );
        d(MagicWeaponService, "AddCritDamage"
            /**
             * @增加暴击伤害.
             */
            ,function () {
                return MagicWeaponService.addCritDamage;
            }
        );
        d(MagicWeaponService, "AddID1SkillDamage"
            /**
             * @增加破风剑决技能的伤害.
             */
            ,function () {
                return MagicWeaponService.addID1SkillDamage;
            }
        );
        d(MagicWeaponService, "AddID2SkillTime"
            /**
             * @增加寒冰心法技能持续时间.
             */
            ,function () {
                return MagicWeaponService.addID2SkillTime;
            }
        );
        d(MagicWeaponService, "CutID4SkillCD"
            /**
             * @减少寂灭雷决技能冷却时间.
             */
            ,function () {
                return MagicWeaponService.cutID4SkillCD;
            }
        );
        d(MagicWeaponService, "CutID3SkillCD"
            /**
             * @减少破空霸拳技能冷却时间.
             */
            ,function () {
                return MagicWeaponService.cutID3SkillCD;
            }
        );
        d(MagicWeaponService, "AddAllSkillDamage"
            /**
             * @增加所有武学伤害.
             */
            ,function () {
                return MagicWeaponService.addAllSkillDamage;
            }
        );
        d(MagicWeaponService, "AddID5SkillTime"
            /**
             * @增加凝神屏息技能持续时间.
             */
            ,function () {
                return MagicWeaponService.addID5SkillTime;
            }
        );
        d(MagicWeaponService, "AddBoxCoin"
            /**
             * @增加宝箱敌人掉金币数量.
             */
            ,function () {
                return MagicWeaponService.addBoxCoin;
            }
        );
        d(MagicWeaponService, "AddClickDamage"
            /**
             * @增加点击伤害.
             */
            ,function () {
                return MagicWeaponService.addClickDamage;
            }
        );
        d(MagicWeaponService, "AddCritChange"
            /**
             * @增加暴击率.
             */
            ,function () {
                return MagicWeaponService.addCritChange;
            }
        );
        d(MagicWeaponService, "CutID2SkillCD"
            /**
             * @减少寒冰心法技能冷却时间.
             */
            ,function () {
                return MagicWeaponService.cutID2SkillCD;
            }
        );
        d(MagicWeaponService, "CutSkillUselessChance"
            /**
             * @减少武学禁用几率.
             */
            ,function () {
                return MagicWeaponService.cutSkillUselessChance;
            }
        );
        d(MagicWeaponService, "CutUpLevelMoney"
            /**
             * @减少升级费用.
             */
            ,function () {
                return MagicWeaponService.cutUpLevelMoney;
            }
        );
        d(MagicWeaponService, "AddChestChance"
            /**
             * @增加宝箱敌人出现几率.
             */
            ,function () {
                return MagicWeaponService.addChestChance;
            }
        );
        d(MagicWeaponService, "CutID5SkillCD"
            /**
             * @减少凝神屏息技能冷却时间.
             */
            ,function () {
                return MagicWeaponService.cutID5SkillCD;
            }
        );
        d(MagicWeaponService, "CutID6SkillCD"
            /**
             * @减少点石成金技能冷却时间.
             */
            ,function () {
                return MagicWeaponService.cutID6SkillCD;
            }
        );
        d(MagicWeaponService, "AddID4SkillTime"
            /**
             * @增加寂灭雷决技能持续时间.
             */
            ,function () {
                return MagicWeaponService.addID4SkillTime;
            }
        );
        d(MagicWeaponService, "AddBossTime"
            /**
             * @增加的打boss时间.
             */
            ,function () {
                return MagicWeaponService.addBossTime;
            }
        );
        d(MagicWeaponService, "AddBossCoin"
            /**
             * @增加的boss掉落铜币.
             */
            ,function () {
                return MagicWeaponService.addBossCoin;
            }
        );
        d(MagicWeaponService, "AddMuchCoinChance"
            /**
             * @有一定概率获得10倍铜币.
             */
            ,function () {
                return MagicWeaponService.addMuchCoinChance;
            }
        );
        /**
         * @设置神器数据.
         * @初始化的时候执行.
         */
        MagicWeaponService.setMagicWeaponList = function () {
            MagicWeaponService.addCommon = 0; //神器所有伤害重置.
            if (MagicWeaponService.magicWeaponList) {
                for (var i = 0; i < MagicWeaponService.magicWeaponList.length; i++) {
                    MagicWeaponService.updateMagicWeaponInfo(MagicWeaponService.magicWeaponList[i]);
                }
            }
            else {
                MagicWeaponService.magicWeaponList = [];
                for (var i = 0; i < Model.WebValue.dataStModel.magicWeaponList.length; i++) {
                    //                    if(WebValue.dataDyModel.magicWeaponModelList.length >= i) {
                    //                        WebValue.dataDyModel.magicWeaponModelList[i] = null;
                    //                    }
                    //by cai_haotian 2016.2.23.
                    var dy = Enumerable.From(Model.WebValue.dataDyModel.magicWeaponModelList).Where(function (x) { return x.magicWeaponId == Model.WebValue.dataStModel.magicWeaponList[i].id; }).FirstOrDefault(null);
                    var data = new Model.MagicWeaponData(dy, Model.WebValue.dataStModel.magicWeaponList[i]);
                    MagicWeaponService.updateMagicWeaponInfo(data);
                    MagicWeaponService.magicWeaponList.push(data);
                }
                MagicWeaponService.MagicWeaponList = Enumerable.From(MagicWeaponService.MagicWeaponList).OrderBy(function (x) { return x.dy == null; }).ThenBy(function (x) { return parseInt(x.st.id); }).ToArray(); //排序.
            }
            MagicWeaponService.setMagicWeaponBuyCost(); //初始化神兵购买价格.
            return MagicWeaponService.magicWeaponList;
        };
        /**
         * @更新或初始化神器的效果.
         * @购买，升级等情况调用.
         * @购买、初始化:是多少传多少.
         * @升级:传差值.
         */
        MagicWeaponService.updateMagicWeaponInfo = function (_data, _isUpgrade) {
            if (_isUpgrade === void 0) { _isUpgrade = false; }
            if (_data.dy) {
                if (_isUpgrade) {
                    MagicWeaponService.setMagicWeaponEffect(_data.TypeFirst, _data.effectFirstNext - _data.effectFirst);
                    _data.effectFirst = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueFirst, _data.dy.level);
                    _data.effectFirstNext = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueFirst, _data.dy.level + 1);
                    MagicWeaponService.setMagicWeaponEffect(_data.TypeSecond, _data.effectSecondNext - _data.effectSecond);
                    _data.effectSecond = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueSecond, _data.dy.level);
                    _data.effectSecondNext = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueSecond, _data.dy.level + 1);
                }
                else {
                    _data.effectFirstNext = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueFirst, _data.dy.level + 1);
                    _data.effectFirst = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueFirst, _data.dy.level);
                    MagicWeaponService.setMagicWeaponEffect(_data.TypeFirst, _data.effectFirst);
                    _data.effectSecondNext = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueSecond, _data.dy.level + 1);
                    _data.effectSecond = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueSecond, _data.dy.level);
                    MagicWeaponService.setMagicWeaponEffect(_data.TypeSecond, _data.effectSecond);
                }
                _data.upgradeCost = MagicWeaponService.magicWeaponCost(_data.st.upgradeBaseCost, _data.dy.level);
            }
            else {
                _data.upgradeCost = MagicWeaponService.magicWeaponCost(_data.st.upgradeBaseCost, 1);
                _data.effectFirst = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueFirst, 1);
                _data.effectSecond = MagicWeaponService.magicWeaponEffect(_data.st.weaponEffectValueSecond, 1);
            }
        };
        /**
         * @_type:神兵效果类型.
         * @初始化神器效果数值.
         * @购买、初始化:是多少传多少.
         * @升级:传差值.
         */
        MagicWeaponService.setMagicWeaponEffect = function (_type, _addValue) {
            //            Console.log("zhujun: setMagicWeaponEffect(_type: MagicWeaponEffectType " + _type.toString() + " " + _addValue);
            switch (_type) {
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_COMMON:
                    MagicWeaponService.addCommon += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ENEMY_COUNT:
                    MagicWeaponService.cutEnemyCount += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_OFFLINE_COIN:
                    MagicWeaponService.addOffLineCoin += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_SKILL_SEAL_TIME:
                    MagicWeaponService.cutSkillSealTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ID1_SKILL_CD:
                    MagicWeaponService.cutID1SkillCD += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_COIN:
                    MagicWeaponService.addCoin += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_BOSS_HP:
                    MagicWeaponService.cutBossHp += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_ID3_SKILL_TIME:
                    MagicWeaponService.addID3SkillTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_CRIT_DAMAGE:
                    MagicWeaponService.addCritDamage += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_ID1_SKILL_DAMAGE:
                    MagicWeaponService.addID1SkillDamage += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_ID2_SKILL_TIME:
                    MagicWeaponService.addID2SkillTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ID4_SKILL_CD:
                    MagicWeaponService.addID4SkillTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ID3_SKILL_CD:
                    MagicWeaponService.addID3SkillTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_ALL_SKILL_DAMAGE:
                    MagicWeaponService.addAllSkillDamage += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_ID5_SKILL_TIME:
                    MagicWeaponService.addID5SkillTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_BOX_COIN:
                    MagicWeaponService.addBoxCoin += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_CLICK_DAMAGE:
                    MagicWeaponService.addClickDamage += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_CRIT_CHANCE:
                    MagicWeaponService.addCritDamage += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ID2_SKILL_CD:
                    MagicWeaponService.cutID2SkillCD += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_SKILL_USELESS_CHANCE:
                    MagicWeaponService.cutSkillUselessChance += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_UPLEVEL_MONEY:
                    MagicWeaponService.cutUpLevelMoney += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_CHEST_CHANCE:
                    MagicWeaponService.addChestChance += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ID5_SKILL_CD:
                    MagicWeaponService.cutID5SkillCD += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_CUT_ID6_SKILL_CD:
                    MagicWeaponService.cutID6SkillCD += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_ID4_SKILL_TIME:
                    MagicWeaponService.addID4SkillTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_BOSS_TIME:
                    MagicWeaponService.addBossTime += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_BOSS_COIN:
                    MagicWeaponService.addBossCoin += _addValue;
                    break;
                case Model.MagicWeaponEffectType.WEAPON_TYPE_ADD_MUCH_COIN_CHANCE:
                    MagicWeaponService.addMuchCoinChance += _addValue;
                    break;
                default:
                    break;
            }
        };
        /**
         * @神兵购买消耗灵石公式
         * @购买消耗灵石=MAX（1，当前拥有神兵数量^2+（当前拥有神兵数量-1）*2）
         */
        MagicWeaponService.setMagicWeaponBuyCost = function () {
            var list = Enumerable.From(Model.MagicWeaponService.MagicWeaponList);
            var result = list.Where(function (l) { return l.dy != null; }).ToArray();
            var num = result.length;
            MagicWeaponService.buyCost = Math.max(1, Math.pow(num, 2) + (num - 1) * 2);
            return MagicWeaponService.buyCost;
        };
        /**
         * @技能类型1效果=weapon_effect_value_first*神兵等级
         * @技能类型2效果=weapon_effect_value_second*神兵等级
         */
        MagicWeaponService.magicWeaponEffect = function (_effectValue, _level) {
            return _effectValue * _level;
        };
        /**
         * @神器升级消耗.
         * @升级消耗灵石=upgrade_base_cost * 神兵等级当前等级
         */
        MagicWeaponService.magicWeaponCost = function (_upgradeBaseCost, _level) {
            return _upgradeBaseCost * _level;
        };
        /**
         * @灵石购买成功回调用.
         */
        MagicWeaponService.buySuccessedCallBack = function () {
            var noBuyList = Enumerable.From(MagicWeaponService.MagicWeaponList).Where(function (x) { return x.dy == null; }).ToArray(); //取出所有未解锁对象列表.
            if (noBuyList.length == 0) {
                alert("已经没有可以购买的神器了 ! ");
                return;
            }
            var randomData = noBuyList[Model.Mathf.random(0, noBuyList.length)]; //创建随机解锁对象,TODO:这边查出来来的可能是引用.
            randomData.dy = new Model.MagicWeaponDyModel(randomData.st.id, 1); //给随机神器解锁.
            MagicWeaponService.MagicWeaponList = Enumerable.From(MagicWeaponService.MagicWeaponList).OrderBy(function (x) { return x.dy == null; }).ThenBy(function (x) { return parseInt(x.st.id); }).ToArray(); //排序.
            Model.WebValue.dataDyModel.playerModel.jewel -= MagicWeaponService.BuyCost; //扣取灵石.
            Model.PlayerLocalService.initAllData();
            //            MagicWeaponService.setMagicWeaponBuyCost();//设置下一个购买钱。
            //            MagicWeaponService.updateMagicWeaponInfo(randomData);//设置神器伤害.
            //            FriendLocalService.setFriendList();//reset挚友,神器更改会影响只有秒伤.
            //            PlayerSkillLocalService.setPlayerSkillList();
            //            PlayerLocalService.setPlayerData();
        };
        /**
         * @神器升级成功.
         */
        MagicWeaponService.upgradeSuccessedCallBack = function (_data) {
            //            Console.log("zhujun: upgrade mw is " +　JSON.stringify(_data));
            _data.dy.level += 1; //等级加1. 
            Model.WebValue.dataDyModel.playerModel.jewel -= _data.upgradeCost; //一、先扣取升级耗费的灵石.(注意:两个顺序不能反.)
            //            MagicWeaponService.updateMagicWeaponInfo(_data,true);////二、再计算下一级升级需要扣取多少灵石.三、设置神器伤害.因为是升级,所以要传差值.
            //            FriendLocalService.setFriendList();//reset挚友,神器更改会影响只有秒伤.
            //            PlayerSkillLocalService.setPlayerSkillList();
            Model.PlayerLocalService.initAllData();
        };
        /**
         * @神器列表数据对象.
         */
        MagicWeaponService.magicWeaponList = null;
        /**
         * @神器的购买价格.
         */
        MagicWeaponService.buyCost = 0;
        /**
         * @挚友伤害和挚友技能加成值.
         */
        MagicWeaponService.addCommon = 0;
        /**
         * @减少关卡需要击杀的敌人数量.
         */
        MagicWeaponService.cutEnemyCount = 0;
        /**
         * @增加游戏离线时的金币.
         */
        MagicWeaponService.addOffLineCoin = 0;
        /**
         * @减少武学解除封印时间.
         */
        MagicWeaponService.cutSkillSealTime = 0;
        /**
         * @减少破风剑诀技能冷却时间.
         */
        MagicWeaponService.cutID1SkillCD = 0;
        /**
         * @提升铜币数量.
         */
        MagicWeaponService.addCoin = 0;
        /**
         * @减少boss血量.
         */
        MagicWeaponService.cutBossHp = 0;
        /**
         * @增加破空霸拳技能的持续时间.
         */
        MagicWeaponService.addID3SkillTime = 0;
        /**
         * @增加暴击伤害.
         */
        MagicWeaponService.addCritDamage = 0;
        /**
         * @增加破风剑决技能的伤害.
         */
        MagicWeaponService.addID1SkillDamage = 0;
        /**
         * @增加寒冰心法技能持续时间.
         */
        MagicWeaponService.addID2SkillTime = 0;
        /**
         * @减少寂灭雷决技能冷却时间.
         */
        MagicWeaponService.cutID4SkillCD = 0;
        /**
         * @减少破空霸拳技能冷却时间.
         */
        MagicWeaponService.cutID3SkillCD = 0;
        /**
         * @增加所有武学伤害.
         */
        MagicWeaponService.addAllSkillDamage = 0;
        /**
         * @增加凝神屏息技能持续时间.
         */
        MagicWeaponService.addID5SkillTime = 0;
        /**
         * @增加宝箱敌人掉金币数量.
         */
        MagicWeaponService.addBoxCoin = 0;
        /**
         * @增加点击伤害.
         */
        MagicWeaponService.addClickDamage = 0;
        /**
         * @增加暴击率.
         */
        MagicWeaponService.addCritChange = 0;
        /**
         * @减少寒冰心法技能冷却时间.
         */
        MagicWeaponService.cutID2SkillCD = 0;
        /**
         * @减少武学禁用几率.
         */
        MagicWeaponService.cutSkillUselessChance = 0;
        /**
         * @减少升级费用.
         */
        MagicWeaponService.cutUpLevelMoney = 0;
        /**
         * @增加宝箱敌人出现几率.
         */
        MagicWeaponService.addChestChance = 0;
        /**
         * @减少凝神屏息技能冷却时间.
         */
        MagicWeaponService.cutID5SkillCD = 0;
        /**
         * @减少点石成金技能冷却时间.
         */
        MagicWeaponService.cutID6SkillCD = 0;
        /**
         * @增加寂灭雷决技能持续时间.
         */
        MagicWeaponService.addID4SkillTime = 0;
        /**
         * @增加的打boss时间.
         */
        MagicWeaponService.addBossTime = 0;
        /**
         * @增加的boss掉落铜币.
         */
        MagicWeaponService.addBossCoin = 0;
        /**
         * @有一定概率获得10倍铜币.
         */
        MagicWeaponService.addMuchCoinChance = 0;
        return MagicWeaponService;
    })();
    Model.MagicWeaponService = MagicWeaponService;
    egret.registerClass(MagicWeaponService,'Model.MagicWeaponService');
})(Model || (Model = {}));
