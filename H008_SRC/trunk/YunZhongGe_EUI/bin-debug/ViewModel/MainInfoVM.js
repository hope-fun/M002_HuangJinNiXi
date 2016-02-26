var ViewModel;
(function (ViewModel) {
    /**
     * @author cai_haotian
     * @date 2015.12.28.
     */
    var MainInfoVM = (function (_super) {
        __extends(MainInfoVM, _super);
        function MainInfoVM(_uiLayer, _onCallBack) {
            _super.call(this);
            /**
             * @主信息数据.
             */
            this.mData = null;
            /**
             * @点击伤害
             * @by cai_haotian 2016.2.23.
             */
            this.clickDamge = 0;
            this.skinName = View.MainInfoView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=MainInfoVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        /**
         * @设置主信息数据,并初始化.
         * @by cai_haotian 2016.2.23
         */
        p.setMIData = function (_clickDamge) {
            if (_clickDamge === void 0) { _clickDamge = 0; }
            this.clickDamge += _clickDamge;
            this.currentDps.text = Model.MainInfoLocalService.toUnitConversion(Model.PlayerLocalService.PlayerData.dy.friendDamage + this.clickDamge); //_mData.getCurrentDps;
            this.tapDps.text = Model.PlayerLocalService.PlayerData.ClickDamageAndUnit; //_mData.getTapDps;
            this.friendDps.text = Model.PlayerLocalService.PlayerData.FriendDamageUnit; //_mData.getFriendDps;
        };
        /**
         * @设置主角6个技能
         * @by cai_haotian 2016.2.1.
         */
        p.setSkillItem = function (_data) {
            var skillItem;
            for (var i = 0; i < _data.length; i++) {
                skillItem = this.skillGroup.getChildAt(i);
                //                skillItem.onCallBack = (item: ViewModel.BtnActiveSkillVM,_data: Model.PlayerSkillData) => {
                //                    var mc:egret.MovieClip;
                //                    var mcItem: ViewModel.HeroItemVM;
                //                    var armature: dragonBones.Armature;
                //                    var duringTime = _data.st.continueTime
                //                    
                //                    //技能1的时候方法
                //                    var skillOncAnimate = () => {
                //                        mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeFrontSkill);//TODO:不能往技能特效group里面加.
                //                        mc = mcItem.initMovieClip("Tx_zhujue_0" + _data.st.id + "_json","Tx_zhujue_0" + _data.st.id + "_png","Tx_zhujue_0" + _data.st.id,1,() => {
                //                            Main.singleton.mainGameVM.yungeFrontSkill.removeChild(mcItem.movieClip);
                //                        });
                //                        duringTime = 0;
                //                        var audio: Model.AudioService = new Model.AudioService("YX-007_mp3");
                //                    };
                //                    
                //                    //敌人被攻击
                //                    var enemyHit = () => {
                //                        Main.singleton.mainGameVM.enemyHit();
                //                    }
                //                    
                //                    item.touchEnabled = false;
                //                    item.currentState = "during";
                //                    item.counterCD.text = this.timeDes(duringTime);
                //
                //                    //技能特效
                //                    switch(_data.st.id){
                //                        case "1":
                //                            //技能1 是单次点击后直接播放 并且开始计时cd
                //                            //给主游戏添加点击动画 
                //                            Main.singleton.mainGameVM.clickBtn.once(egret.TouchEvent.TOUCH_TAP,skillOncAnimate,this);
                //                        break;
                //                        case "2":
                //                            mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeFrontSkill);
                //                            mc = mcItem.initMovieClip("Tx_zhujue_0" + _data.st.id + "_json","Tx_zhujue_0" + _data.st.id + "_png","Tx_zhujue_0" + _data.st.id,-1,() => { });
                //                            mc.addEventListener(egret.Event.LOOP_COMPLETE,enemyHit,this);
                //                            break;
                //                        case "3":
                //                            mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeFrontSkill);
                //                            mc = mcItem.initMovieClip("Tx_zhujue_0" + _data.st.id + "_json","Tx_zhujue_0" + _data.st.id + "_png","Tx_zhujue_0" + _data.st.id,-1,() => { });
                //                            break;
                //                        case "4":
                //                            //龙骨动画
                //                            this.bufferAnimel(Main.singleton.mainGameVM.yungeFrontSkill,()=>{
                //                                var factory = Model.DragonBones.addArmatureToFactory("Tx_zhujue_04_json","texture_json","texture_png");
                //                                armature = Model.DragonBones.buildArmature(factory,"Tx_zhujue_04");
                //                                Model.DragonBones.play(Main.singleton.mainGameVM.yungeSkill1,armature,"Tx_zhujue_04",275,450);
                //                            });
                //                        break;
                //                        case "5": 
                //                            this.bufferAnimel(Main.singleton.mainGameVM.yungeFrontSkill,()=>{
                //                                mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeSkill0);
                //                                mc = mcItem.initMovieClip("Tx_zhujue_0" + _data.st.id + "_json","Tx_zhujue_0" + _data.st.id + "_png","Tx_zhujue_0" + _data.st.id,-1,() => { });
                //                            });
                //                        break;
                //                        case "6": 
                //                            //最后一个特效为粒子特效
                //                            var texture = RES.getRes("Tx_zhujue_06_2_png");
                //                            var config = RES.getRes("Tx_zhujue_06_2_json");
                //                            this.system = new particle.GravityParticleSystem(texture,config);
                //                            Main.singleton.mainGameVM.yungeFrontSkill.addChild(this.system);
                //                            this.system.x = 280;
                //                            this.system.y = 290;
                //                            this.system.start();
                //                        break;
                //                        default: 
                //                            alert("主角技能使用出错！请联系管理员！！");
                //                    }
                //                    
                //                    //持续时间
                //                    var during = egret.setInterval(() => {
                //                        item.counterCD.text = this.timeDes(--duringTime);
                //                        if(duringTime <= 0) {
                //                            egret.clearInterval(during);
                //                            item.touchEnabled=true;
                //                            
                //                            //增加重置技能cd事件
                //                            item.removeEventListener(egret.TouchEvent.TOUCH_TAP,item.useSkill,this);
                //                            item.addEventListener(egret.TouchEvent.TOUCH_TAP,this.resetCD,this);
                //                            
                //                            switch(_data.st.id) {
                //                                case "1":
                //                                    //移除技能1的监听事件
                //                                    Main.singleton.mainGameVM.clickBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,skillOncAnimate,this);
                //                                    break;
                //                                case "2": 
                //                                    Main.singleton.mainGameVM.yungeFrontSkill.removeChild(mc);
                //                                    mc.removeEventListener(egret.Event.LOOP_COMPLETE,enemyHit,this);
                //                                    break;
                //                                case "3":
                //                                    Main.singleton.mainGameVM.yungeFrontSkill.removeChild(mc);
                //                                    break;
                //                                case "4":
                //                                    //骨骼动画特效移除
                //                                    Main.singleton.mainGameVM.yungeSkill1.removeChild(armature.display);
                //                                    break;
                //                                case"5":
                //                                    //此层级在后面
                //                                    Main.singleton.mainGameVM.yungeSkill0.removeChild(mc)
                //                                    break;
                //                                case "6": 
                //                                    //粒子动画特效移除
                //                                    Main.singleton.mainGameVM.yungeFrontSkill.removeChild(this.system);
                //                                    break;
                //                                default:
                //                                    alert("主角技能使用出错！请联系管理员！！");
                //                            }
                //                            
                //                            item.currentState = "disabled";
                //                            var cdTime = _data.st.cdTime;
                //                            item.counterCD.text = this.timeDes(cdTime);
                //                            //cd时间
                //                            var cd = egret.setInterval(() => {
                //                                item.counterCD.text = this.timeDes(--cdTime);
                //                                if(cdTime==0){
                //                                    item.currentState="enabled"
                //                                    item.touchEnabled=true;
                //                                    egret.clearInterval(cd);
                //                                    
                //                                    //重新添加技能点击事件
                //                                    item.addEventListener(egret.TouchEvent.TOUCH_TAP,item.useSkill,this);
                //                                    item.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.resetCD,this);
                //                                }
                //                            },this,1000);
                //                        }
                //                    },this,1000);
                //                }
                //初始化技能
                skillItem.initSkill(_data[i]);
            }
        };
        /**
         * @时间描述方法
         * @by cai_haotian 2016.2.1.
         */
        p.timeDes = function (time) {
            var min = Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60);
            var second = time % 60 < 10 ? "0" + time % 60 : time % 60;
            return min + ":" + second;
        };
        /**
         * @缓冲动画
         * @by cai_haotian 2016.2.19.
         */
        p.bufferAnimel = function (_uiGroup, _onCallback) {
            var bufferFactory = Model.DragonBones.addArmatureToFactory("Tx_zhujue_hc0405_json", "Tx_zhujue_hc0405_texture_json", "Tx_zhujue_hc0405_texture_png");
            var bufferArmature = Model.DragonBones.buildArmature(bufferFactory, "Tx_zhujue_hc0405");
            Model.DragonBones.play(_uiGroup, bufferArmature, "Tx_zhujue_hc0405", 275, 450, 1);
            bufferArmature.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, function (evt) {
                _uiGroup.removeChild(bufferArmature.display);
                _onCallback();
            }, this);
        };
        /**
         * @重置技能cd
         */
        p.resetCD = function () {
            var resetCD = new ViewModel.ResetSkillVM(Main.singleton, function () { });
        };
        return MainInfoVM;
    })(eui.Component);
    ViewModel.MainInfoVM = MainInfoVM;
    egret.registerClass(MainInfoVM,'ViewModel.MainInfoVM');
})(ViewModel || (ViewModel = {}));
