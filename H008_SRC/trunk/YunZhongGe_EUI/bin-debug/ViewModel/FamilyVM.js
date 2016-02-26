var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var FamilyVM = (function (_super) {
        __extends(FamilyVM, _super);
        function FamilyVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.FamilyView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
            egret.Tween.get(this.mask_black_family).to({ alpha: .7 }, 700, egret.Ease.circIn);
            egret.Tween.get(this.window).to({ y: 0 }, 700, egret.Ease.backOut);
            if (Model.WebValue.isDebug) {
                console.log("fangchao: add magic weapon vm to ui layer !　");
            }
            ;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.get(_this.mask_black_family).to({ alpha: 0 }, 700, egret.Ease.circIn);
                egret.Tween.get(_this.window).to({ y: -850 }, 700, egret.Ease.backIn);
                setTimeout(function () {
                    _this.uiLayer.removeChild(_this);
                }, 700);
            }, this);
        }
        var d = __define,c=FamilyVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return FamilyVM;
    })(eui.Component);
    ViewModel.FamilyVM = FamilyVM;
    egret.registerClass(FamilyVM,'ViewModel.FamilyVM');
})(ViewModel || (ViewModel = {}));
