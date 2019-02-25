'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        height: {
            type: String,
            value: '300'
        },
        itemHeight: {
            type: Number,
            value: 18
        }
    },
    relations: {
        '../index-item/index': {
            type: 'child',
            linked: function linked() {
                this._updateDataChange();
            },
            linkChanged: function linkChanged() {
                this._updateDataChange();
            },
            unlinked: function unlinked() {
                this._updateDataChange();
            }
        }
    },
    data: {
        scrollTop: 0,
        fixedData: [],
        current: 0,
        timer: null,
        startTop: 0,
        itemLength: 0,
        currentName: '',
        isTouches: false
    },
    methods: {
        loop: function loop() {},
        _updateDataChange: function _updateDataChange() {
            var _this = this;

            var indexItems = this.getRelationNodes('../index-item/index');
            var len = indexItems.length;
            var fixedData = this.data.fixedData;
            /*
             * 使用函数节流限制重复去设置数组内容进而限制多次重复渲染
             * 暂时没有研究微信在渲染的时候是否会进行函数节流
            */
            if (len > 0) {

                if (this.data.timer) {
                    clearTimeout(this.data.timer);
                    this.setData({
                        timer: null
                    });
                }

                this.data.timer = setTimeout(function () {
                    var data = [];
                    indexItems.forEach(function (item) {
                        if (item.data.name && fixedData.indexOf(item.data.name) === -1) {
                            data.push(item.data.name);
                            item.updateDataChange();
                        }
                    });
                    _this.setData({
                        fixedData: data,
                        itemLength: indexItems.length
                    });
                    //组件加载完成之后重新设置顶部高度
                    _this.setTouchStartVal();
                }, 0);
                this.setData({
                    timer: this.data.timer
                });
            }
        },
        handlerScroll: function handlerScroll(event) {
            var _this2 = this;

            var detail = event.detail;
            var scrollTop = detail.scrollTop;
            var indexItems = this.getRelationNodes('../index-item/index');
            indexItems.forEach(function (item, index) {
                var data = item.data;
                var offset = data.top + data.height;
                if (scrollTop < offset && scrollTop >= data.top) {
                    _this2.setData({
                        current: index,
                        currentName: data.currentName
                    });
                }
            });
        },
        getCurrentItem: function getCurrentItem(index) {
            var indexItems = this.getRelationNodes('../index-item/index');
            var result = {};
            result = indexItems[index].data;
            result.total = indexItems.length;
            return result;
        },
        triggerCallback: function triggerCallback(options) {
            this.triggerEvent('change', options);
        },
        handlerFixedTap: function handlerFixedTap(event) {
            var eindex = event.currentTarget.dataset.index;
            var item = this.getCurrentItem(eindex);
            this.setData({
                scrollTop: item.top,
                currentName: item.currentName,
                isTouches: true
            });
            this.triggerCallback({
                index: eindex,
                current: item.currentName
            });
        },
        handlerTouchMove: function handlerTouchMove(event) {
            var data = this.data;
            var touches = event.touches[0] || {};
            var pageY = touches.pageY;
            var rest = pageY - data.startTop;
            var index = Math.ceil(rest / data.itemHeight);
            index = index >= data.itemLength ? data.itemLength - 1 : index;
            var movePosition = this.getCurrentItem(index);

            /*
             * 当touch选中的元素和当前currentName不相等的时候才震动一下
             * 微信震动事件
            */
            if (movePosition.name !== this.data.currentName) {
                wx.vibrateShort();
            }

            this.setData({
                scrollTop: movePosition.top,
                currentName: movePosition.name,
                isTouches: true
            });

            this.triggerCallback({
                index: index,
                current: movePosition.name
            });
        },
        handlerTouchEnd: function handlerTouchEnd() {
            this.setData({
                isTouches: false
            });
        },
        setTouchStartVal: function setTouchStartVal() {
            var _this3 = this;

            var className = '.i-index-fixed';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                _this3.setData({
                    startTop: res.top
                });
            }).exec();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJoZWlnaHQiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJpdGVtSGVpZ2h0IiwiTnVtYmVyIiwicmVsYXRpb25zIiwibGlua2VkIiwiX3VwZGF0ZURhdGFDaGFuZ2UiLCJsaW5rQ2hhbmdlZCIsInVubGlua2VkIiwiZGF0YSIsInNjcm9sbFRvcCIsImZpeGVkRGF0YSIsImN1cnJlbnQiLCJ0aW1lciIsInN0YXJ0VG9wIiwiaXRlbUxlbmd0aCIsImN1cnJlbnROYW1lIiwiaXNUb3VjaGVzIiwibWV0aG9kcyIsImxvb3AiLCJpbmRleEl0ZW1zIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImxlbiIsImxlbmd0aCIsImNsZWFyVGltZW91dCIsInNldERhdGEiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwiaW5kZXhPZiIsInB1c2giLCJ1cGRhdGVEYXRhQ2hhbmdlIiwic2V0VG91Y2hTdGFydFZhbCIsImhhbmRsZXJTY3JvbGwiLCJldmVudCIsImRldGFpbCIsImluZGV4Iiwib2Zmc2V0IiwidG9wIiwiZ2V0Q3VycmVudEl0ZW0iLCJyZXN1bHQiLCJ0b3RhbCIsInRyaWdnZXJDYWxsYmFjayIsIm9wdGlvbnMiLCJ0cmlnZ2VyRXZlbnQiLCJoYW5kbGVyRml4ZWRUYXAiLCJlaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImhhbmRsZXJUb3VjaE1vdmUiLCJ0b3VjaGVzIiwicGFnZVkiLCJyZXN0IiwiTWF0aCIsImNlaWwiLCJtb3ZlUG9zaXRpb24iLCJ3eCIsInZpYnJhdGVTaG9ydCIsImhhbmRsZXJUb3VjaEVuZCIsImNsYXNzTmFtZSIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFB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VUFBZCxHQUEyQk4sS0FBS00sVUFBTCxHQUFpQixDQUE1QyxHQUFnRHNCLEtBQXhEO0FBQ0EsZ0JBQU1tQixlQUFlLEtBQUtoQixjQUFMLENBQW9CSCxLQUFwQixDQUFyQjs7QUFFRDs7OztBQUlDLGdCQUFJbUIsYUFBYTNCLElBQWIsS0FBc0IsS0FBS3BCLElBQUwsQ0FBVU8sV0FBcEMsRUFBaUQ7QUFDN0N5QyxtQkFBR0MsWUFBSDtBQUNIOztBQUVELGlCQUFLakMsT0FBTCxDQUFhO0FBQ1RmLDJCQUFZOEMsYUFBYWpCLEdBRGhCO0FBRVR2Qiw2QkFBY3dDLGFBQWEzQixJQUZsQjtBQUdUWiwyQkFBWTtBQUhILGFBQWI7O0FBTUEsaUJBQUswQixlQUFMLENBQXFCO0FBQ2pCTix1QkFBUUEsS0FEUztBQUVqQnpCLHlCQUFVNEMsYUFBYTNCO0FBRk4sYUFBckI7QUFJSCxTQXpHSztBQTBHTjhCLHVCQTFHTSw2QkEwR1c7QUFDYixpQkFBS2xDLE9BQUwsQ0FBYTtBQUNUUiwyQkFBWTtBQURILGFBQWI7QUFHSCxTQTlHSztBQStHTmdCLHdCQS9HTSw4QkErR1k7QUFBQTs7QUFDZCxnQkFBTTJCLFlBQVksZ0JBQWxCO0FBQ0EsZ0JBQU1DLFFBQVFKLEdBQUdLLG1CQUFILEdBQXlCQyxFQUF6QixDQUE0QixJQUE1QixDQUFkO0FBQ0FGLGtCQUFNRyxNQUFOLENBQWNKLFNBQWQsRUFBMEJLLGtCQUExQixDQUE2QyxVQUFDQyxHQUFELEVBQU87QUFDaEQsdUJBQUt6QyxPQUFMLENBQWE7QUFDVFgsOEJBQVdvRCxJQUFJM0I7QUFETixpQkFBYjtBQUdILGFBSkQsRUFJRzRCLElBSkg7QUFLSDtBQXZISztBQXBDSixDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuICAgIHByb3BlcnRpZXMgOiB7XG4gICAgICAgIGhlaWdodCA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZSA6ICczMDAnXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1IZWlnaHQgOiB7XG4gICAgICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUgOiAxOFxuICAgICAgICB9XG4gICAgfSxcbiAgICByZWxhdGlvbnMgOiB7XG4gICAgICAgICcuLi9pbmRleC1pdGVtL2luZGV4JyA6IHtcbiAgICAgICAgICAgIHR5cGUgOiAnY2hpbGQnLFxuICAgICAgICAgICAgbGlua2VkKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGF0YUNoYW5nZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmtDaGFuZ2VkICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEYXRhQ2hhbmdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5saW5rZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGFDaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSA6IHtcbiAgICAgICAgc2Nyb2xsVG9wIDogMCxcbiAgICAgICAgZml4ZWREYXRhIDogW10sXG4gICAgICAgIGN1cnJlbnQgOiAwLFxuICAgICAgICB0aW1lciA6IG51bGwsXG4gICAgICAgIHN0YXJ0VG9wIDogMCxcbiAgICAgICAgaXRlbUxlbmd0aCA6IDAsXG4gICAgICAgIGN1cnJlbnROYW1lIDogJycsXG4gICAgICAgIGlzVG91Y2hlcyA6IGZhbHNlXG4gICAgfSxcbiAgICBtZXRob2RzIDoge1xuICAgICAgICBsb29wKCl7fSxcbiAgICAgICAgX3VwZGF0ZURhdGFDaGFuZ2UoICl7XG4gICAgICAgICAgICBjb25zdCBpbmRleEl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9pbmRleC1pdGVtL2luZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBpbmRleEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkRGF0YSA9IHRoaXMuZGF0YS5maXhlZERhdGE7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICog5L2/55So5Ye95pWw6IqC5rWB6ZmQ5Yi26YeN5aSN5Y676K6+572u5pWw57uE5YaF5a656L+b6ICM6ZmQ5Yi25aSa5qyh6YeN5aSN5riy5p+TXG4gICAgICAgICAgICAgKiDmmoLml7bmsqHmnInnoJTnqbblvq7kv6HlnKjmuLLmn5PnmoTml7blgJnmmK/lkKbkvJrov5vooYzlh73mlbDoioLmtYFcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAobGVuID4gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuZGF0YS50aW1lciApe1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuZGF0YS50aW1lciApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lciA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIGluZGV4SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGl0ZW0uZGF0YS5uYW1lICYmIGZpeGVkRGF0YS5pbmRleE9mKCBpdGVtLmRhdGEubmFtZSApID09PSAtMSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChpdGVtLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVEYXRhQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZERhdGEgOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxlbmd0aCA6IGluZGV4SXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8v57uE5Lu25Yqg6L295a6M5oiQ5LmL5ZCO6YeN5paw6K6+572u6aG26YOo6auY5bqmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VG91Y2hTdGFydFZhbCgpO1xuICAgICAgICAgICAgICAgIH0sMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgOiB0aGlzLmRhdGEudGltZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVyU2Nyb2xsKGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRldGFpbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBpbmRleEl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9pbmRleC1pdGVtL2luZGV4Jyk7XG4gICAgICAgICAgICBpbmRleEl0ZW1zLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBpdGVtLmRhdGE7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IGRhdGEudG9wICsgZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYoIHNjcm9sbFRvcCA8IG9mZnNldCAmJiBzY3JvbGxUb3AgPj0gZGF0YS50b3AgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROYW1lIDogZGF0YS5jdXJyZW50TmFtZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGdldEN1cnJlbnRJdGVtKGluZGV4KXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2luZGV4LWl0ZW0vaW5kZXgnKTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4SXRlbXNbaW5kZXhdLmRhdGE7XG4gICAgICAgICAgICByZXN1bHQudG90YWwgPSBpbmRleEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJDYWxsYmFjayhvcHRpb25zKXtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLG9wdGlvbnMpXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXJGaXhlZFRhcChldmVudCl7XG4gICAgICAgICAgICBjb25zdCBlaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRDdXJyZW50SXRlbShlaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3AgOiBpdGVtLnRvcCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TmFtZSA6IGl0ZW0uY3VycmVudE5hbWUsXG4gICAgICAgICAgICAgICAgaXNUb3VjaGVzIDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBpbmRleCA6IGVpbmRleCxcbiAgICAgICAgICAgICAgICBjdXJyZW50IDogaXRlbS5jdXJyZW50TmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlclRvdWNoTW92ZShldmVudCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXNbMF0gfHwge307XG4gICAgICAgICAgICBjb25zdCBwYWdlWSA9IHRvdWNoZXMucGFnZVk7XG4gICAgICAgICAgICBjb25zdCByZXN0ID0gcGFnZVkgLSBkYXRhLnN0YXJ0VG9wO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5jZWlsKCByZXN0L2RhdGEuaXRlbUhlaWdodCApO1xuICAgICAgICAgICAgaW5kZXggPSBpbmRleCA+PSBkYXRhLml0ZW1MZW5ndGggPyBkYXRhLml0ZW1MZW5ndGggLTEgOiBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVQb3NpdGlvbiA9IHRoaXMuZ2V0Q3VycmVudEl0ZW0oaW5kZXgpO1xuXG4gICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIOW9k3RvdWNo6YCJ5Lit55qE5YWD57Sg5ZKM5b2T5YmNY3VycmVudE5hbWXkuI3nm7jnrYnnmoTml7blgJnmiY3pnIfliqjkuIDkuItcbiAgICAgICAgICAgICog5b6u5L+h6ZyH5Yqo5LqL5Lu2XG4gICAgICAgICAgICovXG4gICAgICAgICAgICBpZiggbW92ZVBvc2l0aW9uLm5hbWUgIT09IHRoaXMuZGF0YS5jdXJyZW50TmFtZSApe1xuICAgICAgICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA6IG1vdmVQb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgY3VycmVudE5hbWUgOiBtb3ZlUG9zaXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICBpc1RvdWNoZXMgOiB0cnVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgaW5kZXggOiBpbmRleCxcbiAgICAgICAgICAgICAgICBjdXJyZW50IDogbW92ZVBvc2l0aW9uLm5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXJUb3VjaEVuZCgpe1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZXMgOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VG91Y2hTdGFydFZhbCgpe1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gJy5pLWluZGV4LWZpeGVkJztcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KCBjbGFzc05hbWUgKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzdGFydFRvcCA6IHJlcy50b3BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuZXhlYygpXG4gICAgICAgIH1cbiAgICB9XG59KSJdfQ==