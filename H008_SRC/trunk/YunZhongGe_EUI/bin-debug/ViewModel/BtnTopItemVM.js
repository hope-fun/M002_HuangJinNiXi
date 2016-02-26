var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var BtnTopItemVM = (function (_super) {
        __extends(BtnTopItemVM, _super);
        function BtnTopItemVM(_onCallBack) {
            _super.call(this);
            /**
             * @在exml里面给btnIcon字段赋值.
             */
            this.btnIconSource = "";
            this.skinName = "View.BtnTopItem";
            this.onCallBack = _onCallBack;
            //            this.setSkinPart("btnIconSource",this.btnIconSource);
        }
        var d = __define,c=BtnTopItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.btnIcon.source = this.btnIconSource;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                var audio = new Model.AudioService("YX-001_mp3");
            }, this);
        };
        return BtnTopItemVM;
    })(eui.Button);
    ViewModel.BtnTopItemVM = BtnTopItemVM;
    egret.registerClass(BtnTopItemVM,'ViewModel.BtnTopItemVM');
})(ViewModel || (ViewModel = {}));
