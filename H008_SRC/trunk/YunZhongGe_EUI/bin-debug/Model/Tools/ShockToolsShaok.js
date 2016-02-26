var Model;
(function (Model) {
    /**
     *
     * @author T.J
     *
     */
    var ShockTools = (function () {
        function ShockTools() {
            this.mapPoss = [new egret.Point(0, 3), new egret.Point(3, 2), new egret.Point(-3, -2)];
            this.spritePoss = [new egret.Point(5, 0), new egret.Point(-5, 0), new egret.Point(5, 0)];
            this.shockLength = 0;
            this.shockCount = 0;
            this.rx = 0;
            this.ry = 0;
            this.type = 0;
            this.repeatCount = 0;
            this.isRunning = false;
        }
        var d = __define,c=ShockTools,p=c.prototype;
        p.destroy = function () {
            this.stop();
            this.target = null;
        };
        /**
         * @language zh_CN
         * Shock
         * @param target 震动的对象
         * @param loop 震动次数
         * @param type 震动类型
         */
        p.shock = function (target, loop, type) {
            this.setTarget(target);
            this.setType(type);
            this.start(loop);
        };
        p.start = function (num) {
            if (num === void 0) { num = 5; }
            if (this.isRunning) {
                this.stop();
            }
            this.repeatCount = num;
            this.shockCount = 0;
            if (this.target) {
                this.isRunning = true;
                this.rx = this.target.x;
                this.ry = this.target.y;
                egret.Ticker.getInstance().register(this.onShockEnter, this);
            }
        };
        p.stop = function () {
            this.isRunning = false;
            if (this.target) {
                this.target.x = this.rx;
                this.target.y = this.ry;
                egret.Ticker.getInstance().unregister(this.onShockEnter, this);
            }
        };
        p.setTarget = function (target) {
            this.target = target;
        };
        p.setType = function (type) {
            if (type === void 0) { type = 0; }
            this.type = type;
            if (this.type == ShockTools.MAP) {
                this.shockPoss = this.mapPoss.concat();
                this.shockLength = this.shockPoss.length;
            }
            else if (this.type == ShockTools.SPRITE) {
                this.shockPoss = this.spritePoss.concat();
                this.shockLength = this.shockPoss.length;
            }
        };
        p.onShockEnter = function (e) {
            var maxCount = this.shockLength * this.repeatCount;
            if (this.shockCount >= maxCount) {
                this.stop();
                return;
            }
            var index = this.shockCount % this.shockLength;
            var pos = this.shockPoss[index];
            if (this.target) {
                this.target.x = this.rx + pos.x;
                this.target.y = this.ry + pos.y;
            }
            this.shockCount++;
        };
        ShockTools.MAP = 0;
        ShockTools.SPRITE = 1;
        return ShockTools;
    })();
    Model.ShockTools = ShockTools;
    egret.registerClass(ShockTools,'Model.ShockTools');
})(Model || (Model = {}));
