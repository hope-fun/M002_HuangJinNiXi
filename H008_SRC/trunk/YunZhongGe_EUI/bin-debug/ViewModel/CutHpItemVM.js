var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian 2016.1.7.
     *
     */
    var CutHpItemVM = (function (_super) {
        __extends(CutHpItemVM, _super);
        function CutHpItemVM(_group) {
            _super.call(this);
            this.enabled = false;
            this.group = _group;
            this.skinName = View.CutHpItem;
            this.group.addChild(this);
        }
        var d = __define,c=CutHpItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        /**
       * @设置普攻时口血量
       */
        p.setNoramlAttack = function (_data) {
            this.data = _data;
            this.normalAttack.font = RES.getRes("normal-font_fnt");
            this.normalAttack.text = _data;
            this.TweenAnimate(100);
            //更新目前dps by cai_haotian 2016.2.23.
            Main.singleton.mainMenuVM.mainInfo.setMIData(Number(_data));
        };
        /**
         * @设置暴击时扣血量
         */
        p.setCriticalAttack = function (_data) {
            var _this = this;
            this.data = _data;
            this.criticalAttack.font = RES.getRes("critical-font_fnt");
            this.criticalAttack.text = _data;
            this.criticalAttack.y = 10;
            //更新目前dps by cai_haotian 2016.2.23.
            Main.singleton.mainMenuVM.mainInfo.setMIData(Number(_data));
            egret.setTimeout(function () {
                _this.TweenAnimate(50);
            }, this, 200);
        };
        /**
       * @渐淡动画
       */
        p.TweenAnimate = function (num) {
            var _this = this;
            var groupAlphaTween = egret.Tween.get(this);
            groupAlphaTween.to({ alpha: 0, y: this.y - num }, 1000).call(function () {
                //更新目前dps by cai_haotian 2016.2.23.
                Main.singleton.mainMenuVM.mainInfo.setMIData(-Number(_this.data));
                _this.group.removeChild(_this);
            });
        };
        return CutHpItemVM;
    })(eui.Component);
    ViewModel.CutHpItemVM = CutHpItemVM;
    egret.registerClass(CutHpItemVM,'ViewModel.CutHpItemVM');
})(ViewModel || (ViewModel = {}));
