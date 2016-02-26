var Model;
(function (Model) {
    /**
     * @author: zhu_jun.
     * @date: 2015.12.23.
     * @Note:
     * 1.重新分装网络层,主要是为了解决异常处理,加载场景是否中断请求，兼容get请求，兼容非json参数等问题.
     * 2.本质是在业务层和egret的网络层之间又加了一层增加其扩展性，但就目前来看，针对H5游戏有些重了.
     */
    var WebService = (function () {
        function WebService() {
        }
        var d = __define,c=WebService,p=c.prototype;
        /**
         * @登录接口.
         */
        WebService.userLogin = function (_account, _successCallBack, _failedCallBack) {
            if (_successCallBack === void 0) { _successCallBack = function (bObj) { }; }
            if (_failedCallBack === void 0) { _failedCallBack = function (bE) { }; }
            if (Model.WebValue.isDebug)
                console.log("userLogin account is ", _account);
            var request = new UserLogin(_account);
            request.successCallBack = _successCallBack;
            request.failedCallBack = _failedCallBack;
            request.StartService();
        };
        /**
         * @更新动态数据接口.
         */
        WebService.updateDyData = function (_successCallBack, _failedCallBack) {
            if (_successCallBack === void 0) { _successCallBack = function (bObj) { }; }
            if (_failedCallBack === void 0) { _failedCallBack = function (bE) { }; }
            var request = new UpdateDyData();
            request.successCallBack = _successCallBack;
            request.failedCallBack = _failedCallBack;
            request.StartService();
        };
        /**
         * @更新静态数据接口.
         */
        WebService.updateStData = function (_successCallBack, _failedCallBack) {
            if (_successCallBack === void 0) { _successCallBack = function (bObj) { }; }
            if (_failedCallBack === void 0) { _failedCallBack = function (bE) { }; }
            var request = new UpdateStData();
            request.successCallBack = _successCallBack;
            request.failedCallBack = _failedCallBack;
            request.StartService();
        };
        /**
         * @提交数据.
         */
        WebService.commitData = function (_dataDy, _successCallBack, _failedCallBack) {
            if (_successCallBack === void 0) { _successCallBack = function (bObj) { }; }
            if (_failedCallBack === void 0) { _failedCallBack = function (bE) { }; }
            var request = new CommitData(_dataDy);
            request.successCallBack = _successCallBack;
            request.failedCallBack = _failedCallBack;
            request.StartService();
        };
        return WebService;
    })();
    Model.WebService = WebService;
    egret.registerClass(WebService,'Model.WebService',["Model.IWebService"]);
    /**
     * @登陆接口.
     */
    var UserLogin = (function (_super) {
        __extends(UserLogin, _super);
        /**
         * @构造方法.
         * @param: _accountM : AccountModel.
         */
        function UserLogin(_accountM) {
            _super.call(this, String(this.SelectedLoginAddress + "user/login/"), _accountM);
        }
        var d = __define,c=UserLogin,p=c.prototype;
        return UserLogin;
    })(Model.WebServiceNonResponseBase);
    Model.UserLogin = UserLogin;
    egret.registerClass(UserLogin,'Model.UserLogin');
    /**
     * @更新动态数据.
     * @param: "".
     */
    var UpdateDyData = (function (_super) {
        __extends(UpdateDyData, _super);
        /**
         * @构造方法.
         */
        function UpdateDyData() {
            _super.call(this, String(this.SelectedServerAddress + "update/dynamicData/"), {});
        }
        var d = __define,c=UpdateDyData,p=c.prototype;
        return UpdateDyData;
    })(Model.WebServiceResponseBase);
    Model.UpdateDyData = UpdateDyData;
    egret.registerClass(UpdateDyData,'Model.UpdateDyData');
    /**
     * @更新静态数据.
     */
    var UpdateStData = (function (_super) {
        __extends(UpdateStData, _super);
        /**
         * @构造方法.
         */
        function UpdateStData() {
            _super.call(this, String(this.SelectedServerAddress + "update/staticData/"), {});
        }
        var d = __define,c=UpdateStData,p=c.prototype;
        return UpdateStData;
    })(Model.WebServiceResponseBase);
    Model.UpdateStData = UpdateStData;
    egret.registerClass(UpdateStData,'Model.UpdateStData');
    /**
     * @提交数据.
     */
    var CommitData = (function (_super) {
        __extends(CommitData, _super);
        /**
         * @构造方法.
         */
        function CommitData(_dyData) {
            _super.call(this, String(this.SelectedServerAddress + "commit/data/"), _dyData);
        }
        var d = __define,c=CommitData,p=c.prototype;
        return CommitData;
    })(Model.WebServiceNonResponseBase);
    Model.CommitData = CommitData;
    egret.registerClass(CommitData,'Model.CommitData');
})(Model || (Model = {}));
