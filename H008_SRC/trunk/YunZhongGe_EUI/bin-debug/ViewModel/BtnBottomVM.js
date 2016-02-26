var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var BtnBottomVM = (function (_super) {
        __extends(BtnBottomVM, _super);
        function BtnBottomVM(_onCallBack) {
            _super.call(this);
            this.skinName = View.BtnBottomView;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=BtnBottomVM,p=c.prototype;
        p.createChildren = function () {
            console.log("zhujun: btn bottom create children successed ! ");
            _super.prototype.createChildren.call(this);
        };
        return BtnBottomVM;
    })(eui.Component);
    ViewModel.BtnBottomVM = BtnBottomVM;
    egret.registerClass(BtnBottomVM,'ViewModel.BtnBottomVM');
})(ViewModel || (ViewModel = {}));
