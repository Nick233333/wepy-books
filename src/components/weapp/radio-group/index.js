'use strict';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../radio/index': {
            type: 'child',
            linked: function linked() {
                this.changeCurrent();
            },
            linkChanged: function linkChanged() {
                this.changeCurrent();
            },
            unlinked: function unlinked() {
                this.changeCurrent();
            }
        }
    },
    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        }
    },
    methods: {
        changeCurrent: function changeCurrent() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../radio/index');
            var len = items.length;
            if (len > 0) {
                items.forEach(function (item) {
                    item.changeCurrent(val === item.data.value);
                });
            }
        },
        emitEvent: function emitEvent(current) {
            this.triggerEvent('change', current);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiU3RyaW5nIiwidmFsdWUiLCJvYnNlcnZlciIsIm1ldGhvZHMiLCJ2YWwiLCJkYXRhIiwiaXRlbXMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJlbWl0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGVBQVc7QUFDUCwwQkFBa0I7QUFDZEMsa0JBQU0sT0FEUTtBQUVkQyxrQkFGYyxvQkFFTDtBQUNMLHFCQUFLQyxhQUFMO0FBQ0gsYUFKYTtBQUtkQyx1QkFMYyx5QkFLQTtBQUNWLHFCQUFLRCxhQUFMO0FBQ0gsYUFQYTtBQVFkRSxvQkFSYyxzQkFRSDtBQUNQLHFCQUFLRixhQUFMO0FBQ0g7QUFWYTtBQURYLEtBRkw7QUFnQk5HLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xOLGtCQUFNTyxNQUREO0FBRUxDLG1CQUFPLEVBRkY7QUFHTEMsc0JBQVU7QUFITDtBQURELEtBaEJOO0FBdUJOQyxhQUFTO0FBQ0xSLHFCQURLLDJCQUNrQztBQUFBLGdCQUF6QlMsR0FBeUIsdUVBQW5CLEtBQUtDLElBQUwsQ0FBVU4sT0FBUzs7QUFDbkMsZ0JBQUlPLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0IsZ0JBQXRCLENBQVo7QUFDQSxnQkFBTUMsTUFBTUYsTUFBTUcsTUFBbEI7QUFDQSxnQkFBSUQsTUFBTSxDQUFWLEVBQWE7QUFDVEYsc0JBQU1JLE9BQU4sQ0FBYyxnQkFBUTtBQUNsQkMseUJBQUtoQixhQUFMLENBQW1CUyxRQUFRTyxLQUFLTixJQUFMLENBQVVKLEtBQXJDO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKLFNBVEk7QUFVTFcsaUJBVksscUJBVUtiLE9BVkwsRUFVYztBQUNmLGlCQUFLYyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCZCxPQUE1QjtBQUNIO0FBWkk7QUF2QkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICByZWxhdGlvbnM6IHtcbiAgICAgICAgJy4uL3JhZGlvL2luZGV4Jzoge1xuICAgICAgICAgICAgdHlwZTogJ2NoaWxkJyxcbiAgICAgICAgICAgIGxpbmtlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmxpbmtlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2NoYW5nZUN1cnJlbnQnXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZUN1cnJlbnQodmFsID0gdGhpcy5kYXRhLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vcmFkaW8vaW5kZXgnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VDdXJyZW50KHZhbCA9PT0gaXRlbS5kYXRhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdEV2ZW50KGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCBjdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19