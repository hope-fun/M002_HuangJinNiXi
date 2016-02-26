var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var BtnBottomItemVM = (function (_super) {
        __extends(BtnBottomItemVM, _super);
        function BtnBottomItemVM(_onCallBack) {
            _super.call(this);
            /**
             * @在exml里面给btnWord_up状态赋值.
             */
            this.btnWordSource = "";
            /**
             * @在exml里面给btnWord_down状态赋值.
             */
            this.btnWordSourceDown = "";
            this.skinName = "View.BtnBottomItem";
            this.onCallBack = _onCallBack;
            this.setSkinPart("btnWordSource", this.btnWordSource);
            this.setSkinPart("btnWordSourceDown", this.btnWordSourceDown);
        }
        var d = __define,c=BtnBottomItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.btnWord.source = this.btnWordSource;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                var audio = new Model.AudioService("YX-002_mp3");
            }, this);
        };
        /**
         * @控件状态监听.
         */
        p.getCurrentState = function () {
            if (_super.prototype.getCurrentState.call(this) == "down") {
                this.btnWord.source = this.btnWordSourceDown;
            }
            else {
                this.btnWord.source = this.btnWordSource;
            }
            return _super.prototype.getCurrentState.call(this);
        };
        return BtnBottomItemVM;
    })(eui.Button);
    ViewModel.BtnBottomItemVM = BtnBottomItemVM;
    egret.registerClass(BtnBottomItemVM,'ViewModel.BtnBottomItemVM');
})(ViewModel || (ViewModel = {}));
