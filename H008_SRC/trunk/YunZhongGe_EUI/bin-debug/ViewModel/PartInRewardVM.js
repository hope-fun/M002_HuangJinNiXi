var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     * @date 2016.1.4
     *
     */
    var PartInRewardVM = (function (_super) {
        __extends(PartInRewardVM, _super);
        function PartInRewardVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.skinName = View.PartInRewardView;
            this.uiLayer.addChild(this);
            egret.Tween.get(this.mask_black_reward).to({ alpha: .7 }, 700, egret.Ease.circIn);
            egret.Tween.get(this.window).to({ y: 0 }, 700, egret.Ease.backOut);
            if (Model.WebValue.isDebug) {
                console.log("fangchao: add magic weapon vm to ui layer !　");
            }
            ;
            this.LGCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.get(_this.mask_black_reward).to({ alpha: 0 }, 700, egret.Ease.circIn);
                egret.Tween.get(_this.window).to({ y: -500 }, 700, egret.Ease.backIn);
                setTimeout(function () {
                    _this.uiLayer.removeChild(_this);
                }, 700);
            }, this);
        }
        var d = __define,c=PartInRewardVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return PartInRewardVM;
    })(eui.Component);
    ViewModel.PartInRewardVM = PartInRewardVM;
    egret.registerClass(PartInRewardVM,'ViewModel.PartInRewardVM');
})(ViewModel || (ViewModel = {}));
