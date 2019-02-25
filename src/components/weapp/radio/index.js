'use strict';

var prefixCls = 'i-radio';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../radio-group/index': {
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
        positionCls: prefixCls + '-radio-left'
    },
    attached: function attached() {
        this.setPosition();
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ checked: current });
        },
        radioChange: function radioChange() {
            if (this.data.disabled) return;
            var item = { current: !this.data.checked, value: this.data.value };
            var parent = this.getRelationNodes('../radio-group/index')[0];
            parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
        },
        setPosition: function setPosition() {
            this.setData({
                positionCls: this.data.position.indexOf('left') !== -1 ? prefixCls + '-radio-left' : prefixCls + '-radio-right'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByZWZpeENscyIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJTdHJpbmciLCJjaGVja2VkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiY29sb3IiLCJwb3NpdGlvbiIsIm9ic2VydmVyIiwiZGF0YSIsInBvc2l0aW9uQ2xzIiwiYXR0YWNoZWQiLCJzZXRQb3NpdGlvbiIsIm1ldGhvZHMiLCJjaGFuZ2VDdXJyZW50IiwiY3VycmVudCIsInNldERhdGEiLCJyYWRpb0NoYW5nZSIsIml0ZW0iLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZW1pdEV2ZW50IiwidHJpZ2dlckV2ZW50IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLFNBQWxCOztBQUVBQyxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxlQUFXO0FBQ1AsZ0NBQXdCO0FBQ3BCQyxrQkFBTTtBQURjO0FBRGpCLEtBRkw7QUFPTkMsZ0JBQVk7QUFDUkMsZUFBTztBQUNIRixrQkFBTUcsTUFESDtBQUVIRCxtQkFBTztBQUZKLFNBREM7QUFLUkUsaUJBQVM7QUFDTEosa0JBQU1LLE9BREQ7QUFFTEgsbUJBQU87QUFGRixTQUxEO0FBU1JJLGtCQUFVO0FBQ05OLGtCQUFNSyxPQURBO0FBRU5ILG1CQUFPO0FBRkQsU0FURjtBQWFSSyxlQUFPO0FBQ0hQLGtCQUFNRyxNQURIO0FBRUhELG1CQUFPO0FBRkosU0FiQztBQWlCUk0sa0JBQVU7QUFDTlIsa0JBQU1HLE1BREE7QUFFTkQsbUJBQU8sTUFGRCxFQUVTO0FBQ2ZPLHNCQUFVO0FBSEo7QUFqQkYsS0FQTjtBQThCTkMsVUFBTTtBQUNGTixpQkFBUyxJQURQO0FBRUZPLHFCQUFnQmYsU0FBaEI7QUFGRSxLQTlCQTtBQWtDTmdCLFlBbENNLHNCQWtDSztBQUNQLGFBQUtDLFdBQUw7QUFDSCxLQXBDSzs7QUFxQ05DLGFBQVM7QUFDTEMscUJBREsseUJBQ1NDLE9BRFQsRUFDa0I7QUFDbkIsaUJBQUtDLE9BQUwsQ0FBYSxFQUFFYixTQUFTWSxPQUFYLEVBQWI7QUFDSCxTQUhJO0FBSUxFLG1CQUpLLHlCQUlTO0FBQ1YsZ0JBQUksS0FBS1IsSUFBTCxDQUFVSixRQUFkLEVBQXdCO0FBQ3hCLGdCQUFNYSxPQUFPLEVBQUVILFNBQVMsQ0FBQyxLQUFLTixJQUFMLENBQVVOLE9BQXRCLEVBQStCRixPQUFPLEtBQUtRLElBQUwsQ0FBVVIsS0FBaEQsRUFBYjtBQUNBLGdCQUFNa0IsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixzQkFBdEIsRUFBOEMsQ0FBOUMsQ0FBZjtBQUNBRCxxQkFBU0EsT0FBT0UsU0FBUCxDQUFpQkgsSUFBakIsQ0FBVCxHQUFrQyxLQUFLSSxZQUFMLENBQWtCLFFBQWxCLEVBQTRCSixJQUE1QixDQUFsQztBQUNILFNBVEk7QUFVTE4sbUJBVksseUJBVVM7QUFDVixpQkFBS0ksT0FBTCxDQUFhO0FBQ1ROLDZCQUFhLEtBQUtELElBQUwsQ0FBVUYsUUFBVixDQUFtQmdCLE9BQW5CLENBQTJCLE1BQTNCLE1BQXVDLENBQUMsQ0FBeEMsR0FBK0M1QixTQUEvQyxtQkFBMkVBLFNBQTNFO0FBREosYUFBYjtBQUdIO0FBZEk7QUFyQ0gsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZWZpeENscyA9ICdpLXJhZGlvJztcblxuQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuICAgIHJlbGF0aW9uczoge1xuICAgICAgICAnLi4vcmFkaW8tZ3JvdXAvaW5kZXgnOiB7XG4gICAgICAgICAgICB0eXBlOiAncGFyZW50J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjMmQ4Y2YwJ1xuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdsZWZ0JywgLy9sZWZ0IHJpZ2h0XG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldFBvc2l0aW9uJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uQ2xzOiBgJHtwcmVmaXhDbHN9LXJhZGlvLWxlZnRgLFxuICAgIH0sXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlQ3VycmVudChjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjaGVja2VkOiBjdXJyZW50IH0pO1xuICAgICAgICB9LFxuICAgICAgICByYWRpb0NoYW5nZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7IGN1cnJlbnQ6ICF0aGlzLmRhdGEuY2hlY2tlZCwgdmFsdWU6IHRoaXMuZGF0YS52YWx1ZSB9O1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby1ncm91cC9pbmRleCcpWzBdO1xuICAgICAgICAgICAgcGFyZW50ID8gcGFyZW50LmVtaXRFdmVudChpdGVtKSA6IHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCBpdGVtKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9zaXRpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xzOiB0aGlzLmRhdGEucG9zaXRpb24uaW5kZXhPZignbGVmdCcpICE9PSAtMSA/IGAke3ByZWZpeENsc30tcmFkaW8tbGVmdGAgOiBgJHtwcmVmaXhDbHN9LXJhZGlvLXJpZ2h0YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=