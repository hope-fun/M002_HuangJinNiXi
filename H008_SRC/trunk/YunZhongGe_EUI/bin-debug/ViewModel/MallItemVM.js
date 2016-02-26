var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author: by cai_haotian 2015.12.23.
     * @modification: by zhu_jun,2016.01.17.
     */
    var MallItemVM = (function (_super) {
        __extends(MallItemVM, _super);
        function MallItemVM(_uiGroup, _onCallback) {
            _super.call(this);
            this.skinName = View.MallItem;
            this.uiGroup = _uiGroup;
            this.onCallback = _onCallback;
            this.uiGroup.addChild(this);
        }
        var d = __define,c=MallItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        /**
         * @设置神器购买item数据.
         */
        p.setMWBuyData = function () {
            this.goodsIcon.source = Model.WebValue.dataStModel.sysConfigModel.magicWeaponIcon;
            this.goodsName.text = "神器";
            this.goodsDesOne.text = "随机激活一把新神兵";
            var isDisable = Model.PlayerLocalService.PlayerData.dy.jewel < Model.MagicWeaponService.BuyCost;
            this.goodsBtn.setMWBuy(Model.MagicWeaponService.BuyCost, isDisable);
            this.goodsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuyMWEvent, this);
            //by cai_haotian 2016.1.30.
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createBuyPop, this);
        };
        /**
         * @购买二级菜单
         * @by cai_haotian 2016.2.1.
         */
        p.createBuyPop = function () {
            if (this.onCallback) {
                new ViewModel.MagicWeaponBuyDetailVM(Main.singleton, function () { });
            }
        };
        /**
         * @按钮回调事件.
         */
        p.onBuyMWEvent = function () {
            if (this.onCallback) {
                this.onCallback();
            }
        };
        /**
         * @设置神器item数据.
         */
        p.setMWData = function (_data) {
            if (!_data || !_data.st) {
                alert("数据错误，请重新加载 ! ");
                return;
            }
            this.mWData = _data;
            this.goodsName.text = _data.st.name;
            this.goodsIcon.source = _data.st.icon;
            this.goodsDesOne.text = _data.st.descriptionFirst.replace("{}", _data.effectFirst.toString());
            this.goodsDesTwo.text = _data.st.descriptionSecond.replace("{}", _data.effectSecond.toString());
            if (_data.dy) {
                var isDisable = Model.PlayerLocalService.PlayerData.dy.jewel < _data.upgradeCost;
                this.goodsBtn.setMWUnlock(_data.upgradeCost, isDisable);
                this.goodsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUpgradeMWEvent, this);
                this.goodsLevel.visible = true;
                this.goodsLevel.text = "Lv." + _data.dy.level;
                //by cai_haotian 2016.1.30.
                this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createPop, this);
            }
            else {
                this.goodsBtn.setMWLock(_data.upgradeCost);
            }
        };
        /**
         * @神器item二级弹窗
         * @by cai_haotian 2016.2.1.
         */
        p.createPop = function () {
            if (this.onCallback) {
                var item = new ViewModel.MagicWeaponDetailVM(Main.singleton, function () { });
                item.setMWData(this.mWData);
            }
        };
        /**
         * @神器升级事件.
         */
        p.onUpgradeMWEvent = function () {
            if (this.onCallback)
                this.onCallback(this.mWData);
        };
        return MallItemVM;
    })(eui.Component);
    ViewModel.MallItemVM = MallItemVM;
    egret.registerClass(MallItemVM,'ViewModel.MallItemVM');
})(ViewModel || (ViewModel = {}));
