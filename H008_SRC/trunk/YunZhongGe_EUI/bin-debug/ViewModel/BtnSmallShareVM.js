var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author by cai_haotian 2015.12.23.
     *
     */
    var BtnSmallShareVM = (function (_super) {
        __extends(BtnSmallShareVM, _super);
        function BtnSmallShareVM() {
            _super.call(this);
            this.skinName = View.BtnSmallShareItem;
        }
        var d = __define,c=BtnSmallShareVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                var audio = new Model.AudioService("YX-002_mp3");
            }, this);
        };
        /**
         * @挚友10,100连升
         * @by cai_haotian 2016.2.25.
         */
        p.setFriendIcon = function (count, cost) {
            this.friend.visible = true;
            this.describe.text = "+" + count;
            this.costNum.text = cost;
        };
        /**
         * @主角10,100连升
         * @by cai_haotian 2016.2.25.
         */
        p.setCharIcon = function (count, cost) {
            this.zhujue.visible = true;
            this.describe.text = "+" + count;
            this.costNum.text = cost;
        };
        return BtnSmallShareVM;
    })(eui.Button);
    ViewModel.BtnSmallShareVM = BtnSmallShareVM;
    egret.registerClass(BtnSmallShareVM,'ViewModel.BtnSmallShareVM');
})(ViewModel || (ViewModel = {}));
