var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var PersonalMsgVM = (function (_super) {
        __extends(PersonalMsgVM, _super);
        function PersonalMsgVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.SettingsView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
            egret.Tween.get(this.mask_black_personalMsg).to({ alpha: .7 }, 700, egret.Ease.circIn);
            egret.Tween.get(this.window).to({ y: 0 }, 700, egret.Ease.backOut);
            if (Model.WebValue.isDebug) {
                console.log("fangchao: add magic weapon vm to ui layer !　");
            }
            ;
            this.LGCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.get(_this.mask_black_personalMsg).to({ alpha: 0 }, 700, egret.Ease.circIn);
                egret.Tween.get(_this.window).to({ y: -550 }, 700, egret.Ease.backIn);
                setTimeout(function () {
                    _this.uiLayer.removeChild(_this);
                }, 700);
            }, this);
        }
        var d = __define,c=PersonalMsgVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return PersonalMsgVM;
    })(eui.Component);
    ViewModel.PersonalMsgVM = PersonalMsgVM;
    egret.registerClass(PersonalMsgVM,'ViewModel.PersonalMsgVM');
})(ViewModel || (ViewModel = {}));
