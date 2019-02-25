'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        value: {
            type: Boolean,
            value: false
        },
        //large small default
        size: {
            type: String,
            value: 'default'
        },
        // is or not disable
        disabled: {
            type: Boolean,
            value: false
        },
        // hidden inut name
        name: {
            type: String,
            value: ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods: {
        toggle: function toggle() {
            if (this.data.disabled) return;
            var data = this.data;
            var value = data.value ? false : true;
            this.triggerEvent('change', {
                value: value
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsInR5cGUiLCJCb29sZWFuIiwic2l6ZSIsIlN0cmluZyIsImRpc2FibGVkIiwibmFtZSIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwibWV0aG9kcyIsInRvZ2dsZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGdCQUFhO0FBQ1RDLGVBQVE7QUFDSkMsa0JBQU9DLE9BREg7QUFFSkYsbUJBQVE7QUFGSixTQURDO0FBS1Q7QUFDQUcsY0FBTztBQUNIRixrQkFBT0csTUFESjtBQUVISixtQkFBUTtBQUZMLFNBTkU7QUFVVDtBQUNBSyxrQkFBVztBQUNQSixrQkFBT0MsT0FEQTtBQUVQRixtQkFBUTtBQUZELFNBWEY7QUFlVDtBQUNBTSxjQUFPO0FBQ0hMLGtCQUFPRyxNQURKO0FBRUhKLG1CQUFRO0FBRkw7QUFoQkUsS0FGUDtBQXVCTk8sYUFBUztBQUNMO0FBQ0FDLHVCQUFlO0FBRlYsS0F2Qkg7QUEyQk5DLGFBQVU7QUFDTkMsY0FETSxvQkFDRTtBQUNKLGdCQUFJLEtBQUtDLElBQUwsQ0FBVU4sUUFBZCxFQUF5QjtBQUN6QixnQkFBTU0sT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGdCQUFNWCxRQUFRVyxLQUFLWCxLQUFMLEdBQWEsS0FBYixHQUFxQixJQUFuQztBQUNBLGlCQUFLWSxZQUFMLENBQWtCLFFBQWxCLEVBQTJCO0FBQ3ZCWix1QkFBUUE7QUFEZSxhQUEzQjtBQUdIO0FBUks7QUEzQkosQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICBwcm9wZXJ0aWVzIDoge1xuICAgICAgICB2YWx1ZSA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvL2xhcmdlIHNtYWxsIGRlZmF1bHRcbiAgICAgICAgc2l6ZSA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZSA6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgICAvLyBpcyBvciBub3QgZGlzYWJsZVxuICAgICAgICBkaXNhYmxlZCA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvLyBoaWRkZW4gaW51dCBuYW1lXG4gICAgICAgIG5hbWUgOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxuICAgIH0sXG4gICAgbWV0aG9kcyA6IHtcbiAgICAgICAgdG9nZ2xlKCl7XG4gICAgICAgICAgICBpZiggdGhpcy5kYXRhLmRpc2FibGVkICkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS52YWx1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IHZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=