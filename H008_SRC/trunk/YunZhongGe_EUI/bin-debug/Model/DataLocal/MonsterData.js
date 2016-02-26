var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun
     * @date: 2016.02.03.
     * @怪物动态信息，在SceneData.
     */
    var MonsterData = (function () {
        function MonsterData(_st) {
            this.st = _st;
        }
        var d = __define,c=MonsterData,p=c.prototype;
        d(p, "IdleJson"
            /**
             * @待机动画json文件.
             */
            ,function () {
                return String("monster_00" + this.st.id + "_idle_json");
            }
        );
        d(p, "IdlePng"
            /**
             * @待机动画png文件.
             */
            ,function () {
                return String("monster_00" + this.st.id + "_idle_png");
            }
        );
        d(p, "Idle"
            /**
             * @待机动画名称.
             */
            ,function () {
                return String("monster_00" + this.st.id + "_idle");
            }
        );
        d(p, "getHitJson"
            /**
             * @受击动画json文件.
             */
            ,function () {
                return String("monster_00" + this.st.id + "_gethit_json");
            }
        );
        d(p, "getHitPng"
            /**
             * @受击动画png文件.
             */
            ,function () {
                return String("monster_00" + this.st.id + "_gethit_png");
            }
        );
        d(p, "getHit"
            /**
             * @受击动画名称.
             */
            ,function () {
                return String("monster_00" + this.st.id + "_gethit");
            }
        );
        d(p, "HpAndUnit"
            /**
             * @带单位怪物血量.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.hp);
            }
        );
        d(p, "DropMoneyAndUnit"
            /**
             * @带单位怪物金币掉落数量.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dropMoney);
            }
        );
        return MonsterData;
    })();
    Model.MonsterData = MonsterData;
    egret.registerClass(MonsterData,'Model.MonsterData');
})(Model || (Model = {}));
