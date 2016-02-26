var ViewModel;
(function (ViewModel) {
    /**
     * @author: fangchao
     * @revise: zhu_jun
     * @date: 2016.01.07.
     */
    var HeroItemVM = (function (_super) {
        __extends(HeroItemVM, _super);
        /**
         * @英雄攻击、待机动画播放.
         * @param: _uiGroup父节点.
         * @param: _name测试角色名,仅供测试时使用.
         */
        function HeroItemVM(_uiGroup) {
            _super.call(this);
            /**
             * @回调方法.
             */
            this.onCallBack = null;
            /**
             * @序列帧对象.
             */
            this.movieClip = null;
            this.uiGroup = _uiGroup;
        }
        var d = __define,c=HeroItemVM,p=c.prototype;
        /**
         * @初始化并播放特效.
         */
        p.initMovieClip = function (_json, _png, _mcName, _playTimes, _onCallBack) {
            if (_playTimes === void 0) { _playTimes = -1; }
            this.onCallBack = _onCallBack;
            var mcData = new egret.MovieClipDataFactory(RES.getRes(_json), RES.getRes(_png));
            this.movieClip = new egret.MovieClip(mcData.generateMovieClipData(_mcName));
            this.movieClip.addEventListener(egret.Event.COMPLETE, this.onEvent, this);
            this.uiGroup.addChild(this.movieClip);
            this.movieClip.play(_playTimes);
            return this.movieClip;
        };
        p.onEvent = function (evt) {
            if (this.onCallBack)
                this.onCallBack(); //循环动画没传方法,所以不会进这里.
            //            Model.console.log("zhujun: 循环动画没传方法,所以不会进这里. movie clip is " + this.movieClip);
            //            if(this.movieClip) this.uiGroup.removeChild(this.movieClip);//因为有可能在连续点击时候已经被强制销毁,所以要做容错.
            //            console.log("zhujun : mc play finish ! " + _mcName);
        };
        /**
         * @切换正在播放的MovieClip.
         * @1.不重复添加点击方法.
         * @2.不重复往场景上添加.
         * @敌人切换时使用.
         */
        p.changeMovieClip = function (_json, _png, _mcName, _playTimes, _onCallBack) {
            if (_playTimes === void 0) { _playTimes = -1; }
            console.log("zhujun: json " + _json + " _png " + _png + " _mcName " + _mcName);
            this.onCallBack = _onCallBack;
            if (this.movieClip) {
                console.log("zhujun: 切换正在播放的动画 !  ");
                this.movieClip.stop();
                var mcData = new egret.MovieClipDataFactory(RES.getRes(_json), RES.getRes(_png));
                this.movieClip.movieClipData = mcData.generateMovieClipData(_mcName);
                this.movieClip.play(_playTimes);
                return this.movieClip;
            }
            else {
                console.log("zhujun: movie clip change failed !　");
                return this.movieClip;
            }
        };
        return HeroItemVM;
    })(eui.Component);
    ViewModel.HeroItemVM = HeroItemVM;
    egret.registerClass(HeroItemVM,'ViewModel.HeroItemVM');
})(ViewModel || (ViewModel = {}));
