var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author fangchao
     *
     */
    var EffectParticleVM = (function (_super) {
        __extends(EffectParticleVM, _super);
        function EffectParticleVM(_uiGroup, _onCallBack) {
            _super.call(this);
            this.uiGroup = _uiGroup;
            this.onCallBack = _onCallBack;
        }
        var d = __define,c=EffectParticleVM,p=c.prototype;
        p.initParticle = function (_json, _png) {
            var _this = this;
            //获取纹理
            var texture = RES.getRes(_png);
            //获取配置
            var config = RES.getRes(_json);
            //创建 GravityParticleSystem
            this.system = new particle.GravityParticleSystem(texture, config);
            //启动粒子库
            this.system.start();
            this.system.addEventListener(egret.Event.LOOP_COMPLETE, function () {
                _this.uiGroup.removeChild(_this.system);
            }, this);
            //将例子系统添加到舞台
            this.uiGroup.addChild(this.system);
        };
        return EffectParticleVM;
    })(eui.Component);
    ViewModel.EffectParticleVM = EffectParticleVM;
    egret.registerClass(EffectParticleVM,'ViewModel.EffectParticleVM');
})(ViewModel || (ViewModel = {}));
