var Model;
(function (Model) {
    /**
     * @author: zhu_jun
     * @date: 2016.02.03.
     */
    var MonsterLocalService = (function () {
        function MonsterLocalService() {
        }
        var d = __define,c=MonsterLocalService,p=c.prototype;
        d(MonsterLocalService, "MonsterList"
            /**
             * @怪物数据.
             */
            ,function () {
                return MonsterLocalService.monsterList;
            }
        );
        /**
         * @怪物初始化要在场景好了之后.
         * @怪物数量由公式决定.
         */
        MonsterLocalService.setMonsterList = function (isEscape) {
            if (isEscape === void 0) { isEscape = false; }
            MonsterLocalService.monsterList = [];
            for (var i = 0; i < Model.SceneLocalService.sceneData.monsterCount; i++) {
                var st = null;
                if (!isEscape && i == Model.SceneLocalService.sceneData.monsterCount - 1) {
                    st = Enumerable.From(Model.WebValue.dataStModel.monsterList).
                        Where(function (x) { return x.MonsterType == Model.MonsterType.MONSTER_TYPE_BOSS; }).
                        FirstOrDefault(Model.WebValue.dataStModel.monsterList[0]);
                }
                else {
                    st = Enumerable.From(Model.WebValue.dataStModel.monsterList).
                        Where(function (x) { return x.MonsterType == Model.MonsterType.MONSTER_TYPE_BOX || x.MonsterType == Model.MonsterType.MONSTER_TYPE_PERSON; }).
                        FirstOrDefault(Model.WebValue.dataStModel.monsterList[0]);
                }
                var data = new Model.MonsterData(st);
                MonsterLocalService.setMonsterHp(data);
                MonsterLocalService.setMonsterDropMoney(data);
                MonsterLocalService.setBossLeftTime(data);
                console.log("zhujun: monster list init data is " + JSON.stringify(data));
                MonsterLocalService.monsterList.push(data);
            }
            return MonsterLocalService.monsterList;
        };
        /**
         * @非BOSS血量= ROUNDUP（monsterHpRatio^关卡序号，0）
         * @BOSS血量= ROUNDUP（monsterHpRatio^关卡序号*5*（1- WEAPON_TYPE_CUT_BOSS_HP)，0）
         * @monsterHpRatio在st_system_config里，WEAPON_TYPE_CUT_BOSS_HP在st_magic_weapon里
         */
        MonsterLocalService.setMonsterHp = function (_data) {
            _data.hp = Math.ceil(Math.pow(parseFloat(Model.PlayerLocalService.PlayerData.st.monsterHpRatio), parseInt(Model.SceneLocalService.sceneData.dy.sceneId)));
            if (_data.st.MonsterType == Model.MonsterType.MONSTER_TYPE_BOSS) {
                _data.hp = Math.ceil(_data.hp * 5 * (1 - Model.MagicWeaponService.CutBossHp));
            }
        };
        /**
         * @怪物区分来源于st_monster的monster_type字段
         *
         * @ BOSS掉钱= ROUNDUP（怪物血量/4*（1+BOSS掉落加成），0）
         * @ BOSS掉落加成包括神兵效果里的
         * @ 在非Boss的基础上，增加的boss掉落铜币（WEAPON_TYPE_ADD_BOSS_COIN）
         *
         * @BOX怪物掉钱= ROUNDUP（怪物血量*1.25*（1+宝箱铜币掉落加成），0）
         * @宝箱铜币加成包括挚友技能效果里的
         * @提升宝箱铜币掉落数量（FRIEND_SKILL_TYPE_BOX_COIN）
         * @神兵效果里的
         * @提升宝箱铜币掉落数量(WEAPON_TYPE_ADD_BOX_COIN)
         *
         * @非BOX怪物掉钱= ROUNDUP（怪物血量/4*（1+铜币掉落加成），0）
         * @铜币掉落加成包括挚友技能效果里的
         * @提升铜币掉落数量（FRIEND_SKILL_TYPE_COIN）
         * @神兵效果里的
         * @提升获得铜币数量（WEAPON_TYPE_ADD_COIN）
         */
        MonsterLocalService.setMonsterDropMoney = function (_data) {
            if (_data.st.MonsterType == Model.MonsterType.MONSTER_TYPE_BOSS) {
                _data.dropMoney = Math.ceil(_data.hp / 4 * (1 + Model.FriendLocalService.FriendSkillTypeCoin + Model.MagicWeaponService.AddCoin + Model.MagicWeaponService.AddBossCoin));
            }
            else if (_data.st.MonsterType == Model.MonsterType.MONSTER_TYPE_BOX) {
                _data.dropMoney = Math.ceil(_data.hp * 1.25 * (1 + Model.FriendLocalService.FriendSkillTypeBoxCoin + Model.MagicWeaponService.AddBoxCoin));
            }
            else {
                _data.dropMoney = Math.ceil(_data.hp / 4 * (1 + Model.FriendLocalService.FriendSkillTypeCoin + Model.MagicWeaponService.AddCoin));
            }
        };
        /**
         * @BOSS倒计时=timeBOSS*（1+ WEAPON_TYPE_ADD_BOSS_TIME）
         * @timeBOSS来源st_system_config
         * @WEAPON_TYPE_ADD_BOSS_TIME是神兵的加成
         */
        MonsterLocalService.setBossLeftTime = function (_data) {
            _data.leftTime = parseFloat(Model.PlayerLocalService.PlayerData.st.timeBOSS) * (1 + Model.MagicWeaponService.AddBossTime);
        };
        /**
         * @怪物数据.
         *
         */
        MonsterLocalService.monsterList = null;
        return MonsterLocalService;
    })();
    Model.MonsterLocalService = MonsterLocalService;
    egret.registerClass(MonsterLocalService,'Model.MonsterLocalService');
})(Model || (Model = {}));
