var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.12.29.
     *
     */
    var AchievementVM = (function (_super) {
        __extends(AchievementVM, _super);
        function AchievementVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.AchievementView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            this.uiLayer.addChild(this);
        }
        var d = __define,c=AchievementVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return AchievementVM;
    })(eui.Component);
    ViewModel.AchievementVM = AchievementVM;
    egret.registerClass(AchievementVM,'ViewModel.AchievementVM');
})(ViewModel || (ViewModel = {}));
