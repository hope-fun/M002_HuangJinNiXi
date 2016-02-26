var Model;
(function (Model) {
    /**
     * @author: zhu_jun.
     * @date: 2015.12.24.
     */
    var WebServiceBase = (function () {
        /**
         * @构造.
         * @param: _wsValue请求参数.
         * @param: _canLoadLevel加载场景是否继续请求.
         * @param: _isShowFireWind是否风火轮.
         */
        function WebServiceBase(_wsValue, _isShowFireWind, _canLoadLevel) {
            var _this = this;
            if (_isShowFireWind === void 0) { _isShowFireWind = false; }
            if (_canLoadLevel === void 0) { _canLoadLevel = false; }
            /**
             * @网络请求成功回调.
             */
            this.successCallBack = null; //Function = null;// 
            /**
             * @网络请求失败回调.
             */
            this.failedCallBack = null; //Function = null;//
            /**
             * @短链接请求方法.
             */
            this.startService = null;
            var toolKit = new Model.WebServiceToolKit();
            toolKit.isShowFireWind = _isShowFireWind;
            toolKit.wsValue = _wsValue;
            toolKit.successCallBack = function (bObj) { _this.onSuccess(bObj); };
            toolKit.failedCallBack = function (bE) { _this.onFailed(bE); };
            if (Model.WebValue.isDebug)
                console.log("this.toolKit.failedCallBack ", toolKit.failedCallBack);
            if (Model.WebValue.isDebug)
                console.log("zhujun: this.toolKit.wsValue " + toolKit.wsValue);
            this.startService = function () {
                toolKit.startService();
            };
        }
        var d = __define,c=WebServiceBase,p=c.prototype;
        d(p, "SelectedLoginAddress"
            /**
             * @获取登陆服务器地址.
             */
            ,function () {
                //            if(WebValue.isDebug) console.log("SelectedLoginAddress: this.baseServerUrl is " + WebServiceBase.baseServerUrl + " this.withinLoginUrl " + WebServiceBase.withinLoginUrl);
                return Model.WebValue.isOutWeb ? WebServiceBase.baseServerUrl + WebServiceBase.outLoginUrl : WebServiceBase.baseServerUrl + WebServiceBase.withinLoginUrl;
            }
            /**
             * @设置登陆服务器地址.
             */
            ,function (_url) {
                WebServiceBase.withinLoginUrl = _url;
            }
        );
        d(p, "SelectedServerAddress"
            /**
             * @获取逻辑服务器地址.
             */
            ,function () {
                if (Model.WebValue.isDebug)
                    console.log("SelectedLoginAddress: this.baseServerUrl is ", WebServiceBase.baseServerUrl, " this.withinServerUrl " + WebServiceBase.withinServerUrl);
                return Model.WebValue.isOutWeb ? WebServiceBase.baseServerUrl + WebServiceBase.outServerUrl : WebServiceBase.baseServerUrl + WebServiceBase.withinServerUrl;
            }
            /**
             * @设置逻辑服务器地址.
             */
            ,function (_url) {
                WebServiceBase.withinServerUrl = _url;
            }
        );
        d(p, "StartService"
            /**
             * @短链接请求开始发送.
             * @get属性点出来就能执行，不需要再加园括号.
             */
            ,function () {
                //            if(WebValue.isDebug) console.log("zhujun: Start server ! " + JSON.stringify(toolKit.wsValue));
                return this.startService;
            }
        );
        /**
         * @请求成功调用.
         * @给toolkit执行.
         */
        p.onSuccess = function (_jString) {
            if (Model.WebValue.isDebug)
                console.log("zhujun: WebServiceBase onSuccess ! ");
        };
        ;
        /**
         * @请求失败调用.
         * @给toolkit执行.
         */
        p.onFailed = function (_error) {
            if (this.failedCallBack != null) {
                this.failedCallBack(_error);
            }
            else {
                if (Model.WebValue.isDebug)
                    console.log("Failed call back is null, set it first ! ");
            }
        };
        ;
        //    	/**
        //    	 * @短链接工具包.
        //    	 */ 
        //        private toolKit: WebServiceToolKit = null;
        //        /**
        //         * @服务器基本地址.
        //         */ 
        //        public static baseServerUrl : string = "http://120.26.53.158:8082/";
        //        /**
        //         * @服务器基本地址.(赵超)
        //         */ 
        //        public static baseServerUrl: string = "http://10.20.20.1:8080/";
        //        /**
        //         * @服务器基本地址.(本机)
        //         */
        //        public static baseServerUrl: string = "http://10.20.20.60:8080/";
        //        /**
        //         * @服务器基本地址.(张远)
        //         */
        //        public static baseServerUrl: string = "http://10.20.20.35:8080/";
        /**
         * @服务器基本地址.(骏哥)
         */
        WebServiceBase.baseServerUrl = "http://localhost:8080/";
        /**
         * @外网测试地址
         * @by cai_haotian 2016.2.1.
         */
        //        public static baseServerUrl: string = "http://webapp.hoperun.com:7070/";
        /**
         * @登陆服务器地址
         */
        WebServiceBase.withinLoginUrl = "h008-login-service/mobiapi/1/";
        WebServiceBase.outLoginUrl = "h008/login/";
        /**
         * @逻辑服务器地址.
         */
        WebServiceBase.withinServerUrl = "h008-logical-service/mobiapi/1/";
        WebServiceBase.outServerUrl = "h008/logical/";
        return WebServiceBase;
    })();
    Model.WebServiceBase = WebServiceBase;
    egret.registerClass(WebServiceBase,'Model.WebServiceBase');
    /**
     * @无返回值接口基类.
     * @TODO: by zhu_jun,2015.12.27.
     * @1.这边当初需要处理不同返回值,所以分开,可能分的太细.如果将来不需要这种细分case,是可以合并的.
     * @2.无论可不合并,都可以在这一层直接传WebServiceValue.
     * @3.无法多重构造,在封装上遇到了瓶颈,不能在一个类中给主调方中提供差异性接口.这里结合第1条,将来的WebServiceBase的子类的实现有可能变为调用方主导，而非返回方主导.
     */
    var WebServiceNonResponseBase = (function (_super) {
        __extends(WebServiceNonResponseBase, _super);
        function WebServiceNonResponseBase(_url, _paramList, _type, _isShowFireWind, _canOverLoad) {
            if (_paramList === void 0) { _paramList = null; }
            if (_type === void 0) { _type = Model.WebServiceType.Post; }
            if (_isShowFireWind === void 0) { _isShowFireWind = false; }
            if (_canOverLoad === void 0) { _canOverLoad = false; }
            _super.call(this, new Model.WebServiceValue(_url, _paramList, true, _type), _isShowFireWind, _canOverLoad);
        }
        var d = __define,c=WebServiceNonResponseBase,p=c.prototype;
        /**
         * @无返回值成功回掉.
         */
        p.onSuccess = function (_jString) {
            if (Model.WebValue.isDebug)
                console.log("zhujun: WebServiceNonResponseBase onSuccess ! ");
            _super.prototype.onSuccess.call(this, _jString);
            this.successCallBack(true);
        };
        return WebServiceNonResponseBase;
    })(WebServiceBase);
    Model.WebServiceNonResponseBase = WebServiceNonResponseBase;
    egret.registerClass(WebServiceNonResponseBase,'Model.WebServiceNonResponseBase');
    /**
     * @有返回值接口基类.
     * @TODO: by zhu_jun,2015.12.27.
     * @1.这边当初需要处理不同返回值,所以分开,可能分的太细.如果将来不需要这种细分case,是可以合并的.
     * @2.无论可不合并,都可以在这一层直接传WebServiceValue.
     * @3.无法多重构造,在封装上遇到了瓶颈,不能在一个类中给主调方中提供差异性接口.这里结合第1条,将来的WebServiceBase的子类的实现有可能变为调用方主导，而非返回方主导.
     */
    var WebServiceResponseBase = (function (_super) {
        __extends(WebServiceResponseBase, _super);
        function WebServiceResponseBase(_url, _paramList, _type, _isShowFireWind, _canOverLoad) {
            if (_paramList === void 0) { _paramList = null; }
            if (_type === void 0) { _type = Model.WebServiceType.Post; }
            if (_isShowFireWind === void 0) { _isShowFireWind = false; }
            if (_canOverLoad === void 0) { _canOverLoad = false; }
            console.log("zhujun:   _paramList : any = null " + _paramList);
            _super.call(this, new Model.WebServiceValue(_url, _paramList, _paramList == null ? false : true, _type), _isShowFireWind, _canOverLoad);
        }
        var d = __define,c=WebServiceResponseBase,p=c.prototype;
        /**
         * @有返回值成功回掉.
         */
        p.onSuccess = function (_jString) {
            if (Model.WebValue.isDebug)
                console.log("zhujun: WebServiceResponseBase onSuccess ! ");
            _super.prototype.onSuccess.call(this, _jString);
            var info = JSON.parse(_jString);
            this.successCallBack(info);
        };
        return WebServiceResponseBase;
    })(WebServiceBase);
    Model.WebServiceResponseBase = WebServiceResponseBase;
    egret.registerClass(WebServiceResponseBase,'Model.WebServiceResponseBase');
})(Model || (Model = {}));
