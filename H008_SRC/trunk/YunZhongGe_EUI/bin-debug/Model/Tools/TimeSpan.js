var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var TimeSpan = (function () {
        function TimeSpan(milliseconds, seconds, minutes, hours, days) {
            this.version = "1.2";
            // Millisecond-constants
            this.msecPerSecond = 1000;
            this.msecPerMinute = 60000;
            this.msecPerHour = 3600000;
            this.msecPerDay = 86400000;
            // Internally we store the TimeSpan as Milliseconds
            this.msecs = 0;
            // Functions to interact with other TimeSpans
            this.isTimeSpan = true;
            // Constructor Logic
            if (this.isNumeric(days)) {
                this.msecs += (days * this.msecPerDay);
            }
            if (this.isNumeric(hours)) {
                this.msecs += (hours * this.msecPerHour);
            }
            if (this.isNumeric(minutes)) {
                this.msecs += (minutes * this.msecPerMinute);
            }
            if (this.isNumeric(seconds)) {
                this.msecs += (seconds * this.msecPerSecond);
            }
            if (this.isNumeric(milliseconds)) {
                this.msecs += milliseconds;
            }
        }
        var d = __define,c=TimeSpan,p=c.prototype;
        /*
         * Helper functions
         */
        p.isNumeric = function (input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        };
        /*
         * Addition Functions
         */
        p.addMilliseconds = function (milliseconds) {
            if (!this.isNumeric(milliseconds)) {
                return;
            }
            this.msecs += milliseconds;
        };
        p.addSeconds = function (seconds) {
            if (!this.isNumeric(seconds)) {
                return;
            }
            this.msecs += (seconds * this.msecPerSecond);
        };
        p.addMinutes = function (minutes) {
            if (!this.isNumeric(minutes)) {
                return;
            }
            this.msecs += (minutes * this.msecPerMinute);
        };
        p.addHours = function (hours) {
            if (!this.isNumeric(hours)) {
                return;
            }
            this.msecs += (hours * this.msecPerHour);
        };
        p.addDays = function (days) {
            if (!this.isNumeric(days)) {
                return;
            }
            this.msecs += (days * this.msecPerDay);
        };
        /*
         * Subtraction Functions
         */
        p.subtractMilliseconds = function (milliseconds) {
            if (!this.isNumeric(milliseconds)) {
                return;
            }
            this.msecs -= milliseconds;
        };
        p.subtractSeconds = function (seconds) {
            if (!this.isNumeric(seconds)) {
                return;
            }
            this.msecs -= (seconds * this.msecPerSecond);
        };
        p.subtractMinutes = function (minutes) {
            if (!this.isNumeric(minutes)) {
                return;
            }
            this.msecs -= (minutes * this.msecPerMinute);
        };
        p.subtractHours = function (hours) {
            if (!this.isNumeric(hours)) {
                return;
            }
            this.msecs -= (hours * this.msecPerDay);
        };
        p.subtractDays = function (days) {
            if (!this.isNumeric(days)) {
                return;
            }
            this.msecs -= (days * this.msecPerDay);
        };
        /*
         * Functions to interact with other TimeSpans
         */
        p.add = function (otherTimeSpan) {
            if (!otherTimeSpan.isTimeSpan) {
                return;
            }
            this.msecs += otherTimeSpan.totalMilliseconds();
        };
        p.subtract = function (otherTimeSpan) {
            if (!otherTimeSpan.isTimeSpan) {
                return;
            }
            this.msecs += otherTimeSpan.totalMilliseconds();
        };
        p.equals = function (otherTimeSpan) {
            if (!otherTimeSpan.isTimeSpan) {
                return;
            }
            this.msecs === otherTimeSpan.totalMilliseconds();
        };
        /*
         * Getters
         */
        p.totalMilliseconds = function (roundDown) {
            var result = this.msecs;
            if (roundDown === true) {
                result = Math.floor(result);
            }
            return result;
        };
        p.totalSeconds = function (roundDown) {
            var result = this.msecs / this.msecPerSecond;
            if (roundDown === true) {
                result = Math.floor(result);
            }
            return result;
        };
        p.totalMinutes = function (roundDown) {
            var result = this.msecs / this.msecPerMinute;
            if (roundDown === true) {
                result = Math.floor(result);
            }
            return result;
        };
        p.totalHours = function (roundDown) {
            var result = this.msecs / this.msecPerHour;
            if (roundDown === true) {
                result = Math.floor(result);
            }
            return result;
        };
        p.totalDays = function (roundDown) {
            var result = this.msecs / this.msecPerDay;
            if (roundDown === true) {
                result = Math.floor(result);
            }
            return result;
        };
        /*
         * Return a Fraction of the TimeSpan
         */
        p.milliseconds = function () {
            return this.msecs % 1000;
        };
        p.seconds = function () {
            return Math.floor(this.msecs / this.msecPerSecond) % 60;
        };
        p.minutes = function () {
            return Math.floor(this.msecs / this.msecPerMinute) % 60;
        };
        p.hours = function () {
            return Math.floor(this.msecs / this.msecPerHour) % 24;
        };
        p.days = function () {
            return Math.floor(this.msecs / this.msecPerDay);
        };
        p.toString = function () {
            var HH = String("0" + this.hours()).slice(-2);
            var mm = String("0" + this.minutes()).slice(-2);
            var ss = String("0" + this.seconds()).slice(-2);
            return String(HH + ":" + mm + ":" + ss);
        };
        /*
         * Misc. Functions
         */
        p.getVersion = function () {
            return this.version;
        };
        //        console.log("Test: time span to hours " + ("0" + timeSpan.hours().toString()).substring(-2));
        //        console.log("Test: time span to minutes " + timeSpan.minutes().toString());
        //        console.log("Test: time span to seconds " + ("0" + timeSpan.seconds().toString()).slice(-2));
        /*
         * "Static Constructors"
         */
        TimeSpan.FromSeconds = function (seconds) {
            return new TimeSpan(0, seconds, 0, 0, 0);
        };
        TimeSpan.FromMinutes = function (minutes) {
            return new TimeSpan(0, 0, minutes, 0, 0);
        };
        TimeSpan.FromHours = function (hours) {
            return new TimeSpan(0, 0, 0, hours, 0);
        };
        TimeSpan.FromDays = function (days) {
            return new TimeSpan(0, 0, 0, 0, days);
        };
        TimeSpan.FromDates = function (firstDate, secondDate, forcePositive) {
            var differenceMsecs = secondDate.valueOf() - firstDate.valueOf();
            if (forcePositive === true) {
                differenceMsecs = Math.abs(differenceMsecs);
            }
            return new TimeSpan(differenceMsecs, 0, 0, 0, 0);
        };
        return TimeSpan;
    })();
    Model.TimeSpan = TimeSpan;
    egret.registerClass(TimeSpan,'Model.TimeSpan');
})(Model || (Model = {}));
