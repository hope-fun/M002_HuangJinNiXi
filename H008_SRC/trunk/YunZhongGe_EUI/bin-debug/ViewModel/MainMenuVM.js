var ViewModel;
(function (ViewModel) {
    (function (PageName) {
        PageName[PageName["MainMenu"] = 0] = "MainMenu";
        PageName[PageName["SceneList"] = 1] = "SceneList";
    })(ViewModel.PageName || (ViewModel.PageName = {}));
    var PageName = ViewModel.PageName;
    /**
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var MainMenuVM = (function (_super) {
        __extends(MainMenuVM, _super);
        function MainMenuVM(_uiLayer, _onCallBack, pageName) {
            _super.call(this);
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
            this.skinName = View.MainMenuView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
            //            if(pageName == PageName.SceneList) {
            //                this.extraInitSceneList();
            //            } else { 
            //                
            //            }
            if (Model.WebValue.isDebug)
                console.log("zhujun: add main menu vm to ui layer !　");
        }
        var d = __define,c=MainMenuVM,p=c.prototype;
        //        private extraInitSceneList() { 
        //            this.menuBtnGroup.x = -1280;
        //            this.levelGroup.x = 0;
        //        }
        p.onComplete = function () {
            console.log("onComplete");
        };
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            console.log("createChildren");
            this.initMainInfo();
            this.initMenuPopup();
            this.initBtnTop();
            this.initBtnBottom();
            //初始化盒子 每2分钟出一次
            this.initflyBox();
        };
        /**
         * @初始化主信息界面.
         * @by cai_haotian 2016.2.1.
         */
        p.initMainInfo = function () {
            this.mainInfo.setMIData();
            //获得主角技能列表
            var pSDatas = Model.PlayerSkillLocalService.PlayerSkillList;
            this.mainInfo.setSkillItem(pSDatas);
        };
        /**
         * @主页面顶部按钮事件初始化.
         */
        p.initBtnTop = function () {
            this.btnTop.btnSetting.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
            }, this);
            this.btnTop.btnAchievement.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
            }, this);
            this.btnTop.btnFamily.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
            }, this);
            this.btnTop.btnRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
            }, this);
            this.btnTop.btnActivity.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
            }, this);
        };
        /**
         * @初始化菜单弹窗.
         */
        p.initMenuPopup = function () {
            var _this = this;
            this.menuPopupGroup.visible = false;
            this.menuPopup.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.menuPopupGroup.visible = false;
            }, this);
        };
        /**
         * @主页底部按钮事件初始化.
         */
        p.initBtnBottom = function () {
            var _this = this;
            this.btnBottom.btnProtagonist.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.menuPopupGroup.visible = true;
                _this.menuPopup.setPData();
                console.log("zhujun: btn protagonist call back successed ! ");
            }, this);
            this.btnBottom.btnBosomFriend.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.menuPopupGroup.visible = true;
                _this.menuPopup.setBFData();
                console.log("zhujun: btn bosom friend call back successed ! ");
            }, this);
            this.btnBottom.btnArtifact.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.menuPopupGroup.visible = true;
                _this.menuPopup.setAData();
                console.log("zhujun: btn artifact call back successed ! ");
            }, this);
            this.btnBottom.btnMall.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
                return;
                _this.menuPopupGroup.visible = true;
                console.log("zhujun: btn mall call back successed !　");
            }, this);
        };
        /**
         * @初始化盒子动画
         * @by cai_haotian 2016.2.16.
         */
        p.initflyBox = function () {
            var _this = this;
            egret.setInterval(function () { _this.flyBox(); }, this, 120000);
        };
        p.flyBox = function () {
            var _this = this;
            var factory = Model.DragonBones.addArmatureToFactory("texture_box_texiao", "texture_box_json", "texture_box_png");
            this.boxAnimel = Model.DragonBones.buildArmature(factory, "Tx_box");
            this.boxAnimel.display.x = Model.Mathf.random(100, 500);
            this.boxAnimel.display.y = 0;
            this.boxAnimel.display.touchEnabled = true;
            dragonBones.WorldClock.clock.add(this.boxAnimel);
            this.boxAnimel.animation.gotoAndPlay("boxfly", -1, -1, 0);
            this.addChildAt(this.boxAnimel.display, 10);
            //生成起点以及终点坐标
            this.startPos = new Model.Vector2(Model.Mathf.random(200, 400), Model.Mathf.random(100, 150));
            this.endPos = new Model.Vector2(200, 450);
            //left与right值作为贝塞尔的p1点
            this.leftPos = new Model.Vector2(-180, 200);
            this.rightPos = new Model.Vector2(780, 200);
            //先达到起始点
            //各个时间需求
            var startTime = 2000; //出现到旋转位置开始时的时间
            var returnTime = 1000; //返回时间
            var roundTime = 8000; //旋转时间
            var showTime = startTime + returnTime + 2 * roundTime; //总共在屏幕上显示的时间
            egret.Tween.get(this.boxAnimel.display).to({ x: this.startPos.x, y: this.startPos.y }, startTime).call(function () {
                //实现画圈圈的效果
                egret.Tween.get(_this).to({ factor: 1 }, roundTime, egret.Ease.sineInOut).call(function () {
                    _this.endPos = new Model.Vector2(500, 450);
                    egret.Tween.get(_this).to({ factor: 1 }, roundTime, egret.Ease.sineInOut).call(function () {
                        egret.Tween.get(_this.boxAnimel.display).to({ x: Model.Mathf.random(0, 600), y: 0 }, returnTime).call(function () {
                            _this.removeChild(_this.boxAnimel.display);
                        });
                    });
                });
            });
            this.boxAnimel.display.once(egret.TouchEvent.TOUCH_TAP, function () {
                //中断当前所有tween动画
                _this.boxAnimel.animation.gotoAndPlay("boxdown", -1, -1, 1);
                egret.Tween.removeTweens(_this.boxAnimel.display);
                egret.Tween.removeTweens(_this);
                //开始掉落
                egret.Tween.get(_this.boxAnimel.display).to({ y: 550 }, returnTime).call(function () {
                    _this.boxAnimel.animation.gotoAndPlay("openbox", -1, -1, 1);
                    egret.setTimeout(function () {
                        _this.removeChild(_this.boxAnimel.display);
                    }, _this, 800);
                });
            }, this);
        };
        d(p, "factor"
            ,function () {
                return 0;
            }
            ,function (t) {
                this.boxAnimel.display.x = (1 - t) * (1 - t) * (1 - t) * (1 - t) * this.startPos.x + 4 * t * (1 - t) * (1 - t) * (1 - t) * this.leftPos.x + 6 * t * t * (1 - t) * (1 - t) * this.endPos.x + 4 * t * t * t * (1 - t) * this.rightPos.x + t * t * t * t * this.startPos.x;
                this.boxAnimel.display.y = (1 - t) * (1 - t) * (1 - t) * (1 - t) * this.startPos.y + 4 * t * (1 - t) * (1 - t) * (1 - t) * this.leftPos.y + 6 * t * t * (1 - t) * (1 - t) * this.endPos.y + 4 * t * t * t * (1 - t) * this.rightPos.y + t * t * t * t * this.startPos.y;
            }
        );
        return MainMenuVM;
    })(eui.Component);
    ViewModel.MainMenuVM = MainMenuVM;
    egret.registerClass(MainMenuVM,'ViewModel.MainMenuVM');
})(ViewModel || (ViewModel = {}));
