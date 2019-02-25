'use strict';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox/index': {
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
            type: Array,
            value: [],
            observer: 'changeCurrent'
        }
    },
    methods: {
        changeCurrent: function changeCurrent() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../checkbox/index');
            var len = items.length;
            if (len > 0) {
                items.forEach(function (item) {
                    item.changeCurrent(val.indexOf(item.data.value) !== -1);
                });
            }
        },
        emitEvent: function emitEvent(current) {
            this.triggerEvent('change', current);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiQXJyYXkiLCJ2YWx1ZSIsIm9ic2VydmVyIiwibWV0aG9kcyIsInZhbCIsImRhdGEiLCJpdGVtcyIsImdldFJlbGF0aW9uTm9kZXMiLCJsZW4iLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4T2YiLCJlbWl0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGVBQVc7QUFDUCw2QkFBcUI7QUFDakJDLGtCQUFNLE9BRFc7QUFFakJDLGtCQUZpQixvQkFFUjtBQUNMLHFCQUFLQyxhQUFMO0FBQ0gsYUFKZ0I7QUFLakJDLHVCQUxpQix5QkFLSDtBQUNWLHFCQUFLRCxhQUFMO0FBQ0gsYUFQZ0I7QUFRakJFLG9CQVJpQixzQkFRTjtBQUNQLHFCQUFLRixhQUFMO0FBQ0g7QUFWZ0I7QUFEZCxLQUZMO0FBZ0JORyxnQkFBWTtBQUNSQyxpQkFBUztBQUNMTixrQkFBTU8sS0FERDtBQUVMQyxtQkFBTyxFQUZGO0FBR0xDLHNCQUFVO0FBSEw7QUFERCxLQWhCTjtBQXVCTkMsYUFBUztBQUNMUixxQkFESywyQkFDa0M7QUFBQSxnQkFBekJTLEdBQXlCLHVFQUFuQixLQUFLQyxJQUFMLENBQVVOLE9BQVM7O0FBQ25DLGdCQUFJTyxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLG1CQUF0QixDQUFaO0FBQ0EsZ0JBQU1DLE1BQU1GLE1BQU1HLE1BQWxCO0FBQ0EsZ0JBQUlELE1BQU0sQ0FBVixFQUFhO0FBQ1RGLHNCQUFNSSxPQUFOLENBQWMsZ0JBQVE7QUFDbEJDLHlCQUFLaEIsYUFBTCxDQUFtQlMsSUFBSVEsT0FBSixDQUFZRCxLQUFLTixJQUFMLENBQVVKLEtBQXRCLE1BQWlDLENBQUMsQ0FBckQ7QUFDSCxpQkFGRDtBQUdIO0FBQ0osU0FUSTtBQVVMWSxpQkFWSyxxQkFVS2QsT0FWTCxFQVVjO0FBQ2YsaUJBQUtlLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJmLE9BQTVCO0FBQ0g7QUFaSTtBQXZCSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuICAgIHJlbGF0aW9uczoge1xuICAgICAgICAnLi4vY2hlY2tib3gvaW5kZXgnOiB7XG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxuICAgICAgICAgICAgbGlua2VkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmtDaGFuZ2VkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVubGlua2VkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdjaGFuZ2VDdXJyZW50J1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VDdXJyZW50KHZhbCA9IHRoaXMuZGF0YS5jdXJyZW50KSB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2NoZWNrYm94L2luZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbmdlQ3VycmVudCh2YWwuaW5kZXhPZihpdGVtLmRhdGEudmFsdWUpICE9PSAtMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXRFdmVudChjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==