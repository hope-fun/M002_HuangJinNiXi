var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *
     */
    var FightSceneVM = (function (_super) {
        __extends(FightSceneVM, _super);
        function FightSceneVM(_uiLayer, _onCallBack) {
            _super.call(this);
            //            this.baihe=new ViewModel.HeroItemVM("baihe");
            //            this.bingyi = new ViewModel.HeroItemVM("bingyi");
            //            
            //            this.liufuling = new ViewModel.HeroItemVM("liufuling",true);
            //            this.mengjue = new ViewModel.HeroItemVM("mengjue",true);
            //            this.xupingjun = new ViewModel.HeroItemVM("xupingjun",true);
            //            this.yunge = new ViewModel.HeroItemVM("yunge",true);
            //            
            //            
            //            this.monster_001 = new ViewModel.HeroItemVM("monster_001",false,true);
            //            this.baihe.x = -40;
            //            this.baihe.y = 50;
            //            this.bingyi.x = -116;
            //            this.bingyi.y = -40;
            //            this.liufuling.x = -116;
            //            this.liufuling.y = 80;
            //            this.mengjue.x = -200;
            //            this.mengjue.y = -61;
            //            this.xupingjun.x = -200;
            //            this.xupingjun.y = 70;
            //            this.yunge.x = -200;
            //            this.yunge.y = 190;
            //            this.monster_001.x = 250;
            //            this.monster_001.y = 30;
            //            this.addChild(this.baihe);
            //            this.addChild(this.bingyi);
            //            this.addChild(this.liufuling);
            //            this.addChild(this.mengjue);
            //            this.addChild(this.xupingjun);
            //            this.addChild(this.yunge);
            //            this.addChild(this.monster_001);
            //获取纹理
            var texture = RES.getRes("tx_shengji_01_particle_png");
            //获取配置
            var config = RES.getRes("tx_shengji_01_particle_json");
            //创建 GravityParticleSystem
            this.system = new particle.GravityParticleSystem(texture, config);
            //启动粒子库
            this.system.start();
            this.system.x = 400;
            this.system.y = 400;
            //将例子系统添加到舞台
            var rotation = 0;
            setInterval(function () {
            }, 2000);
            var skeletonData = RES.getRes("texture_shengji_01_dragonBone_texiao");
            //获取纹理集数据
            var textureData = RES.getRes("texture_shengji_01_dragonBone_json");
            //获取纹理集图片
            var texture = RES.getRes("texture_shengji_01_dragonBone_png");
            //创建一个工厂，用来创建Armature
            var factory = new dragonBones.EgretFactory();
            //把动画数据添加到工厂里
            factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
            //把纹理集数据和图片添加到工厂里
            factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
            //获取Armature的名字，dragonBones4.0的数据可以包含多个骨架，这里取第一个Armature
            var armatureName = skeletonData.armature[0].name;
            //从工厂里创建出Armature
            var armature = factory.buildArmature(armatureName);
            //获取装载Armature的容器
            var armatureDisplay = armature.display;
            armatureDisplay.x = 400;
            armatureDisplay.y = 400;
            //把它添加到舞台上
            this.addChild(armatureDisplay);
            //取得这个Armature动画列表中的第一个动画的名字
            var curAnimationName = armature.animation.animationList[0];
            var animation = armature.animation;
            //gotoAndPlay的用法：动画播放，播放一遍
            animation.gotoAndPlay(curAnimationName, 0, -1, 0);
            //把Armature添加到心跳时钟里
            dragonBones.WorldClock.clock.add(armature);
            this.addChild(this.system);
            //心跳时钟开启
            egret.Ticker.getInstance().register(function (advancedTime) {
                dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            }, this);
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.skinName = View.FightSceneView;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=FightSceneVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return FightSceneVM;
    })(eui.Component);
    ViewModel.FightSceneVM = FightSceneVM;
    egret.registerClass(FightSceneVM,'ViewModel.FightSceneVM');
})(ViewModel || (ViewModel = {}));
