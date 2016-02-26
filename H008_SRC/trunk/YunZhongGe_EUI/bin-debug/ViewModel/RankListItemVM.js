var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2016.1.4.
     *
     */
    var RankListItemVM = (function (_super) {
        __extends(RankListItemVM, _super);
        function RankListItemVM() {
            _super.call(this);
            this.skinName = View.RankListItem;
        }
        var d = __define,c=RankListItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return RankListItemVM;
    })(eui.Component);
    ViewModel.RankListItemVM = RankListItemVM;
    egret.registerClass(RankListItemVM,'ViewModel.RankListItemVM');
})(ViewModel || (ViewModel = {}));
