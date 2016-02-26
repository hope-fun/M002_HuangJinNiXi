var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2016.1.4.
     *
     */
    var RankListVM = (function (_super) {
        __extends(RankListVM, _super);
        function RankListVM(uilayer, onCallBack) {
            var _this = this;
            _super.call(this);
            this.skinName = View.RankListView;
            this.uiLayer = uilayer;
            this.onCallBack = onCallBack;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            this.breakThroughBtn.detailTextIn = "闯关";
            this.dpsBtn.detailTextIn = "秒伤";
            this.accumulateBtn.detailTextIn = "累积充值";
            this.breakThroughBtn.currentState = "down";
            this.breakThrough.visible = true;
            //            this.btnGroup=[this.breakThroughBtn,this.dpsBtn,this.accumulateBtn];
            //            this.listGroup=[this.breakThrough,this.dps,this.accumulate];
            //仅在ECMAScript 6 支持如下写法
            //            for(let i=0;i<this.btnGroup.length;i++){
            //                this.btnGroup[i].addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            //                        this.btnGroup[i].currentState="down";
            //                        this.listGroup[i].visible=true;
            //                    },this);
            //            }
            /**
             * @闯关排名
             */
            this.breakThroughBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.breakThroughBtn.currentState = "down";
                _this.dpsBtn.currentState = "up";
                _this.accumulateBtn.currentState = "up";
                _this.breakThrough.visible = true;
                _this.dps.visible = false;
                _this.accumulate.visible = false;
            }, this);
            /**
             * @秒伤排名
             */
            this.dpsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.breakThroughBtn.currentState = "up";
                _this.dpsBtn.currentState = "down";
                _this.accumulateBtn.currentState = "up";
                _this.breakThrough.visible = false;
                _this.dps.visible = true;
                _this.accumulate.visible = false;
            }, this);
            /**
             * @充值排名
             */
            this.accumulateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.breakThroughBtn.currentState = "up";
                _this.dpsBtn.currentState = "up";
                _this.accumulateBtn.currentState = "down";
                _this.breakThrough.visible = false;
                _this.dps.visible = false;
                _this.accumulate.visible = true;
            }, this);
            this.uiLayer.addChild(this);
        }
        var d = __define,c=RankListVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return RankListVM;
    })(eui.Component);
    ViewModel.RankListVM = RankListVM;
    egret.registerClass(RankListVM,'ViewModel.RankListVM');
})(ViewModel || (ViewModel = {}));
