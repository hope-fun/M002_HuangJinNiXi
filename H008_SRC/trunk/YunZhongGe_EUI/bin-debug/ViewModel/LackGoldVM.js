var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author  fangchao
     *
     */
    var LackGoldVM = (function (_super) {
        __extends(LackGoldVM, _super);
        function LackGoldVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
            this.skinName = View.LackGoldView;
            egret.Tween.get(this.mask_black).to({ alpha: .7 }, 700, egret.Ease.circIn);
            egret.Tween.get(this.window).to({ y: 0 }, 700, egret.Ease.backOut);
            if (Model.WebValue.isDebug) {
                console.log("fangchao: add magic weapon vm to ui layer !　");
            }
            ;
            this.LGCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.get(_this.mask_black).to({ alpha: 0 }, 700, egret.Ease.circIn);
                egret.Tween.get(_this.window).to({ y: -550 }, 700, egret.Ease.backIn);
                setTimeout(function () {
                    _this.uiLayer.removeChild(_this);
                }, 700);
            }, this);
        }
        var d = __define,c=LackGoldVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return LackGoldVM;
    })(eui.Component);
    ViewModel.LackGoldVM = LackGoldVM;
    egret.registerClass(LackGoldVM,'ViewModel.LackGoldVM');
})(ViewModel || (ViewModel = {}));
