'use strict';

var prefixCls = 'i-checkbox';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox-group/index': {
            type: 'parent'
        }
    },
    properties: {
        value: {
            type: String,
            value: ''
        },
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: '#2d8cf0'
        },
        position: {
            type: String,
            value: 'left', //left right
            observer: 'setPosition'
        }
    },
    data: {
        checked: true,
        positionCls: prefixCls + '-checkbox-left'
    },
    attached: function attached() {
        this.setPosition();
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ checked: current });
        },
        checkboxChange: function checkboxChange() {
            if (this.data.disabled) return;
            var item = { current: !this.data.checked, value: this.data.value };
            var parent = this.getRelationNodes('../checkbox-group/index')[0];
            parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
        },
        setPosition: function setPosition() {
            this.setData({
                positionCls: this.data.position.indexOf('left') !== -1 ? prefixCls + '-checkbox-left' : prefixCls + '-checkbox-right'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByZWZpeENscyIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJTdHJpbmciLCJjaGVja2VkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiY29sb3IiLCJwb3NpdGlvbiIsIm9ic2VydmVyIiwiZGF0YSIsInBvc2l0aW9uQ2xzIiwiYXR0YWNoZWQiLCJzZXRQb3NpdGlvbiIsIm1ldGhvZHMiLCJjaGFuZ2VDdXJyZW50IiwiY3VycmVudCIsInNldERhdGEiLCJjaGVja2JveENoYW5nZSIsIml0ZW0iLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZW1pdEV2ZW50IiwidHJpZ2dlckV2ZW50IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLFlBQWxCOztBQUVBQyxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxlQUFXO0FBQ1AsbUNBQTJCO0FBQ3ZCQyxrQkFBTTtBQURpQjtBQURwQixLQUZMO0FBT05DLGdCQUFZO0FBQ1JDLGVBQU87QUFDSEYsa0JBQU1HLE1BREg7QUFFSEQsbUJBQU87QUFGSixTQURDO0FBS1JFLGlCQUFTO0FBQ0xKLGtCQUFNSyxPQUREO0FBRUxILG1CQUFPO0FBRkYsU0FMRDtBQVNSSSxrQkFBVTtBQUNOTixrQkFBTUssT0FEQTtBQUVOSCxtQkFBTztBQUZELFNBVEY7QUFhUkssZUFBTztBQUNIUCxrQkFBTUcsTUFESDtBQUVIRCxtQkFBTztBQUZKLFNBYkM7QUFpQlJNLGtCQUFVO0FBQ05SLGtCQUFNRyxNQURBO0FBRU5ELG1CQUFPLE1BRkQsRUFFUztBQUNmTyxzQkFBVTtBQUhKO0FBakJGLEtBUE47QUE4Qk5DLFVBQU07QUFDRk4saUJBQVMsSUFEUDtBQUVGTyxxQkFBZ0JmLFNBQWhCO0FBRkUsS0E5QkE7QUFrQ05nQixZQWxDTSxzQkFrQ0s7QUFDUCxhQUFLQyxXQUFMO0FBQ0gsS0FwQ0s7O0FBcUNOQyxhQUFTO0FBQ0xDLHFCQURLLHlCQUNTQyxPQURULEVBQ2tCO0FBQ25CLGlCQUFLQyxPQUFMLENBQWEsRUFBRWIsU0FBU1ksT0FBWCxFQUFiO0FBQ0gsU0FISTtBQUlMRSxzQkFKSyw0QkFJWTtBQUNiLGdCQUFJLEtBQUtSLElBQUwsQ0FBVUosUUFBZCxFQUF3QjtBQUN4QixnQkFBTWEsT0FBTyxFQUFFSCxTQUFTLENBQUMsS0FBS04sSUFBTCxDQUFVTixPQUF0QixFQUErQkYsT0FBTyxLQUFLUSxJQUFMLENBQVVSLEtBQWhELEVBQWI7QUFDQSxnQkFBTWtCLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0IseUJBQXRCLEVBQWlELENBQWpELENBQWY7QUFDQUQscUJBQVNBLE9BQU9FLFNBQVAsQ0FBaUJILElBQWpCLENBQVQsR0FBa0MsS0FBS0ksWUFBTCxDQUFrQixRQUFsQixFQUE0QkosSUFBNUIsQ0FBbEM7QUFDSCxTQVRJO0FBVUxOLG1CQVZLLHlCQVVTO0FBQ1YsaUJBQUtJLE9BQUwsQ0FBYTtBQUNUTiw2QkFBYSxLQUFLRCxJQUFMLENBQVVGLFFBQVYsQ0FBbUJnQixPQUFuQixDQUEyQixNQUEzQixNQUF1QyxDQUFDLENBQXhDLEdBQStDNUIsU0FBL0Msc0JBQThFQSxTQUE5RTtBQURKLGFBQWI7QUFHSDtBQWRJO0FBckNILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVmaXhDbHMgPSAnaS1jaGVja2JveCc7XG5cbkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICByZWxhdGlvbnM6IHtcbiAgICAgICAgJy4uL2NoZWNrYm94LWdyb3VwL2luZGV4Jzoge1xuICAgICAgICAgICAgdHlwZTogJ3BhcmVudCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnIzJkOGNmMCdcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGVmdCcsIC8vbGVmdCByaWdodFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRQb3NpdGlvbidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICBwb3NpdGlvbkNsczogYCR7cHJlZml4Q2xzfS1jaGVja2JveC1sZWZ0YCxcbiAgICB9LFxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZUN1cnJlbnQoY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY2hlY2tlZDogY3VycmVudCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tib3hDaGFuZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBpdGVtID0geyBjdXJyZW50OiAhdGhpcy5kYXRhLmNoZWNrZWQsIHZhbHVlOiB0aGlzLmRhdGEudmFsdWUgfTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY2hlY2tib3gtZ3JvdXAvaW5kZXgnKVswXTtcbiAgICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5lbWl0RXZlbnQoaXRlbSkgOiB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgaXRlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNsczogdGhpcy5kYXRhLnBvc2l0aW9uLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEgPyBgJHtwcmVmaXhDbHN9LWNoZWNrYm94LWxlZnRgIDogYCR7cHJlZml4Q2xzfS1jaGVja2JveC1yaWdodGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19