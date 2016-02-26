var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author by cai_haotian 2015.12.23.
     *
     */
    var BtnShareVM = (function (_super) {
        __extends(BtnShareVM, _super);
        function BtnShareVM() {
            _super.call(this);
            this.skinName = View.BtnShareItem;
        }
        var d = __define,c=BtnShareVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                var audio = new Model.AudioService("YX-002_mp3");
            }, this);
        };
        /**
         * @设置消耗Icon图标.
         */
        p.setCostIcon = function (_source, _width, _height) {
            this.costIcon.source = _source;
            this.costIcon.width = _width;
            this.costIcon.height = _height;
        };
        /**
         * @按下时为蓝色.
         */
        p.downAuto = function () {
            //            Model.console.log("当前状态不存在,请及时联系客服处理 ! " + this.currentState);
            switch (this.currentState) {
                case "upBlue":
                    this.currentState = "downBlue";
                    break;
                case "upYellow":
                    this.currentState = "downYellow";
                    break;
                case "upOrange":
                    this.currentState = "downOrange";
                    break;
                default:
                    alert("当前状态不存在,请及时联系客服处理 ! " + this.currentState);
                    break;
            }
        };
        /**
         * @主角解锁状态.
         */
        p.setPUpgrade = function (_gold, _damageBonus, _isEnough) {
            if (_isEnough === void 0) { _isEnough = false; }
            this.costNum.text = _gold; // _gold.toString();
            this.setCostIcon("icon_jinbi", 20, 20);
            this.valueLabel.text = String("+" + _damageBonus + "点击伤害");
            this.valueDesLabel.text = "升级";
            if (_isEnough) {
                this.touchEnabled = true;
                this.currentState = "upOrange";
            }
            else {
                this.touchEnabled = false;
                this.currentState = "disabled";
            }
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.downAuto, this);
        };
        /**
         * @主角未解锁状态.
         * @_gold:解锁花费.
         * @_level:解锁需要的玩家等级.
         */
        p.setPSLock = function (_gold, _unLocklevel) {
            this.costNum.text = _gold; //Model.MainInfoLocalService.toUnitConversion(_gold);
            this.setCostIcon("icon_jinbi", 20, 20);
            this.description.text = String("达到" + _unLocklevel + "级时解锁");
            this.valueDesLabel.text = "";
            this.valueLabel.text = "";
            this.touchEnabled = false;
            this.currentState = "disabled";
        };
        /**
         * @设置玩家技能未解锁状态.
         */
        p.setPSUnlock = function (_gold, _deltaDamage, _isEnough) {
            this.costNum.text = _gold; //Model.MainInfoLocalService.toUnitConversion(_gold);
            this.setCostIcon("icon_jinbi", 20, 20);
            this.description.text = "";
            this.valueDesLabel.text = "升级";
            this.valueLabel.text = String("+" + _deltaDamage);
            ;
            if (_isEnough) {
                this.touchEnabled = true;
                this.currentState = "upOrange";
            }
            else {
                this.touchEnabled = false;
                this.currentState = "disabled";
            }
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.downAuto, this);
        };
        /**
         * @挚友以及挚友技能,已招募情况下升级状态设置.
         */
        p.setFUpgrade = function (_costNum, _deltaDps, _isEnough, _layer) {
            this.costNum.text = _costNum;
            this.setCostIcon("icon_jinbi", 20, 20);
            if (_layer) {
                this.valueLabel.text = _layer;
                this.valueDesLabel.text = "解锁技能";
                if (_isEnough) {
                    this.touchEnabled = true;
                    this.currentState = "upYellow";
                }
                else {
                    this.touchEnabled = false;
                    this.currentState = "disabled";
                }
            }
            else {
                this.valueLabel.text = String("+" + _deltaDps + "秒伤");
                this.valueDesLabel.text = "升级";
                if (_isEnough) {
                    this.touchEnabled = true;
                    this.currentState = "upBlue";
                }
                else {
                    this.touchEnabled = false;
                    this.currentState = "disabled";
                }
            }
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.downAuto, this);
        };
        /**
         * @_isEnough:true挚友以及挚友技能,未招募情况下满足招募条件:亮
         * @_isEnough:false挚友以及挚友技能,未招募情况下不满足招募条件:灰
         */
        p.setFLock = function (_costType, _costNum, _deltaDps, _isEnough) {
            this.costNum.text = _costNum; //Model.MainInfoLocalService.toUnitConversion(_costNum);
            this.valueLabel.text = String("+" + _deltaDps + "秒伤");
            this.valueDesLabel.text = "招募";
            if (_isEnough) {
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.downAuto, this); //这边不需要重置回up,是因为在大循环里面会reset.
                this.touchEnabled = true;
                this.currentState = "upBlue";
                if (_costType == Model.MoneyType.MONEY_TYPE_YB) {
                    this.setCostIcon("yuanbao", 20, 15);
                }
                else {
                    this.setCostIcon("icon_jinbi", 20, 20);
                }
            }
            else {
                this.touchEnabled = false;
                this.currentState = "disabled";
                if (_costType == Model.MoneyType.MONEY_TYPE_YB) {
                    this.setCostIcon("yuanbao", 20, 15);
                }
                else {
                    this.setCostIcon("icon_jinbi", 20, 20);
                }
            }
        };
        /**
         * @购买神兵.
         */
        p.setMWBuy = function (_costNum, _isDisable) {
            if (_isDisable === void 0) { _isDisable = false; }
            this.costIcon.source = "icon_lingshi";
            console.log("cai_haotian 传入的钱" + _costNum);
            this.costNum.text = _costNum.toString();
            this.description.text = "购买神器";
            if (_isDisable) {
                this.touchEnabled = false;
                this.currentState = "disabled";
            }
            else {
                this.touchEnabled = true;
                this.currentState = "upBlue";
            }
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.downAuto, this); //这边不需要重置回up,是因为在大循环里面会reset.
        };
        /**
         * @设置神器未锁定状态.
         */
        p.setMWUnlock = function (_costNum, _isDisable) {
            if (_isDisable === void 0) { _isDisable = false; }
            this.costNum.text = Model.MainInfoLocalService.toUnitConversion(_costNum);
            this.setCostIcon("icon_lingshi", 22, 22);
            this.description.text = "升级";
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.downAuto, this); //这边不需要重置回up,是因为在大循环里面会reset.
            if (_isDisable) {
                this.touchEnabled = false;
                this.currentState = "disabled";
            }
            else {
                this.touchEnabled = true;
                this.currentState = "upYellow";
            }
        };
        /**
         * @设置神器锁定状态.
         */
        p.setMWLock = function (_costNum) {
            this.costNum.text = "";
            this.costIcon.source = "";
            this.costIcon.width = 22;
            this.costIcon.height = 22;
            this.description.text = "未获得";
            this.touchEnabled = false;
            this.currentState = "disabled";
        };
        return BtnShareVM;
    })(eui.Button);
    ViewModel.BtnShareVM = BtnShareVM;
    egret.registerClass(BtnShareVM,'ViewModel.BtnShareVM');
})(ViewModel || (ViewModel = {}));
