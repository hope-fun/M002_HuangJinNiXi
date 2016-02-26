var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var SceneLocalService = (function () {
        function SceneLocalService() {
        }
        var d = __define,c=SceneLocalService,p=c.prototype;
        /**
         * @场景要在主角和神器之后初始化.
         */
        SceneLocalService.setSceneData = function () {
            var st = Enumerable.From(Model.WebValue.dataStModel.sceneList).Where(function (x) { return x.id == Model.WebValue.dataDyModel.sceneModel.sceneId; }).FirstOrDefault(null);
            SceneLocalService.sceneData = new Model.SceneData(Model.WebValue.dataDyModel.sceneModel, st);
            SceneLocalService.sceneData.currentMonster = 0;
            SceneLocalService.setSceneMonsterCount(SceneLocalService.sceneData);
            return SceneLocalService.sceneData;
        };
        /**
         * @关卡怪物数量=sceneMonsterCount*（1- WEAPON_TYPE_CUT_ENEMY_COUNT）
         * @sceneMonsterCount来源st_system_config
         * @WEAPON_TYPE_CUT_ENEMY_COUNT是神兵的加成
         */
        SceneLocalService.setSceneMonsterCount = function (_data) {
            _data.monsterCount = parseInt(Model.PlayerLocalService.PlayerData.st.sceneMonsterNumber) * (1 - Model.MagicWeaponService.CutEnemyCount);
        };
        /**
         * @挚友列表数据.
         */
        SceneLocalService.sceneData = null;
        return SceneLocalService;
    })();
    Model.SceneLocalService = SceneLocalService;
    egret.registerClass(SceneLocalService,'Model.SceneLocalService');
})(Model || (Model = {}));
