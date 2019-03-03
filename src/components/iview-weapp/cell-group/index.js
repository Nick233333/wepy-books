'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../cell/index': {
            type: 'child',
            linked: function linked() {
                this._updateIsLastCell();
            },
            linkChanged: function linkChanged() {
                this._updateIsLastCell();
            },
            unlinked: function unlinked() {
                this._updateIsLastCell();
            }
        }
    },

    methods: {
        _updateIsLastCell: function _updateIsLastCell() {
            var cells = this.getRelationNodes('../cell/index');
            var len = cells.length;

            if (len > 0) {
                var lastIndex = len - 1;

                cells.forEach(function (cell, index) {
                    cell.updateIsLastCell(index === lastIndex);
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJfdXBkYXRlSXNMYXN0Q2VsbCIsImxpbmtDaGFuZ2VkIiwidW5saW5rZWQiLCJtZXRob2RzIiwiY2VsbHMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImNlbGwiLCJpbmRleCIsInVwZGF0ZUlzTGFzdENlbGwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyxlQUFXO0FBQ1AseUJBQWlCO0FBQ2JDLGtCQUFNLE9BRE87QUFFYkMsa0JBRmEsb0JBRUg7QUFDTixxQkFBS0MsaUJBQUw7QUFDSCxhQUpZO0FBS2JDLHVCQUxhLHlCQUtFO0FBQ1gscUJBQUtELGlCQUFMO0FBQ0gsYUFQWTtBQVFiRSxvQkFSYSxzQkFRRDtBQUNSLHFCQUFLRixpQkFBTDtBQUNIO0FBVlk7QUFEVixLQUhMOztBQWtCTkcsYUFBUztBQUNMSCx5QkFESywrQkFDZTtBQUNoQixnQkFBSUksUUFBUSxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixDQUFaO0FBQ0EsZ0JBQU1DLE1BQU1GLE1BQU1HLE1BQWxCOztBQUVBLGdCQUFJRCxNQUFNLENBQVYsRUFBYTtBQUNULG9CQUFJRSxZQUFZRixNQUFNLENBQXRCOztBQUVBRixzQkFBTUssT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQkQseUJBQUtFLGdCQUFMLENBQXNCRCxVQUFVSCxTQUFoQztBQUNILGlCQUZEO0FBR0g7QUFDSjtBQVpJO0FBbEJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICByZWxhdGlvbnM6IHtcbiAgICAgICAgJy4uL2NlbGwvaW5kZXgnOiB7XG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxuICAgICAgICAgICAgbGlua2VkICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVJc0xhc3RDZWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua0NoYW5nZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUlzTGFzdENlbGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmxpbmtlZCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXNMYXN0Q2VsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgX3VwZGF0ZUlzTGFzdENlbGwoKSB7XG4gICAgICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2NlbGwvaW5kZXgnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGNlbGxzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEluZGV4ID0gbGVuIC0gMTtcblxuICAgICAgICAgICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudXBkYXRlSXNMYXN0Q2VsbChpbmRleCA9PT0gbGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19