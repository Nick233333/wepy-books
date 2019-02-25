'use strict';

Component({
    behaviors: ['wx://form-field'],

    externalClasses: ['i-class'],

    properties: {
        title: {
            type: String
        },
        // text || textarea || password || number
        type: {
            type: String,
            value: 'text'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: ''
        },
        autofocus: {
            type: Boolean,
            value: false
        },
        mode: {
            type: String,
            value: 'normal'
        },
        right: {
            type: Boolean,
            value: false
        },
        error: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number
        }
    },

    methods: {
        handleInputChange: function handleInputChange(event) {
            var _event$detail = event.detail,
                detail = _event$detail === undefined ? {} : _event$detail;
            var _detail$value = detail.value,
                value = _detail$value === undefined ? '' : _detail$value;

            this.setData({ value: value });

            this.triggerEvent('change', event);
        },
        handleInputFocus: function handleInputFocus(event) {
            this.triggerEvent('focus', event);
        },
        handleInputBlur: function handleInputBlur(event) {
            this.triggerEvent('blur', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImJlaGF2aW9ycyIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImRpc2FibGVkIiwiQm9vbGVhbiIsInBsYWNlaG9sZGVyIiwiYXV0b2ZvY3VzIiwibW9kZSIsInJpZ2h0IiwiZXJyb3IiLCJtYXhsZW5ndGgiLCJOdW1iZXIiLCJtZXRob2RzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsImRldGFpbCIsInNldERhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLGVBQVcsQ0FBQyxpQkFBRCxDQURMOztBQUdOQyxxQkFBaUIsQ0FBQyxTQUFELENBSFg7O0FBS05DLGdCQUFZO0FBQ1JDLGVBQU87QUFDSEMsa0JBQU1DO0FBREgsU0FEQztBQUlSO0FBQ0FELGNBQU07QUFDRkEsa0JBQU1DLE1BREo7QUFFRkMsbUJBQU87QUFGTCxTQUxFO0FBU1JDLGtCQUFVO0FBQ05ILGtCQUFNSSxPQURBO0FBRU5GLG1CQUFPO0FBRkQsU0FURjtBQWFSRyxxQkFBYTtBQUNUTCxrQkFBTUMsTUFERztBQUVUQyxtQkFBTztBQUZFLFNBYkw7QUFpQlJJLG1CQUFXO0FBQ1BOLGtCQUFNSSxPQURDO0FBRVBGLG1CQUFPO0FBRkEsU0FqQkg7QUFxQlJLLGNBQU07QUFDRlAsa0JBQU1DLE1BREo7QUFFRkMsbUJBQU87QUFGTCxTQXJCRTtBQXlCUk0sZUFBTztBQUNIUixrQkFBTUksT0FESDtBQUVIRixtQkFBTztBQUZKLFNBekJDO0FBNkJSTyxlQUFPO0FBQ0hULGtCQUFNSSxPQURIO0FBRUhGLG1CQUFPO0FBRkosU0E3QkM7QUFpQ1JRLG1CQUFXO0FBQ1BWLGtCQUFNVztBQURDO0FBakNILEtBTE47O0FBMkNOQyxhQUFTO0FBQ0xDLHlCQURLLDZCQUNhQyxLQURiLEVBQ29CO0FBQUEsZ0NBQ0dBLEtBREgsQ0FDYkMsTUFEYTtBQUFBLGdCQUNiQSxNQURhLGlDQUNKLEVBREk7QUFBQSxnQ0FFRUEsTUFGRixDQUViYixLQUZhO0FBQUEsZ0JBRWJBLEtBRmEsaUNBRUwsRUFGSzs7QUFHckIsaUJBQUtjLE9BQUwsQ0FBYSxFQUFFZCxZQUFGLEVBQWI7O0FBRUEsaUJBQUtlLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJILEtBQTVCO0FBQ0gsU0FQSTtBQVNMSSx3QkFUSyw0QkFTWUosS0FUWixFQVNtQjtBQUNwQixpQkFBS0csWUFBTCxDQUFrQixPQUFsQixFQUEyQkgsS0FBM0I7QUFDSCxTQVhJO0FBYUxLLHVCQWJLLDJCQWFXTCxLQWJYLEVBYWtCO0FBQ25CLGlCQUFLRyxZQUFMLENBQWtCLE1BQWxCLEVBQTBCSCxLQUExQjtBQUNIO0FBZkk7QUEzQ0gsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgYmVoYXZpb3JzOiBbJ3d4Oi8vZm9ybS1maWVsZCddLFxuXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAvLyB0ZXh0IHx8IHRleHRhcmVhIHx8IHBhc3N3b3JkIHx8IG51bWJlclxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b2ZvY3VzOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbm9ybWFsJ1xuICAgICAgICB9LFxuICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGV0YWlsID0ge30gfSA9IGV2ZW50O1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSA9ICcnIH0gPSBkZXRhaWw7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZSB9KTtcblxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZm9jdXMnLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlSW5wdXRCbHVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnYmx1cicsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19