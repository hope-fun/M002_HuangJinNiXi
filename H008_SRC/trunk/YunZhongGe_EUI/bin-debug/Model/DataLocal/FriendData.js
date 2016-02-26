var Model;
(function (Model) {
    /**
     * @author: zhu_jun
     * @date: 2016.01.15.
     */
    var FriendData = (function () {
        function FriendData(_dy, _st) {
            this.dy = _dy;
            this.st = _st;
        }
        var d = __define,c=FriendData,p=c.prototype;
        d(p, "DpsDeltaUnit"
            /**
             * @dps带单位下一级差值.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dpsDelta);
            }
        );
        d(p, "DpsNextAndUnit"
            /**
             * @带单位的下一级dps.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.dpsNext);
            }
        );
        d(p, "DpsAndUnit"
            /**
             * @带单位的秒伤.
             */
            ,function () {
                //            _data.DpsAndUnit = MainInfoLocalService.toUnitConversion(_data.dps);
                return Model.MainInfoLocalService.toUnitConversion(this.dps);
            }
        );
        d(p, "LayerStr"
            /**
             * @可解锁重级显示的文字.
             */
            ,function () {
                switch (this.layerMatchLevel) {
                    case 1:
                        return "第一重";
                    case 2:
                        return "第二重";
                    case 3:
                        return "第三重";
                    case 4:
                        return "第四重";
                    case 5:
                        return "第五重";
                    case 6:
                        return "第六重";
                    case 7:
                        return "第七重";
                    default:
                        return "满重";
                }
            }
        );
        d(p, "LayerCostAndUnit"
            /**
             * @带单位层级cost.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.layerCost);
                ;
                //            _data.LayerCostAndUnit = MainInfoLocalService.toUnitConversion(_data.layerCost);
            }
        );
        d(p, "UpgradeCostAndUnit"
            //        /**
            //         * @只有升级花费单位.
            //         */ 
            //        public get UpgradeCostUnit():string{
            //            return MainInfoLocalService.toUnitConversion(this.upgradeCost);
            //        }
            /**
             * @带单位的挚友升级花费.
             */
            ,function () {
                return Model.MainInfoLocalService.toUnitConversion(this.upgradeCost);
                //            _data.UpgradeCostAndUnit = MainInfoLocalService.toUnitConversion(_data.upgradeCost);
            }
        );
        ;
        d(p, "FirstLayerType"
            /**
             * @技能一层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.firstLayerType];
            }
        );
        d(p, "SecondLayerType"
            /**
             * @技能二层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.secondLayerType];
            }
        );
        d(p, "ThirdLayerType"
            /**
             * @技能三层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.thirdLayerType];
                this.st.sixthLayerType;
                this.st.seventhLayerType;
            }
        );
        d(p, "FourthLayerType"
            /**
             * @技能四层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.fourthLayerType];
            }
        );
        d(p, "FifthLayerType"
            /**
             * @技能五层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.fifthLayerType];
            }
        );
        d(p, "SixthLayerType"
            /**
             * @技能六层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.sixthLayerType];
            }
        );
        d(p, "SeventhLayerType"
            /**
             * @技能七层加成类型.
             */
            ,function () {
                return Model.SkillFloorType[this.st.seventhLayerType];
            }
        );
        d(p, "RecruitMoneyType"
            /**
             * @招募货币消耗类型枚举.
             */
            ,function () {
                return Model.MoneyType[this.st.recruitMoneyType];
            }
        );
        d(p, "RecruitCost"
            /**
             * @挚友招募花费.
             */
            ,function () {
                return Model.MainInfoLocalService.toTenConversion(this.st.recruitCost, this.st.recruitCostMagnitude);
            }
        );
        d(p, "RecruitCostAndUnit"
            /**
             * @带单位招募花费的钱.
             */
            ,function () {
                return String(this.st.recruitCost + Model.MainInfoLocalService.getMagnitudeListById(this.st.recruitCostMagnitude));
            }
        );
        d(p, "IsEnoughRecruit"
            /**
             * @是够够金币招募.
             * @金币和元宝都通过这里判断.
             */
            ,function () {
                if (this.RecruitMoneyType == Model.MoneyType.MONEY_TYPE_COIN) {
                    return Model.PlayerLocalService.isEnoughGold(this.RecruitCost);
                }
                else if (this.RecruitMoneyType == Model.MoneyType.MONEY_TYPE_YB) {
                    return Model.PlayerLocalService.isEnoughSycee(this.RecruitCost);
                }
                else {
                    return false;
                    alert("您的货币类型错误，请及时联系客服 ! ");
                }
            }
        );
        d(p, "Type"
            /**
             * @挚友类型.
             */
            ,function () {
                return Model.FriendType[this.st.type];
            }
        );
        return FriendData;
    })();
    Model.FriendData = FriendData;
    egret.registerClass(FriendData,'Model.FriendData');
})(Model || (Model = {}));
