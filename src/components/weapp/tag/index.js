'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        //slot name
        name: {
            type: String,
            value: ''
        },
        //can click or not click
        checkable: {
            type: Boolean,
            value: false
        },
        //is current choose
        checked: {
            type: Boolean,
            value: true
        },
        //background and color setting
        color: {
            type: String,
            value: 'default'
        },
        //control fill or not
        type: {
            type: String,
            value: 'dot'
        }
    },
    methods: {
        tapTag: function tapTag() {
            var data = this.data;
            if (data.checkable) {
                var checked = data.checked ? false : true;
                this.triggerEvent('change', {
                    name: data.name || '',
                    checked: checked
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwiY2hlY2thYmxlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJjb2xvciIsIm1ldGhvZHMiLCJ0YXBUYWciLCJkYXRhIiwidHJpZ2dlckV2ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUO0FBQ0FDLGNBQU87QUFDSEMsa0JBQU9DLE1BREo7QUFFSEMsbUJBQVE7QUFGTCxTQUZFO0FBTVQ7QUFDQUMsbUJBQVk7QUFDUkgsa0JBQU9JLE9BREM7QUFFUkYsbUJBQVE7QUFGQSxTQVBIO0FBV1Q7QUFDQUcsaUJBQVU7QUFDTkwsa0JBQU9JLE9BREQ7QUFFTkYsbUJBQVE7QUFGRixTQVpEO0FBZ0JUO0FBQ0FJLGVBQVE7QUFDSk4sa0JBQU9DLE1BREg7QUFFSkMsbUJBQVE7QUFGSixTQWpCQztBQXFCVDtBQUNBRixjQUFPO0FBQ0hBLGtCQUFPQyxNQURKO0FBRUhDLG1CQUFRO0FBRkw7QUF0QkUsS0FGUDtBQTZCTkssYUFBVTtBQUNOQyxjQURNLG9CQUNFO0FBQ0osZ0JBQU1DLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxnQkFBSUEsS0FBS04sU0FBVCxFQUFvQjtBQUNoQixvQkFBTUUsVUFBVUksS0FBS0osT0FBTCxHQUFlLEtBQWYsR0FBdUIsSUFBdkM7QUFDQSxxQkFBS0ssWUFBTCxDQUFrQixRQUFsQixFQUEyQjtBQUN2QlgsMEJBQU9VLEtBQUtWLElBQUwsSUFBYSxFQURHO0FBRXZCTSw2QkFBVUE7QUFGYSxpQkFBM0I7QUFJSDtBQUNKO0FBVks7QUE3QkosQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICBwcm9wZXJ0aWVzIDoge1xuICAgICAgICAvL3Nsb3QgbmFtZVxuICAgICAgICBuYW1lIDoge1xuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlIDogJydcbiAgICAgICAgfSxcbiAgICAgICAgLy9jYW4gY2xpY2sgb3Igbm90IGNsaWNrXG4gICAgICAgIGNoZWNrYWJsZSA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvL2lzIGN1cnJlbnQgY2hvb3NlXG4gICAgICAgIGNoZWNrZWQgOiB7XG4gICAgICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlIDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvL2JhY2tncm91bmQgYW5kIGNvbG9yIHNldHRpbmdcbiAgICAgICAgY29sb3IgOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWUgOiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgLy9jb250cm9sIGZpbGwgb3Igbm90XG4gICAgICAgIHR5cGUgOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWUgOiAnZG90J1xuICAgICAgICB9IFxuICAgIH0sXG4gICAgbWV0aG9kcyA6IHtcbiAgICAgICAgdGFwVGFnKCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYoIGRhdGEuY2hlY2thYmxlICl7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRhdGEuY2hlY2tlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJyx7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiBkYXRhLm5hbWUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiBjaGVja2VkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSJdfQ==