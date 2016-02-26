var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var BtnTopVM = (function (_super) {
        __extends(BtnTopVM, _super);
        function BtnTopVM(_onCallBack) {
            _super.call(this);
            this.skinName = View.BtnTopView;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=BtnTopVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return BtnTopVM;
    })(eui.Component);
    ViewModel.BtnTopVM = BtnTopVM;
    egret.registerClass(BtnTopVM,'ViewModel.BtnTopVM');
})(ViewModel || (ViewModel = {}));
