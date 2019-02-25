'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        scrollTop: {
            type: Number,
            observer: function observer(val) {
                this._updateScrollTopChange();
            }
        }
    },
    relations: {
        '../sticky-item/index': {
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
        timer: null,
        itemLength: 0
    },
    methods: {
        _updateScrollTopChange: function _updateScrollTopChange() {
            var _this = this;

            var stickies = this.getRelationNodes('../sticky-item/index');
            if (stickies.length > 0) {
                stickies.forEach(function (item) {
                    if (item) {
                        item.updateScrollTopChange(_this.data.scrollTop);
                    }
                });
            }
        },
        _updateDataChange: function _updateDataChange() {
            var stickies = this.getRelationNodes('../sticky-item/index');
            if (stickies.length > 0) {
                if (this.data.timer) {
                    clearTimeout(this.data.timer);
                    this.setData({
                        timer: null
                    });
                }
                this.data.timer = setTimeout(function () {
                    stickies.forEach(function (item, index) {
                        if (item) {
                            item.updateDataChange(index);
                        }
                    });
                }, 0);
                this.setData({
                    timer: this.data.timer
                });
            }
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJzY3JvbGxUb3AiLCJ0eXBlIiwiTnVtYmVyIiwib2JzZXJ2ZXIiLCJ2YWwiLCJfdXBkYXRlU2Nyb2xsVG9wQ2hhbmdlIiwicmVsYXRpb25zIiwibGlua2VkIiwiX3VwZGF0ZURhdGFDaGFuZ2UiLCJsaW5rQ2hhbmdlZCIsInVubGlua2VkIiwiZGF0YSIsInRpbWVyIiwiaXRlbUxlbmd0aCIsIm1ldGhvZHMiLCJzdGlja2llcyIsImdldFJlbGF0aW9uTm9kZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsInVwZGF0ZVNjcm9sbFRvcENoYW5nZSIsImNsZWFyVGltZW91dCIsInNldERhdGEiLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJ1cGRhdGVEYXRhQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUQyxtQkFBWTtBQUNSQyxrQkFBT0MsTUFEQztBQUVSQyxvQkFGUSxvQkFFQ0MsR0FGRCxFQUVLO0FBQ1QscUJBQUtDLHNCQUFMO0FBQ0g7QUFKTztBQURILEtBRlA7QUFVTkMsZUFBWTtBQUNSLGdDQUF5QjtBQUNyQkwsa0JBQU8sT0FEYztBQUVyQk0sa0JBRnFCLG9CQUViO0FBQ0oscUJBQUtDLGlCQUFMO0FBQ0gsYUFKb0I7QUFLckJDLHVCQUxxQix5QkFLTjtBQUNYLHFCQUFLRCxpQkFBTDtBQUNILGFBUG9CO0FBUXJCRSxvQkFScUIsc0JBUVQ7QUFDUixxQkFBS0YsaUJBQUw7QUFDSDtBQVZvQjtBQURqQixLQVZOO0FBd0JORyxVQUFPO0FBQ0hDLGVBQVEsSUFETDtBQUVIQyxvQkFBYTtBQUZWLEtBeEJEO0FBNEJOQyxhQUFVO0FBQ05ULDhCQURNLG9DQUNrQjtBQUFBOztBQUNwQixnQkFBTVUsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixzQkFBdEIsQ0FBakI7QUFDQSxnQkFBSUQsU0FBU0UsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUNyQkYseUJBQVNHLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLHdCQUFJQSxJQUFKLEVBQVU7QUFDTkEsNkJBQUtDLHFCQUFMLENBQTRCLE1BQUtULElBQUwsQ0FBVVgsU0FBdEM7QUFDSDtBQUNKLGlCQUpEO0FBS0g7QUFDSixTQVZLO0FBV05RLHlCQVhNLCtCQVdjO0FBQ2hCLGdCQUFNTyxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixDQUFqQjtBQUNBLGdCQUFJRCxTQUFTRSxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLG9CQUFJLEtBQUtOLElBQUwsQ0FBVUMsS0FBZCxFQUFxQjtBQUNqQlMsaUNBQWMsS0FBS1YsSUFBTCxDQUFVQyxLQUF4QjtBQUNBLHlCQUFLVSxPQUFMLENBQWE7QUFDVFYsK0JBQVE7QUFEQyxxQkFBYjtBQUdIO0FBQ0QscUJBQUtELElBQUwsQ0FBVUMsS0FBVixHQUFrQlcsV0FBVyxZQUFJO0FBQzdCUiw2QkFBU0csT0FBVCxDQUFpQixVQUFDQyxJQUFELEVBQU1LLEtBQU4sRUFBZ0I7QUFDN0IsNEJBQUlMLElBQUosRUFBVTtBQUNOQSxpQ0FBS00sZ0JBQUwsQ0FBc0JELEtBQXRCO0FBQ0g7QUFDSixxQkFKRDtBQUtILGlCQU5pQixFQU1oQixDQU5nQixDQUFsQjtBQU9BLHFCQUFLRixPQUFMLENBQWE7QUFDVFYsMkJBQVEsS0FBS0QsSUFBTCxDQUFVQztBQURULGlCQUFiO0FBR0g7QUFDSjtBQS9CSzs7QUE1QkosQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICBwcm9wZXJ0aWVzIDoge1xuICAgICAgICBzY3JvbGxUb3AgOiB7XG4gICAgICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICAgICAgb2JzZXJ2ZXIodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxUb3BDaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVsYXRpb25zIDoge1xuICAgICAgICAnLi4vc3RpY2t5LWl0ZW0vaW5kZXgnIDoge1xuICAgICAgICAgICAgdHlwZSA6ICdjaGlsZCcsXG4gICAgICAgICAgICBsaW5rZWQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEYXRhQ2hhbmdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua0NoYW5nZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGFDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmxpbmtlZCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGF0YUNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhIDoge1xuICAgICAgICB0aW1lciA6IG51bGwsXG4gICAgICAgIGl0ZW1MZW5ndGggOiAwLFxuICAgIH0sXG4gICAgbWV0aG9kcyA6IHtcbiAgICAgICAgX3VwZGF0ZVNjcm9sbFRvcENoYW5nZSgpe1xuICAgICAgICAgICAgY29uc3Qgc3RpY2tpZXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3N0aWNreS1pdGVtL2luZGV4Jyk7XG4gICAgICAgICAgICBpZiggc3RpY2tpZXMubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgICAgIHN0aWNraWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGl0ZW0gKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlU2Nyb2xsVG9wQ2hhbmdlKCB0aGlzLmRhdGEuc2Nyb2xsVG9wICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfdXBkYXRlRGF0YUNoYW5nZSggKXtcbiAgICAgICAgICAgIGNvbnN0IHN0aWNraWVzID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9zdGlja3ktaXRlbS9pbmRleCcpO1xuICAgICAgICAgICAgaWYoIHN0aWNraWVzLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5kYXRhLnRpbWVyICl7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCggdGhpcy5kYXRhLnRpbWVyIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHN0aWNraWVzLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpdGVtICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVEYXRhQ2hhbmdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LDApXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIgOiB0aGlzLmRhdGEudGltZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbn0pIl19