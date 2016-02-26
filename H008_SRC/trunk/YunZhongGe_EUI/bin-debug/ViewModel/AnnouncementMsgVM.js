var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2016.1.18.
     *
     */
    var AnnouncementMsgVM = (function (_super) {
        __extends(AnnouncementMsgVM, _super);
        function AnnouncementMsgVM(_uiLayer, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.AnnouncementMsg;
            this.uiLayer = _uiLayer;
            this.uiLayer.addChild(this);
            this.onCallBack = _onCallBack;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        }
        var d = __define,c=AnnouncementMsgVM,p=c.prototype;
        /**
         * @设置信息
         */
        p.setInfo = function () {
            this.noticeInfoTitle0.text = "一、狂欢大礼包";
            this.activeTime0.text = "活动时间：";
            this.activeDetail0.text = "活动内容：";
            this.noticeInfoTitle1.text = "二、抽卡活动";
            this.activeTime1.text = "活动时间：";
            this.activeDetail1.text = "活动内容";
        };
        return AnnouncementMsgVM;
    })(eui.Component);
    ViewModel.AnnouncementMsgVM = AnnouncementMsgVM;
    egret.registerClass(AnnouncementMsgVM,'ViewModel.AnnouncementMsgVM');
})(ViewModel || (ViewModel = {}));
