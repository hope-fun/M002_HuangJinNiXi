var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author  fangchao
     * @date 2015.12.30
     *
     */
    var MagicWeaponDetailVM = (function (_super) {
        __extends(MagicWeaponDetailVM, _super);
        function MagicWeaponDetailVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = View.MagicWeaponDetailView;
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=MagicWeaponDetailVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            /**
             * @添加按钮关闭事件
             */
            this.magicCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        };
        /**
         * @设置按钮内容
         */
        p.setMWData = function (_mWData) {
            this.mWData = _mWData;
            console.log("cai_haotian mwData is" + JSON.stringify(this.mWData));
            this.magicWeapon.source = this.mWData.st.icon;
            this.weaponName.text = this.mWData.st.name;
            if (this.mWData.dy) {
                this.weaponLevel.text = "Lv." + this.mWData.dy.level;
            }
            else {
                this.weaponLevel.text = "Lv.0";
            }
            this.weaponAddNow.text = this.mWData.st.descriptionFirst.replace("{}", this.mWData.effectFirst + "");
            this.weaponRemoveNow.text = this.mWData.st.descriptionSecond.replace("{}", this.mWData.effectSecond + "");
            this.weaponAddNext.text = this.mWData.st.descriptionFirst.replace("{}", this.mWData.effectFirstNext + "");
            this.weaponRemoveNext.text = this.mWData.st.descriptionSecond.replace("{}", this.mWData.effectSecondNext + "");
        };
        return MagicWeaponDetailVM;
    })(eui.Component);
    ViewModel.MagicWeaponDetailVM = MagicWeaponDetailVM;
    egret.registerClass(MagicWeaponDetailVM,'ViewModel.MagicWeaponDetailVM');
})(ViewModel || (ViewModel = {}));
