'use strict';

Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    properties: {
        full: {
            type: Boolean,
            value: false
        },
        thumb: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        extra: {
            type: String,
            value: ''
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsImZ1bGwiLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwidGh1bWIiLCJTdHJpbmciLCJ0aXRsZSIsImV4dHJhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBSEg7O0FBT05DLGdCQUFZO0FBQ1JDLGNBQU07QUFDRkMsa0JBQU1DLE9BREo7QUFFRkMsbUJBQU87QUFGTCxTQURFO0FBS1JDLGVBQU87QUFDSEgsa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQUxDO0FBU1JHLGVBQU87QUFDSEwsa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQVRDO0FBYVJJLGVBQU87QUFDSE4sa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSjtBQWJDO0FBUE4sQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGZ1bGw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdGh1bWI6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19