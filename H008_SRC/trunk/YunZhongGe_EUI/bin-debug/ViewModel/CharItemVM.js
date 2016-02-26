var ViewModel;
(function (ViewModel) {
    var CharItemVM = (function (_super) {
        __extends(CharItemVM, _super);
        function CharItemVM(_uiGroup, _onCallback) {
            _super.call(this);
            /**
             *@判断是否五次从而显示+10 +100
             */
            this.flag = 1;
            this.skinName = View.CharItem;
            this.uiGroup = _uiGroup;
            this.onCallback = _onCallback;
            this.uiGroup.addChild(this);
        }
        var d = __define,c=CharItemVM,p=c.prototype;
        p.createChildren = function () {
            this.levelUpAnimel();
            _super.prototype.createChildren.call(this);
        };
        /***************************设置三个模块的信息*************************/
        /**
         * @设置主角信息
         */
        p.setPData = function (_data) {
            if (!_data || !_data.st) {
                alert("主角数据错误，请重新加载 ! ");
                return;
            }
            this.pData = _data;
            this.friendGroup.visible = false;
            this.bgImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createCharPop, this);
            this.levelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerEvent, this);
            this.levelBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerBtnTenUp, this);
            this.levelBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerBtnHundredUp, this);
            if (_data.dy) {
                this.skillName.text = _data.dy.name ? _data.dy.name : "新用户";
                this.skillLevel.text = _data.dy.level.toString();
                this.skillDes.text = String("点击伤害： " + _data.ClickDamageAndUnit);
                this.skillIcon.source = _data.st.leadHead;
                var isEnough = Model.PlayerLocalService.PlayerData.dy.gold > _data.upgradeCost;
                this.levelBtn.setPUpgrade(_data.UpgradeCostAndUnit, _data.ClickDamageDeltaUnit, isEnough);
            }
            else {
                alert("主角动态数据错误，请重新加载 ! ");
            }
        };
        /**
         * @设置主角技能item.
         */
        p.setPSData = function (_data) {
            if (!_data || !_data.st) {
                alert("主角技能数据错误，请重新加载 ! ");
                return;
            }
            this.pSData = _data;
            this.friendGroup.visible = false;
            this.bgImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createCharPop, this);
            this.levelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerSkillEvent, this);
            this.skillName.text = _data.st.name;
            if (_data.dy) {
                this.skillLevel.text = _data.dy.level.toString();
                this.skillDes.text = _data.Description;
                this.skillIcon.source = _data.st.icon;
                var isEnough = Model.PlayerLocalService.PlayerData.dy.gold > _data.cost;
                this.levelBtn.setPSUnlock(_data.CostAndUnit, _data.effectDelta.toString(), isEnough);
            }
            else {
                this.skillLevel.text = "0";
                this.skillDes.text = _data.Description;
                this.skillIcon.source = _data.st.icon;
                this.levelBtn.setPSLock(_data.CostAndUnit, _data.st.openLevel);
            }
        };
        /**
         * @设置挚友技能item.
         * @
         */
        p.setBFData = function (_data) {
            console.log("zhujun: in setBFData ! ");
            if (!_data || !_data.st) {
                alert("数据错误，请重新加载 ! ");
                return;
            }
            this.fData = _data;
            this.bgImage.source = _data.Type == Model.FriendType.FRIEND_TYPE_FRIEND ? "bg_xialacaidan02" : "bg_xialacaidan03";
            this.skillName.text = _data.st.name;
            this.friendDps.visible = true;
            this.skillIcon.source = _data.st.icon;
            this.levelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuyFEvent, this);
            this.levelBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendBtnTenUp, this);
            this.levelBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendBtnHundredUp, this);
            this.bgImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createFriendPop, this);
            if (_data && _data.st && _data.dy) {
                for (var i = 0; i < _data.dy.layerId; i++) {
                    this.layerGroup.getChildAt(i).visible = true;
                }
                this.skillLevel.text = _data.dy.level.toString();
                this.friendDps.text = String("秒伤:" + _data.DpsAndUnit);
                if (_data.dy.layerId < _data.layerMatchLevel) {
                    this.levelBtn.setFUpgrade(_data.LayerCostAndUnit, _data.DpsDeltaUnit, Model.PlayerLocalService.PlayerData.dy.gold > _data.upgradeCost, _data.LayerStr);
                }
                else {
                    this.levelBtn.setFUpgrade(_data.UpgradeCostAndUnit, _data.DpsDeltaUnit, Model.PlayerLocalService.PlayerData.dy.gold > _data.upgradeCost);
                }
            }
            else {
                this.skillLevel.text = "0"; //未解锁等级统一为0.
                this.friendDps.text = "未解锁";
                this.levelBtn.setFLock(_data.RecruitMoneyType, _data.RecruitCostAndUnit, _data.DpsAndUnit, _data.IsEnoughRecruit);
            }
        };
        /***************************二级菜单*************************/
        /**
         * @挚友二级菜单
         */
        p.createFriendPop = function () {
            if (this.onCallback) {
                var item = new ViewModel.CharDetailMsgVM(Main.singleton, function () { });
                item.initFData(this.fData);
            }
        };
        /**
         * @主角二级菜单
         */
        p.createCharPop = function () {
            if (this.onCallback) {
                var item = new ViewModel.CharDetailMsgVM(Main.singleton, function () { });
                item.initPData();
            }
        };
        /***************************按钮绑定事件*************************/
        /**
         * @主角个人回调函数
         */
        p.onPlayerEvent = function () {
            if (this.onCallback) {
                this.onCallback(this.pData);
                this.levelUpCharAnimel();
                //10连升 100连升 by cai_haotian 2016.2.25
                if (Model.PlayerLocalService.PlayerData.dy.gold < this.pData.upgradeCost * 10) {
                    this.levelBtn0.visible = false;
                }
                //100连升
                if (Model.PlayerLocalService.PlayerData.dy.gold < this.pData.upgradeCost * 100) {
                    this.levelBtn1.visible = false;
                }
                this.flag++;
                if (this.flag == 5) {
                    //10连升
                    if (Model.PlayerLocalService.PlayerData.dy.gold >= this.pData.upgradeCost * 10) {
                        this.levelBtn0.visible = true;
                        this.levelBtn0.setCharIcon(10, Model.MainInfoLocalService.toUnitConversion(this.pData.upgradeCost * 10)); //TODO:这边现在显示的价格不是正确的
                    }
                    else {
                        this.levelBtn0.visible = false;
                    }
                    //100连升
                    if (Model.PlayerLocalService.PlayerData.dy.gold >= this.pData.upgradeCost * 100) {
                        this.levelBtn1.visible = true;
                        this.levelBtn1.setCharIcon(100, Model.MainInfoLocalService.toUnitConversion(this.pData.upgradeCost * 100)); //TODO:这边现在显示的价格不是正确的
                    }
                    else {
                        this.levelBtn1.visible = false;
                    }
                    this.flag = 0;
                }
            }
        };
        /**
         * @主角技能回调函数
         */
        p.onPlayerSkillEvent = function () {
            if (this.onCallback) {
                this.onCallback(this.pSData);
            }
        };
        /**
         * @挚友回调事件.
         */
        p.onBuyFEvent = function () {
            var _this = this;
            if (this.onCallback) {
                //                alert(111);
                //                if(Model.WebValue.isDebug)
                //                    console.log(this.fData.st.name + " : dps is " + this.fData.DpsAndUnit);
                //小伙伴显示 by cai_haotian 2016.2.22    
                this.onCallback(this.fData);
                //10连升 100连升 by cai_haotian 2016.2.25
                if (Model.PlayerLocalService.PlayerData.dy.gold < this.fData.upgradeCost * 10) {
                    this.levelBtn0.visible = false;
                }
                //100连升
                if (Model.PlayerLocalService.PlayerData.dy.gold < this.fData.upgradeCost * 100) {
                    this.levelBtn1.visible = false;
                }
                this.flag++;
                if (this.flag == 5) {
                    //10连升
                    if (Model.PlayerLocalService.PlayerData.dy.gold >= this.fData.upgradeCost * 10) {
                        this.levelBtn0.visible = true;
                        this.levelBtn0.setFriendIcon(10, Model.MainInfoLocalService.toUnitConversion(this.fData.upgradeCost * 10)); //TODO:这边现在显示的价格不是正确的
                    }
                    else {
                        this.levelBtn0.visible = false;
                    }
                    //100连升
                    if (Model.PlayerLocalService.PlayerData.dy.gold >= this.fData.upgradeCost * 100) {
                        this.levelBtn1.visible = true;
                        this.levelBtn1.setFriendIcon(100, Model.MainInfoLocalService.toUnitConversion(this.fData.upgradeCost * 100)); //TODO:这边现在显示的价格不是正确的
                    }
                    else {
                        this.levelBtn1.visible = false;
                    }
                    this.flag = 0;
                }
                //by cai_haotian 2016.2.15.
                this.armature.display.visible = true;
                this.armature.animation.gotoAndPlay("Tx_shengji_02", -1, -1, 1);
                //动画完成后隐藏
                this.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, function () {
                    _this.armature.display.visible = false;
                }, this);
                if (this.fData.Type == Model.FriendType.FRIEND_TYPE_FRIEND) {
                    this.levelUpCharAnimel(this.fData.st.id);
                }
            }
        };
        /**
         * @按键1的升级方法主角技能用
         */
        p.btnOnceUp = function () {
            //这里面需要调用各种处理.
        };
        /**
         * @十连挚友升按钮事件.
         * @by cai_haotian 2016.2.25.
         */
        p.friendBtnTenUp = function () {
            //            Model.Tools.repeatedExecute(this.onBuyFEvent,10);
            for (var i = 0; i < 10; i++) {
                this.onBuyFEvent();
            }
        };
        /**
         * @百连挚友升按钮事件.
         * @by cai_haotian 2016.2.25.
         */
        p.friendBtnHundredUp = function () {
            //            Model.Tools.repeatedExecute(this.onBuyFEvent,100);
            for (var i = 0; i < 100; i++) {
                this.onBuyFEvent();
            }
        };
        /**
         * @十连主角升按钮事件.
         * @by cai_haotian 2016.2.25.
         */
        p.playerBtnTenUp = function () {
            //            Model.Tools.repeatedExecute(this.onBuyFEvent,10);
            for (var i = 0; i < 10; i++) {
                this.onPlayerEvent();
            }
        };
        /**
         * @百连主角升按钮事件.
         * @by cai_haotian 2016.2.25.
         */
        p.playerBtnHundredUp = function () {
            //            Model.Tools.repeatedExecute(this.onBuyFEvent,100);
            for (var i = 0; i < 100; i++) {
                this.onPlayerEvent();
            }
        };
        /***************************特效函数***************************/
        /**
         * @升级特效
         * @by cai_haotian 2016.2.15
         */
        p.levelUpAnimel = function () {
            var factory = Model.DragonBones.addArmatureToFactory("texture_shengji_02_texiao", "texture_shengji_02_json", "texture_shengji_02_png");
            this.armature = Model.DragonBones.buildArmature(factory, "Tx_shengji_02");
            dragonBones.WorldClock.clock.add(this.armature);
            this.addChild(this.armature.display);
            this.armature.display.x = 47;
            this.armature.display.y = 36;
            this.armature.display.visible = false;
        };
        /**
         * @升级人物特效
         */
        p.levelUpCharAnimel = function (id) {
            if (id === void 0) { id = ""; }
            var factory = Model.DragonBones.addArmatureToFactory("texture_shengji_01_texiao", "texture_shengji_01_json", "texture_shengji_01_png");
            var charAnimel = Model.DragonBones.buildArmature(factory, "Tx_shengji_01");
            dragonBones.WorldClock.clock.add(charAnimel);
            charAnimel.animation.gotoAndPlay("Tx_shengji_01", -1, -1, 1);
            switch (id) {
                case "":
                    charAnimel.display.x = 268;
                    charAnimel.display.y = 390;
                    Main.singleton.mainGameVM.yungeLevelUp.addChild(charAnimel.display);
                    charAnimel.addEventListener(egret.Event.COMPLETE, function () {
                        Main.singleton.mainGameVM.yungeLevelUp.removeChild(charAnimel.display);
                    }, this);
                    break;
                case "1":
                    charAnimel.display.x = 190;
                    charAnimel.display.y = 450;
                    Main.singleton.mainGameVM.baiheLevelUp.addChild(charAnimel.display);
                    charAnimel.addEventListener(egret.Event.COMPLETE, function () {
                        Main.singleton.mainGameVM.baiheLevelUp.removeChild(charAnimel.display);
                    }, this);
                    break;
                case "7":
                    charAnimel.display.x = 90;
                    charAnimel.display.y = 500;
                    Main.singleton.mainGameVM.bingyiLevelUp.addChild(charAnimel.display);
                    charAnimel.addEventListener(egret.Event.COMPLETE, function () {
                        Main.singleton.mainGameVM.bingyiLevelUp.removeChild(charAnimel.display);
                    }, this);
                    break;
                case "13":
                    charAnimel.display.x = 205;
                    charAnimel.display.y = 345;
                    Main.singleton.mainGameVM.xupingjunLevelUp.addChild(charAnimel.display);
                    charAnimel.addEventListener(egret.Event.COMPLETE, function () {
                        Main.singleton.mainGameVM.xupingjunLevelUp.removeChild(charAnimel.display);
                    }, this);
                    break;
                case "19":
                    charAnimel.display.x = 90;
                    charAnimel.display.y = 300;
                    Main.singleton.mainGameVM.mengjueLevelUp.addChild(charAnimel.display);
                    charAnimel.addEventListener(egret.Event.COMPLETE, function () {
                        Main.singleton.mainGameVM.mengjueLevelUp.removeChild(charAnimel.display);
                    }, this);
                    break;
                case "25":
                    charAnimel.display.x = 90;
                    charAnimel.display.y = 500;
                    Main.singleton.mainGameVM.liufulingLevelUp.addChild(charAnimel.display);
                    charAnimel.addEventListener(egret.Event.COMPLETE, function () {
                        Main.singleton.mainGameVM.liufulingLevelUp.removeChild(charAnimel.display);
                    }, this);
                    break;
                default: alert("升级特效出错！请联系管理员！");
            }
        };
        return CharItemVM;
    })(eui.Component);
    ViewModel.CharItemVM = CharItemVM;
    egret.registerClass(CharItemVM,'ViewModel.CharItemVM');
})(ViewModel || (ViewModel = {}));
