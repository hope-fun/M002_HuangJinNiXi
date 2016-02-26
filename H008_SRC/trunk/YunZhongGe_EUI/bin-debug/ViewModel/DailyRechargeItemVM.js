var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *
     */
    var DailyRechargeItemVM = (function (_super) {
        __extends(DailyRechargeItemVM, _super);
        function DailyRechargeItemVM(_onCallBack) {
            _super.call(this);
            this.skinName = View.DailyRechargeItem;
            //            this.rewardState.costIcon.visible = false;
            //            this.rewardState.costNum.visible = false;
            //            this.rewardState.describe.text = "可领取";
            //            this.rewardState.friend.visible = true;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=DailyRechargeItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return DailyRechargeItemVM;
    })(eui.Component);
    ViewModel.DailyRechargeItemVM = DailyRechargeItemVM;
    egret.registerClass(DailyRechargeItemVM,'ViewModel.DailyRechargeItemVM');
})(ViewModel || (ViewModel = {}));
