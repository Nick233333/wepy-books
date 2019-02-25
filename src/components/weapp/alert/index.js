'use strict';

Component({
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        //info, success, warning, error
        type: {
            type: String,
            value: 'info'
        },
        closable: {
            type: Boolean,
            value: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Boolean,
            default: false
        }
    },
    data: {
        closed: false
    },
    methods: {
        handleTap: function handleTap() {
            this.setData({
                closed: !this.data.closed
            });
            this.triggerEvent('close');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImNsb3NhYmxlIiwiQm9vbGVhbiIsInNob3dJY29uIiwiZGVmYXVsdCIsImRlc2MiLCJkYXRhIiwiY2xvc2VkIiwibWV0aG9kcyIsImhhbmRsZVRhcCIsInNldERhdGEiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGFBQVM7QUFDTEMsdUJBQWU7QUFEVixLQUZIO0FBS05DLGdCQUFZO0FBQ1I7QUFDQUMsY0FBTTtBQUNGQSxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBRkU7QUFNUkMsa0JBQVU7QUFDTkgsa0JBQU1JLE9BREE7QUFFTkYsbUJBQU87QUFGRCxTQU5GO0FBVVJHLGtCQUFVO0FBQ05MLGtCQUFNSSxPQURBO0FBRU5FLHFCQUFTO0FBRkgsU0FWRjtBQWNSQyxjQUFNO0FBQ0ZQLGtCQUFNSSxPQURKO0FBRUZFLHFCQUFTO0FBRlA7QUFkRSxLQUxOO0FBd0JORSxVQUFNO0FBQ0ZDLGdCQUFRO0FBRE4sS0F4QkE7QUEyQk5DLGFBQVM7QUFDTEMsaUJBREssdUJBQ087QUFDUixpQkFBS0MsT0FBTCxDQUFhO0FBQ1RILHdCQUFRLENBQUMsS0FBS0QsSUFBTCxDQUFVQztBQURWLGFBQWI7QUFHQSxpQkFBS0ksWUFBTCxDQUFrQixPQUFsQjtBQUNIO0FBTkk7QUEzQkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy9pbmZvLCBzdWNjZXNzLCB3YXJuaW5nLCBlcnJvclxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2luZm8nXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZGVzYzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGNsb3NlZDogZmFsc2VcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlVGFwKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBjbG9zZWQ6ICF0aGlzLmRhdGEuY2xvc2VkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xvc2UnKTtcbiAgICAgICAgfSxcblxuICAgIH1cbn0pO1xuIl19