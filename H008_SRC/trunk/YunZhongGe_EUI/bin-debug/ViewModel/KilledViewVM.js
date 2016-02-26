var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var KilledViewVM = (function (_super) {
        __extends(KilledViewVM, _super);
        function KilledViewVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
            this.skinName = View.KilledView;
            //            this.commit.unlock.visible=true;
            //            this.commit.costIcon.visible=false;
            //            this.commit.costNum.visible=false;
            //            this.commit.describe.text="现在复活！";
            this.CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        }
        var d = __define,c=KilledViewVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return KilledViewVM;
    })(eui.Component);
    ViewModel.KilledViewVM = KilledViewVM;
    egret.registerClass(KilledViewVM,'ViewModel.KilledViewVM');
})(ViewModel || (ViewModel = {}));
