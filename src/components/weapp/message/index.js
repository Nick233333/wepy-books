'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var default_data = {
    visible: false,
    content: '',
    duration: 2,
    type: 'default' // default || success || warning || error
};

var timmer = null;

Component({
    externalClasses: ['i-class'],

    data: _extends({}, default_data),

    methods: {
        handleShow: function handleShow(options) {
            var _this = this;

            var _options$type = options.type,
                type = _options$type === undefined ? 'default' : _options$type,
                _options$duration = options.duration,
                duration = _options$duration === undefined ? 2 : _options$duration;


            this.setData(_extends({}, options, {
                type: type,
                duration: duration,
                visible: true
            }));

            var d = this.data.duration * 1000;

            if (timmer) clearTimeout(timmer);
            if (d !== 0) {
                timmer = setTimeout(function () {
                    _this.handleHide();
                    timmer = null;
                }, d);
            }
        },
        handleHide: function handleHide() {
            this.setData(_extends({}, default_data));
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRfZGF0YSIsInZpc2libGUiLCJjb250ZW50IiwiZHVyYXRpb24iLCJ0eXBlIiwidGltbWVyIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVTaG93Iiwib3B0aW9ucyIsInNldERhdGEiLCJkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZUhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxlQUFlO0FBQ2pCQyxhQUFTLEtBRFE7QUFFakJDLGFBQVMsRUFGUTtBQUdqQkMsY0FBVSxDQUhPO0FBSWpCQyxVQUFNLFNBSlcsQ0FJQTtBQUpBLENBQXJCOztBQU9BLElBQUlDLFNBQVMsSUFBYjs7QUFFQUMsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLHVCQUNPUixZQURQLENBSE07O0FBT05TLGFBQVM7QUFDTEMsa0JBREssc0JBQ09DLE9BRFAsRUFDZ0I7QUFBQTs7QUFBQSxnQ0FDMEJBLE9BRDFCLENBQ1RQLElBRFM7QUFBQSxnQkFDVEEsSUFEUyxpQ0FDRixTQURFO0FBQUEsb0NBQzBCTyxPQUQxQixDQUNTUixRQURUO0FBQUEsZ0JBQ1NBLFFBRFQscUNBQ29CLENBRHBCOzs7QUFHakIsaUJBQUtTLE9BQUwsY0FDT0QsT0FEUDtBQUVJUCwwQkFGSjtBQUdJRCxrQ0FISjtBQUlJRix5QkFBUztBQUpiOztBQU9BLGdCQUFNWSxJQUFJLEtBQUtMLElBQUwsQ0FBVUwsUUFBVixHQUFxQixJQUEvQjs7QUFFQSxnQkFBSUUsTUFBSixFQUFZUyxhQUFhVCxNQUFiO0FBQ1osZ0JBQUlRLE1BQU0sQ0FBVixFQUFhO0FBQ1RSLHlCQUFTVSxXQUFXLFlBQU07QUFDdEIsMEJBQUtDLFVBQUw7QUFDQVgsNkJBQVMsSUFBVDtBQUNILGlCQUhRLEVBR05RLENBSE0sQ0FBVDtBQUlIO0FBQ0osU0FwQkk7QUFzQkxHLGtCQXRCSyx3QkFzQlM7QUFDVixpQkFBS0osT0FBTCxjQUNPWixZQURQO0FBR0g7QUExQkk7QUFQSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdF9kYXRhID0ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIGR1cmF0aW9uOiAyLFxuICAgIHR5cGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCB8fCBzdWNjZXNzIHx8IHdhcm5pbmcgfHwgZXJyb3Jcbn07XG5cbmxldCB0aW1tZXIgPSBudWxsO1xuXG5Db21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICBkYXRhOiB7XG4gICAgICAgIC4uLmRlZmF1bHRfZGF0YVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZVNob3cgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSA9ICdkZWZhdWx0JywgZHVyYXRpb24gPSAyIH0gPSBvcHRpb25zO1xuXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS5kdXJhdGlvbiAqIDEwMDA7XG5cbiAgICAgICAgICAgIGlmICh0aW1tZXIpIGNsZWFyVGltZW91dCh0aW1tZXIpO1xuICAgICAgICAgICAgaWYgKGQgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aW1tZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVIaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSwgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlSGlkZSAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRfZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=