var Model;
(function (Model) {
    /**
     * @author by cai_haotian 2015.12.23.
     * @modification: zhu_jun,
     * @date: 2016.01.14.
     */
    var PlayerData = (function () {
        function PlayerData(_dy, _st) {
            /**
             * @当前dps值.
             */
            this.currentDps = 0;
            this.dy = _dy;
            this.st = _st;
        }
        var d = __define,c=PlayerData,p=c.prototype;
        d(p, "CurrentDpsAndUnit"
            /**
             * @带单位当前秒伤.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.currentDps);
            }
        );
        d(p, "GoldAndUnit"
            /**
             * @带单位金币总额.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dy.gold); //String(this.dy.gold.toFixed(2) + MainInfoLocalService.getMagnitudeListById(this.dy.goldMagnitudeId));
            }
        );
        d(p, "ClickDamageAndUnit"
            /**
             * @带单位点击伤害.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dy.clickDamage);
            }
        );
        d(p, "ClickDamageDeltaUnit"
            /**
             * @带单位的和下一级的点击伤害差值.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dy.clickDamage);
            }
        );
        d(p, "UpgradeCostAndUnit"
            /**
             * @带单位升级花费.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.upgradeCost);
            }
        );
        d(p, "FriendDamageUnit"
            /**
             * @带单位挚友总秒伤.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dy.friendDamage);
            }
        );
        return PlayerData;
    })();
    Model.PlayerData = PlayerData;
    egret.registerClass(PlayerData,'Model.PlayerData');
})(Model || (Model = {}));
