var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.12.24.
     *
     */
    var CloseBtnVM = (function (_super) {
        __extends(CloseBtnVM, _super);
        function CloseBtnVM() {
            _super.call(this);
            /**
             * @按钮图片路径 默认是关闭按钮
             */
            this.btnImgSource = "icon_guanbi";
            this.skinName = View.CloseBtn;
        }
        var d = __define,c=CloseBtnVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.btnImg.source = this.btnImgSource;
        };
        return CloseBtnVM;
    })(eui.Button);
    ViewModel.CloseBtnVM = CloseBtnVM;
    egret.registerClass(CloseBtnVM,'ViewModel.CloseBtnVM');
})(ViewModel || (ViewModel = {}));
