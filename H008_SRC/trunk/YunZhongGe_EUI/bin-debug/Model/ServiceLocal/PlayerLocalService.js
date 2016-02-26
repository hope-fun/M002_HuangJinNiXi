var Model;
(function (Model) {
    /**
     * @author: zhu_jun.
     * @date: 2016.01.15.
     */
    var PlayerLocalService = (function () {
        function PlayerLocalService() {
        }
        var d = __define,c=PlayerLocalService,p=c.prototype;
        d(PlayerLocalService, "PlayerData"
            /**
             * @by zhu_jun,2016.01.15.
             * @获取玩家数据.
             */
            ,function () {
                return PlayerLocalService.playerData;
            }
        );
        /**
         * @初始化所有数据.
         * @暂时放在玩家身上.
         */
        PlayerLocalService.initAllData = function () {
            PlayerLocalService.setPlayerData(function () {
                Model.MagicWeaponService.setMagicWeaponList(); //最先初始化神器,神器影响秒伤和点击伤害.
                Model.FriendLocalService.setFriendList(); //其次初始化挚友,秒伤影响点击伤害.
                Model.PlayerSkillLocalService.setPlayerSkillList(); //初始化玩家技能.
                Model.SceneLocalService.setSceneData(); //场景要在主角和神器之后初始化.
                Model.MonsterLocalService.setMonsterList(); //怪物初始化要在场景好了之后.
            }); //最后初始化主角,主角收到其他模块影响.
        };
        /**
         * @by zhu_jun,2016.01.20.
         * @设置玩家数据.(初始化)
         */
        PlayerLocalService.setPlayerData = function (initFunc) {
            if (PlayerLocalService.playerData) {
                console.log("主角数据已经有了,不需要重新创建.");
            }
            else {
                PlayerLocalService.playerData = new Model.PlayerData(Model.WebValue.dataDyModel.playerModel, Model.WebValue.dataStModel.sysConfigModel);
            }
            initFunc();
            PlayerLocalService.setPlayerClickDamage(); //设置点击伤害.
            PlayerLocalService.setPlayerUpgradeCost();
            return PlayerLocalService.playerData;
        };
        /**
         * @by zhu_jun,2016.01.15.
         * @玩家升级消耗.
         * @_level: 玩家要升到的等级.
         * @ 主角升级消耗铜币=ROUNDUP（leadCostRatio^主角等级，0）
         */
        PlayerLocalService.setPlayerUpgradeCost = function () {
            PlayerLocalService.playerData.upgradeCost = Math.ceil(Math.pow(parseFloat(Model.WebValue.dataStModel.sysConfigModel.leadCostRatio), PlayerLocalService.playerData.dy.level));
            return PlayerLocalService.playerData.upgradeCost;
        };
        /**
         * @by zhu_jun,2016.01.15.
         * @玩家基础点击伤害差值.
         * @基础点击伤害=ROUNDUP（clickHurtRatio^主角等级，0）
         */
        PlayerLocalService.setClickDamageBase = function () {
            PlayerLocalService.playerData.clickDamageBase = Math.ceil(Math.pow(parseFloat(Model.WebValue.dataStModel.sysConfigModel.clickHurtRatio), PlayerLocalService.playerData.dy.level));
            PlayerLocalService.playerData.clickDamageBaseNext = Math.ceil(Math.pow(parseFloat(Model.WebValue.dataStModel.sysConfigModel.clickHurtRatio), PlayerLocalService.playerData.dy.level + 1));
            return PlayerLocalService.playerData.clickDamageBase;
        };
        /**
         * @设置玩家总点击伤害.
         * @总点击伤害 =（基础点击伤害+挚友总秒伤/20）*（1+技能加成）
         * @技能加成包括挚友技能效果里的:1.提升所有伤害（FRIEND_SKILL_TYPE_ALL）2.提升点击伤害（FRIEND_SKILL_TYPE_CLICK）
         * @神兵里的:1.提升点击伤害（WEAPON_TYPE_ADD_CLICK_DAMAGE）
         */
        PlayerLocalService.setPlayerClickDamage = function () {
            PlayerLocalService.setClickDamageBase(); //设置基础点击伤害.
            PlayerLocalService.playerData.dy.clickDamage = (PlayerLocalService.playerData.clickDamageBase +
                PlayerLocalService.playerData.dy.friendDamage / 20) *
                (100 + Model.FriendLocalService.FriendSkillTypeAll +
                    Model.FriendLocalService.FriendSkillTypeClick +
                    Model.MagicWeaponService.AddClickDamage) / 100;
            PlayerLocalService.playerData.clickDamageNext = (PlayerLocalService.playerData.clickDamageBaseNext +
                PlayerLocalService.playerData.dy.friendDamage / 20) *
                (100 + Model.FriendLocalService.FriendSkillTypeAll +
                    Model.FriendLocalService.FriendSkillTypeClick +
                    Model.MagicWeaponService.AddClickDamage) / 100;
            PlayerLocalService.playerData.clickDamageDelta = PlayerLocalService.playerData.clickDamageNext - PlayerLocalService.playerData.dy.clickDamage;
            return PlayerLocalService.playerData.dy.clickDamage;
        };
        /**
         * @主角升级成功回调.
         */
        PlayerLocalService.upgradeSuccessedCallBack = function (_data) {
            //扣钱.
            PlayerLocalService.playerData.dy.gold -= _data.upgradeCost;
            //增加等级.
            PlayerLocalService.playerData.dy.level += 1;
            //更新伤害.
            //            PlayerLocalService.setPlayerClickDamage();
            //            PlayerLocalService.setPlayerUpgradeCost();
            console.log("zhujun: PlayerLocalService.playerData.dy.clickDamage " + PlayerLocalService.playerData.dy.clickDamage);
            PlayerLocalService.initAllData(); //主角升级会影响主角技能.
        };
        /**
         * @金币是否足够.
         */
        PlayerLocalService.isEnoughGold = function (_deltaGold, _onEnough) {
            if (_onEnough === void 0) { _onEnough = null; }
            //            if(_deltaGold)
            if (PlayerLocalService.PlayerData.dy.gold < _deltaGold) {
                return false;
            }
            else {
                if (_onEnough) {
                    _onEnough(_deltaGold);
                }
                return true;
            }
            //            var deltaUnitId: number = parseInt(PlayerLocalService.PlayerData.dy.goldMagnitudeId) - parseInt(_unitId);
            //            if(deltaUnitId >= 0) {
            //                if(deltaUnitId == 0 && PlayerLocalService.PlayerData.dy.gold < _deltaGold) {
            //                    return false;
            //                } else {
            //                    if(_onEnough) {
            //                        _onEnough(_deltaGold,deltaUnitId);
            //                    }
            //                    return true;
            //                }
            //            } else {
            //                return false;
            //            }
        };
        /**
         * @增减金币.
         * @_deltaGold: 需要加减的金币前三位数量,是有正负的.
         * @_unitId:需要加减的金币单位id.
         * @return:金币够减true,金币不够减false.
         */
        PlayerLocalService.changeGold = function (_deltaGold) {
            return PlayerLocalService.isEnoughGold(_deltaGold, function (_bDeltaGold) {
                PlayerLocalService.PlayerData.dy.gold += _bDeltaGold;
            });
        };
        /**
         * @元宝是够足够.
         */
        PlayerLocalService.isEnoughSycee = function (_deltaSycee, _onEnough) {
            if (_onEnough === void 0) { _onEnough = null; }
            if (PlayerLocalService.PlayerData.dy.treasure < _deltaSycee) {
                return false;
            }
            else {
                return true;
            }
        };
        /**
         * @增减元宝.
         * @_deltaSycee:需要加减的元宝前三位数量,带正负传入.
         */
        PlayerLocalService.changeSycee = function (_deltaSycee) {
            return PlayerLocalService.isEnoughSycee(_deltaSycee, function (_bDeltaSycee) {
                PlayerLocalService.PlayerData.dy.treasure += _bDeltaSycee;
            });
        };
        /**
         * @玩家数据.
         */
        PlayerLocalService.playerData = null;
        return PlayerLocalService;
    })();
    Model.PlayerLocalService = PlayerLocalService;
    egret.registerClass(PlayerLocalService,'Model.PlayerLocalService');
})(Model || (Model = {}));
