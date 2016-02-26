var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     * @date 2015.12.30
     *
     */
    var BtnMagicWeaponDetailVM = (function (_super) {
        __extends(BtnMagicWeaponDetailVM, _super);
        function BtnMagicWeaponDetailVM() {
            _super.call(this);
            /**
             * @按钮的文本内容
             */
            this.detailTextIn = "";
            this.skinName = View.BtnMagicWeaponDetailItem;
        }
        var d = __define,c=BtnMagicWeaponDetailVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.detailText.text = this.detailTextIn;
        };
        return BtnMagicWeaponDetailVM;
    })(eui.Button);
    ViewModel.BtnMagicWeaponDetailVM = BtnMagicWeaponDetailVM;
    egret.registerClass(BtnMagicWeaponDetailVM,'ViewModel.BtnMagicWeaponDetailVM');
})(ViewModel || (ViewModel = {}));
