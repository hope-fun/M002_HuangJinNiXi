var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *@by cai_haotian 2016.2.1
     */
    var BtnActiveSkillVM = (function (_super) {
        __extends(BtnActiveSkillVM, _super);
        function BtnActiveSkillVM(_skillNum, _onCallBack) {
            _super.call(this);
            /**
             * @技能冷却时间
             */
            this.time = 100;
            this.skinName = View.BtnActiveSkillView;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=BtnActiveSkillVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        /**
         * @设置技能初始数据
         */
        p.initSkill = function (_data) {
            this.skillData = _data;
            //这里应该是判断技能是否达到可以显示状态 目前为了方便测试写的<=应该是写>=
            if (Model.WebValue.dataDyModel.playerModel.level <= _data.st.openLevel) {
                this.currentState = "enabled";
                this.touchEnabled = true;
            }
            else {
                this.currentState = "locked";
                this.touchEnabled = false;
            }
            this.skillIcon.source = _data.st.icon;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useSkill, this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                var audio = new Model.AudioService("YX-001_mp3");
            }, this);
        };
        /**
         * @回调方法
         */
        p.useSkill = function () {
            var _this = this;
            var mc;
            var mcItem;
            var armature;
            var duringTime = this.skillData.st.continueTime;
            //技能1的时候方法
            var skillOncAnimate = function () {
                mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeFrontSkill); //TODO:不能往技能特效group里面加.
                mc = mcItem.initMovieClip("Tx_zhujue_0" + _this.skillData.st.id + "_json", "Tx_zhujue_0" + _this.skillData.st.id + "_png", "Tx_zhujue_0" + _this.skillData.st.id, 1, function () {
                    Main.singleton.mainGameVM.yungeFrontSkill.removeChild(mcItem.movieClip);
                });
                duringTime = 0;
                var audio = new Model.AudioService("YX-007_mp3");
            };
            //敌人被攻击
            var enemyHit = function () {
                Main.singleton.mainGameVM.enemyHit();
            };
            this.touchEnabled = false;
            this.currentState = "during";
            this.counterCD.text = this.timeDes(duringTime);
            //技能特效
            switch (this.skillData.st.id) {
                case "1":
                    //技能1 是单次点击后直接播放 并且开始计时cd
                    //给主游戏添加点击动画 
                    Main.singleton.mainGameVM.clickBtn.once(egret.TouchEvent.TOUCH_TAP, skillOncAnimate, this);
                    break;
                case "2":
                    mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeFrontSkill);
                    mc = mcItem.initMovieClip("Tx_zhujue_0" + this.skillData.st.id + "_json", "Tx_zhujue_0" + this.skillData.st.id + "_png", "Tx_zhujue_0" + this.skillData.st.id, -1, function () { });
                    mc.addEventListener(egret.Event.LOOP_COMPLETE, enemyHit, this);
                    break;
                case "3":
                    mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeFrontSkill);
                    mc = mcItem.initMovieClip("Tx_zhujue_0" + this.skillData.st.id + "_json", "Tx_zhujue_0" + this.skillData.st.id + "_png", "Tx_zhujue_0" + this.skillData.st.id, -1, function () { });
                    break;
                case "4":
                    //龙骨动画
                    this.bufferAnimel(Main.singleton.mainGameVM.yungeFrontSkill, function () {
                        var factory = Model.DragonBones.addArmatureToFactory("Tx_zhujue_04_json", "texture_json", "texture_png");
                        armature = Model.DragonBones.buildArmature(factory, "Tx_zhujue_04");
                        Model.DragonBones.play(Main.singleton.mainGameVM.yungeSkill1, armature, "Tx_zhujue_04", 275, 450);
                    });
                    break;
                case "5":
                    this.bufferAnimel(Main.singleton.mainGameVM.yungeFrontSkill, function () {
                        mcItem = new ViewModel.HeroItemVM(Main.singleton.mainGameVM.yungeSkill0);
                        mc = mcItem.initMovieClip("Tx_zhujue_0" + _this.skillData.st.id + "_json", "Tx_zhujue_0" + _this.skillData.st.id + "_png", "Tx_zhujue_0" + _this.skillData.st.id, -1, function () { });
                    });
                    break;
                case "6":
                    //最后一个特效为粒子特效
                    var texture = RES.getRes("Tx_zhujue_06_2_png");
                    var config = RES.getRes("Tx_zhujue_06_2_json");
                    this.system = new particle.GravityParticleSystem(texture, config);
                    Main.singleton.mainGameVM.yungeFrontSkill.addChild(this.system);
                    this.system.x = 280;
                    this.system.y = 290;
                    this.system.start();
                    break;
                default:
                    alert("主角技能使用出错！请联系管理员！！");
            }
            //持续时间
            var during = egret.setInterval(function () {
                _this.counterCD.text = _this.timeDes(--duringTime);
                if (duringTime <= 0) {
                    egret.clearInterval(during);
                    _this.touchEnabled = true;
                    //增加重置技能cd事件
                    _this.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.useSkill, _this);
                    _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.resetCD, _this);
                    switch (_this.skillData.st.id) {
                        case "1":
                            //移除技能1的监听事件
                            Main.singleton.mainGameVM.clickBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, skillOncAnimate, _this);
                            break;
                        case "2":
                            Main.singleton.mainGameVM.yungeFrontSkill.removeChild(mc);
                            mc.removeEventListener(egret.Event.LOOP_COMPLETE, enemyHit, _this);
                            break;
                        case "3":
                            Main.singleton.mainGameVM.yungeFrontSkill.removeChild(mc);
                            break;
                        case "4":
                            //骨骼动画特效移除
                            Main.singleton.mainGameVM.yungeSkill1.removeChild(armature.display);
                            break;
                        case "5":
                            //此层级在后面
                            Main.singleton.mainGameVM.yungeSkill0.removeChild(mc);
                            break;
                        case "6":
                            //粒子动画特效移除
                            Main.singleton.mainGameVM.yungeFrontSkill.removeChild(_this.system);
                            break;
                        default:
                            alert("主角技能使用出错！请联系管理员！！");
                    }
                    _this.currentState = "disabled";
                    var cdTime = _this.skillData.st.cdTime;
                    _this.counterCD.text = _this.timeDes(cdTime);
                    //cd时间
                    var cd = egret.setInterval(function () {
                        _this.counterCD.text = _this.timeDes(--cdTime);
                        if (cdTime == 0) {
                            _this.currentState = "enabled";
                            _this.touchEnabled = true;
                            egret.clearInterval(cd);
                            //重新添加技能点击事件
                            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.useSkill, _this);
                            _this.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.resetCD, _this);
                        }
                    }, _this, 1000);
                }
            }, this, 1000);
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
         * @by cai_haotian 2016.2.24.
         */
        p.resetCD = function () {
            var resetCD = new ViewModel.ResetSkillVM(Main.singleton, function () { });
        };
        return BtnActiveSkillVM;
    })(eui.Button);
    ViewModel.BtnActiveSkillVM = BtnActiveSkillVM;
    egret.registerClass(BtnActiveSkillVM,'ViewModel.BtnActiveSkillVM');
})(ViewModel || (ViewModel = {}));
