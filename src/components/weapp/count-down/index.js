'use strict';

Component({
    properties: {
        target: Number,
        showDay: Boolean,
        callback: String,
        format: Array,
        clearTimer: Boolean
    },
    externalClasses: ['countdown-class'],
    data: {
        time: '',
        resultFormat: [],
        changeFormat: false
    },
    ready: function ready() {
        this.getFormat();
    },

    methods: {
        getFormat: function getFormat() {
            var data = this.data;
            var len = data.format.length;

            if (!data.showDay) data.resultFormat.push('');

            if (len >= 3) {
                for (var i = 0; i < len; i++) {
                    if (data.resultFormat.length >= 4) break;
                    if (data.format[i]) {
                        data.resultFormat.push(data.format[i].toString());
                    }
                }

                if (data.resultFormat.length >= 4) data.changeFormat = true;
            }

            this.getLastTime();
        },
        init: function init() {
            var self = this;
            setTimeout(function () {
                self.getLastTime.call(self);
            }, 1000);
        },
        getLastTime: function getLastTime() {
            var data = this.data;
            var gapTime = Math.ceil((data.target - new Date().getTime()) / 1000);
            var result = '';
            var time = '00:00:00';
            var day = '00';
            var format = data.resultFormat;

            if (gapTime > 0) {
                day = this.formatNum(parseInt(gapTime / 86400));
                var lastTime = gapTime % 86400;
                var hour = this.formatNum(parseInt(lastTime / 3600));
                lastTime = lastTime % 3600;
                var minute = this.formatNum(parseInt(lastTime / 60));
                var second = this.formatNum(lastTime % 60);

                if (data.changeFormat) time = '' + hour + format[1] + minute + format[2] + second + format[3];else time = hour + ':' + minute + ':' + second;

                if (!data.clearTimer) this.init.call(this);
            } else {
                this.endfn();
            }

            if (data.showDay) {
                if (data.changeFormat) {
                    result = '' + day + format[0] + ' ' + time;
                } else {
                    result = day + 'd ' + time;
                }
            } else {
                result = time;
            }
            this.setData({
                time: result
            });
        },
        formatNum: function formatNum(num) {
            return num > 9 ? num : '0' + num;
        },
        endfn: function endfn() {
            this.triggerEvent('callback', {});
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0YXJnZXQiLCJOdW1iZXIiLCJzaG93RGF5IiwiQm9vbGVhbiIsImNhbGxiYWNrIiwiU3RyaW5nIiwiZm9ybWF0IiwiQXJyYXkiLCJjbGVhclRpbWVyIiwiZXh0ZXJuYWxDbGFzc2VzIiwiZGF0YSIsInRpbWUiLCJyZXN1bHRGb3JtYXQiLCJjaGFuZ2VGb3JtYXQiLCJyZWFkeSIsImdldEZvcm1hdCIsIm1ldGhvZHMiLCJsZW4iLCJsZW5ndGgiLCJwdXNoIiwiaSIsInRvU3RyaW5nIiwiZ2V0TGFzdFRpbWUiLCJpbml0Iiwic2VsZiIsInNldFRpbWVvdXQiLCJjYWxsIiwiZ2FwVGltZSIsIk1hdGgiLCJjZWlsIiwiRGF0ZSIsImdldFRpbWUiLCJyZXN1bHQiLCJkYXkiLCJmb3JtYXROdW0iLCJwYXJzZUludCIsImxhc3RUaW1lIiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImVuZGZuIiwic2V0RGF0YSIsIm51bSIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxnQkFBWTtBQUNSQyxnQkFBUUMsTUFEQTtBQUVSQyxpQkFBU0MsT0FGRDtBQUdSQyxrQkFBVUMsTUFIRjtBQUlSQyxnQkFBUUMsS0FKQTtBQUtSQyxvQkFBWUw7QUFMSixLQUROO0FBUU5NLHFCQUFpQixDQUFDLGlCQUFELENBUlg7QUFTTkMsVUFBTTtBQUNGQyxjQUFNLEVBREo7QUFFRkMsc0JBQWMsRUFGWjtBQUdGQyxzQkFBYztBQUhaLEtBVEE7QUFjTkMsU0FkTSxtQkFjRTtBQUNKLGFBQUtDLFNBQUw7QUFFSCxLQWpCSzs7QUFrQk5DLGFBQVM7QUFDTEQsaUJBREssdUJBQ087QUFDUixnQkFBTUwsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGdCQUFNTyxNQUFNUCxLQUFLSixNQUFMLENBQVlZLE1BQXhCOztBQUVBLGdCQUFJLENBQUNSLEtBQUtSLE9BQVYsRUFBbUJRLEtBQUtFLFlBQUwsQ0FBa0JPLElBQWxCLENBQXVCLEVBQXZCOztBQUVuQixnQkFBSUYsT0FBTyxDQUFYLEVBQWM7QUFDVixxQkFBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILEdBQXBCLEVBQXlCRyxHQUF6QixFQUE4QjtBQUMxQix3QkFBSVYsS0FBS0UsWUFBTCxDQUFrQk0sTUFBbEIsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDbkMsd0JBQUlSLEtBQUtKLE1BQUwsQ0FBWWMsQ0FBWixDQUFKLEVBQW9CO0FBQ2hCViw2QkFBS0UsWUFBTCxDQUFrQk8sSUFBbEIsQ0FBdUJULEtBQUtKLE1BQUwsQ0FBWWMsQ0FBWixFQUFlQyxRQUFmLEVBQXZCO0FBQ0g7QUFDSjs7QUFFRCxvQkFBSVgsS0FBS0UsWUFBTCxDQUFrQk0sTUFBbEIsSUFBNEIsQ0FBaEMsRUFBbUNSLEtBQUtHLFlBQUwsR0FBb0IsSUFBcEI7QUFDdEM7O0FBRUQsaUJBQUtTLFdBQUw7QUFDSCxTQW5CSTtBQW9CTEMsWUFwQkssa0JBb0JFO0FBQ0gsZ0JBQU1DLE9BQU8sSUFBYjtBQUNBQyx1QkFBVyxZQUFZO0FBQ25CRCxxQkFBS0YsV0FBTCxDQUFpQkksSUFBakIsQ0FBc0JGLElBQXRCO0FBQ0gsYUFGRCxFQUVHLElBRkg7QUFHSCxTQXpCSTtBQTBCTEYsbUJBMUJLLHlCQTBCUztBQUNWLGdCQUFNWixPQUFPLEtBQUtBLElBQWxCO0FBQ0EsZ0JBQU1pQixVQUFVQyxLQUFLQyxJQUFMLENBQVUsQ0FBQ25CLEtBQUtWLE1BQUwsR0FBYyxJQUFJOEIsSUFBSixHQUFXQyxPQUFYLEVBQWYsSUFBdUMsSUFBakQsQ0FBaEI7QUFDQSxnQkFBSUMsU0FBUyxFQUFiO0FBQ0EsZ0JBQUlyQixPQUFPLFVBQVg7QUFDQSxnQkFBSXNCLE1BQU0sSUFBVjtBQUNBLGdCQUFNM0IsU0FBU0ksS0FBS0UsWUFBcEI7O0FBRUEsZ0JBQUllLFVBQVUsQ0FBZCxFQUFpQjtBQUNiTSxzQkFBTSxLQUFLQyxTQUFMLENBQWVDLFNBQVNSLFVBQVUsS0FBbkIsQ0FBZixDQUFOO0FBQ0Esb0JBQUlTLFdBQVdULFVBQVUsS0FBekI7QUFDQSxvQkFBTVUsT0FBTyxLQUFLSCxTQUFMLENBQWVDLFNBQVNDLFdBQVcsSUFBcEIsQ0FBZixDQUFiO0FBQ0FBLDJCQUFXQSxXQUFXLElBQXRCO0FBQ0Esb0JBQU1FLFNBQVMsS0FBS0osU0FBTCxDQUFlQyxTQUFTQyxXQUFXLEVBQXBCLENBQWYsQ0FBZjtBQUNBLG9CQUFNRyxTQUFTLEtBQUtMLFNBQUwsQ0FBZUUsV0FBVyxFQUExQixDQUFmOztBQUVBLG9CQUFJMUIsS0FBS0csWUFBVCxFQUF1QkYsWUFBVTBCLElBQVYsR0FBaUIvQixPQUFPLENBQVAsQ0FBakIsR0FBNkJnQyxNQUE3QixHQUFzQ2hDLE9BQU8sQ0FBUCxDQUF0QyxHQUFrRGlDLE1BQWxELEdBQTJEakMsT0FBTyxDQUFQLENBQTNELENBQXZCLEtBQ0tLLE9BQVUwQixJQUFWLFNBQWtCQyxNQUFsQixTQUE0QkMsTUFBNUI7O0FBRUwsb0JBQUksQ0FBQzdCLEtBQUtGLFVBQVYsRUFBc0IsS0FBS2UsSUFBTCxDQUFVRyxJQUFWLENBQWUsSUFBZjtBQUN6QixhQVpELE1BWU87QUFDSCxxQkFBS2MsS0FBTDtBQUNIOztBQUVELGdCQUFJOUIsS0FBS1IsT0FBVCxFQUFrQjtBQUNkLG9CQUFJUSxLQUFLRyxZQUFULEVBQXVCO0FBQ25CbUIsa0NBQVlDLEdBQVosR0FBa0IzQixPQUFPLENBQVAsQ0FBbEIsU0FBK0JLLElBQS9CO0FBQ0gsaUJBRkQsTUFFTztBQUNIcUIsNkJBQVlDLEdBQVosVUFBb0J0QixJQUFwQjtBQUNIO0FBQ0osYUFORCxNQU1PO0FBQ0hxQix5QkFBU3JCLElBQVQ7QUFDSDtBQUNELGlCQUFLOEIsT0FBTCxDQUFhO0FBQ1Q5QixzQkFBTXFCO0FBREcsYUFBYjtBQUlILFNBL0RJO0FBZ0VMRSxpQkFoRUsscUJBZ0VLUSxHQWhFTCxFQWdFVTtBQUNYLG1CQUFPQSxNQUFNLENBQU4sR0FBVUEsR0FBVixTQUFvQkEsR0FBM0I7QUFDSCxTQWxFSTtBQW1FTEYsYUFuRUssbUJBbUVHO0FBQ0osaUJBQUtHLFlBQUwsQ0FBa0IsVUFBbEIsRUFBOEIsRUFBOUI7QUFDSDtBQXJFSTtBQWxCSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhcmdldDogTnVtYmVyLFxuICAgICAgICBzaG93RGF5OiBCb29sZWFuLFxuICAgICAgICBjYWxsYmFjazogU3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IEFycmF5LFxuICAgICAgICBjbGVhclRpbWVyOiBCb29sZWFuXG4gICAgfSxcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnY291bnRkb3duLWNsYXNzJ10sXG4gICAgZGF0YToge1xuICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgcmVzdWx0Rm9ybWF0OiBbXSxcbiAgICAgICAgY2hhbmdlRm9ybWF0OiBmYWxzZVxuICAgIH0sXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuZ2V0Rm9ybWF0KCk7XG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0Rm9ybWF0KCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGRhdGEuZm9ybWF0Lmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKCFkYXRhLnNob3dEYXkpIGRhdGEucmVzdWx0Rm9ybWF0LnB1c2goJycpO1xuXG4gICAgICAgICAgICBpZiAobGVuID49IDMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdEZvcm1hdC5sZW5ndGggPj0gNCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmZvcm1hdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXN1bHRGb3JtYXQucHVzaChkYXRhLmZvcm1hdFtpXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdEZvcm1hdC5sZW5ndGggPj0gNCkgZGF0YS5jaGFuZ2VGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdldExhc3RUaW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0TGFzdFRpbWUuY2FsbChzZWxmKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXRMYXN0VGltZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBnYXBUaW1lID0gTWF0aC5jZWlsKChkYXRhLnRhcmdldCAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSAnMDA6MDA6MDAnO1xuICAgICAgICAgICAgbGV0IGRheSA9ICcwMCc7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBkYXRhLnJlc3VsdEZvcm1hdDtcblxuICAgICAgICAgICAgaWYgKGdhcFRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGF5ID0gdGhpcy5mb3JtYXROdW0ocGFyc2VJbnQoZ2FwVGltZSAvIDg2NDAwKSk7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RUaW1lID0gZ2FwVGltZSAlIDg2NDAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXIgPSB0aGlzLmZvcm1hdE51bShwYXJzZUludChsYXN0VGltZSAvIDM2MDApKTtcbiAgICAgICAgICAgICAgICBsYXN0VGltZSA9IGxhc3RUaW1lICUgMzYwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGUgPSB0aGlzLmZvcm1hdE51bShwYXJzZUludChsYXN0VGltZSAvIDYwKSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gdGhpcy5mb3JtYXROdW0obGFzdFRpbWUgJSA2MCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGFuZ2VGb3JtYXQpIHRpbWUgPSBgJHtob3VyfSR7Zm9ybWF0WzFdfSR7bWludXRlfSR7Zm9ybWF0WzJdfSR7c2Vjb25kfSR7Zm9ybWF0WzNdfWA7XG4gICAgICAgICAgICAgICAgZWxzZSB0aW1lID0gYCR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfWA7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY2xlYXJUaW1lcikgdGhpcy5pbml0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZm4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuc2hvd0RheSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNoYW5nZUZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBgJHtkYXl9JHtmb3JtYXRbMF19ICR7dGltZX1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGAke2RheX1kICR7dGltZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgdGltZTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXROdW0obnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtID4gOSA/IG51bSA6IGAwJHtudW19YDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kZm4oKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2FsbGJhY2snLCB7fSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==