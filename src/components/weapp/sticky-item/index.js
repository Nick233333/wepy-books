'use strict';

Component({
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    relations: {
        '../sticky/index': {
            type: 'parent'
        }
    },
    data: {
        top: 0,
        height: 0,
        isFixed: false,
        index: -1
    },
    methods: {
        updateScrollTopChange: function updateScrollTopChange(scrollTop) {
            var data = this.data;
            var top = data.top;
            var height = data.height;
            this.setData({
                isFixed: scrollTop >= top && scrollTop < top + height ? true : false
            });
        },
        updateDataChange: function updateDataChange(index) {
            var _this = this;

            var className = '.i-sticky-item';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                if (res) {
                    _this.setData({
                        top: res.top,
                        height: res.height,
                        index: index
                    });
                }
            }).exec();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicmVsYXRpb25zIiwidHlwZSIsImRhdGEiLCJ0b3AiLCJoZWlnaHQiLCJpc0ZpeGVkIiwiaW5kZXgiLCJtZXRob2RzIiwidXBkYXRlU2Nyb2xsVG9wQ2hhbmdlIiwic2Nyb2xsVG9wIiwic2V0RGF0YSIsInVwZGF0ZURhdGFDaGFuZ2UiLCJjbGFzc05hbWUiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7QUFFTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBRkg7QUFLTkMsZUFBWTtBQUNSLDJCQUFvQjtBQUNoQkMsa0JBQU87QUFEUztBQURaLEtBTE47QUFVTkMsVUFBTztBQUNIQyxhQUFNLENBREg7QUFFSEMsZ0JBQVMsQ0FGTjtBQUdIQyxpQkFBVSxLQUhQO0FBSUhDLGVBQVEsQ0FBQztBQUpOLEtBVkQ7QUFnQk5DLGFBQVM7QUFDTEMsNkJBREssaUNBQ2lCQyxTQURqQixFQUMyQjtBQUM1QixnQkFBTVAsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGdCQUFNQyxNQUFNRCxLQUFLQyxHQUFqQjtBQUNBLGdCQUFNQyxTQUFTRixLQUFLRSxNQUFwQjtBQUNBLGlCQUFLTSxPQUFMLENBQWE7QUFDVEwseUJBQVlJLGFBQWFOLEdBQWIsSUFBb0JNLFlBQVlOLE1BQU1DLE1BQXhDLEdBQW1ELElBQW5ELEdBQTBEO0FBRDNELGFBQWI7QUFHSCxTQVJJO0FBU0xPLHdCQVRLLDRCQVNZTCxLQVRaLEVBU21CO0FBQUE7O0FBQ3BCLGdCQUFNTSxZQUFZLGdCQUFsQjtBQUNBLGdCQUFNQyxRQUFRQyxHQUFHQyxtQkFBSCxHQUF5QkMsRUFBekIsQ0FBNEIsSUFBNUIsQ0FBZDtBQUNBSCxrQkFBTUksTUFBTixDQUFjTCxTQUFkLEVBQTBCTSxrQkFBMUIsQ0FBNkMsVUFBQ0MsR0FBRCxFQUFPO0FBQzVDLG9CQUFJQSxHQUFKLEVBQVM7QUFDTCwwQkFBS1QsT0FBTCxDQUFhO0FBQ1RQLDZCQUFNZ0IsSUFBSWhCLEdBREQ7QUFFVEMsZ0NBQVNlLElBQUlmLE1BRko7QUFHVEUsK0JBQVFBO0FBSEMscUJBQWI7QUFLSDtBQUNSLGFBUkQsRUFRR2MsSUFSSDtBQVNIO0FBckJJO0FBaEJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXG4gICAgfSxcbiAgICByZWxhdGlvbnMgOiB7XG4gICAgICAgICcuLi9zdGlja3kvaW5kZXgnIDoge1xuICAgICAgICAgICAgdHlwZSA6ICdwYXJlbnQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEgOiB7XG4gICAgICAgIHRvcCA6IDAsXG4gICAgICAgIGhlaWdodCA6IDAsXG4gICAgICAgIGlzRml4ZWQgOiBmYWxzZSxcbiAgICAgICAgaW5kZXggOiAtMSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsVG9wQ2hhbmdlKHNjcm9sbFRvcCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZGF0YS50b3A7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgaXNGaXhlZCA6ICggc2Nyb2xsVG9wID49IHRvcCAmJiBzY3JvbGxUb3AgPCB0b3AgKyBoZWlnaHQgKSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRGF0YUNoYW5nZShpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gJy5pLXN0aWNreS1pdGVtJztcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KCBjbGFzc05hbWUgKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlcyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgOiByZXMudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IHJlcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggOiBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuZXhlYygpXG4gICAgICAgIH1cbiAgICB9XG59KSJdfQ==