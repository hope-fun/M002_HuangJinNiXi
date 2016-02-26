var Model;
(function (Model) {
    /**
     * @author: zhu_jun
     * @data: 2015.12.18.
     */
    var TweenCustom = (function () {
        /**
         * @初始化动画属性.
         */
        function TweenCustom(_obj, _uiGroup, _onCallBack, _sPos, _ePos, _text) {
            /**
             * @金币出现动画总时长.
             */
            this.sAnimTime = 800;
            /**
             * @y轴到达高点时mPos.y的市场.
             */
            this.mPointTime = 200;
            /**
             * @金币落地等待时间.
             */
            this.goldWaitTime = 3000;
            this.obj = _obj;
            this.onCallBack = _onCallBack;
            this.uiGroup = _uiGroup;
            this.sPos = _sPos;
            this.ePos = _ePos;
            this.text = _text;
        }
        var d = __define,c=TweenCustom,p=c.prototype;
        /**
         * @金币出现动画.
         */
        p.GoldProductionAnim = function () {
            var _this = this;
            var mPos = new Model.Vector2(); //x轴始终向单一方向运动，这边只需要改y轴坐标.
            mPos.y = Model.Mathf.random(this.sPos.y - 300, this.sPos.y); //TODO:
            var tweenX = egret.Tween.get(this.obj);
            tweenX.to({ x: this.ePos.x }, this.sAnimTime, egret.Ease.circOut).call(function () {
                var a = egret.setTimeout(function () { _this.GoldRecycleAnim(); }, _this, _this.goldWaitTime);
                _this.obj.once(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.GoldRecycleAnim();
                    egret.clearTimeout(a);
                }, _this);
            });
            var tweenY = egret.Tween.get(this.obj);
            tweenY.to({ y: mPos.y }, this.mPointTime).to({ y: this.ePos.y }, this.sAnimTime - this.mPointTime, egret.Ease.bounceOut);
        };
        /**
         * @金币回收动画
         * A:
         * B:
         */
        p.GoldRecycleAnim = function () {
            var _this = this;
            //            var tweenX = egret.Tween.get(this.obj);
            //            tweenX.to({ x: 306},300).wait(1000).call(() => { 
            //                this.GoldProductionAnim();
            //                });
            //            var tweenY = egret.Tween.get(this.obj);
            //            tweenY.to({ y: 551 },300,egret.Ease.sineIn).wait(1000);
            this.obj.touchEnabled = false;
            this.initText();
            egret.Tween.get(this).to({ factor: 1 }, this.sAnimTime, egret.Ease.sineIn).call(function () {
                //点击后播放呼吸动画
                //TODO:传下来执行.
                Main.singleton.mainGameVM.sceneInfo.goldAnimelStart();
                //收到钱后更新金币数量 by cai_haotian 2016.2.22.
                Model.PlayerLocalService.PlayerData.dy.gold += 10000000;
                //TODO:传下来执行.
                Main.singleton.mainGameVM.sceneInfo.setMoney(Model.MainInfoLocalService.toUnitConversion(Model.PlayerLocalService.PlayerData.dy.gold));
                _this.uiGroup.removeChild(_this.obj);
                //获得金币后重新更新popMenu上的各个模块
                //                Main.singleton.mainMenuVM.menuPopup.setPData();
                //                Main.singleton.mainMenuVM.menuPopup.setBFData();
            }); //this.sAnimTime
        };
        /**
         * @处理显示钱币
         * @by cai_haotian 2016.2.17.
         */
        p.initText = function () {
            var _this = this;
            this.label = new eui.BitmapLabel();
            this.label.font = RES.getRes("gold-font_fnt");
            this.label.text = this.text;
            this.label.x = this.ePos.x - this.label.textWidth / 2; //TODO:现在宽度问题尚未解决
            this.label.y = this.ePos.y - this.obj.height;
            this.uiGroup.addChild(this.label);
            egret.Tween.get(this.label).to({ y: 350, alpha: 0 }, 1200).call(function () {
                _this.uiGroup.removeChild(_this.label);
            });
        };
        d(p, "factor"
            ,function () {
                return 0;
            }
            /*
             * 二次贝塞尔曲线公式.
             * B(t)=(1-t)(1-t)P0,2t(1-t)P1,t方P2,0<=t<=1.
             * P0(100,100),P1(300,300),P2(100,500)
             * 返回动画P1和P2都已经确定,P1调路径.
             */
            ,function (t) {
                this.obj.x = (1 - t) * (1 - t) * this.ePos.x + 2 * t * (1 - t) * this.bezierP1X + t * t * 225;
                this.obj.y = (1 - t) * (1 - t) * this.ePos.y + 2 * t * (1 - t) * 300 + t * t * 155;
            }
        );
        return TweenCustom;
    })();
    Model.TweenCustom = TweenCustom;
    egret.registerClass(TweenCustom,'Model.TweenCustom');
})(Model || (Model = {}));
