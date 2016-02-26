var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian
     * @date 2015.12.28.
     *
     */
    var SceneInfoVM = (function (_super) {
        __extends(SceneInfoVM, _super);
        function SceneInfoVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = View.SceneInfoView;
            this.uiLayer = _uiLayer;
        }
        var d = __define,c=SceneInfoVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.bossHp.labelDisplay.visible = false;
            this.bossHp.maximum = 100;
            this.bossHp.minimum = 0;
            this.bossHp.value = 100;
            this.setBossHp(100, 1);
            this.goldIcon();
        };
        p.setBossHp = function (hp, round) {
            var _this = this;
            this.setMoney(Model.MainInfoLocalService.toUnitConversion(Model.PlayerLocalService.PlayerData.dy.gold));
            this.hp = hp;
            this.bossHp.slideDuration = 0;
            //根据_index判断是否是否是个小怪从而发送数据
            var _index = 1;
            //这段负责扣血 目前数值都是随机函数生成的 并且不应该是定时函数应该是在动画打击到后进行扣血
            egret.setInterval(function () {
                if (_this.hp <= 0) {
                    //切换敌人
                    Main.singleton.mainGameVM.enemyKilled();
                    _this.hp = 100;
                    round++;
                    _index++;
                    if (_index == 10) {
                        //提交数据 by cai_haotian 2016.2.23.
                        var commitMessage = new Model.DataDyModel();
                        commitMessage.playerModel = Model.PlayerLocalService.PlayerData.dy;
                        //场景数据目前为空
                        commitMessage.sceneModel = Model.WebValue.dataDyModel.sceneModel;
                        commitMessage.skillModelList = Enumerable.From(Model.PlayerSkillLocalService.setPlayerSkillList()).Select("$.dy").ToArray();
                        commitMessage.friendModelList = Enumerable.From(Model.FriendLocalService.getFriendList()).Select("$.dy").ToArray();
                        commitMessage.magicWeaponModelList = Enumerable.From(Model.MagicWeaponService.setMagicWeaponList()).Select("$.dy").ToArray();
                        //成就目前待定
                        //                        commitMessage.achievementModelList={};
                        Model.WebService.commitData(commitMessage, function () { console.log("cai_haotian commit success!"); }, function () { console.log("cai_haotian commit falied!"); });
                        _index = 0;
                    }
                    _this.levelDesign.text = round + "/" + Model.WebValue.dataStModel.sysConfigModel.sceneMonsterNumber; //这里要考虑到神器的用法
                    //这段负责判断是否达到boss
                    if (round == Number(Model.WebValue.dataStModel.sysConfigModel.sceneMonsterNumber)) {
                        _this.swardIcon.visible = false;
                        round = 0;
                        var time = Number(Model.WebValue.dataStModel.sysConfigModel.timeBOSS); //时间也要受到神器限制
                        _this.run.visible = true;
                        _this.countTime.visible = true;
                        _this.timeLeft.visible = true;
                        _this.timeLeft.text = time + "";
                        var x = _this.countTime.width / time; //每秒减多少
                        var a = egret.setInterval(function () {
                            _this.countTime.width -= x;
                            _this.timeLeft.text = --time + "";
                            if (time >= 0 && _this.hp <= 0) {
                                //打倒boss
                                _this.swardIcon.visible = true;
                                egret.clearInterval(a);
                                _this.countTime.width = 187;
                                _this.run.visible = false;
                                _this.countTime.visible = false;
                                _this.timeLeft.visible = false;
                                //更改小球
                                var pre = _this.preImage.source;
                                var current = _this.currentImage.source;
                                var next = _this.nextImage.source;
                                _this.preRound.text = Number(_this.preRound.text) + 1 + "";
                                _this.currentRound.text = Number(_this.currentRound.text) + 1 + "";
                                _this.nextRound.text = Number(_this.nextRound.text) + 1 + "";
                                _this.currentImage.source = next;
                                _this.preImage.source = current;
                                _this.nextImage.source = pre;
                                //更改背景图
                                Main.singleton.mainGameVM.bg.source = "scene_pic_" + Math.ceil(Number(_this.currentRound.text) / 5);
                                //显示剑
                                _this.swardIcon.visible = true;
                                _this.levelDesign.text = round + "/" + Model.WebValue.dataStModel.sysConfigModel.sceneMonsterNumber; //这里要考虑到神器的用法
                            }
                            else if (time == 0 && _this.hp > 0) {
                                //未打倒boss
                                egret.clearInterval(a);
                                _this.levelDesign.visible = false;
                                round = 1;
                                _this.hp = 100;
                                _this.countTime.width = 187;
                                _this.countTime.visible = false;
                                _this.timeLeft.visible = false;
                                _this.run.currentState = "up";
                            }
                        }, _this, 1000);
                    }
                }
                else {
                    _this.hp -= Model.Mathf.random(10, 15);
                }
                _this.bossHp.value = _this.hp;
            }, this, Model.Mathf.random(800, 1000));
        };
        p.setMoney = function (money) {
            this.charMoney.text = money;
        };
        /**
         *@播放金币呼吸动画
         */
        p.goldIcon = function () {
            var mcData = new egret.MovieClipDataFactory(RES.getRes("jinbi_json"), RES.getRes("jinbi_png"));
            this.goldAnimel = new egret.MovieClip(mcData.generateMovieClipData("jinbi"));
            Main.singleton.addChild(this.goldAnimel);
        };
        /**
         * @开始播放金币动画
         */
        p.goldAnimelStart = function () {
            if (this.goldAnimel.currentFrame == this.goldAnimel.totalFrames) {
                this.goldAnimel.gotoAndPlay(0);
            }
            else {
                this.goldAnimel.play();
            }
        };
        return SceneInfoVM;
    })(eui.Component);
    ViewModel.SceneInfoVM = SceneInfoVM;
    egret.registerClass(SceneInfoVM,'ViewModel.SceneInfoVM');
})(ViewModel || (ViewModel = {}));
