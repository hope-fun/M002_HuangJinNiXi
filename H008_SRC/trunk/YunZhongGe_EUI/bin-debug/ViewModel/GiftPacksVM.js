var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.12.29.
     *
     */
    var GiftPacksVM = (function (_super) {
        __extends(GiftPacksVM, _super);
        function GiftPacksVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = "View.GiftPacksView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.buyBtn.btnTextIn = "￥ 9";
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            this.uiLayer.addChild(this);
        }
        var d = __define,c=GiftPacksVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                var audio = new Model.AudioService("YX-001_mp3");
            }, this);
        };
        return GiftPacksVM;
    })(eui.Component);
    ViewModel.GiftPacksVM = GiftPacksVM;
    egret.registerClass(GiftPacksVM,'ViewModel.GiftPacksVM');
})(ViewModel || (ViewModel = {}));
