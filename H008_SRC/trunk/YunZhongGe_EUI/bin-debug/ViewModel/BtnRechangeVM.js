var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     * @date 2015.12.29
     *
     */
    var BtnRechargeVM = (function (_super) {
        __extends(BtnRechargeVM, _super);
        function BtnRechargeVM() {
            _super.call(this);
            /**
             * @按钮的文本内容
             */
            this.btnTextIn = "";
            this.skinName = View.BtnRechargeView;
        }
        var d = __define,c=BtnRechargeVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.btnText.text = this.btnTextIn;
        };
        return BtnRechargeVM;
    })(eui.Button);
    ViewModel.BtnRechargeVM = BtnRechargeVM;
    egret.registerClass(BtnRechargeVM,'ViewModel.BtnRechargeVM');
})(ViewModel || (ViewModel = {}));
