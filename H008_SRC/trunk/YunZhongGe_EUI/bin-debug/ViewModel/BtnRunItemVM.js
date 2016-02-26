var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     *
     */
    var BtnRunItemVM = (function (_super) {
        __extends(BtnRunItemVM, _super);
        function BtnRunItemVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.skinName = View.BtnRunItem;
        }
        var d = __define,c=BtnRunItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return BtnRunItemVM;
    })(eui.ToggleButton);
    ViewModel.BtnRunItemVM = BtnRunItemVM;
    egret.registerClass(BtnRunItemVM,'ViewModel.BtnRunItemVM');
})(ViewModel || (ViewModel = {}));
