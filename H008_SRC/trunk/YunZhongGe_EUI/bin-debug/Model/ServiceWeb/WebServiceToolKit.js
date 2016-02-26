/**
 * @author: zhu_jun.
 * @date: 2015.12.24.
*/
var Model;
(function (Model) {
    /**
     * @网络请求错误枚举.
     */
    (function (WebServiceErrorCode) {
        WebServiceErrorCode[WebServiceErrorCode["SYSTEM_ERROR"] = 0] = "SYSTEM_ERROR";
        WebServiceErrorCode[WebServiceErrorCode["SERVICE_TIMEOUT"] = 1] = "SERVICE_TIMEOUT";
        WebServiceErrorCode[WebServiceErrorCode["USER_NOT_EXISTS"] = 2] = "USER_NOT_EXISTS";
        WebServiceErrorCode[WebServiceErrorCode["URL_ERROR"] = 3] = "URL_ERROR";
        WebServiceErrorCode[WebServiceErrorCode["ERROR"] = 4] = "ERROR";
        WebServiceErrorCode[WebServiceErrorCode["UNKNOWN"] = 0] = "UNKNOWN";
        WebServiceErrorCode[WebServiceErrorCode["NO_ACTION"] = 1] = "NO_ACTION";
        WebServiceErrorCode[WebServiceErrorCode["NOT_MATCH"] = 2] = "NOT_MATCH";
        WebServiceErrorCode[WebServiceErrorCode["FAILED"] = 5] = "FAILED";
    })(Model.WebServiceErrorCode || (Model.WebServiceErrorCode = {}));
    var WebServiceErrorCode = Model.WebServiceErrorCode;
    /**
     * @请求类型.
     */
    (function (WebServiceType) {
        WebServiceType[WebServiceType["Get"] = 0] = "Get";
        WebServiceType[WebServiceType["Post"] = 1] = "Post";
    })(Model.WebServiceType || (Model.WebServiceType = {}));
    var WebServiceType = Model.WebServiceType;
    /**
     * @网络服务工具包.
     */
    var WebServiceToolKit = (function () {
        /**
         * @构造.
         */
        function WebServiceToolKit() {
            /**
             * @自定义超时时间.
             */
            this.customTimeOut = 20000;
            /**
             * @成功回调方法.
             */
            this.successCallBack = null; //Function = null;
            /**
             * @发送中回调方法.
             */
            this.onProgressCallBack = null;
            /**
             * @请求参数.
             */
            this.wsValue = null;
            /**
             * @是否开启风火轮.
             */
            this.isShowFireWind = false;
            /**
             * @请求完成.
             */
            this.isDone = false;
            //            this.initHeader("H008");
        }
        var d = __define,c=WebServiceToolKit,p=c.prototype;
        d(p, "UserToken"
            /**
             * @获取UserToken.
             */
            ,function () {
                if (Model.WebValue.webServiceHeader != "") {
                    return Model.WebValue.webServiceHeader;
                }
                else {
                    throw "Get some error hare ! ";
                }
            }
        );
        /**
         * @初始化短链接头.
         */
        //        private initHeader(token: string) {
        //            this.webServiceHeader = token;
        //        }
        /**
         * @修改USER-TOKEN.
         */
        p.changeHeader = function (token) {
            if (Model.WebValue.webServiceHeader != "" && Model.WebValue.webServiceHeader != token) {
                Model.WebValue.webServiceHeader = token;
            }
            else {
                console.log("zhujun: webServerHeader is no change ! ");
            }
        };
        /**
         * @开始请求.
         */
        p.startService = function () {
            console.log("zhujun: start service " + JSON.stringify(this.wsValue));
            if (this.wsValue == null || this.successCallBack == null || this.failedCallBack == null) {
                if (Model.WebValue.isDebug)
                    console.log("Service value is null, cant start service ! ");
                return;
            }
            else {
                if (this.wsValue.Type == egret.HttpMethod.POST) {
                    if (this.wsValue.isJson) {
                        this.postWebServiceWithJson(this.wsValue.baseURL, JSON.stringify(this.wsValue.paramList));
                    }
                    else {
                        this.postWebServiceWithoutJson(this.wsValue.baseURL, this.wsValue.paramList);
                    }
                }
                else {
                    this.getWebService(""); //TODO: ValueParse.UrlParse (_wsValue._baseURL, _wsValue._paramList)
                }
                if (WebServiceToolKit.onRequestSend && this.isShowFireWind)
                    WebServiceToolKit.onRequestSend(); //开启风火轮.
            }
        };
        /**
         * @发送get请求.(缺UrlParse)
         * @TODO:这层封装貌似没什么用了,如果将来不用扩展，可以直接删了.
         */
        p.getWebService = function (_serviceUrl) {
            var request = new egret.HttpRequest();
            request.open(_serviceUrl, this.wsValue.Type);
            this.CallService(request);
        };
        /**
         * @支持json的Post请求.
         * @TODO:这层封装貌似没什么用了,如果将来不用扩展，可以直接删了.
         */
        p.postWebServiceWithJson = function (_serviceUrl, _jstring) {
            var request = new egret.HttpRequest();
            request.open(_serviceUrl, this.wsValue.Type);
            this.CallService(request, _jstring);
        };
        /**
         * @不支持json的Post请求.(缺UrlParse)
         * @TODO:这层封装貌似没什么用了,如果将来不用扩展，可以直接删了.
         */
        p.postWebServiceWithoutJson = function (_serviceUrl, _jstring) {
            var request = new egret.HttpRequest();
            request.open(_serviceUrl, this.wsValue.Type);
            this.CallService(request, _jstring);
        };
        p.CallService = function (request, _jstring) {
            if (_jstring === void 0) { _jstring = null; }
            if (!Model.WebValue.isWebService) {
                this.successCallBack(request.response);
                console.log("zhujun: cant send web service , immediate return success ! ");
                return;
            }
            request.responseType = egret.HttpResponseType.TEXT;
            console.log("zhujun: this.webServiceHeader " + Model.WebValue.webServiceHeader);
            request.setRequestHeader("USER-TOKEN", Model.WebValue.webServiceHeader);
            request.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
            //            console.log("cai_hoatian _jstring " + _jstring);
            //            console.log(_jstring == "null");
            //            var aaa : string = null;
            //            var bbb : any = null;
            //             console.log(aaa==bbb);
            //            if(_jstring == null){
            //                Model.Console.log("zhu_jun 1  _jstring" + _jstring);
            //                request.send(true);
            //            }else{
            //                request.send(_jstring);
            //                Model.Console.log("cai_hoatian2 _jstring " + _jstring);
            //            }
            _jstring == null ? request.send(true) : request.send(_jstring);
            //            _jstring
            //            request.send(_jstring);
            var serviceStartTime = egret.getTimer(); //开始计时.
            //            while(!this.isDone) {
            //                console.log("egret.getTimer() " + egret.getTimer() + " serviceStartTime "+ serviceStartTime);
            //                if(egret.getTimer() - serviceStartTime >= this.customTimeOut) {//超时.
            //                    if(WebValue.isDebug)console.log("Service time out ! ");
            //                    if(WebServiceToolKit.onResponseRecived) WebServiceToolKit.onResponseRecived();//关闭风火轮.
            //                    this.failedCallBack(WebServiceErrorCode.SERVICE_TIMEOUT);
            //                    request.abort();
            //                    break;
            //                }
            //            }
            if (WebServiceToolKit.onResponseRecived && this.isShowFireWind)
                WebServiceToolKit.onResponseRecived; //关闭风火轮.
            //NOTE:异常处理移到成功
            //            			#region http state OK
            //			if (string.IsNullOrEmpty (www.error)) {
            ////				#if WEBSERVICE_DEBUG
            ////				Debug.Log("www.text : " + www.text);
            ////				#endif
            //				IDictionary response = (IDictionary)MiniJSON.Json.Deserialize (www.text);
            //				if (response.Contains ("errorStatus")) {
            //					#if WEBSERVICE_DEBUG
            //					Debug.Log("get custom error with : " + www.text);
            //					#endif
            //					webServiceErrorCode error = webServiceErrorCode.SYSTEM_ERROR;
            //					try {//get请求,非jsond格式error返回容错.
            //						error = (webServiceErrorCode)System.Enum.Parse (typeof(webServiceErrorCode), response ["errorStatus"].ToString ());
            //					} catch (Exception e) {
            //						Debug.LogError (e);
            //					} finally {
            //						_FailedCallBack (error);
            //					}
            //					//call back
            //				} else {
            //					#if WEBSERVICE_DEBUG
            //					Debug.Log(www.text);
            //					#endif
            //					
            //					#region set header user token
            //					if (www.responseHeaders.ContainsKey ("USER-TOKEN") && !string.IsNullOrEmpty (www.responseHeaders ["USER-TOKEN"]))
            //						WebServiceToolKit.ChangeUserToken (www.responseHeaders ["USER-TOKEN"]);
            //					#endregion
            //					//call back
            //					_SuccessCallBack (www.text);
            //				}
            //			}
            //			#endregion
            //			#region other state
            //			else {
            //				#if WEBSERVICE_DEBUG
            //				Debug.Log("get error with : " + www.error);
            //				#endif
            //				
            //				#region call back
            //				string[] tArray = www.error.Split (new char[] { ' ' });
            //				if (tArray [0].Equals ("401")) {
            //					_FailedCallBack (webServiceErrorCode.ERROR_UNAUTHOR_OR_AUTHOR_TIMEOUT);
            //				} else if (tArray [0].Contains ("404") || tArray [0].StartsWith ("java")) {
            //					_FailedCallBack (webServiceErrorCode.URL_ERROR);
            //				} else {
            //					_FailedCallBack (webServiceErrorCode.SYSTEM_ERROR);
            //				}
            //				#endregion
            //			}
            //			#endregion
        };
        /**
         * @请求完成.
         */
        p.onComplete = function (event) {
            this.isDone = true;
            var request = event.currentTarget;
            console.log("back token ", request.getResponseHeader("USER-TOKEN"));
            this.changeHeader(request.getResponseHeader("USER-TOKEN"));
            console.log("post data : ", request.response); //error
            console.log("back token ", request.getResponseHeader("USER-TOKEN"));
            if (this.successCallBack) {
                this.successCallBack(request.response); //TODO:自定义错误判定.by zhu_jun,2015.12.28.返回webServiceErrorCode
            }
            //            request.abort();
            //            this.clearListenEvent(request);
        };
        /**
         * @请求系统错.
         */
        p.onIOError = function (event) {
            this.isDone = true;
            console.log("post error : " + event);
            if (this.failedCallBack != null) {
                //                event
                this.failedCallBack(WebServiceErrorCode.SYSTEM_ERROR); //TODO:系统错误判定.by zhu_jun,2015.12.28.返回webServiceErrorCode
            }
        };
        /**
         * @发送中回调.
         */
        p.onProgress = function (event) {
            this.isDone = true;
            console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
            if (this.onProgressCallBack != null) {
                this.onProgressCallBack(event);
            }
            //            this.clearListenEvent(event.);
        };
        p.clearListenerEvent = function (request) {
            request.removeEventListener(egret.Event.COMPLETE, this.onComplete, this);
            request.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
            request.removeEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
        };
        //		/** 
        //		 * @短链接header.
        //		 */ 
        //        private static webServiceHeader: string = "";
        /**
         * @请求发送时调用方法.
         */
        WebServiceToolKit.onRequestSend = null;
        /**
         * @请求回响时调用.
         */
        WebServiceToolKit.onResponseRecived = null;
        return WebServiceToolKit;
    })();
    Model.WebServiceToolKit = WebServiceToolKit;
    egret.registerClass(WebServiceToolKit,'Model.WebServiceToolKit');
})(Model || (Model = {}));
