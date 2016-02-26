var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *
     */
    var EffectSkillVM = (function (_super) {
        __extends(EffectSkillVM, _super);
        function EffectSkillVM(_uiGroup, _onCallBack) {
            _super.call(this);
            /**
             * @回调函数
             */
            this.onCallBack = null;
            this.uiGroup = _uiGroup;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=EffectSkillVM,p=c.prototype;
        /**
         * @初始化骨骼动画.
         * @
         */
        p.initDragonBone = function (_json, _png, _skeleton, _playTimes) {
            if (_playTimes === void 0) { _playTimes = 1; }
            var factory = new dragonBones.EgretFactory(); //创建一个工厂,用来创建Armature.
            var skeletonData = RES.getRes(_skeleton); //获取动画数据.
            var textureData = RES.getRes(_json); //获取纹理集数据.
            var texture = RES.getRes(_png); //获取纹理集图片.
            factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData)); //创建一个工厂,用来创建Armature.
            factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData)); //把纹理集数据和图片添加到工厂里.
            this.armatureName = skeletonData.armature[0].name; //获取Armature的名字,dragonBones4.0的数据可以包含多个骨架,这里取第一个Armature.
            this.armature = factory.buildArmature(this.armatureName); //从工厂里创建出Armature.
            var armatureDisplay = this.armature.display; //获取装载Armature的容器.
            armatureDisplay.x = 300; //位置居中.
            armatureDisplay.y = 450;
            this.uiGroup.addChild(armatureDisplay); //把它添加到舞台上.
            this.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimationEvent, this); //this传谁，监听方法就监听谁.
            //            this.armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE,this.onAnimationEvent,this);
            this.curAnimationName = this.armature.animation.animationList[0]; //取得这个Armature动画列表中的第一个动画的名字
            this.animation = this.armature.animation;
            dragonBones.WorldClock.clock.add(this.armature); //把Armature添加到心跳时钟里
            //by cai_haotian 2016.2.18.          
            this.armature.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, function (evt) {
                Main.singleton.mainGameVM.enemyHit();
            }, this);
            this.animation.gotoAndPlay(this.curAnimationName, 0, -1, _playTimes); //gotoAndPlay的用法：动画播放，播放一遍
            return this.armature;
        };
        //        /**
        //         * @如果点击了就重置播放.
        //         */ 
        //        public resetPlay(){
        //            this.animation.gotoAndPlay(this.curAnimationName,0,-1,1); //gotoAndPlay的用法：动画播放，播放一遍
        //        }
        /**
         * @动画监听事件.
         */
        p.onAnimationEvent = function (evt) {
            if (this.onCallBack)
                this.onCallBack();
            switch (evt.type) {
                case dragonBones.AnimationEvent.START:
                    break;
                case dragonBones.AnimationEvent.LOOP_COMPLETE:
                    console.log("zhujun: LOOP_COMPLETE ! ");
                    break;
                case dragonBones.AnimationEvent.COMPLETE:
                    //动画完成后销毁这个armature
                    console.log("zhujun: evt armature display " + this.armature.display);
                    this.uiGroup.removeChild(evt.armature.display); //因为有可能在连续点击时候已经被强制销毁,所以要做容错.
                    dragonBones.WorldClock.clock.remove(evt.armature);
                    evt.armature.dispose();
                    console.log("zhujun: dragonBones.WorldClock.clock.remove ! ");
                    break;
            }
        };
        return EffectSkillVM;
    })(eui.Component);
    ViewModel.EffectSkillVM = EffectSkillVM;
    egret.registerClass(EffectSkillVM,'ViewModel.EffectSkillVM');
})(ViewModel || (ViewModel = {}));
