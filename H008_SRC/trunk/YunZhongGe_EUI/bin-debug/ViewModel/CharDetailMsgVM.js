var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author by cai_haotian 2015.12.24.
     *
     */
    var CharDetailMsgVM = (function (_super) {
        __extends(CharDetailMsgVM, _super);
        function CharDetailMsgVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = View.CharDetailMsg;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=CharDetailMsgVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            /**
             * @添加按钮关闭事件
             */
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        };
        /**
         * @初始化主角数据
         */
        p.initPData = function () {
            if (Model.WebValue.dataDyModel.playerModel.name === undefined) {
                this.skillId.text = "新用户";
            }
            else {
                this.skillId.text = Model.WebValue.dataDyModel.playerModel.name;
            }
            //获取主角技能列表
            var pSDatas = Model.PlayerSkillLocalService.PlayerSkillList;
            this.skillDetail.text = "Lv." + Model.WebValue.dataDyModel.playerModel.level + "           " + "秒伤:" + Model.PlayerLocalService.PlayerData.ClickDamageAndUnit;
            this.skillDes.text = "    是郝啸天和心城之女，生于大漠，长于四海。性格天真可爱，活泼、精灵手巧，厨艺非凡，相貌倾国倾城。。她喜欢在蓝天白云下，唱出最美最动人的歌。";
            this.skillIcon.source = Model.WebValue.dataStModel.sysConfigModel.leadHead;
            this.zhujueSkillList.visible = true;
            var zj;
            for (var i = 0; i < this.zhujueSkillList.numElements; i++) {
                zj = this.zhujueSkillList.getChildAt(i);
                zj.zhujueDetail.visible = true;
                zj.skillIcon.source = pSDatas[i].st.icon;
                zj.skillName.text = pSDatas[i].st.name;
                if (pSDatas[i].dy) {
                    var skillEffectDes = pSDatas[i].effect; //Model.PlayerSkillLocalService.skillEffect(pSDatas[i].st.skillEffectValue,pSDatas[i].st.skillEffectAdd,pSDatas[i].dy.level);
                }
                else {
                    var skillEffectDes = pSDatas[i].effect; //Model.PlayerSkillLocalService.skillEffect(pSDatas[i].st.skillEffectValue,pSDatas[i].st.skillEffectAdd,1);
                }
                zj.skillResult.text = pSDatas[i].st.description.replace("{}", skillEffectDes.toString());
                if (i == 0) {
                    zj.skillDetail.text = "持续时间：" + pSDatas[i].st.continueTime + "s         冷却时间：" + pSDatas[i].st.cdTime + "s";
                }
                else {
                    zj.skillDetail.text = "持续时间：" + pSDatas[i].st.continueTime + "s        冷却时间：" + pSDatas[i].st.cdTime + "s";
                }
            }
        };
        /**
         * @初始化挚友数据
         */
        p.initFData = function (_fData) {
            this.skillId.text = _fData.st.name;
            if (_fData.dy) {
                this.skillDetail.text = "Lv." + _fData.dy.level + "           " + "秒伤:" + _fData.DpsAndUnit;
            }
            else {
                this.skillDetail.text = "Lv." + 0 + "           " + "秒伤:" + 0;
            }
            this.skillDes.text = _fData.st.description;
            this.skillIcon.source = _fData.st.icon;
            this.friendSkillList.visible = true;
            var friendList;
            var arr = ["一", "二", "三", "四", "五", "六", "七"];
            for (var i = 0; i < this.friendSkillList.numElements; i++) {
                friendList = this.friendSkillList.getChildAt(i);
                friendList.friendDetail.visible = true;
                var j = i + 1;
                friendList.skillIcon.source = "layer_0" + j + "_l";
                friendList.skillLevel.text = "第" + arr[i] + "重";
                switch (i) {
                    case 0:
                        friendList.skillEffect.text = "提升" + _fData.st.firstLayerValue + "%基本技能伤害";
                        break;
                    case 1:
                        friendList.skillEffect.text = "提升" + _fData.st.secondLayerValue + "%基本技能伤害";
                        break;
                    case 2:
                        friendList.skillEffect.text = "提升" + _fData.st.thirdLayerValue + "%点击伤害";
                        break;
                    case 3:
                        friendList.skillEffect.text = "提升" + _fData.st.fourthLayerValue + "%铜币掉落数量";
                        break;
                    case 4:
                        friendList.skillEffect.text = "提升" + _fData.st.fifthLayerValue + "%对BOSS的伤害";
                        break;
                    case 5:
                        friendList.skillEffect.text = "提升" + _fData.st.sixthLayerValue + "%宝箱铜币掉落数量";
                        break;
                    case 6:
                        friendList.skillEffect.text = "提升" + _fData.st.thirdLayerValue + "%所有伤害";
                        break;
                    default: alert("数据出错！请联系管理员！");
                }
            }
        };
        return CharDetailMsgVM;
    })(eui.Component);
    ViewModel.CharDetailMsgVM = CharDetailMsgVM;
    egret.registerClass(CharDetailMsgVM,'ViewModel.CharDetailMsgVM');
})(ViewModel || (ViewModel = {}));
