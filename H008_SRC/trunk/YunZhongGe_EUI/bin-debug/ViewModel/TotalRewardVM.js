var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *
     */
    var TotalRewardVM = (function (_super) {
        __extends(TotalRewardVM, _super);
        function TotalRewardVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.TotalRewardView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            this.uiLayer.addChild(this);
        }
        var d = __define,c=TotalRewardVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return TotalRewardVM;
    })(eui.Component);
    ViewModel.TotalRewardVM = TotalRewardVM;
    egret.registerClass(TotalRewardVM,'ViewModel.TotalRewardVM');
})(ViewModel || (ViewModel = {}));
