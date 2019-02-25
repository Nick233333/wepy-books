'use strict';

var VALID_MODE = ['closeable'];
var FONT_COLOR = '#f60';
var BG_COLOR = '#fff7cc';

Component({
    externalClasses: ['i-class'],

    properties: {
        closable: {
            type: Boolean,
            value: false
        },
        icon: {
            type: String,
            value: ''
        },
        loop: {
            type: Boolean,
            value: false
        },
        // 背景颜色
        backgroundcolor: {
            type: String,
            value: '#fefcec'
        },
        // 字体及图标颜色
        color: {
            type: String,
            value: '#f76a24'
        },
        // 滚动速度
        speed: {
            type: Number,
            value: 1000
        }
    },

    data: {
        show: true,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null
    },
    detached: function detached() {
        this.destroyTimer();
    },
    ready: function ready() {
        if (this.data.loop) {
            this.initAnimation();
        }
    },


    methods: {
        initAnimation: function initAnimation() {
            var _this = this;

            wx.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect(function (wrapRect) {
                wx.createSelectorQuery().in(_this).select('.i-noticebar-content').boundingClientRect(function (rect) {
                    var duration = rect.width / 40 * _this.data.speed;
                    var animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: "linear"
                    });
                    _this.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration,
                        animation: animation
                    }, function () {
                        _this.startAnimation();
                    });
                }).exec();
            }).exec();
        },
        startAnimation: function startAnimation() {
            var _this2 = this;

            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                var resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            var animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(function () {
                _this2.setData({
                    animationData: animationData.export()
                });
            }, 100);
            var timer = setTimeout(function () {
                _this2.startAnimation();
            }, this.data.duration);
            this.setData({
                timer: timer
            });
        },
        destroyTimer: function destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose: function handleClose() {
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlZBTElEX01PREUiLCJGT05UX0NPTE9SIiwiQkdfQ09MT1IiLCJDb21wb25lbnQiLCJleHRlcm5hbENsYXNzZXMiLCJwcm9wZXJ0aWVzIiwiY2xvc2FibGUiLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsImxvb3AiLCJiYWNrZ3JvdW5kY29sb3IiLCJjb2xvciIsInNwZWVkIiwiTnVtYmVyIiwiZGF0YSIsInNob3ciLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsImR1cmF0aW9uIiwiYW5pbWF0aW9uIiwidGltZXIiLCJkZXRhY2hlZCIsImRlc3Ryb3lUaW1lciIsInJlYWR5IiwiaW5pdEFuaW1hdGlvbiIsIm1ldGhvZHMiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndyYXBSZWN0IiwicmVjdCIsImNyZWF0ZUFuaW1hdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwic2V0RGF0YSIsInN0YXJ0QW5pbWF0aW9uIiwiZXhlYyIsIm9wdGlvbiIsInRyYW5zaXRpb24iLCJyZXNldEFuaW1hdGlvbiIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVDbG9zZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxhQUFhLENBQUMsV0FBRCxDQUFuQjtBQUNBLElBQU1DLGFBQWEsTUFBbkI7QUFDQSxJQUFNQyxXQUFXLFNBQWpCOztBQUVBQyxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsZ0JBQVk7QUFDUkMsa0JBQVU7QUFDTkMsa0JBQU1DLE9BREE7QUFFTkMsbUJBQU87QUFGRCxTQURGO0FBS1JDLGNBQU07QUFDRkgsa0JBQU1JLE1BREo7QUFFRkYsbUJBQU87QUFGTCxTQUxFO0FBU1JHLGNBQU07QUFDRkwsa0JBQU1DLE9B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QUtULGNBQUw7QUFDSCxhQUZhLEVBRVgsS0FBS3RCLElBQUwsQ0FBVUksUUFGQyxDQUFkO0FBR0EsaUJBQUtpQixPQUFMLENBQWE7QUFDVGY7QUFEUyxhQUFiO0FBR0gsU0EzQ0k7QUE0Q0xFLG9CQTVDSywwQkE0Q1U7QUFDWCxnQkFBSSxLQUFLUixJQUFMLENBQVVNLEtBQWQsRUFBcUI7QUFDakIwQiw2QkFBYSxLQUFLaEMsSUFBTCxDQUFVTSxLQUF2QjtBQUNIO0FBQ0osU0FoREk7QUFpREwyQixtQkFqREsseUJBaURTO0FBQ1YsaUJBQUt6QixZQUFMO0FBQ0EsaUJBQUthLE9BQUwsQ0FBYTtBQUNUcEIsc0JBQU0sS0FERztBQUVUSyx1QkFBTztBQUZFLGFBQWI7QUFJSDtBQXZESTtBQWxESCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVkFMSURfTU9ERSA9IFsnY2xvc2VhYmxlJ107XG5jb25zdCBGT05UX0NPTE9SID0gJyNmNjAnO1xuY29uc3QgQkdfQ09MT1IgPSAnI2ZmZjdjYyc7XG5cbkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY2xvc2FibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGxvb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6IOM5pmv6aKc6ImyXG4gICAgICAgIGJhY2tncm91bmRjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjZmVmY2VjJ1xuICAgICAgICB9LFxuICAgICAgICAvLyDlrZfkvZPlj4rlm77moIfpopzoibJcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2Y3NmEyNCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5rua5Yqo6YCf5bqmXG4gICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwMFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgd3JhcFdpZHRoOiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIGFuaW1hdGlvbjogbnVsbCxcbiAgICAgICAgdGltZXI6IG51bGwsXG4gICAgfSxcbiAgICBkZXRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95VGltZXIoKTtcbiAgICB9LFxuICAgIHJlYWR5KCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoJy5pLW5vdGljZWJhci1jb250ZW50LXdyYXAnKS5ib3VuZGluZ0NsaWVudFJlY3QoKHdyYXBSZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpLnNlbGVjdCgnLmktbm90aWNlYmFyLWNvbnRlbnQnKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSByZWN0LndpZHRoIC8gNDAgKiB0aGlzLmRhdGEuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwV2lkdGg6IHdyYXBSZWN0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmV4ZWMoKTtcblxuICAgICAgICAgICAgfSkuZXhlYygpO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIC8vcmVzZXRcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYW5pbWF0aW9uLm9wdGlvbi50cmFuc2l0aW9uLmR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmFuaW1hdGlvbi5vcHRpb24udHJhbnNpdGlvbi5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRBbmltYXRpb24gPSB0aGlzLmRhdGEuYW5pbWF0aW9uLnRyYW5zbGF0ZVgodGhpcy5kYXRhLndyYXBXaWR0aCkuc3RlcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IHJlc2V0QW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGEuYW5pbWF0aW9uLm9wdGlvbi50cmFuc2l0aW9uLmR1cmF0aW9uID0gdGhpcy5kYXRhLmR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGF0YSA9IHRoaXMuZGF0YS5hbmltYXRpb24udHJhbnNsYXRlWCgtdGhpcy5kYXRhLndpZHRoKS5zdGVwKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmRhdGEuZHVyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB0aW1lcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95VGltZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGF0YS50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95VGltZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGltZXI6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=