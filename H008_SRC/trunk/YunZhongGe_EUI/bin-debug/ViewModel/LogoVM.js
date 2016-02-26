var ViewModel;
(function (ViewModel) {
    /**
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var LogoVM = (function (_super) {
        __extends(LogoVM, _super);
        function LogoVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = "View.LogoView";
            this.onCallBack = _onCallBack;
            this.uiLayer = _uiLayer;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=LogoVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            if (this.onCallBack != null) {
                this.onCallBack();
            }
        };
        return LogoVM;
    })(eui.Component);
    ViewModel.LogoVM = LogoVM;
    egret.registerClass(LogoVM,'ViewModel.LogoVM');
})(ViewModel || (ViewModel = {}));
