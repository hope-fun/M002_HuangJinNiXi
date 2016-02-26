var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     * @date 2015.12.30
     *
     */
    var SettingsVM = (function (_super) {
        __extends(SettingsVM, _super);
        function SettingsVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.SettingsView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
            egret.Tween.get(this.mask_black_settings).to({ alpha: .7 }, 700, egret.Ease.circIn);
            egret.Tween.get(this.window).to({ y: 0 }, 700, egret.Ease.backOut);
            if (Model.WebValue.isDebug) {
                console.log("fangchao: add magic weapon vm to ui layer !　");
            }
            ;
            this.LGCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.get(_this.mask_black_settings).to({ alpha: 0 }, 700, egret.Ease.circIn);
                egret.Tween.get(_this.window).to({ y: -550 }, 700, egret.Ease.backIn);
                setTimeout(function () {
                    _this.uiLayer.removeChild(_this);
                }, 700);
            }, this);
        }
        var d = __define,c=SettingsVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return SettingsVM;
    })(eui.Component);
    ViewModel.SettingsVM = SettingsVM;
    egret.registerClass(SettingsVM,'ViewModel.SettingsVM');
})(ViewModel || (ViewModel = {}));
