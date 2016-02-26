var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.12.29.
     *
     */
    var AchievementItemVM = (function (_super) {
        __extends(AchievementItemVM, _super);
        function AchievementItemVM(_onCallBack) {
            _super.call(this);
            this.skinName = "View.AchievementItem";
            //            this.awardBtn.costIcon.visible=false;
            //            this.awardBtn.costNum.visible=false;
            //            this.awardBtn.describe.text = "奖 励";
            //            this.awardBtn.friend.visible = true;
            //            this.progress.maximum=100;
            //            this.progress.minimum=0;
            //            this.progress.value=80;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=AchievementItemVM,p=c.prototype;
        d(p, "setSModel",undefined
            /**
             * @设置内容
             */
            ,function (a) {
            }
        );
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return AchievementItemVM;
    })(eui.Component);
    ViewModel.AchievementItemVM = AchievementItemVM;
    egret.registerClass(AchievementItemVM,'ViewModel.AchievementItemVM');
})(ViewModel || (ViewModel = {}));
