var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var ReceiveRewardsVM = (function (_super) {
        __extends(ReceiveRewardsVM, _super);
        function ReceiveRewardsVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = "View.ReceiveRewardsView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.commitBtn.btnTextIn = "确定";
            this.uiLayer.addChild(this);
            this.commitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        }
        var d = __define,c=ReceiveRewardsVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return ReceiveRewardsVM;
    })(eui.Component);
    ViewModel.ReceiveRewardsVM = ReceiveRewardsVM;
    egret.registerClass(ReceiveRewardsVM,'ViewModel.ReceiveRewardsVM');
})(ViewModel || (ViewModel = {}));
