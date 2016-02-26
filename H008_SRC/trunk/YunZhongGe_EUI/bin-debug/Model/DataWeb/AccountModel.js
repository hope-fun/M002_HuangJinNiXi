var Model;
(function (Model) {
    /**
     * @author: zhu_jun.
     * @date: 2015.12.25.
     */
    var AccountModel = (function () {
        function AccountModel(_id) {
            this.id = _id;
        }
        var d = __define,c=AccountModel,p=c.prototype;
        return AccountModel;
    })();
    Model.AccountModel = AccountModel;
    egret.registerClass(AccountModel,'Model.AccountModel');
})(Model || (Model = {}));
