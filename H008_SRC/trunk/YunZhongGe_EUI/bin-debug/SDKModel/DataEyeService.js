var Model;
(function (Model) {
    /**
     *
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var DataEyeService = (function () {
        function DataEyeService() {
        }
        var d = __define,c=DataEyeService,p=c.prototype;
        DataEyeService.initDataEye = function (_accountId, _channel) {
            var agentConfig = {
                appName: Model.WebValue.appName,
                appId: "CF2AE1D27E276445E74E9440FF1C52B69",
                appVersion: Model.WebValue.appVer,
                channel: _channel,
                uid: _accountId,
                errorReport: true
            };
            DCAgent.init(agentConfig);
        };
        return DataEyeService;
    })();
    Model.DataEyeService = DataEyeService;
    egret.registerClass(DataEyeService,'Model.DataEyeService');
})(Model || (Model = {}));
