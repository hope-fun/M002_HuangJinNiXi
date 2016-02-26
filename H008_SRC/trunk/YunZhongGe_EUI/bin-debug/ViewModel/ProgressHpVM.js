var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.1.6.
     *
     */
    var ProgressHp = (function (_super) {
        __extends(ProgressHp, _super);
        function ProgressHp() {
            _super.call(this);
            this.skinName = "View.ProgressHp";
        }
        var d = __define,c=ProgressHp,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return ProgressHp;
    })(eui.ProgressBar);
    ViewModel.ProgressHp = ProgressHp;
    egret.registerClass(ProgressHp,'ViewModel.ProgressHp');
})(ViewModel || (ViewModel = {}));
