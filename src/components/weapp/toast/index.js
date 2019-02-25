'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var default_data = {
    visible: false,
    content: '',
    icon: '',
    image: '',
    duration: 2,
    mask: true,
    type: 'default' // default || success || warning || error || loading
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRfZGF0YSIsInZpc2libGUiLCJjb250ZW50IiwiaWNvbiIsImltYWdlIiwiZHVyYXRpb24iLCJtYXNrIiwidHlwZSIsInRpbW1lciIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsImRhdGEiLCJtZXRob2RzIiwiaGFuZGxlU2hvdyIsIm9wdGlvbnMiLCJzZXREYXRhIiwiZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJoYW5kbGVIaWRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsZUFBZTtBQUNqQkMsYUFBUyxLQURRO0FBRWpCQyxhQUFTLEVBRlE7QUFHakJDLFVBQU0sRUFIVztBQUlqQkMsV0FBTyxFQUpVO0FBS2pCQyxjQUFVLENBTE87QUFNakJDLFVBQU0sSUFOVztBQU9qQkMsVUFBTSxTQVBXLENBT0E7QUFQQSxDQUFyQjs7QUFVQSxJQUFJQyxTQUFTLElBQWI7O0FBRUFDLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyx1QkFDT1gsWUFEUCxDQUhNOztBQU9OWSxhQUFTO0FBQ0xDLGtCQURLLHNCQUNPQyxPQURQLEVBQ2dCO0FBQUE7O0FBQUEsZ0NBQzBCQSxPQUQxQixDQUNUUCxJQURTO0FBQUEsZ0JBQ1RBLElBRFMsaUNBQ0YsU0FERTtBQUFBLG9DQUMwQk8sT0FEMUIsQ0FDU1QsUUFEVDtBQUFBLGdCQUNTQSxRQURULHFDQUNvQixDQURwQjs7O0FBR2pCLGlCQUFLVSxPQUFMLGNBQ09ELE9BRFA7QUFFSVAsMEJBRko7QUFHSUYsa0NBSEo7QUFJSUoseUJBQVM7QUFKYjs7QUFPQSxnQkFBTWUsSUFBSSxLQUFLTCxJQUFMLENBQVVOLFFBQVYsR0FBcUIsSUFBL0I7O0FBRUEsZ0JBQUlHLE1BQUosRUFBWVMsYUFBYVQsTUFBYjtBQUNaLGdCQUFJUSxNQUFNLENBQVYsRUFBYTtBQUNUUix5QkFBU1UsV0FBVyxZQUFNO0FBQ3RCLDBCQUFLQyxVQUFMO0FBQ0FYLDZCQUFTLElBQVQ7QUFDSCxpQkFIUSxFQUdOUSxDQUhNLENBQVQ7QUFJSDtBQUNKLFNBcEJJO0FBc0JMRyxrQkF0Qkssd0JBc0JTO0FBQ1YsaUJBQUtKLE9BQUwsY0FDT2YsWUFEUDtBQUdIO0FBMUJJO0FBUEgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRfZGF0YSA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBjb250ZW50OiAnJyxcbiAgICBpY29uOiAnJyxcbiAgICBpbWFnZTogJycsXG4gICAgZHVyYXRpb246IDIsXG4gICAgbWFzazogdHJ1ZSxcbiAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgfHwgc3VjY2VzcyB8fCB3YXJuaW5nIHx8IGVycm9yIHx8IGxvYWRpbmdcbn07XG5cbmxldCB0aW1tZXIgPSBudWxsO1xuXG5Db21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICBkYXRhOiB7XG4gICAgICAgIC4uLmRlZmF1bHRfZGF0YVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZVNob3cgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSA9ICdkZWZhdWx0JywgZHVyYXRpb24gPSAyIH0gPSBvcHRpb25zO1xuXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS5kdXJhdGlvbiAqIDEwMDA7XG5cbiAgICAgICAgICAgIGlmICh0aW1tZXIpIGNsZWFyVGltZW91dCh0aW1tZXIpO1xuICAgICAgICAgICAgaWYgKGQgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aW1tZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVIaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSwgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlSGlkZSAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRfZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==