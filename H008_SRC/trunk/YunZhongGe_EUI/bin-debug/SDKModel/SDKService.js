var Model;
(function (Model) {
    /**
     *
     * @author
     * http://www.luckywings.net/game/h005/?channel=3
     * http://www.play68.com/play/ly_axb
     * appid:656
     * 爱学霸
     * key:b92ababa363be1e416db0ace8f16fe33
     */
    var SDKService = (function () {
        //    	 platform;
        function SDKService() {
        }
        var d = __define,c=SDKService,p=c.prototype;
        /*
         * 初始化平台sdk，区分平台.
         */
        SDKService.initSDK = function (_onCallBack) {
            if (Model.Tools.getURLParam("channel") == "3") {
                Model.Play68Service.assignmentPlay68Model(); //构造account参数.
                _onCallBack(); //call back直接用参数登陆.
                Model.DataEyeService.initDataEye(Model.WebValue.accountM.id, "3");
            }
            else {
                alert("当前平台非法,请勿充值!");
            }
        };
        SDKService.initPay = function (_itemId, _itemName, _price, _onCallBack) {
            if (Model.Tools.getURLParam("channel") == "3") {
                payItem(_itemId, _itemName, _price, 1);
            }
            else {
                alert("当前平台非法,请勿充值!");
            }
        };
        return SDKService;
    })();
    Model.SDKService = SDKService;
    egret.registerClass(SDKService,'Model.SDKService');
})(Model || (Model = {}));
