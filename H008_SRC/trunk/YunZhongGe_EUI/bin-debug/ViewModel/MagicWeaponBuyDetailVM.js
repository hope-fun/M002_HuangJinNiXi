var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author  fangchao
     * @date 2015.12.30
     *
     */
    var MagicWeaponBuyDetailVM = (function (_super) {
        __extends(MagicWeaponBuyDetailVM, _super);
        function MagicWeaponBuyDetailVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = View.MagicWeaponBuyDetail;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=MagicWeaponBuyDetailVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            /**
             * @添加按钮关闭事件
             */
            this.magicCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        };
        return MagicWeaponBuyDetailVM;
    })(eui.Component);
    ViewModel.MagicWeaponBuyDetailVM = MagicWeaponBuyDetailVM;
    egret.registerClass(MagicWeaponBuyDetailVM,'ViewModel.MagicWeaponBuyDetailVM');
})(ViewModel || (ViewModel = {}));
