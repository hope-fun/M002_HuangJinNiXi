var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    (function (Camp) {
        Camp[Camp["Player"] = 0] = "Player";
        Camp[Camp["Opponent"] = 1] = "Opponent";
    })(ViewModel.Camp || (ViewModel.Camp = {}));
    var Camp = ViewModel.Camp;
    var MainGameVM = (function (_super) {
        __extends(MainGameVM, _super);
        function MainGameVM(_uiLayer, _onCallBack) {
            _super.call(this);
            /**
             * @敌人待机对象.
             */
            this.enemy = null;
            /**
             * @敌人受击动画.
             */
            //        private enemyHit:HeroItemVM=null;
            /**
             * @敌人数据列表.
             */
            this.enemyList = new Array();
            /**
             * @场景数据.
             */
            this.sceneData = null;
            this.skinName = View.MainGameView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=MainGameVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            var audio = new Model.AudioService("bgm-003_mp3", function () { }, -1);
            egret.Ticker.getInstance().register(function (advanceTime) {
                dragonBones.WorldClock.clock.advanceTime(advanceTime / 1000);
            }, this);
            this.initSceneInfo();
            this.initPlayer();
            this.initFriend();
            this.initEnemy();
            this.onDpsEvent();
            this.shockTool = new Model.ShockTools();
            this.clickBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        };
        /**
         * @初始化场景信息界面.
         */
        p.initSceneInfo = function () {
            //获取场景数据.
            this.sceneData = Model.SceneLocalService.sceneData;
            this.sceneInfo.giftBag.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能2016.1.8.之后开发!");
            }, this);
        };
        /**
         * @点击按钮事件.
         */
        p.onClickBtn = function (evt) {
            this.clickEffect(evt);
            /*NOTE: 如果需要改成只出一个云歌点击特效，则解开注释.
            for(var i = this.yungeClickEffectGroup.numChildren ; i > 0 ; i--){
                this.yungeClickEffectGroup.getChildAt(i-1).visible = false;
            }*/
            if (this.yungeGroup.numChildren > 1) {
                this.yungeGroup.removeChildAt(1); //强制删除1号位云歌攻击动画.movieClip被移除，正常回调的事件监听也就没有了.
                console.log("zhujun: force remove attack anim ! ");
            }
            this.initPlayerAttack(); //主角攻击,隐藏待机,回调关攻击,显示待机.
            this.enemyHit(); //敌人受到攻击时动画            
            var audio = new Model.AudioService("YX-006_mp3"); //主角音效
            //触发点击伤害.
            //减血.
            //更新UI
            var a = Model.Mathf.random(1000, 100000);
            var b = new ViewModel.CutHpItemVM(this);
            //
            if (a >= 80000) {
                b.y = 230;
                b.setCriticalAttack("" + a); //暴击显示
                this.shockTool.shock(this, 3);
            }
            else {
                b.y = 300;
                b.setNoramlAttack("" + a); //普通攻击
            }
            b.x = 480 - b.width / 2;
            this.sceneInfo.hp -= 2; //TODO：目前是假数据
        };
        /**
         * 点击特效
         */
        p.clickEffect = function (evt) {
            var _this = this;
            this.tapEffect.x = evt.stageX - this.tapEffect.width / 2;
            this.tapEffect.y = evt.stageY - this.tapEffect.height / 2;
            this.tapEffect.visible = true;
            egret.setTimeout(function () {
                _this.tapEffect.visible = false;
            }, this, 80);
        };
        /**
         * @秒伤监听事件.
         */
        p.onDpsEvent = function () {
            //触发秒伤伤害.
            egret.setInterval(function () {
                //修改boss血量,更新UI
                //判断boss是否死亡，切换boss,更新UI.
            }, this, 1000);
        };
        /**
         * @初始化玩家角色.
         */
        p.initPlayer = function () {
            this.initPlayerIdle();
        };
        /**
         * @主角待机动画.
         */
        p.initPlayerIdle = function () {
            var yunge = new ViewModel.HeroItemVM(this.yungeGroup);
            yunge.initMovieClip("yunge_idle_json", "yunge_idle_png", "yunge_idle");
        };
        /**
         * @主角攻击动画.
         */
        p.initPlayerAttack = function () {
            this.onAttackAnim(this.yungeGroup, ["yunge_attack_json", "yunge_attack_png", "yunge_attack"]);
            this.onAttackEffect(this.yungeClickEffectGroup, ["texture_yunge_json", "texture_yunge_png", "texture_yunge_texiao"]);
        };
        /**
         * @初始挚友.
         */
        p.initFriend = function () {
            //            this.initBaiHe();
            //            this.initBingYi();
            //            this.initXuPingJun();
            //            this.initMengJue();
            //            this.initLiuFuLing();
            var fDatas = Model.FriendLocalService.getFriendList();
            var a = Enumerable.From(fDatas).Select("$.dy").ToArray();
            for (var i = 0; i < a.length; i++) {
                if (a[i] != null) {
                    this.friendAnimel(a[i].friendId);
                }
            }
        };
        /**
         * @选择挚友动画
         * @by cai_haotian 2016.2.23.
         */
        p.friendAnimel = function (friendId) {
            switch (friendId) {
                case "1":
                    this.initBaiHe();
                    break;
                case "7":
                    this.initBingYi();
                    break;
                case "13":
                    this.initXuPingJun();
                    break;
                case "19":
                    this.initMengJue();
                    break;
                case "25":
                    this.initLiuFuLing();
                    break;
                default: console.log("cai_haotian no animel");
            }
        };
        /**
         * @初始化百合动画
         * @by cai_haotian 2016.2.22
         */
        p.initBaiHe = function () {
            var _this = this;
            //待机动画
            var baihe = new ViewModel.HeroItemVM(this.baiheGroup);
            baihe.initMovieClip("baihe_idle_json", "baihe_idle_png", "baihe_idle");
            //攻击动画
            egret.setInterval(function () {
                //by cai_haotian 2016.2.4.
                _this.onAttackAnim(_this.baiheGroup, ["baihe_attack_json", "baihe_attack_png", "baihe_attack"], function () {
                    _this.onAttackEffect(_this.baiheGroup, ["texture_baihe_json", "texture_baihe_png", "texture_baihe_texiao"], function () {
                    });
                });
                var audio = new Model.AudioService("YX-011_mp3");
            }, this, Model.Mathf.random(3000, 5000));
        };
        /**
         * @初始化病已动画
         * @by cai_haotian 2016.2.22.
         */
        p.initBingYi = function () {
            var _this = this;
            //待机动画
            var bingyi = new ViewModel.HeroItemVM(this.bingyiGroup);
            var mc = bingyi.initMovieClip("bingyi_idle_json", "bingyi_idle_png", "bingyi_idle");
            //攻击动画
            egret.setInterval(function () {
                //by cai_haotian 2016.2.4.
                //攻击动画
                _this.onAttackAnim(_this.bingyiGroup, ["bingyi_attack_json", "bingyi_attack_png", "bingyi_attack"], function () {
                    _this.onAttackEffect(_this.bingyiGroup, ["texture_bingyi_json", "texture_bingyi_png", "texture_bingyi_texiao"], function () {
                    });
                });
                var audio = new Model.AudioService("YX-010_mp3");
            }, this, Model.Mathf.random(3000, 5000));
        };
        /**
         * @初始化许平君动画
         * @by cai_haotian 2016.2.22.
         */
        p.initXuPingJun = function () {
            var _this = this;
            var xupingjun = new ViewModel.HeroItemVM(this.xupingjunGroup);
            xupingjun.initMovieClip("xupingjun_idle_json", "xupingjun_idle_png", "xupingjun_idle");
            egret.setInterval(function () {
                //by cai_haotian 2016.2.4.
                _this.onAttackAnim(_this.xupingjunGroup, ["xupingjun_attack_json", "xupingjun_attack_png", "xupingjun_attack"], function () {
                    _this.onAttackEffect(_this.xupingjunGroup, ["texture_xupingjun_json", "texture_xupingjun_png", "texture_xupingjun_texiao"], function () {
                    });
                });
                var audio = new Model.AudioService("YX-010_mp3");
            }, this, Model.Mathf.random(3000, 5000));
        };
        /**
         * @初始化孟珏动画
         * @by cai_haotian 2016.2.22.
         */
        p.initMengJue = function () {
            var _this = this;
            //待机动画
            var mengjue = new ViewModel.HeroItemVM(this.mengjueGroup);
            mengjue.initMovieClip("mengjue_idle_json", "mengjue_idle_png", "mengjue_idle");
            //攻击动画
            egret.setTimeout(function () {
                _this.onAttackAnim(_this.mengjueGroup, ["mengjue_attack_json", "mengjue_attack_png", "mengjue_attack"], function () {
                    _this.onAttackEffect(_this.mengjueGroup, ["texture_mengjue_json", "texture_mengjue_png", "texture_mengjue_texiao"], function () {
                    });
                });
                var audio = new Model.AudioService("YX-009_mp3");
            }, this, Model.Mathf.random(3000, 5000));
        };
        /**
         * @初始化刘弗陵动画
         * @by cai_haotian 2016.2.22.
         */
        p.initLiuFuLing = function () {
            var _this = this;
            //待机动画
            var liufuling = new ViewModel.HeroItemVM(this.liufulingGroup);
            liufuling.initMovieClip("liufuling_idle_json", "liufuling_idle_png", "liufuling_idle");
            //攻击动画
            egret.setInterval(function () {
                //by cai_haotian 2016.2.4.
                _this.onAttackAnim(_this.liufulingGroup, ["liufuling_attack_json", "liufuling_attack_png", "liufuling_attack"], function () {
                    _this.onAttackEffect(_this.liufulingGroup, ["texture_liufuling_json", "texture_liufuling_png", "texture_liufuling_texiao"], function () {
                    });
                });
                var audio = new Model.AudioService("YX-007_mp3");
            }, this, Model.Mathf.random(3000, 5000));
        };
        /**
         * @初始化挚友攻击.
         * @挚友攻击动画2000-3000毫秒随机播放.
         */
        //        private initFriendAttack(){
        //            egret.setInterval(()=>{
        //                this.onAttackAnim(this.mengjueGroup,["mengjue_attack_json","mengjue_attack_png","mengjue_attack"],()=>{});
        //                egret.setTimeout(()=>{
        //                    var audio: Model.AudioService = new Model.AudioService("YX-009_mp3");
        //                    this.onAttackEffect(this.mengjueGroup,["texture_mengjue_json","texture_mengjue_png","texture_mengjue_texiao"],() => {
        ////                        this.enemyHit();//TODO:这边要提前播放.
        //                    });
        //                },this,800);//错开手的动作.
        //            },this,Model.Mathf.random(3000,5000));
        //        
        //            egret.setInterval(() => {
        //                //by cai_haotian 2016.2.4.
        //                this.onAttackAnim(this.liufulingGroup,["liufuling_attack_json","liufuling_attack_png","liufuling_attack"],()=>{});
        //                var audio: Model.AudioService = new Model.AudioService("YX-007_mp3");
        //                this.onAttackEffect(this.liufulingGroup,["texture_liufuling_json","texture_liufuling_png","texture_liufuling_texiao"],() => {
        ////                    this.enemyHit();
        //                });        
        //            },this,Model.Mathf.random(3000,5000));
        //            
        //            egret.setInterval(() => {
        //                //by cai_haotian 2016.2.4.
        //                this.onAttackAnim(this.bingyiGroup,["bingyi_attack_json","bingyi_attack_png","bingyi_attack"],()=>{});
        //                egret.setTimeout(()=>{
        //                    var audio: Model.AudioService = new Model.AudioService("YX-010_mp3");
        //                    this.onAttackEffect(this.bingyiGroup,["texture_bingyi_json","texture_bingyi_png","texture_bingyi_texiao"],() => {
        ////                        this.enemyHit();
        //                    }); 
        //                },this,800);//错开手的动作.
        //            },this,Model.Mathf.random(3000,5000));
        //            
        //            egret.setInterval(() => {
        //                //by cai_haotian 2016.2.4.
        //                this.onAttackAnim(this.xupingjunGroup,["xupingjun_attack_json","xupingjun_attack_png","xupingjun_attack"],()=>{});
        //                var audio: Model.AudioService = new Model.AudioService("YX-010_mp3");
        //                this.onAttackEffect(this.xupingjunGroup,["texture_xupingjun_json","texture_xupingjun_png","texture_xupingjun_texiao"],() => {
        ////                    this.enemyHit();
        //                });
        //            },this,Model.Mathf.random(3000,5000));
        //            
        //            egret.setInterval(()=>{
        //                //by cai_haotian 2016.2.4.
        //                this.onAttackAnim(this.baiheGroup,["baihe_attack_json","baihe_attack_png","baihe_attack"],()=>{});
        //                var audio: Model.AudioService = new Model.AudioService("YX-011_mp3");
        //                this.onAttackEffect(this.baiheGroup,["texture_baihe_json","texture_baihe_png","texture_baihe_texiao"],() => {
        ////                    this.enemyHit();
        //                });
        //            },this,Model.Mathf.random(3000,5000));
        //        }
        /**
         * @播放攻击动画.
         * @by cai_haotian 2016.2.4.
         */
        p.onAttackAnim = function (_uiGroup, _data, _onCallBack) {
            _uiGroup.getChildAt(0).visible = false; //重新播放,无论是不是点击,0号位都需要隐藏.
            var item = new ViewModel.HeroItemVM(_uiGroup);
            var mc = item.initMovieClip(_data[0], _data[1], _data[2], 1, function () {
                _uiGroup.getChildAt(0).visible = true;
                _uiGroup.removeChild(item.movieClip);
                console.log("zhujun: once movie clip call back successed ! ");
            });
            //根据序列帧动画中的事件触发特效动画
            mc.once(egret.MovieClipEvent.FRAME_LABEL, function () {
                if (_onCallBack) {
                    _onCallBack();
                }
            }, this);
        };
        /**
         * @攻击特效.
         */
        p.onAttackEffect = function (_uiGroup, _data, _onCallBack) {
            console.log("zhujun: on attack effect start !  ");
            var item = new ViewModel.EffectSkillVM(_uiGroup, function () {
                if (_onCallBack) {
                    _onCallBack();
                }
                console.log("zhujun: skill effect play finished ! ");
            });
            //            Model.console.log("_data[0] " + _data[0] + " _data[1] " + _data[1] + " _data[2] " + _data[2]);
            item.initDragonBone(_data[0], _data[1], _data[2]);
        };
        /**
         * @初始化敌人角色.
         */
        p.initEnemy = function () {
            //TODO:2016.02.25.
            this.enemyIndex = Model.Mathf.random(0, Model.MonsterLocalService.MonsterList.length); //Model.SceneLocalService.sceneData.monsterCount);
            this.enemyList = Model.MonsterLocalService.MonsterList;
            this.enemy = new ViewModel.HeroItemVM(this.enemyGroup);
            //            Model.SceneLocalService.sceneData.currentMonster
            this.enemy.initMovieClip(this.enemyList[this.enemyIndex].IdleJson, this.enemyList[this.enemyIndex].IdlePng, this.enemyList[this.enemyIndex].Idle);
            //            egret.setInterval(() => {//TODO: 敌人的切换是在敌人死亡后,这里只是临时随机.
            //                this.enemyKilled();
            //            },this,Model.Mathf.random(3000,5000)); 
        };
        /**
         * @改变敌人.
         */
        p.changeEnemy = function (_index) {
            //            Model.console.log("zhujun: 敌人切换 ! " + _index);
            this.enemy.changeMovieClip(this.enemyList[this.enemyIndex].IdleJson, this.enemyList[this.enemyIndex].IdlePng, this.enemyList[this.enemyIndex].Idle);
        };
        /**
         * @敌人死亡时动画
         */
        p.enemyKilled = function () {
            var _this = this;
            this.goldAnimel();
            var effect = new ViewModel.HeroItemVM(this.enemyGroup);
            effect.initMovieClip("tx_siwang_json", "tx_siwang_png", "Tx_siwang", 1, function () {
                _this.enemyGroup.removeChild(effect.movieClip);
            });
            var tempIndex = Model.Mathf.random(0, Model.MonsterLocalService.MonsterList.length);
            if (this.enemyIndex == tempIndex) {
                return;
            }
            else {
                this.enemyIndex = tempIndex;
            }
            this.changeEnemy(this.enemyIndex); //怪物死后调用
        };
        /**
         * @敌人被攻击时动画
         */
        p.enemyHit = function () {
            var _this = this;
            this.enemy.changeMovieClip(this.enemyList[this.enemyIndex].getHitJson, this.enemyList[this.enemyIndex].getHitPng, this.enemyList[this.enemyIndex].getHit, 1, function () {
                _this.changeEnemy(_this.enemyIndex);
            });
        };
        /**
         * @金币动画
         * @by cai_haotian
         */
        p.goldAnimel = function () {
            var max = Model.Mathf.random(5, 10);
            for (var i = 0; i < max; i++) {
                var coin = new eui.Image();
                coin.source = "icon_jinbi";
                coin.x = 500;
                coin.y = 300;
                Main.singleton.mainMenuVM.addChild(coin);
                var endRandomX = Model.Mathf.random(0, 600); //掉落终点的x坐标
                var bezierP1X = endRandomX + Model.Mathf.random(-100, 100); //返回时贝塞尔曲线的P1点x坐标 Y坐标在TweenCustom中固定
                var startPos = new Model.Vector2(300, 300); //设置出现点的起始坐标
                var endPos = new Model.Vector2(endRandomX, Model.Mathf.random(535 - coin.height / 2, 535 + coin.height / 2)); //设置掉落点的终点坐标
                var tween = new Model.TweenCustom(coin, Main.singleton.mainMenuVM, function () { }, startPos, endPos, Model.MainInfoLocalService.toUnitConversion(10000000)); //进行掉落返回曲线的函数
                tween.sAnimTime = Model.Mathf.random(1200, 1400); //总时长
                tween.bezierP1X = bezierP1X; //设置回收动画，贝塞尔曲线的P1点x坐标
                tween.GoldProductionAnim(); //开启掉落曲线
            }
        };
        return MainGameVM;
    })(eui.Component);
    ViewModel.MainGameVM = MainGameVM;
    egret.registerClass(MainGameVM,'ViewModel.MainGameVM');
})(ViewModel || (ViewModel = {}));
