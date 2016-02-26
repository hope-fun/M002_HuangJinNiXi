var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2016.2.24.
     *
     */
    var ResetSkillVM = (function (_super) {
        __extends(ResetSkillVM, _super);
        function ResetSkillVM(_uiGroup, _onCallBack) {
            _super.call(this);
            this.skinName = "View.ResetSkillView";
            this.uiGroup = _uiGroup;
            this.onCallBack = _onCallBack;
            this.uiGroup.addChild(this);
        }
        var d = __define,c=ResetSkillVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.initBtn();
        };
        /**
         * @重置所有按钮
         */
        p.initBtn = function () {
            var _this = this;
            this.confirm.costIcon.visible = false;
            this.closeBtn.costIcon.visible = false;
            this.confirm.costNum.visible = false;
            this.closeBtn.costNum.visible = false;
            this.confirm.description.text = "是";
            this.closeBtn.description.text = "否";
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiGroup.removeChild(_this);
            }, this);
        };
        return ResetSkillVM;
    })(eui.Component);
    ViewModel.ResetSkillVM = ResetSkillVM;
    egret.registerClass(ResetSkillVM,'ViewModel.ResetSkillVM');
})(ViewModel || (ViewModel = {}));
