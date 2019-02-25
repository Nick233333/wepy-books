'use strict';

Component({
    externalClasses: ['i-class', 'i-class-mask'],

    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        },
        showOk: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        okText: {
            type: String,
            value: '确定'
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        // 按钮组，有此值时，不显示 ok 和 cancel 按钮
        actions: {
            type: Array,
            value: []
        },
        // horizontal || vertical
        actionMode: {
            type: String,
            value: 'horizontal'
        }
    },

    methods: {
        handleClickItem: function handleClickItem(_ref) {
            var _ref$currentTarget = _ref.currentTarget,
                currentTarget = _ref$currentTarget === undefined ? {} : _ref$currentTarget;

            var dataset = currentTarget.dataset || {};
            var index = dataset.index;

            this.triggerEvent('click', { index: index });
        },
        handleClickOk: function handleClickOk() {
            this.triggerEvent('ok');
        },
        handleClickCancel: function handleClickCancel() {
            this.triggerEvent('cancel');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2aXNpYmxlIiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsInRpdGxlIiwiU3RyaW5nIiwic2hvd09rIiwic2hvd0NhbmNlbCIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJhY3Rpb25zIiwiQXJyYXkiLCJhY3Rpb25Nb2RlIiwibWV0aG9kcyIsImhhbmRsZUNsaWNrSXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJ0cmlnZ2VyRXZlbnQiLCJoYW5kbGVDbGlja09rIiwiaGFuZGxlQ2xpY2tDYW5jZWwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxFQUFZLGNBQVosQ0FEWDs7QUFHTkMsZ0JBQVk7QUFDUkMsaUJBQVM7QUFDTEMsa0JBQU1DLE9BREQ7QUFFTEMsbUJBQU87QUFGRixTQUREO0FBS1JDLGVBQU87QUFDSEgsa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQUxDO0FBU1JHLGdCQUFRO0FBQ0pMLGtCQUFNQyxPQURGO0FBRUpDLG1CQUFPO0FBRkgsU0FUQTtBQWFSSSxvQkFBWTtBQUNSTixrQkFBTUMsT0FERTtBQUVSQyxtQkFBTztBQUZDLFNBYko7QUFpQlJLLGdCQUFRO0FBQ0pQLGtCQUFNSSxNQURGO0FBRUpGLG1CQUFPO0FBRkgsU0FqQkE7QUFxQlJNLG9CQUFZO0FBQ1JSLGtCQUFNSSxNQURFO0FBRVJGLG1CQUFPO0FBRkMsU0FyQko7QUF5QlI7QUFDQU8saUJBQVM7QUFDTFQsa0JBQU1VLEtBREQ7QUFFTFIsbUJBQU87QUFGRixTQTFCRDtBQThCUjtBQUNBUyxvQkFBWTtBQUNSWCxrQkFBTUksTUFERTtBQUVSRixtQkFBTztBQUZDO0FBL0JKLEtBSE47O0FBd0NOVSxhQUFTO0FBQ0xDLHVCQURLLGlDQUNvQztBQUFBLDBDQUF0QkMsYUFBc0I7QUFBQSxnQkFBdEJBLGFBQXNCLHNDQUFOLEVBQU07O0FBQ3JDLGdCQUFNQyxVQUFVRCxjQUFjQyxPQUFkLElBQXlCLEVBQXpDO0FBRHFDLGdCQUU3QkMsS0FGNkIsR0FFbkJELE9BRm1CLENBRTdCQyxLQUY2Qjs7QUFHckMsaUJBQUtDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsRUFBRUQsWUFBRixFQUEzQjtBQUNILFNBTEk7QUFNTEUscUJBTkssMkJBTVk7QUFDYixpQkFBS0QsWUFBTCxDQUFrQixJQUFsQjtBQUNILFNBUkk7QUFTTEUseUJBVEssK0JBU2dCO0FBQ2pCLGlCQUFLRixZQUFMLENBQWtCLFFBQWxCO0FBQ0g7QUFYSTtBQXhDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcycsICdpLWNsYXNzLW1hc2snXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dPazoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dDYW5jZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBva1RleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn56Gu5a6aJ1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+WPlua2iCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5oyJ6ZKu57uE77yM5pyJ5q2k5YC85pe277yM5LiN5pi+56S6IG9rIOWSjCBjYW5jZWwg5oyJ6ZKuXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhvcml6b250YWwgfHwgdmVydGljYWxcbiAgICAgICAgYWN0aW9uTW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdob3Jpem9udGFsJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2tJdGVtICh7IGN1cnJlbnRUYXJnZXQgPSB7fSB9KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gY3VycmVudFRhcmdldC5kYXRhc2V0IHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gZGF0YXNldDtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycsIHsgaW5kZXggfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrT2sgKCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ29rJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrQ2FuY2VsICgpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjYW5jZWwnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19