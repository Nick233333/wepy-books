'use strict';

Component({
    externalClasses: ['i-class', 'i-class-mask', 'i-class-header'],

    options: {
        multipleSlots: true
    },

    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        actions: {
            type: Array,
            value: []
        }
    },

    methods: {
        handleClickMask: function handleClickMask() {
            if (!this.data.maskClosable) return;
            this.handleClickCancel();
        },
        handleClickItem: function handleClickItem(_ref) {
            var _ref$currentTarget = _ref.currentTarget,
                currentTarget = _ref$currentTarget === undefined ? {} : _ref$currentTarget;

            var dataset = currentTarget.dataset || {};
            var index = dataset.index;

            this.triggerEvent('click', { index: index });
        },
        handleClickCancel: function handleClickCancel() {
            this.triggerEvent('cancel');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsInZpc2libGUiLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwibWFza0Nsb3NhYmxlIiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJTdHJpbmciLCJhY3Rpb25zIiwiQXJyYXkiLCJtZXRob2RzIiwiaGFuZGxlQ2xpY2tNYXNrIiwiZGF0YSIsImhhbmRsZUNsaWNrQ2FuY2VsIiwiaGFuZGxlQ2xpY2tJdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELEVBQVksY0FBWixFQUE0QixnQkFBNUIsQ0FEWDs7QUFHTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBSEg7O0FBT05DLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xDLGtCQUFNQyxPQUREO0FBRUxDLG1CQUFPO0FBRkYsU0FERDtBQUtSQyxzQkFBYztBQUNWSCxrQkFBTUMsT0FESTtBQUVWQyxtQkFBTztBQUZHLFNBTE47QUFTUkUsb0JBQVk7QUFDUkosa0JBQU1DLE9BREU7QUFFUkMsbUJBQU87QUFGQyxTQVRKO0FBYVJHLG9CQUFZO0FBQ1JMLGtCQUFNTSxNQURFO0FBRVJKLG1CQUFPO0FBRkMsU0FiSjtBQWlCUkssaUJBQVM7QUFDTFAsa0JBQU1RLEtBREQ7QUFFTE4sbUJBQU87QUFGRjtBQWpCRCxLQVBOOztBQThCTk8sYUFBUztBQUNMQyx1QkFESyw2QkFDYztBQUNmLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVUixZQUFmLEVBQTZCO0FBQzdCLGlCQUFLUyxpQkFBTDtBQUNILFNBSkk7QUFNTEMsdUJBTkssaUNBTW9DO0FBQUEsMENBQXRCQyxhQUFzQjtBQUFBLGdCQUF0QkEsYUFBc0Isc0NBQU4sRUFBTTs7QUFDckMsZ0JBQU1DLFVBQVVELGNBQWNDLE9BQWQsSUFBeUIsRUFBekM7QUFEcUMsZ0JBRTdCQyxLQUY2QixHQUVuQkQsT0FGbUIsQ0FFN0JDLEtBRjZCOztBQUdyQyxpQkFBS0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQixFQUFFRCxZQUFGLEVBQTNCO0FBQ0gsU0FWSTtBQVlMSix5QkFaSywrQkFZZ0I7QUFDakIsaUJBQUtLLFlBQUwsQ0FBa0IsUUFBbEI7QUFDSDtBQWRJO0FBOUJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJywgJ2ktY2xhc3MtbWFzaycsICdpLWNsYXNzLWhlYWRlciddLFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtYXNrQ2xvc2FibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzaG93Q2FuY2VsOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbFRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn5Y+W5raIJ1xuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHZhbHVlOiBbXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2tNYXNrICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLm1hc2tDbG9zYWJsZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGlja0NhbmNlbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUNsaWNrSXRlbSAoeyBjdXJyZW50VGFyZ2V0ID0ge30gfSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YXNldCA9IGN1cnJlbnRUYXJnZXQuZGF0YXNldCB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGRhdGFzZXQ7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2snLCB7IGluZGV4IH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUNsaWNrQ2FuY2VsICgpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjYW5jZWwnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19