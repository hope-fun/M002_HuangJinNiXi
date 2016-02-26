var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     * @date 2015.12.28
     *
     */
    var MagicWeaponVM = (function (_super) {
        __extends(MagicWeaponVM, _super);
        function MagicWeaponVM(_uiLayer, _magicWeapon, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.MagicWeaponView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.magicWeapon.source = "magic_weapon_" + _magicWeapon;
            this.uiLayer.addChild(this);
            egret.Tween.get(this.mask_black).to({ alpha: .7 }, 700, egret.Ease.circIn);
            egret.Tween.get(this.window).to({ y: 0 }, 700, egret.Ease.backOut);
            if (Model.WebValue.isDebug) {
                console.log("fangchao: add magic weapon vm to ui layer !　");
            }
            ;
            /**
            * @添加按钮关闭事件
             */
            this.magicCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.get(_this.mask_black).to({ alpha: 0 }, 700, egret.Ease.circIn);
                egret.Tween.get(_this.window).to({ y: -550 }, 700, egret.Ease.backIn);
                setTimeout(function () {
                    _this.uiLayer.removeChild(_this);
                }, 700);
            }, this);
        }
        var d = __define,c=MagicWeaponVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return MagicWeaponVM;
    })(eui.Component);
    ViewModel.MagicWeaponVM = MagicWeaponVM;
    egret.registerClass(MagicWeaponVM,'ViewModel.MagicWeaponVM');
})(ViewModel || (ViewModel = {}));
