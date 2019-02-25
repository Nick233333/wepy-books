'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        current: {
            type: Number,
            value: -1,
            observer: '_updateDataChange'
        },
        status: {
            type: String,
            //wait、process、finish、error
            value: ''
        },
        direction: {
            type: String,
            //value has horizontal or vertical 
            value: 'horizontal'
        }
    },
    relations: {
        '../step/index': {
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
    methods: {
        _updateDataChange: function _updateDataChange() {
            var _this = this;

            var steps = this.getRelationNodes('../step/index');
            var len = steps.length;
            if (len > 0) {
                steps.forEach(function (step, index) {
                    step.updateDataChange({
                        len: len,
                        index: index,
                        current: _this.data.current,
                        direction: _this.data.direction
                    });
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib2JzZXJ2ZXIiLCJzdGF0dXMiLCJTdHJpbmciLCJkaXJlY3Rpb24iLCJyZWxhdGlvbnMiLCJsaW5rZWQiLCJfdXBkYXRlRGF0YUNoYW5nZSIsImxpbmtDaGFuZ2VkIiwidW5saW5rZWQiLCJtZXRob2RzIiwic3RlcHMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0ZXAiLCJpbmRleCIsInVwZGF0ZURhdGFDaGFuZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUQyxpQkFBVTtBQUNOQyxrQkFBT0MsTUFERDtBQUVOQyxtQkFBUSxDQUFDLENBRkg7QUFHTkMsc0JBQVc7QUFITCxTQUREO0FBTVRDLGdCQUFTO0FBQ0xKLGtCQUFPSyxNQURGO0FBRUw7QUFDQUgsbUJBQVE7QUFISCxTQU5BO0FBV1RJLG1CQUFZO0FBQ1JOLGtCQUFPSyxNQURDO0FBRVI7QUFDQUgsbUJBQVE7QUFIQTtBQVhILEtBRlA7QUFtQk5LLGVBQVk7QUFDUix5QkFBa0I7QUFDZFAsa0JBQU8sT0FETztBQUVkUSxrQkFGYyxvQkFFTjtBQUNKLHFCQUFLQyxpQkFBTDtBQUNILGFBSmE7QUFLZEMsdUJBTGMseUJBS0M7QUFDWCxxQkFBS0QsaUJBQUw7QUFDSCxhQVBhO0FBUWRFLG9CQVJjLHNCQVFGO0FBQ1IscUJBQUtGLGlCQUFMO0FBQ0g7QUFWYTtBQURWLEtBbkJOO0FBaUNORyxhQUFTO0FBQ0xILHlCQURLLCtCQUNlO0FBQUE7O0FBQ2hCLGdCQUFJSSxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLGVBQXRCLENBQVo7QUFDQSxnQkFBTUMsTUFBTUYsTUFBTUcsTUFBbEI7QUFDQSxnQkFBSUQsTUFBTSxDQUFWLEVBQWE7QUFDVEYsc0JBQU1JLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0JELHlCQUFLRSxnQkFBTCxDQUFzQjtBQUNsQkwsNkJBQU1BLEdBRFk7QUFFbEJJLCtCQUFRQSxLQUZVO0FBR2xCcEIsaUNBQVUsTUFBS3NCLElBQUwsQ0FBVXRCLE9BSEY7QUFJbEJPLG1DQUFZLE1BQUtlLElBQUwsQ0FBVWY7QUFKSixxQkFBdEI7QUFNSCxpQkFQRDtBQVFIO0FBQ0o7QUFkSTtBQWpDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuICAgIHByb3BlcnRpZXMgOiB7XG4gICAgICAgIGN1cnJlbnQgOiB7XG4gICAgICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUgOiAtMSxcbiAgICAgICAgICAgIG9ic2VydmVyIDogJ191cGRhdGVEYXRhQ2hhbmdlJ1xuICAgICAgICB9LFxuICAgICAgICBzdGF0dXMgOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgLy93YWl044CBcHJvY2Vzc+OAgWZpbmlzaOOAgWVycm9yXG4gICAgICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGlvbiA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgICAgICAvL3ZhbHVlIGhhcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsIFxuICAgICAgICAgICAgdmFsdWUgOiAnaG9yaXpvbnRhbCdcbiAgICAgICAgfSBcbiAgICB9LFxuICAgIHJlbGF0aW9ucyA6IHtcbiAgICAgICAgJy4uL3N0ZXAvaW5kZXgnIDoge1xuICAgICAgICAgICAgdHlwZSA6ICdjaGlsZCcsXG4gICAgICAgICAgICBsaW5rZWQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEYXRhQ2hhbmdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua0NoYW5nZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGFDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmxpbmtlZCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGF0YUNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIF91cGRhdGVEYXRhQ2hhbmdlKCkge1xuICAgICAgICAgICAgbGV0IHN0ZXBzID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9zdGVwL2luZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBzdGVwcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAudXBkYXRlRGF0YUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gOiBsZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA6IHRoaXMuZGF0YS5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uIDogdGhpcy5kYXRhLmRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pIl19