var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author by cai_haotian 2015.12.24.
     *
     */
    var CharMsgItemVM = (function (_super) {
        __extends(CharMsgItemVM, _super);
        function CharMsgItemVM() {
            _super.call(this);
            this.skinName = View.CharMsgItem;
            /**
             * @挚友赋值 主角的显示为false
             */
            //            this.friendDetail.visible = true;
            //            this.skillLevel.text = "第" + "二" + "重";
            //            this.skillEffect.text = "一拳致死！one punch hero";
            /**
             * @主角赋值 挚友的显示为false
             */
            //            this.zhujueDetail.visible = true;
            //            this.skillName.text = "一拳";
            //            this.skillIcon.source = "iconAtlas_json.active_skill_4";
            //            this.skillResult.text = "巴拉巴拉巴拉巴拉....";
            //            this.skillDetail.text = "持续时间：30s        冷却时间1800s";
        }
        var d = __define,c=CharMsgItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return CharMsgItemVM;
    })(eui.Component);
    ViewModel.CharMsgItemVM = CharMsgItemVM;
    egret.registerClass(CharMsgItemVM,'ViewModel.CharMsgItemVM');
})(ViewModel || (ViewModel = {}));
