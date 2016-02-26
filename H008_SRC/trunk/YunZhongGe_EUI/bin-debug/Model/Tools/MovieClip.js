var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var MovieClip = (function () {
        //        private onCallBack :Function = null;
        function MovieClip(_image, _list, _rate) {
            this.i = 0;
            this.image = _image;
            this.rate = _rate;
            this.list = _list;
        }
        var d = __define,c=MovieClip,p=c.prototype;
        p.play = function (_onCallBack) {
            var _this = this;
            egret.setTimeout(function () {
                var a = _onCallBack;
                _this.image.source = _this.list[_this.i];
                _this.i++;
                if (_this.i < _this.list.length) {
                    _this.play(_onCallBack);
                }
                else {
                    _this.image.source = null;
                    if (_onCallBack != null) {
                        _onCallBack();
                    }
                }
            }, this, 1000 / this.rate);
        };
        return MovieClip;
    })();
    Model.MovieClip = MovieClip;
    egret.registerClass(MovieClip,'Model.MovieClip');
})(Model || (Model = {}));
