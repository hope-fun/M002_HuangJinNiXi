var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var Play68Value = (function () {
        function Play68Value() {
        }
        var d = __define,c=Play68Value,p=c.prototype;
        Play68Value.p68Model = new Model.Play68Model();
        Play68Value.p68UserInfo = new Model.P68UserInfo();
        return Play68Value;
    })();
    Model.Play68Value = Play68Value;
    egret.registerClass(Play68Value,'Model.Play68Value');
})(Model || (Model = {}));
