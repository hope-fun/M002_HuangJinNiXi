var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2016.1.18.
     *
     */
    var DailyChallengeItemVM = (function (_super) {
        __extends(DailyChallengeItemVM, _super);
        function DailyChallengeItemVM() {
            _super.call(this);
            this.skinName = View.DailyRechargeItem;
        }
        var d = __define,c=DailyChallengeItemVM,p=c.prototype;
        return DailyChallengeItemVM;
    })(eui.Component);
    ViewModel.DailyChallengeItemVM = DailyChallengeItemVM;
    egret.registerClass(DailyChallengeItemVM,'ViewModel.DailyChallengeItemVM');
})(ViewModel || (ViewModel = {}));
