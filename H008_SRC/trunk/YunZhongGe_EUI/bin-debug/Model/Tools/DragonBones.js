/**
 *
 * @author T.J
 *
 */
var Model;
(function (Model) {
    var DragonBones = (function () {
        function DragonBones() {
        }
        var d = __define,c=DragonBones,p=c.prototype;
        /*
         * 创建工厂， 加载资源， 添加事例， 添加纹理
         * by cai_haotian 2016.2.15.
         */
        DragonBones.addArmatureToFactory = function (dData, tData, pic) {
            var factory;
            try {
                factory = new dragonBones.EgretFactory();
                var dragonbonesData = RES.getRes(dData);
                var textureData = RES.getRes(tData);
                var texture = RES.getRes(pic);
                factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
                factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
            }
            catch (e) {
                console.error("DragonBones Factory Get Resource or Parse Data Error.");
            }
            return factory;
        };
        /*
         * 构建骨架
         */
        DragonBones.buildArmature = function (factory, name) {
            var armature;
            try {
                armature = factory.buildArmature(name);
            }
            catch (e) {
                console.error("DragonBones Factory Build Armature Error.");
            }
            return armature;
        };
        /*
         * 播放动画.
         */
        DragonBones.play = function (parent, armature, action, x, y, playTimes) {
            if (playTimes === void 0) { playTimes = 0; }
            try {
                armature.display.x = x;
                armature.display.y = y;
                parent.addChild(armature.display);
                dragonBones.WorldClock.clock.add(armature);
                armature.animation.gotoAndPlay(action, -1, -1, playTimes);
            }
            catch (e) {
                console.error("DragonBones Factory Play Error.");
            }
        };
        return DragonBones;
    })();
    Model.DragonBones = DragonBones;
    egret.registerClass(DragonBones,'Model.DragonBones');
})(Model || (Model = {}));
