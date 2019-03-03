'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab/index': {
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
        },
        color: {
            type: String,
            value: ''
        },
        scroll: {
            type: Boolean,
            value: false
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        changeCurrent: function changeCurrent() {
            var _this = this;

            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../tab/index');
            var len = items.length;

            if (len > 0) {
                items.forEach(function (item) {
                    item.changeScroll(_this.data.scroll);
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(_this.data.color);
                });
            }
        },
        emitEvent: function emitEvent(key) {
            this.triggerEvent('change', { key: key });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiU3RyaW5nIiwidmFsdWUiLCJvYnNlcnZlciIsImNvbG9yIiwic2Nyb2xsIiwiQm9vbGVhbiIsImZpeGVkIiwibWV0aG9kcyIsInZhbCIsImRhdGEiLCJpdGVtcyIsImdldFJlbGF0aW9uTm9kZXMiLCJsZW4iLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImNoYW5nZVNjcm9sbCIsImtleSIsImNoYW5nZUN1cnJlbnRDb2xvciIsImVtaXRFdmVudCIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCx3QkFBZ0I7QUFDWkMsa0JBQU0sT0FETTtBQUVaQyxrQkFGWSxvQkFFRjtBQUNOLHFCQUFLQyxhQUFMO0FBQ0gsYUFKVztBQUtaQyx1QkFMWSx5QkFLRztBQUNYLHFCQUFLRCxhQUFMO0FBQ0gsYUFQVztBQVFaRSxvQkFSWSxzQkFRQTtBQUNSLHFCQUFLRixhQUFMO0FBQ0g7QUFWVztBQURULEtBSEw7O0FBa0JORyxnQkFBWTtBQUNSQyxpQkFBUztBQUNMTixrQkFBTU8sTUFERDtBQUVMQyxtQkFBTyxFQUZGO0FBR0xDLHNCQUFVO0FBSEwsU0FERDtBQU1SQyxlQUFPO0FBQ0hWLGtCQUFNTyxNQURIO0FBRUhDLG1CQUFPO0FBRkosU0FOQztBQVVSRyxnQkFBUTtBQUNKWCxrQkFBTVksT0FERjtBQUVKSixtQkFBTztBQUZILFNBVkE7QUFjUkssZUFBTztBQUNIYixrQkFBTVksT0FESDtBQUVISixtQkFBTztBQUZKO0FBZEMsS0FsQk47O0FBc0NOTSxhQUFTO0FBQ0xaLHFCQURLLDJCQUNtQztBQUFBOztBQUFBLGdCQUF6QmEsR0FBeUIsdUVBQW5CLEtBQUtDLElBQUwsQ0FBVVYsT0FBUzs7QUFDcEMsZ0JBQUlXLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0IsY0FBdEIsQ0FBWjtBQUNBLGdCQUFNQyxNQUFNRixNQUFNRyxNQUFsQjs7QUFFQSxnQkFBSUQsTUFBTSxDQUFWLEVBQWE7QUFDVEYsc0JBQU1JLE9BQU4sQ0FBYyxnQkFBUTtBQUNsQkMseUJBQUtDLFlBQUwsQ0FBa0IsTUFBS1AsSUFBTCxDQUFVTCxNQUE1QjtBQUNBVyx5QkFBS3BCLGFBQUwsQ0FBbUJvQixLQUFLTixJQUFMLENBQVVRLEdBQVYsS0FBa0JULEdBQXJDO0FBQ0FPLHlCQUFLRyxrQkFBTCxDQUF3QixNQUFLVCxJQUFMLENBQVVOLEtBQWxDO0FBQ0gsaUJBSkQ7QUFLSDtBQUNKLFNBWkk7QUFhTGdCLGlCQWJLLHFCQWFNRixHQWJOLEVBYVc7QUFDWixpQkFBS0csWUFBTCxDQUFrQixRQUFsQixFQUE0QixFQUFFSCxRQUFGLEVBQTVCO0FBQ0g7QUFmSTtBQXRDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuXG4gICAgcmVsYXRpb25zOiB7XG4gICAgICAgICcuLi90YWIvaW5kZXgnOiB7XG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxuICAgICAgICAgICAgbGlua2VkICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5saW5rZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdjaGFuZ2VDdXJyZW50J1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBmaXhlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlQ3VycmVudCAodmFsID0gdGhpcy5kYXRhLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vdGFiL2luZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VTY3JvbGwodGhpcy5kYXRhLnNjcm9sbCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbmdlQ3VycmVudChpdGVtLmRhdGEua2V5ID09PSB2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYW5nZUN1cnJlbnRDb2xvcih0aGlzLmRhdGEuY29sb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0RXZlbnQgKGtleSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIHsga2V5IH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=