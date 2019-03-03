'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var warn = function warn(msg, getValue) {
    console.warn(msg);
    console.log('接受到的值为：', getValue);
};

Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    relations: {
        '../cell-group/index': {
            type: 'parent'
        }
    },

    properties: {
        // 左侧标题
        title: {
            type: String
        },
        // 标题下方的描述信息
        label: {
            type: String
        },
        // 右侧内容
        value: {
            type: String
        },
        // 只有点击 footer 区域才触发 tab 事件
        onlyTapFooter: {
            type: Boolean
        },
        // 是否展示右侧箭头并开启尝试以 url 跳转
        isLink: {
            type: null,
            value: ''
        },
        // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
        linkType: {
            type: String,
            value: 'navigateTo'
        },
        url: {
            type: String,
            value: ''
        }
    },

    data: {
        isLastCell: true
    },

    methods: {
        navigateTo: function navigateTo() {
            var url = this.data.url;

            var type = _typeof(this.data.isLink);

            this.triggerEvent('click', {});

            if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

            if (type !== 'boolean' && type !== 'string') {
                warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
                return;
            }

            if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
                warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
                return;
            }
            wx[this.data.linkType].call(wx, { url: url });
        },
        handleTap: function handleTap() {
            if (!this.data.onlyTapFooter) {
                this.navigateTo();
            }
        },
        updateIsLastCell: function updateIsLastCell(isLastCell) {
            this.setData({ isLastCell: isLastCell });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndhcm4iLCJtc2ciLCJnZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJleHRlcm5hbENsYXNzZXMiLCJvcHRpb25zIiwibXVsdGlwbGVTbG90cyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJTdHJpbmciLCJsYWJlbCIsInZhbHVlIiwib25seVRhcEZvb3RlciIsIkJvb2xlYW4iLCJpc0xpbmsiLCJsaW5rVHlwZSIsInVybCIsImRhdGEiLCJpc0xhc3RDZWxsIiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJ0cmlnZ2VyRXZlbnQiLCJpbmRleE9mIiwid3giLCJjYWxsIiwiaGFuZGxlVGFwIiwidXBkYXRlSXNMYXN0Q2VsbCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzVCQyxZQUFRSCxJQUFSLENBQWFDLEdBQWI7QUFDQUUsWUFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJGLFFBQXZCO0FBQ0gsQ0FIRDs7QUFLQUcsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGFBQVM7QUFDTEMsdUJBQWU7QUFEVixLQUhIOztBQU9OQyxlQUFXO0FBQ1AsK0JBQXVCO0FBQ25CQyxrQkFBTTtBQURhO0FBRGhCLEtBUEw7O0FBYU5DLGdCQUFZO0FBQ1I7QUFDQUMsZUFBTztBQUNIRixrQkFBTUc7QUFESCxTQUZDO0FBS1I7QUFDQUMsZUFBTztBQUNISixrQkFBTUc7QUFESCxTQU5DO0FBU1I7QUFDQUUsZUFBTztBQUNITCxrQkFBTUc7QUFESCxTQVZDO0FBYVI7QUFDQUcsdUJBQWU7QUFDWE4sa0JBQU1PO0FBREssU0FkUDtBQWlCUjtBQUNBQyxnQkFBUTtBQUNKUixrQkFBTSxJQURGO0FBRUpLLG1CQUFPO0FBRkgsU0FsQkE7QUFzQlI7QUFDQUksa0JBQVU7QUFDTlQsa0JBQU1HLE1BREE7QUFFTkUsbUJBQU87QUFGRCxTQXZCRjtBQTJCUkssYUFBSztBQUNEVixrQkFBTUcsTUFETDtBQUVERSxtQkFBTztBQUZOO0FBM0JHLEtBYk47O0FBOENOTSxVQUFNO0FBQ0ZDLG9CQUFZO0FBRFYsS0E5Q0E7O0FBa0ROQyxhQUFTO0FBQ0xDLGtCQURLLHdCQUNTO0FBQUEsZ0JBQ0ZKLEdBREUsR0FDTSxLQUFLQyxJQURYLENBQ0ZELEdBREU7O0FBRVYsZ0JBQU1WLGVBQWMsS0FBS1csSUFBTCxDQUFVSCxNQUF4QixDQUFOOztBQUVBLGlCQUFLTyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEVBQTNCOztBQUVBLGdCQUFJLENBQUMsS0FBS0osSUFBTCxDQUFVSCxNQUFYLElBQXFCLENBQUNFLEdBQXRCLElBQTZCQSxRQUFRLE1BQXJDLElBQStDQSxRQUFRLE9BQTNELEVBQW9FOztBQUVwRSxnQkFBSVYsU0FBUyxTQUFULElBQXNCQSxTQUFTLFFBQW5DLEVBQTZDO0FBQ3pDVixxQkFBSyx3QkFBTCxFQUErQixLQUFLcUIsSUFBTCxDQUFVSCxNQUF6QztBQUNBO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQyxZQUFELEVBQWUsWUFBZixFQUE2QixXQUE3QixFQUEwQyxVQUExQyxFQUFzRFEsT0FBdEQsQ0FBOEQsS0FBS0wsSUFBTCxDQUFVRixRQUF4RSxNQUFzRixDQUFDLENBQTNGLEVBQThGO0FBQzFGbkIscUJBQUssMERBQUwsRUFBaUUsS0FBS3FCLElBQUwsQ0FBVUYsUUFBM0U7QUFDQTtBQUNIO0FBQ0RRLGVBQUcsS0FBS04sSUFBTCxDQUFVRixRQUFiLEVBQXVCUyxJQUF2QixDQUE0QkQsRUFBNUIsRUFBZ0MsRUFBQ1AsUUFBRCxFQUFoQztBQUNILFNBbkJJO0FBb0JMUyxpQkFwQkssdUJBb0JRO0FBQ1QsZ0JBQUksQ0FBQyxLQUFLUixJQUFMLENBQVVMLGFBQWYsRUFBOEI7QUFDMUIscUJBQUtRLFVBQUw7QUFDSDtBQUNKLFNBeEJJO0FBMEJMTSx3QkExQkssNEJBMEJhUixVQTFCYixFQTBCeUI7QUFDMUIsaUJBQUtTLE9BQUwsQ0FBYSxFQUFFVCxzQkFBRixFQUFiO0FBQ0g7QUE1Qkk7QUFsREgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhcm4gPSAobXNnLCBnZXRWYWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgIGNvbnNvbGUubG9nKCfmjqXlj5fliLDnmoTlgLzkuLrvvJonLCBnZXRWYWx1ZSk7XG59O1xuXG5Db21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcbiAgICB9LFxuXG4gICAgcmVsYXRpb25zOiB7XG4gICAgICAgICcuLi9jZWxsLWdyb3VwL2luZGV4Jzoge1xuICAgICAgICAgICAgdHlwZTogJ3BhcmVudCdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOW3puS+p+agh+mimFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOagh+mimOS4i+aWueeahOaPj+i/sOS/oeaBr1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWPs+S+p+WGheWuuVxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWPquacieeCueWHuyBmb290ZXIg5Yy65Z+f5omN6Kem5Y+RIHRhYiDkuovku7ZcbiAgICAgICAgb25seVRhcEZvb3Rlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgICB9LFxuICAgICAgICAvLyDmmK/lkKblsZXnpLrlj7Pkvqfnrq3lpLTlubblvIDlkK/lsJ3or5Xku6UgdXJsIOi3s+i9rFxuICAgICAgICBpc0xpbms6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6ZO+5o6l57G75Z6L77yM5Y+v6YCJ5YC85Li6IG5hdmlnYXRlVG/vvIxyZWRpcmVjdFRv77yMc3dpdGNoVGFi77yMcmVMYXVuY2hcbiAgICAgICAgbGlua1R5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbmF2aWdhdGVUbydcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiB7XG4gICAgICAgIGlzTGFzdENlbGw6IHRydWVcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuYXZpZ2F0ZVRvICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIHRoaXMuZGF0YS5pc0xpbms7XG5cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycsIHt9KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNMaW5rIHx8ICF1cmwgfHwgdXJsID09PSAndHJ1ZScgfHwgdXJsID09PSAnZmFsc2UnKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0eXBlICE9PSAnYm9vbGVhbicgJiYgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB3YXJuKCdpc0xpbmsg5bGe5oCn5YC85b+F6aG75piv5LiA5Liq5a2X56ym5Liy5oiW5biD5bCU5YC8JywgdGhpcy5kYXRhLmlzTGluayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoWyduYXZpZ2F0ZVRvJywgJ3JlZGlyZWN0VG8nLCAnc3dpdGNoVGFiJywgJ3JlTGF1bmNoJ10uaW5kZXhPZih0aGlzLmRhdGEubGlua1R5cGUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHdhcm4oJ2xpbmtUeXBlIOWxnuaAp+WPr+mAieWAvOS4uiBuYXZpZ2F0ZVRv77yMcmVkaXJlY3RUb++8jHN3aXRjaFRhYu+8jHJlTGF1bmNoJywgdGhpcy5kYXRhLmxpbmtUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eFt0aGlzLmRhdGEubGlua1R5cGVdLmNhbGwod3gsIHt1cmx9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlVGFwICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLm9ubHlUYXBGb290ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVJc0xhc3RDZWxsIChpc0xhc3RDZWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBpc0xhc3RDZWxsIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=