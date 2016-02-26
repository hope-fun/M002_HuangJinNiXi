var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2016.1.18.
     *
     */
    var DailChallenge = (function (_super) {
        __extends(DailChallenge, _super);
        function DailChallenge(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.DailyRechargeView;
            this.uiLayer = _uiLayer;
            this.uiLayer.addChild(this);
            this.onCallBack = _onCallBack;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        }
        var d = __define,c=DailChallenge,p=c.prototype;
        return DailChallenge;
    })(eui.Component);
    egret.registerClass(DailChallenge,'DailChallenge');
})(ViewModel || (ViewModel = {}));
