var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *
     *
     */
    var TotalRewardItemVM = (function (_super) {
        __extends(TotalRewardItemVM, _super);
        function TotalRewardItemVM() {
            _super.call(this);
            this.skinName = View.TotalRewardItem;
            this.currentState = "enabled";
        }
        var d = __define,c=TotalRewardItemVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            this.earnReward.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.currentState = "complete";
            }, this);
        };
        return TotalRewardItemVM;
    })(eui.Component);
    ViewModel.TotalRewardItemVM = TotalRewardItemVM;
    egret.registerClass(TotalRewardItemVM,'ViewModel.TotalRewardItemVM');
})(ViewModel || (ViewModel = {}));
