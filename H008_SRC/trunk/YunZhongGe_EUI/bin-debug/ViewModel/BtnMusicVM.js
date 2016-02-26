var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     * @date 2015.12.30
     *
     */
    var BtnMusicVM = (function (_super) {
        __extends(BtnMusicVM, _super);
        function BtnMusicVM() {
            var _this = this;
            _super.call(this);
            this.skinName = View.BtnMusicView;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (_this.currentState === "up") {
                    _this.currentState = "down";
                }
                else {
                    _this.currentState = "up";
                }
            }, this);
        }
        var d = __define,c=BtnMusicVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return BtnMusicVM;
    })(eui.Button);
    ViewModel.BtnMusicVM = BtnMusicVM;
    egret.registerClass(BtnMusicVM,'ViewModel.BtnMusicVM');
})(ViewModel || (ViewModel = {}));
