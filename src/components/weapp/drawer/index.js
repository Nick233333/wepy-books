'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        visible: {
            type: Boolean,
            value: false
        },

        mask: {
            type: Boolean,
            value: true
        },

        maskClosable: {
            type: Boolean,
            value: true
        },

        mode: {
            type: String,
            value: 'left' // left right
        }
    },
    data: {},
    methods: {
        handleMaskClick: function handleMaskClick() {
            if (!this.data.maskClosable) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2aXNpYmxlIiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsIm1hc2siLCJtYXNrQ2xvc2FibGUiLCJtb2RlIiwiU3RyaW5nIiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVNYXNrQ2xpY2siLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xDLGtCQUFNQyxPQUREO0FBRUxDLG1CQUFPO0FBRkYsU0FERDs7QUFNUkMsY0FBTTtBQUNGSCxrQkFBTUMsT0FESjtBQUVGQyxtQkFBTztBQUZMLFNBTkU7O0FBV1JFLHNCQUFjO0FBQ1ZKLGtCQUFNQyxPQURJO0FBRVZDLG1CQUFPO0FBRkcsU0FYTjs7QUFnQlJHLGNBQU07QUFDRkwsa0JBQU1NLE1BREo7QUFFRkosbUJBQU8sTUFGTCxDQUVZO0FBRlo7QUFoQkUsS0FGTjtBQXVCTkssVUFBTSxFQXZCQTtBQXdCTkMsYUFBUztBQUNMQyx1QkFESyw2QkFDYTtBQUNkLGdCQUFJLENBQUMsS0FBS0YsSUFBTCxDQUFVSCxZQUFmLEVBQTZCO0FBQ3pCO0FBQ0g7QUFDRCxpQkFBS00sWUFBTCxDQUFrQixPQUFsQixFQUEyQixFQUEzQjtBQUNIO0FBTkk7QUF4QkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICBtYXNrOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICBtYXNrQ2xvc2FibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGVmdCcgLy8gbGVmdCByaWdodFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZU1hc2tDbGljaygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLm1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbG9zZScsIHt9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19