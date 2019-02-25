'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        status: {
            type: String,
            //wait、process、finish、error
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        content: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    relations: {
        '../steps/index': {
            type: 'parent'
        }
    },
    data: {
        //step length
        len: 1,
        //current in step index
        index: 0,
        //parent component select current index
        current: 0,
        //css direction
        direction: 'horizontal'
    },
    methods: {
        updateDataChange: function updateDataChange(options) {
            this.setData({
                len: options.len,
                index: options.index,
                current: options.current,
                direction: options.direction
            });
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJzdGF0dXMiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJ0aXRsZSIsImNvbnRlbnQiLCJpY29uIiwib3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJyZWxhdGlvbnMiLCJkYXRhIiwibGVuIiwiaW5kZXgiLCJjdXJyZW50IiwiZGlyZWN0aW9uIiwibWV0aG9kcyIsInVwZGF0ZURhdGFDaGFuZ2UiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUQyxnQkFBUztBQUNMQyxrQkFBT0MsTUFERjtBQUVMO0FBQ0FDLG1CQUFRO0FBSEgsU0FEQTtBQU1UQyxlQUFRO0FBQ0pILGtCQUFPQyxNQURIO0FBRUpDLG1CQUFRO0FBRkosU0FOQztBQVVURSxpQkFBVTtBQUNOSixrQkFBT0MsTUFERDtBQUVOQyxtQkFBUTtBQUZGLFNBVkQ7QUFjVEcsY0FBTztBQUNITCxrQkFBT0MsTUFESjtBQUVIQyxtQkFBUTtBQUZMO0FBZEUsS0FGUDtBQXFCTkksYUFBUztBQUNMO0FBQ0FDLHVCQUFlO0FBRlYsS0FyQkg7QUF5Qk5DLGVBQVk7QUFDUiwwQkFBbUI7QUFDZlIsa0JBQU87QUFEUTtBQURYLEtBekJOO0FBOEJOUyxVQUFPO0FBQ0g7QUFDQUMsYUFBTSxDQUZIO0FBR0g7QUFDQUMsZUFBUSxDQUpMO0FBS0g7QUFDQUMsaUJBQVUsQ0FOUDtBQU9IO0FBQ0FDLG1CQUFZO0FBUlQsS0E5QkQ7QUF3Q05DLGFBQVU7QUFDTkMsd0JBRE0sNEJBQ1lULE9BRFosRUFDcUI7QUFDdkIsaUJBQUtVLE9BQUwsQ0FBYTtBQUNUTixxQkFBTUosUUFBUUksR0FETDtBQUVUQyx1QkFBUUwsUUFBUUssS0FGUDtBQUdUQyx5QkFBVU4sUUFBUU0sT0FIVDtBQUlUQywyQkFBWVAsUUFBUU87QUFKWCxhQUFiO0FBTUg7QUFSSzs7QUF4Q0osQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcbiAgICBwcm9wZXJ0aWVzIDoge1xuICAgICAgICBzdGF0dXMgOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgLy93YWl044CBcHJvY2Vzc+OAgWZpbmlzaOOAgWVycm9yXG4gICAgICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlIDoge1xuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlIDogJydcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA6IHtcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGljb24gOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxuICAgIH0sXG4gICAgcmVsYXRpb25zIDoge1xuICAgICAgICAnLi4vc3RlcHMvaW5kZXgnIDoge1xuICAgICAgICAgICAgdHlwZSA6ICdwYXJlbnQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEgOiB7XG4gICAgICAgIC8vc3RlcCBsZW5ndGhcbiAgICAgICAgbGVuIDogMSxcbiAgICAgICAgLy9jdXJyZW50IGluIHN0ZXAgaW5kZXhcbiAgICAgICAgaW5kZXggOiAwLFxuICAgICAgICAvL3BhcmVudCBjb21wb25lbnQgc2VsZWN0IGN1cnJlbnQgaW5kZXhcbiAgICAgICAgY3VycmVudCA6IDAsXG4gICAgICAgIC8vY3NzIGRpcmVjdGlvblxuICAgICAgICBkaXJlY3Rpb24gOiAnaG9yaXpvbnRhbCdcbiAgICB9LFxuICAgIG1ldGhvZHMgOiB7XG4gICAgICAgIHVwZGF0ZURhdGFDaGFuZ2UoIG9wdGlvbnMgKXtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbGVuIDogb3B0aW9ucy5sZW4sXG4gICAgICAgICAgICAgICAgaW5kZXggOiBvcHRpb25zLmluZGV4LFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgOiBvcHRpb25zLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uIDogb3B0aW9ucy5kaXJlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn0pIl19