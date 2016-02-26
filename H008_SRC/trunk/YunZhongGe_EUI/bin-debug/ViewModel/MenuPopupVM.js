var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author zhu_jun.
     * @date 2015.12.12.
     */
    var MenuPopupVM = (function (_super) {
        __extends(MenuPopupVM, _super);
        function MenuPopupVM(_onCallBack, _uiLayer) {
            _super.call(this);
            /**
             * @主角技能对象.
             */
            this.pSItems = [];
            /**
             * @挚友技能对象.
             */
            this.fItems = [];
            /**
             * @神器列表对象.
             */
            this.mWItems = [];
            this.skinName = View.MenuPopup;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            if (_uiLayer) {
                this.uiLayer.addChild(this);
            }
            if (Model.WebValue.isDebug)
                console.log("zhujun: add main popup vm to ui layer !　");
        }
        var d = __define,c=MenuPopupVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        /**
         * @初始化或更新主信息数据.
         */
        p.setPData = function () {
            var _this = this;
            //TODO: 传下来执行. 花费过后重新更新ui钱币数 by cai_haotian 2016.2.19.
            Main.singleton.mainGameVM.sceneInfo.setMoney(Model.MainInfoLocalService.toUnitConversion(Model.PlayerLocalService.PlayerData.dy.gold));
            //更新主界面 by cai_haotian 2016.2.22.
            Main.singleton.mainMenuVM.mainInfo.setMIData();
            this.protagonistPopGroup.visible = true;
            this.bosomFriendPopGroup.visible = false;
            this.artifactPopGroup.visible = false;
            var pData = Model.PlayerLocalService.PlayerData;
            var pSDatas = Model.PlayerSkillLocalService.PlayerSkillList;
            this.clickDamageLabel.text = pData.ClickDamageAndUnit; //标题点击伤害赋值.
            if (this.protagonistGroup.numChildren == 0) {
                this.pItem = new ViewModel.CharItemVM(this.protagonistGroup, function (_data) {
                    var audio = new Model.AudioService("YX-004_mp3");
                    Model.PlayerLocalService.upgradeSuccessedCallBack(_data);
                    _this.setPData();
                    console.log("zhujun: main player create finish ! ");
                });
                for (var i = 0; i < pSDatas.length; i++) {
                    var item = new ViewModel.CharItemVM(this.protagonistGroup, function (_data) {
                        var audio = new Model.AudioService("YX-004_mp3");
                        Model.PlayerSkillLocalService.upgradeSuccessedCallBack(_data);
                        _this.setPData();
                        console.log("zhujun: main player skill upgrade finish ! ");
                    });
                    item.setPSData(pSDatas[i]);
                    this.pSItems.push(item);
                }
            }
            else {
                for (var i = 0; i < pSDatas.length; i++) {
                    var isUnlock = Model.PlayerLocalService.PlayerData.dy.level >= pSDatas[i].st.openLevel; //主角升级之后的回调，一定是在更新里面.  
                    if (isUnlock && !pSDatas[i].dy) {
                        Model.PlayerSkillLocalService.unlockSuccessedCallBack(pSDatas[i]);
                    }
                    this.pSItems[i].setPSData(pSDatas[i]);
                }
            }
            this.pItem.setPData(pData); //更新主角UI.无论创建还是还是更新都是要执行的，如果有执行顺序问题，可以if else里面都写.
        };
        /**
         * @设置挚友数据,并初始化.
         */
        p.setBFData = function () {
            var _this = this;
            //TODO:方法传下来执行.  花费过后重新更新ui钱币数 by cai_haotian 2016.2.19.
            Main.singleton.mainGameVM.sceneInfo.setMoney(Model.MainInfoLocalService.toUnitConversion(Model.PlayerLocalService.PlayerData.dy.gold));
            //更新主界面 by cai_haotian 2016.2.22.
            Main.singleton.mainMenuVM.mainInfo.setMIData();
            this.protagonistPopGroup.visible = false;
            this.bosomFriendPopGroup.visible = true;
            this.artifactPopGroup.visible = false;
            var fDatas = Model.FriendLocalService.getFriendList();
            this.dpsLabel.text = Model.PlayerLocalService.PlayerData.FriendDamageUnit; //dy.friendDamage.toString();
            //            Model.console.log("zhujun: this.bosomFriendGroup.numChildren " + this.bosomFriendGroup.numChildren);
            if (Model.WebValue.isDebug)
                console.log("zhujun: bfData " + JSON.stringify(fDatas));
            if (this.bosomFriendGroup.numChildren == 0) {
                for (var i = 0; i < fDatas.length; i++) {
                    if (fDatas[i].dy) {
                        console.log("zhujun: fDatas[i].dy.layerId  " + fDatas[i].dy.layerId + " fDatas[i].layerMatchLevel " + fDatas[i].layerMatchLevel);
                        if (fDatas[i].dy.layerId < fDatas[i].layerMatchLevel) {
                            var item = new ViewModel.CharItemVM(this.bosomFriendGroup, function (_data) {
                                Model.FriendLocalService.layerSuccessedCallBack(_data);
                                _this.setBFData(); //更新UI,减去UI钱，加购买钱， 开下一个       
                                console.log("zhujun: friend and skill " + _data.st.id + " upgrade successed ! ");
                            });
                        }
                        else {
                            var item = new ViewModel.CharItemVM(this.bosomFriendGroup, function (_data) {
                                var audio = new Model.AudioService("YX-004_mp3");
                                Model.FriendLocalService.upgradeSuccessedCallBack(_data);
                                _this.setBFData(); //更新UI,减去UI钱，加购买钱， 开下一个       
                                console.log("zhujun: friend and skill " + _data.st.id + " upgrade successed ! ");
                            });
                        }
                    }
                    else {
                        var item = new ViewModel.CharItemVM(this.bosomFriendGroup, function (_data) {
                            Model.FriendLocalService.buySuccessedCallBack(_data);
                            //显示人物 by cai_haotian 2016.2.22.
                            Main.singleton.mainGameVM.friendAnimel(_data.dy.friendId);
                            _this.setBFData(); //更新UI,减去UI钱，加购买钱， 开下一个
                            //第一次显示挚友 by cai_haotian 2016.2.22.
                            console.log("zhujun: friend and skill " + _data.st.id + " add finish ! ");
                        });
                    }
                    item.setBFData(fDatas[i]);
                    this.fItems.push(item);
                }
            }
            else {
                for (var i = 0; i < fDatas.length; i++) {
                    if (fDatas[i].dy) {
                        //                        Model.console.log("zhujun: fDatas[i].dy.layerId  " + fDatas[i].dy.layerId + " fDatas[i].layerMatchLevel " + fDatas[i].layerMatchLevel+ " level " + fDatas[i].dy.level);
                        if (fDatas[i].dy.layerId < fDatas[i].layerMatchLevel) {
                            this.fItems[i].onCallback = function (_data) {
                                Model.FriendLocalService.layerSuccessedCallBack(_data);
                                _this.setBFData(); //更新UI,减去UI钱，加购买钱， 开下一个       
                                console.log("zhujun: friend and skill " + _data.st.id + " layer successed ! ");
                            };
                        }
                        else {
                            this.fItems[i].onCallback = function (_data) {
                                var audio = new Model.AudioService("YX-004_mp3");
                                Model.FriendLocalService.upgradeSuccessedCallBack(_data);
                                _this.setBFData(); //更新UI,减去UI钱，加购买钱， 开下一个       
                                console.log("zhujun: friend and skill " + _data.st.id + " upgrade successed ! ");
                            };
                        }
                    }
                    else {
                        this.fItems[i].onCallback = function (_data) {
                            Model.FriendLocalService.buySuccessedCallBack(_data);
                            //显示人物 by cai_haotian 2016.2.22.
                            Main.singleton.mainGameVM.friendAnimel(_data.dy.friendId);
                            _this.setBFData(); //更新UI,减去UI钱，加购买钱， 开下一个       
                            console.log("zhujun: friend and skill " + _data.st.id + " add finish ! ");
                        };
                    }
                    this.fItems[i].setBFData(fDatas[i]);
                }
            }
        };
        /**
         * @设置神器数据,并初始化.
         */
        p.setAData = function () {
            var _this = this;
            this.protagonistPopGroup.visible = false;
            this.bosomFriendPopGroup.visible = false;
            this.artifactPopGroup.visible = true;
            var mWDatas = Model.MagicWeaponService.MagicWeaponList;
            this.damageBonusLabel.text = Model.MagicWeaponService.AddCommon.toString();
            this.jewelLabel.text = Model.PlayerLocalService.PlayerData.dy.jewel.toString();
            if (this.artifactGroup.numChildren == 0) {
                this.mWBuyItem = new ViewModel.MallItemVM(this.artifactGroup, function () {
                    Model.MagicWeaponService.buySuccessedCallBack(); //更新动态对象.
                    _this.setAData(); //更新UI,减去UI钱，加购买钱， 开下一个       
                    console.log("zhujun: magic weapon bug add finish ! ");
                });
                for (var i = 0; i < mWDatas.length; i++) {
                    var item = new ViewModel.MallItemVM(this.artifactGroup, function (_data) {
                        var audio = new Model.AudioService("YX-004_mp3");
                        Model.MagicWeaponService.upgradeSuccessedCallBack(_data); //升级更新动态对象.
                        _this.setAData(); //更新UI,减去UI钱，加购买钱， 开下一个    
                        //未提交
                        console.log("zhujun: magic weapon " + _data.dy.magicWeaponId + " add finish ! ");
                    });
                    item.setMWData(mWDatas[i]);
                    this.mWItems.push(item);
                }
            }
            else {
                for (var i = 0; i < mWDatas.length; i++) {
                    this.mWItems[i].setMWData(mWDatas[i]);
                }
            }
            this.mWBuyItem.setMWBuyData(); //无论初始化还是更新都要执行.
        };
        return MenuPopupVM;
    })(eui.Component);
    ViewModel.MenuPopupVM = MenuPopupVM;
    egret.registerClass(MenuPopupVM,'ViewModel.MenuPopupVM');
})(ViewModel || (ViewModel = {}));
