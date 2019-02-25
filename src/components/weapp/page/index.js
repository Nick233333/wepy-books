'use strict';

Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    properties: {
        // button || number || pointer
        mode: {
            type: String,
            value: 'button'
        },
        current: {
            type: Number,
            value: 1
        },
        total: {
            type: Number,
            value: 0
        },
        // 是否隐藏数值
        simple: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        handleChange: function handleChange(type) {
            this.triggerEvent('change', {
                type: type
            });
        },
        handlePrev: function handlePrev() {
            this.handleChange('prev');
        },
        handleNext: function handleNext() {
            this.handleChange('next');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsIm1vZGUiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJjdXJyZW50IiwiTnVtYmVyIiwidG90YWwiLCJzaW1wbGUiLCJCb29sZWFuIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsInRyaWdnZXJFdmVudCIsImhhbmRsZVByZXYiLCJoYW5kbGVOZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBSEg7O0FBT05DLGdCQUFZO0FBQ1I7QUFDQUMsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBRkU7QUFNUkMsaUJBQVM7QUFDTEgsa0JBQU1JLE1BREQ7QUFFTEYsbUJBQU87QUFGRixTQU5EO0FBVVJHLGVBQU87QUFDSEwsa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQVZDO0FBY1I7QUFDQUksZ0JBQVE7QUFDSk4sa0JBQU1PLE9BREY7QUFFSkwsbUJBQU87QUFGSDtBQWZBLEtBUE47O0FBNEJOTSxhQUFTO0FBQ0xDLG9CQURLLHdCQUNTVCxJQURULEVBQ2U7QUFDaEIsaUJBQUtVLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEI7QUFDeEJWLHNCQUFNQTtBQURrQixhQUE1QjtBQUdILFNBTEk7QUFNTFcsa0JBTkssd0JBTVM7QUFDVixpQkFBS0YsWUFBTCxDQUFrQixNQUFsQjtBQUNILFNBUkk7QUFTTEcsa0JBVEssd0JBU1M7QUFDVixpQkFBS0gsWUFBTCxDQUFrQixNQUFsQjtBQUNIO0FBWEk7QUE1QkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGJ1dHRvbiB8fCBudW1iZXIgfHwgcG9pbnRlclxuICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2J1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaYr+WQpumakOiXj+aVsOWAvFxuICAgICAgICBzaW1wbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZUNoYW5nZSAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlUHJldiAoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgncHJldicpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVOZXh0ICgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCduZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==