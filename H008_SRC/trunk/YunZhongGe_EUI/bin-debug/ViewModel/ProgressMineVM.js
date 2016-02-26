var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.12.29.
     *
     */
    var ProgressMineVM = (function (_super) {
        __extends(ProgressMineVM, _super);
        function ProgressMineVM() {
            _super.call(this);
            this.skinName = View.ProgressMineView;
        }
        var d = __define,c=ProgressMineVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return ProgressMineVM;
    })(eui.ProgressBar);
    ViewModel.ProgressMineVM = ProgressMineVM;
    egret.registerClass(ProgressMineVM,'ViewModel.ProgressMineVM');
})(ViewModel || (ViewModel = {}));
