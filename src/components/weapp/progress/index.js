'use strict';

Component({
    externalClasses: ['i-class'],

    properties: {
        percent: {
            type: Number,
            value: 0
        },
        // normal || active || wrong || success
        status: {
            type: String,
            value: 'normal'
        },
        strokeWidth: {
            type: Number,
            value: 10
        },
        hideInfo: {
            type: Boolean,
            value: false
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJwZXJjZW50IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwic3RhdHVzIiwiU3RyaW5nIiwic3Ryb2tlV2lkdGgiLCJoaWRlSW5mbyIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyxnQkFBWTtBQUNSQyxpQkFBUztBQUNMQyxrQkFBTUMsTUFERDtBQUVMQyxtQkFBTztBQUZGLFNBREQ7QUFLUjtBQUNBQyxnQkFBUTtBQUNKSCxrQkFBTUksTUFERjtBQUVKRixtQkFBTztBQUZILFNBTkE7QUFVUkcscUJBQWE7QUFDVEwsa0JBQU1DLE1BREc7QUFFVEMsbUJBQU87QUFGRSxTQVZMO0FBY1JJLGtCQUFVO0FBQ05OLGtCQUFNTyxPQURBO0FBRU5MLG1CQUFPO0FBRkQ7QUFkRjtBQUhOLENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIC8vIG5vcm1hbCB8fCBhY3RpdmUgfHwgd3JvbmcgfHwgc3VjY2Vzc1xuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbm9ybWFsJ1xuICAgICAgICB9LFxuICAgICAgICBzdHJva2VXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVJbmZvOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==