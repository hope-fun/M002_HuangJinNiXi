var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var FamilyItemVM = (function (_super) {
        __extends(FamilyItemVM, _super);
        function FamilyItemVM() {
            _super.call(this);
            this.skinName = View.FamilyItem;
        }
        var d = __define,c=FamilyItemVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            this.activeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.currentState = "active";
                _this.activeBtn.touchEnabled = false;
            }, this);
        };
        return FamilyItemVM;
    })(eui.Component);
    ViewModel.FamilyItemVM = FamilyItemVM;
    egret.registerClass(FamilyItemVM,'ViewModel.FamilyItemVM');
})(ViewModel || (ViewModel = {}));
