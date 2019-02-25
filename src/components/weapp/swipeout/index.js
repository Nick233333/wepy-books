'use strict';

/*
* touch事件判断方式
* https://github.com/madrobby/zepto/blob/master/src/touch.js#files
*/
function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
}

Component({
    externalClasses: ['i-class'],
    properties: {
        actions: {
            value: [],
            type: Array,
            observer: '_updateButtonSize'
        },
        unclosable: {
            value: false,
            type: Boolean
        },
        toggle: {
            value: false,
            type: Boolean,
            observer: 'closeButtonGroup'
        },
        operateWidth: {
            type: Number,
            value: 160
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    data: {
        //touch start position
        tStart: {
            pageX: 0,
            pageY: 0
        },
        //限制滑动距离
        limitMove: 0,
        //element move position
        position: {
            pageX: 0,
            pageY: 0
        }
    },
    methods: {
        //阻止事件冒泡
        loop: function loop() {},
        _updateButtonSize: function _updateButtonSize() {
            var actions = this.data.actions;
            if (actions.length > 0) {
                var query = wx.createSelectorQuery().in(this);
                var limitMovePosition = 0;
                actions.forEach(function (item) {
                    limitMovePosition += item.width || 0;
                });
                this.data.limitMove = limitMovePosition;
                /*
                    * 动态获取每个传进值的按钮尺寸不能正确获取，在安卓上少了6px
                    * 暂时实现需要在actions里面传递宽度
                    * 需要后期调研
                */
                //query.selectAll('.i-swipeout-button-right-item').boundingClientRect((rects)=>{
                //     if( rects ){
                //         console.log(rects,1111111)
                //         rects.forEach(item => {
                //             limitMovePosition += item.width;
                //         });
                //         this.data.limitMove = limitMovePosition;
                //         console.log(limitMovePosition,111111111)
                //     }
                // }).exec()
            } else {
                this.data.limitMove = this.data.operateWidth;
            }
        },
        handlerTouchstart: function handlerTouchstart(event) {
            var touches = event.touches ? event.touches[0] : {};
            var tStart = this.data.tStart;
            if (touches) {
                for (var i in tStart) {
                    if (touches[i]) {
                        tStart[i] = touches[i];
                    }
                }
            }
        },
        swipper: function swipper(touches) {
            var data = this.data;
            var start = data.tStart;
            var spacing = {
                pageX: touches.pageX - start.pageX,
                pageY: touches.pageY - start.pageY
            };
            if (data.limitMove < Math.abs(spacing.pageX)) {
                spacing.pageX = -data.limitMove;
            }
            this.setData({
                'position': spacing
            });
        },
        handlerTouchmove: function handlerTouchmove(event) {
            var start = this.data.tStart;
            var touches = event.touches ? event.touches[0] : {};
            if (touches) {
                var direction = swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
                if (direction === 'Left') {
                    this.swipper(touches);
                }
            }
        },
        handlerTouchend: function handlerTouchend(event) {
            var start = this.data.tStart;
            var touches = event.changedTouches ? event.changedTouches[0] : {};
            if (touches) {
                var direction = swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
                var spacing = {
                    pageX: touches.pageX - start.pageX,
                    pageY: touches.pageY - start.pageY
                };
                if (Math.abs(spacing.pageX) >= 40 && direction === "Left") {
                    spacing.pageX = spacing.pageX < 0 ? -this.data.limitMove : this.data.limitMove;
                } else {
                    spacing.pageX = 0;
                }
                this.setData({
                    'position': spacing
                });
            }
        },
        handlerButton: function handlerButton(event) {
            if (!this.data.unclosable) {
                this.closeButtonGroup();
            }
            var dataset = event.currentTarget.dataset;
            this.triggerEvent('change', {
                index: dataset.index
            });
        },
        closeButtonGroup: function closeButtonGroup() {
            this.setData({
                'position': { pageX: 0, pageY: 0 }
            });
        },

        //控制自定义组件
        handlerParentButton: function handlerParentButton(event) {
            if (!this.data.unclosable) {
                this.closeButtonGroup();
            }
        }
    },
    ready: function ready() {
        this._updateButtonSize();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN3aXBlRGlyZWN0aW9uIiwieDEiLCJ4MiIsInkxIiwieTIiLCJNYXRoIiwiYWJzIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwicHJvcGVydGllcyIsImFjdGlvbnMiLCJ2YWx1ZSIsInR5cGUiLCJBcnJheSIsIm9ic2VydmVyIiwidW5jbG9zYWJsZSIsIkJvb2xlYW4iLCJ0b2dnbGUiLCJvcGVyYXRlV2lkdGgiLCJOdW1iZXIiLCJvcHRpb25zIiwibXVsdGlwbGVTbG90cyIsImRhdGEiLCJ0U3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwibGltaXRNb3ZlIiwicG9zaXRpb24iLCJtZXRob2RzIiwibG9vcCIsIl91cGRhdGVCdXR0b25TaXplIiwibGVuZ3RoIiwicXVlcnkiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsImxpbWl0TW92ZVBvc2l0aW9uIiwiZm9yRWFjaCIsIml0ZW0iLCJ3aWR0aCIsImhhbmRsZXJUb3VjaHN0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwiaSIsInN3aXBwZXIiLCJzdGFydCIsInNwYWNpbmciLCJzZXREYXRhIiwiaGFuZGxlclRvdWNobW92ZSIsImRpcmVjdGlvbiIsImhhbmRsZXJUb3VjaGVuZCIsImNoYW5nZWRUb3VjaGVzIiwiaGFuZGxlckJ1dHRvbiIsImNsb3NlQnV0dG9uR3JvdXAiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsInRyaWdnZXJFdmVudCIsImluZGV4IiwiaGFuZGxlclBhcmVudEJ1dHRvbiIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFDOzs7O0FBSUQsU0FBU0EsY0FBVCxDQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsV0FBT0MsS0FBS0MsR0FBTCxDQUFTTCxLQUFLQyxFQUFkLEtBQ1BHLEtBQUtDLEdBQUwsQ0FBU0gsS0FBS0MsRUFBZCxDQURPLEdBQ2NILEtBQUtDLEVB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LEdBQXFCLENBQUUsS0FBS0YsSUFBTCxDQUFVSSxTQUFqQyxHQUE2QyxLQUFLSixJQUFMLENBQVVJLFNBQXZFO0FBQ0gsaUJBRkQsTUFFSztBQUNEb0IsNEJBQVF0QixLQUFSLEdBQWdCLENBQWhCO0FBQ0g7QUFDRCxxQkFBS3VCLE9BQUwsQ0FBYTtBQUNULGdDQUFhRDtBQURKLGlCQUFiO0FBR0g7QUFDSixTQXRGSztBQXVGTk0scUJBdkZNLHlCQXVGUVgsS0F2RlIsRUF1RmM7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLbkIsSUFBTCxDQUFVUCxVQUFmLEVBQTJCO0FBQ3ZCLHFCQUFLc0MsZ0JBQUw7QUFDSDtBQUNELGdCQUFNQyxVQUFVYixNQUFNYyxhQUFOLENBQW9CRCxPQUFwQztBQUNBLGlCQUFLRSxZQUFMLENBQWtCLFFBQWxCLEVBQTJCO0FBQ3ZCQyx1QkFBUUgsUUFBUUc7QUFETyxhQUEzQjtBQUdILFNBL0ZLO0FBZ0dOSix3QkFoR00sOEJBZ0dZO0FBQ2QsaUJBQUtOLE9BQUwsQ0FBYTtBQUNULDRCQUFhLEVBQUN2QixPQUFRLENBQVQsRUFBV0MsT0FBUSxDQUFuQjtBQURKLGFBQWI7QUFHSCxTQXBHSzs7QUFxR047QUFDQWlDLDJCQXRHTSwrQkFzR2NqQixLQXRHZCxFQXNHb0I7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLbkIsSUFBTCxDQUFVUCxVQUFmLEVBQTJCO0FBQ3ZCLHFCQUFLc0MsZ0JBQUw7QUFDSDtBQUNKO0FBMUdLLEtBeENKO0FBb0pOTSxTQXBKTSxtQkFvSkM7QUFDSCxhQUFLN0IsaUJBQUw7QUFDSDtBQXRKSyxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qXG4qIHRvdWNo5LqL5Lu25Yik5pat5pa55byPXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWRyb2JieS96ZXB0by9ibG9iL21hc3Rlci9zcmMvdG91Y2guanMjZmlsZXNcbiovXG5mdW5jdGlvbiBzd2lwZURpcmVjdGlvbih4MSwgeDIsIHkxLCB5Mikge1xuICAgIHJldHVybiBNYXRoLmFicyh4MSAtIHgyKSA+PVxuICAgIE1hdGguYWJzKHkxIC0geTIpID8gKHgxIC0geDIgPiAwID8gJ0xlZnQnIDogJ1JpZ2h0JykgOiAoeTEgLSB5MiA+IDAgPyAnVXAnIDogJ0Rvd24nKVxufVxuXG5Db21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIG9ic2VydmVyIDogJ191cGRhdGVCdXR0b25TaXplJ1xuICAgICAgICB9LFxuICAgICAgICB1bmNsb3NhYmxlIDoge1xuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGUgOiBCb29sZWFuXG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZSA6IHtcbiAgICAgICAgICAgIHZhbHVlIDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyIDogJ2Nsb3NlQnV0dG9uR3JvdXAnXG4gICAgICAgIH0sXG4gICAgICAgIG9wZXJhdGVXaWR0aCA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZSA6IDE2MFxuICAgICAgICB9XG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxuICAgIH0sXG4gICAgZGF0YSA6IHtcbiAgICAgICAgLy90b3VjaCBzdGFydCBwb3NpdGlvblxuICAgICAgICB0U3RhcnQgOiB7XG4gICAgICAgICAgICBwYWdlWCA6IDAsXG4gICAgICAgICAgICBwYWdlWSA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgLy/pmZDliLbmu5Hliqjot53nprtcbiAgICAgICAgbGltaXRNb3ZlIDogMCxcbiAgICAgICAgLy9lbGVtZW50IG1vdmUgcG9zaXRpb25cbiAgICAgICAgcG9zaXRpb24gOiB7XG4gICAgICAgICAgICBwYWdlWCA6IDAsXG4gICAgICAgICAgICBwYWdlWSA6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kcyA6IHtcbiAgICAgICAgLy/pmLvmraLkuovku7blhpLms6FcbiAgICAgICAgbG9vcCgpe30sXG4gICAgICAgIF91cGRhdGVCdXR0b25TaXplKCl7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5kYXRhLmFjdGlvbnM7XG4gICAgICAgICAgICBpZiggYWN0aW9ucy5sZW5ndGggPiAwICl7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XG4gICAgICAgICAgICAgICAgbGV0IGxpbWl0TW92ZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0TW92ZVBvc2l0aW9uICs9IGl0ZW0ud2lkdGggfHwgMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGltaXRNb3ZlID0gbGltaXRNb3ZlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgKiDliqjmgIHojrflj5bmr4/kuKrkvKDov5vlgLznmoTmjInpkq7lsLrlr7jkuI3og73mraPnoa7ojrflj5bvvIzlnKjlronljZPkuIrlsJHkuoY2cHhcbiAgICAgICAgICAgICAgICAgICAgKiDmmoLml7blrp7njrDpnIDopoHlnKhhY3Rpb25z6YeM6Z2i5Lyg6YCS5a695bqmXG4gICAgICAgICAgICAgICAgICAgICog6ZyA6KaB5ZCO5pyf6LCD56CUXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvL3F1ZXJ5LnNlbGVjdEFsbCgnLmktc3dpcGVvdXQtYnV0dG9uLXJpZ2h0LWl0ZW0nKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlY3RzKT0+e1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiggcmVjdHMgKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlY3RzLDExMTExMTEpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxpbWl0TW92ZVBvc2l0aW9uICs9IGl0ZW0ud2lkdGg7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZGF0YS5saW1pdE1vdmUgPSBsaW1pdE1vdmVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGxpbWl0TW92ZVBvc2l0aW9uLDExMTExMTExMSlcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pLmV4ZWMoKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxpbWl0TW92ZSA9IHRoaXMuZGF0YS5vcGVyYXRlV2lkdGg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXJUb3VjaHN0YXJ0KGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IHt9O1xuICAgICAgICAgICAgY29uc3QgdFN0YXJ0ID0gdGhpcy5kYXRhLnRTdGFydDtcbiAgICAgICAgICAgIGlmKCB0b3VjaGVzICl7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSBpbiB0U3RhcnQgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRvdWNoZXNbaV0gKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRTdGFydFtpXSA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBwZXIodG91Y2hlcyl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBkYXRhLnRTdGFydDtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNpbmcgPSB7XG4gICAgICAgICAgICAgICAgcGFnZVggOiB0b3VjaGVzLnBhZ2VYIC0gc3RhcnQucGFnZVgsXG4gICAgICAgICAgICAgICAgcGFnZVkgOiB0b3VjaGVzLnBhZ2VZIC0gc3RhcnQucGFnZVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBkYXRhLmxpbWl0TW92ZSA8ICBNYXRoLmFicyggc3BhY2luZy5wYWdlWCApICl7XG4gICAgICAgICAgICAgICAgc3BhY2luZy5wYWdlWCA9IC1kYXRhLmxpbWl0TW92ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJyA6IHNwYWNpbmdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXJUb3VjaG1vdmUoZXZlbnQpe1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmRhdGEudFN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdIDoge307XG4gICAgICAgICAgICBpZiggdG91Y2hlcyApe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHN3aXBlRGlyZWN0aW9uKCBzdGFydC5wYWdlWCx0b3VjaGVzLnBhZ2VYLHN0YXJ0LnBhZ2VZLHRvdWNoZXMucGFnZVkgKTtcbiAgICAgICAgICAgICAgICBpZiggZGlyZWN0aW9uID09PSAnTGVmdCcgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwcGVyKCB0b3VjaGVzICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVyVG91Y2hlbmQoZXZlbnQpe1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmRhdGEudFN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiB7fTtcbiAgICAgICAgICAgIGlmKCB0b3VjaGVzICl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gc3dpcGVEaXJlY3Rpb24oIHN0YXJ0LnBhZ2VYLHRvdWNoZXMucGFnZVgsc3RhcnQucGFnZVksdG91Y2hlcy5wYWdlWSApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYWNpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VYIDogdG91Y2hlcy5wYWdlWCAtIHN0YXJ0LnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICBwYWdlWSA6IHRvdWNoZXMucGFnZVkgLSBzdGFydC5wYWdlWVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggTWF0aC5hYnMoIHNwYWNpbmcucGFnZVggKSA+PSA0MCAmJiBkaXJlY3Rpb24gPT09IFwiTGVmdFwiICl7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmcucGFnZVggPSBzcGFjaW5nLnBhZ2VYICA8IDAgPyAtIHRoaXMuZGF0YS5saW1pdE1vdmUgOiB0aGlzLmRhdGEubGltaXRNb3ZlO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nLnBhZ2VYID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJyA6IHNwYWNpbmdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVyQnV0dG9uKGV2ZW50KXtcbiAgICAgICAgICAgIGlmKCAhdGhpcy5kYXRhLnVuY2xvc2FibGUgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQnV0dG9uR3JvdXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGFzZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJyx7XG4gICAgICAgICAgICAgICAgaW5kZXggOiBkYXRhc2V0LmluZGV4XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZUJ1dHRvbkdyb3VwKCl7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICdwb3NpdGlvbicgOiB7cGFnZVggOiAwLHBhZ2VZIDogMH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIC8v5o6n5Yi26Ieq5a6a5LmJ57uE5Lu2XG4gICAgICAgIGhhbmRsZXJQYXJlbnRCdXR0b24oZXZlbnQpe1xuICAgICAgICAgICAgaWYoICF0aGlzLmRhdGEudW5jbG9zYWJsZSApe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCdXR0b25Hcm91cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZWFkeSgpe1xuICAgICAgICB0aGlzLl91cGRhdGVCdXR0b25TaXplKCk7XG4gICAgfVxufSk7XG4iXX0=