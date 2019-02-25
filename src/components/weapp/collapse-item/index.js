'use strict';

Component({
    externalClasses: ['i-class-content', 'i-class-title', 'i-class'],

    relations: {
        '../collapse/index': {
            type: 'parent',
            linked: function linked(target) {
                var options = {
                    accordion: target.data.accordion
                };
                if (target.data.name === this.data.name) {
                    options.showContent = 'i-collapse-item-show-content';
                }
                this.setData(options);
            }
        }
    },

    properties: {
        title: String,
        name: String
    },

    data: {
        showContent: '',
        accordion: false
    },

    options: {
        multipleSlots: true
    },

    methods: {
        trigger: function trigger(e) {
            var data = this.data;
            if (data.accordion) {
                this.triggerEvent('collapse', { name: data.name }, { composed: true, bubbles: true });
            } else {
                this.setData({
                    showContent: data.showContent ? '' : 'i-collapse-item-show-content'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiYWNjb3JkaW9uIiwiZGF0YSIsIm5hbWUiLCJzaG93Q29udGVudCIsInNldERhdGEiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJTdHJpbmciLCJtdWx0aXBsZVNsb3RzIiwibWV0aG9kcyIsInRyaWdnZXIiLCJlIiwidHJpZ2dlckV2ZW50IiwiY29tcG9zZWQiLCJidWJibGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLGlCQUFELEVBQW9CLGVBQXBCLEVBQXFDLFNBQXJDLENBRFg7O0FBR05DLGVBQVc7QUFDUCw2QkFBcUI7QUFDakJDLGtCQUFNLFFBRFc7QUFFakJDLG9CQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLG9CQUFNQyxVQUFVO0FBQ1pDLCtCQUFXRixPQUFPRyxJQUFQLENBQVlEO0FBRFgsaUJBQWhCO0FBR0Esb0JBQUlGLE9BQU9HLElBQVAsQ0FBWUMsSUFBWixLQUFxQixLQUFLRCxJQUFMLENBQVVDLElBQW5DLEVBQXlDO0FBQ3JDSCw0QkFBUUksV0FBUixHQUFzQiw4QkFBdEI7QUFDSDtBQUNELHFCQUFLQyxPQUFMLENBQWFMLE9BQWI7QUFDSDtBQVZnQjtBQURkLEtBSEw7O0FBa0JOTSxnQkFBWTtBQUNSQyxlQUFPQyxNQURDO0FBRVJMLGNBQU1LO0FBRkUsS0FsQk47O0FBdUJOTixVQUFNO0FBQ0ZFLHFCQUFhLEVBRFg7QUFFRkgsbUJBQVc7QUFGVCxLQXZCQTs7QUE0Qk5ELGFBQVM7QUFDTFMsdUJBQWU7QUFEVixLQTVCSDs7QUFnQ05DLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsQ0FESCxFQUNNO0FBQ1AsZ0JBQU1WLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxnQkFBSUEsS0FBS0QsU0FBVCxFQUFvQjtBQUNoQixxQkFBS1ksWUFBTCxDQUFrQixVQUFsQixFQUE4QixFQUFDVixNQUFNRCxLQUFLQyxJQUFaLEVBQTlCLEVBQWlELEVBQUNXLFVBQVUsSUFBWCxFQUFpQkMsU0FBUyxJQUExQixFQUFqRDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLVixPQUFMLENBQWE7QUFDVEQsaUNBQWFGLEtBQUtFLFdBQUwsR0FBbUIsRUFBbkIsR0FBd0I7QUFENUIsaUJBQWI7QUFHSDtBQUNKO0FBVkk7QUFoQ0gsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MtY29udGVudCcsICdpLWNsYXNzLXRpdGxlJywgJ2ktY2xhc3MnXSxcblxuICAgIHJlbGF0aW9uczoge1xuICAgICAgICAnLi4vY29sbGFwc2UvaW5kZXgnOiB7XG4gICAgICAgICAgICB0eXBlOiAncGFyZW50JyxcbiAgICAgICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY29yZGlvbjogdGFyZ2V0LmRhdGEuYWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZGF0YS5uYW1lID09PSB0aGlzLmRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNob3dDb250ZW50ID0gJ2ktY29sbGFwc2UtaXRlbS1zaG93LWNvbnRlbnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBuYW1lOiBTdHJpbmdcbiAgICB9LFxuXG4gICAgZGF0YToge1xuICAgICAgICBzaG93Q29udGVudDogJycsXG4gICAgICAgIGFjY29yZGlvbjogZmFsc2VcbiAgICB9LFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdHJpZ2dlcihlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NvbGxhcHNlJywge25hbWU6IGRhdGEubmFtZX0sIHtjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29udGVudDogZGF0YS5zaG93Q29udGVudCA/ICcnIDogJ2ktY29sbGFwc2UtaXRlbS1zaG93LWNvbnRlbnQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbiJdfQ==