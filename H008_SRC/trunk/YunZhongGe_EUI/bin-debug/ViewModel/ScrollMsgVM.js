var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var ScrollMsgVM = (function (_super) {
        __extends(ScrollMsgVM, _super);
        function ScrollMsgVM(uiLayer, onCallBack, roundName) {
            _super.call(this);
            this.skinName = View.ScrollMsg;
            this.roundName.text = roundName;
            this.uiLayer = uiLayer;
            this.onCallBack = onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=ScrollMsgVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.initScroll();
        };
        /**
         * @卷轴初始化
         * @by cai_haotian 2016.2.3.
         */
        p.initScroll = function () {
            var _this = this;
            egret.Tween.get(this.scrollBar).to({ width: 276 }, 500).call(function () {
                egret.Tween.get(_this.roundName).to({ alpha: 1 }, 100).call(function () {
                    egret.setTimeout(function () {
                        _this.uiLayer.removeChild(_this);
                    }, _this, 800);
                });
            });
        };
        return ScrollMsgVM;
    })(eui.Component);
    ViewModel.ScrollMsgVM = ScrollMsgVM;
    egret.registerClass(ScrollMsgVM,'ViewModel.ScrollMsgVM');
})(ViewModel || (ViewModel = {}));
