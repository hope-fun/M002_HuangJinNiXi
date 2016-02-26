var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var TestVM = (function (_super) {
        __extends(TestVM, _super);
        function TestVM() {
            _super.call(this);
            this.skinName = View.TestView;
        }
        var d = __define,c=TestVM,p=c.prototype;
        return TestVM;
    })(eui.Component);
    ViewModel.TestVM = TestVM;
    egret.registerClass(TestVM,'ViewModel.TestVM');
})(ViewModel || (ViewModel = {}));
