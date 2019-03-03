'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab-bar-item/index': {
            type: 'child',
            linked: function linked() {
                this.changeCurrent();
            },
            linkChanged: function linkChanged() {
                this.changeCurrent();
            },
            unlinked: function unlinked() {
                this.changeCurrent();
            }
        }
    },

    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        color: {
            type: String,
            value: ''
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },

    data: {
        list: []
    },

    methods: {
        changeCurrent: function changeCurrent() {
            var _this = this;

            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../tab-bar-item/index');
            var len = items.length;

            if (len > 0) {
                var list = [];
                items.forEach(function (item) {
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(_this.data.color);
                    list.push({
                        key: item.data.key
                    });
                });
                this.setData({
                    list: list
                });
            }
        },
        emitEvent: function emitEvent(key) {
            this.triggerEvent('change', { key: key });
        },
        handleClickItem: function handleClickItem(e) {
            var key = e.currentTarget.dataset.key;
            this.emitEvent(key);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiU3RyaW5nIiwidmFsdWUiLCJvYnNlcnZlciIsImNvbG9yIiwiZml4ZWQiLCJCb29sZWFuIiwiZGF0YSIsImxpc3QiLCJtZXRob2RzIiwidmFsIiwiaXRlbXMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJjaGFuZ2VDdXJyZW50Q29sb3IiLCJwdXNoIiwic2V0RGF0YSIsImVtaXRFdmVudCIsInRyaWdnZXJFdmVudCIsImhhbmRsZUNsaWNrSXRlbSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCxpQ0FBeUI7QUFDckJDLGtCQUFNLE9BRGU7QUFFckJDLGtCQUZxQixvQkFFWDtBQUNOLHFCQUFLQyxhQUFMO0FBQ0gsYUFKb0I7QUFLckJDLHVCQUxxQix5QkFLTjtBQUNYLHFCQUFLRCxhQUFMO0FBQ0gsYUFQb0I7QUFRckJFLG9CQVJxQixzQkFRVDtBQUNSLHFCQUFLRixhQUFMO0FBQ0g7QUFWb0I7QUFEbEIsS0FITDs7QUFrQk5HLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xOLGtCQUFNTyxNQUREO0FBRUxDLG1CQUFPLEVBRkY7QUFHTEMsc0JBQVU7QUFITCxTQUREO0FBTVJDLGVBQU87QUFDSFYsa0JBQU1PLE1BREg7QUFFSEMsbUJBQU87QUFGSixTQU5DO0FBVVJHLGVBQU87QUFDSFgsa0JBQU1ZLE9BREg7QUFFSEosbUJBQU87QUFGSjtBQVZDLEtBbEJOOztBQWtDTkssVUFBTTtBQUNGQyxjQUFNO0FBREosS0FsQ0E7O0FBc0NOQyxhQUFTO0FBQ0xiLHFCQURLLDJCQUNtQztBQUFBOztBQUFBLGdCQUF6QmMsR0FBeUIsdUVBQW5CLEtBQUtILElBQUwsQ0FBVVAsT0FBUzs7QUFDcEMsZ0JBQUlXLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0IsdUJBQXRCLENBQVo7QUFDQSxnQkFBTUMsTUFBTUYsTUFBTUcsTUFBbEI7O0FBRUEsZ0JBQUlELE1BQU0sQ0FBVixFQUFhO0FBQ1Qsb0JBQU1MLE9BQU8sRUFBYjtBQUNBRyxzQkFBTUksT0FBTixDQUFjLGdCQUFRO0FBQ2xCQyx5QkFBS3BCLGFBQUwsQ0FBbUJvQixLQUFLVCxJQUFMLENBQVVVLEdBQVYsS0FBa0JQLEdBQXJDO0FBQ0FNLHlCQUFLRSxrQkFBTCxDQUF3QixNQUFLWCxJQUFMLENBQVVILEtBQWxDO0FBQ0FJLHlCQUFLVyxJQUFMLENBQVU7QUFDTkYsNkJBQUtELEtBQUtULElBQUwsQ0FBVVU7QUFEVCxxQkFBVjtBQUdILGlCQU5EO0FBT0EscUJBQUtHLE9BQUwsQ0FBYTtBQUNUWiwwQkFBTUE7QUFERyxpQkFBYjtBQUdIO0FBQ0osU0FsQkk7QUFtQkxhLGlCQW5CSyxxQkFtQk1KLEdBbkJOLEVBbUJXO0FBQ1osaUJBQUtLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsRUFBRUwsUUFBRixFQUE1QjtBQUNILFNBckJJO0FBc0JMTSx1QkF0QkssMkJBc0JZQyxDQXRCWixFQXNCZTtBQUNoQixnQkFBTVAsTUFBTU8sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JULEdBQXBDO0FBQ0EsaUJBQUtJLFNBQUwsQ0FBZUosR0FBZjtBQUNIO0FBekJJO0FBdENILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICByZWxhdGlvbnM6IHtcbiAgICAgICAgJy4uL3RhYi1iYXItaXRlbS9pbmRleCc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjaGlsZCcsXG4gICAgICAgICAgICBsaW5rZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmtDaGFuZ2VkICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmxpbmtlZCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2NoYW5nZUN1cnJlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZml4ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiB7XG4gICAgICAgIGxpc3Q6IFtdXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlQ3VycmVudCAodmFsID0gdGhpcy5kYXRhLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vdGFiLWJhci1pdGVtL2luZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbmdlQ3VycmVudChpdGVtLmRhdGEua2V5ID09PSB2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYW5nZUN1cnJlbnRDb2xvcih0aGlzLmRhdGEuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLmRhdGEua2V5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IGxpc3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdEV2ZW50IChrZXkpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCB7IGtleSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2xpY2tJdGVtIChlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXk7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChrZXkpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=