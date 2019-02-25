'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../grid-item/index': {
            type: 'child',
            linked: function linked() {
                this.setGridItemWidth();
            },
            linkChanged: function linkChanged() {
                this.setGridItemWidth();
            },
            unlinked: function unlinked() {
                this.setGridItemWidth();
            }
        }
    },

    methods: {
        setGridItemWidth: function setGridItemWidth() {
            var nodes = this.getRelationNodes('../grid-item/index');

            // const len = nodes.length;
            // if (len < 3) {
            //     nodes.forEach(item => {
            //         item.setData({
            //             'width': '33.33%'
            //         });
            //     });
            // } else {
            //     const width = 100 / nodes.length;
            //     nodes.forEach(item => {
            //         item.setData({
            //             'width': width + '%'
            //         });
            //     });
            // }
            var width = 100 / nodes.length;
            nodes.forEach(function (item) {
                item.setData({
                    'width': width + '%'
                });
            });
        }
    },

    ready: function ready() {
        this.setGridItemWidth();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJzZXRHcmlkSXRlbVdpZHRoIiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsIm1ldGhvZHMiLCJub2RlcyIsImdldFJlbGF0aW9uTm9kZXMiLCJ3aWR0aCIsImxlbmd0aCIsImZvckVhY2giLCJpdGVtIiwic2V0RGF0YSIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsZUFBVztBQUNQLDhCQUFzQjtBQUNsQkMsa0JBQU0sT0FEWTtBQUVsQkMsa0JBRmtCLG9CQUVSO0FBQ04scUJBQUtDLGdCQUFMO0FBQ0gsYUFKaUI7QUFLbEJDLHVCQUxrQix5QkFLSDtBQUNYLHFCQUFLRCxnQkFBTDtBQUNILGFBUGlCO0FBUWxCRSxvQkFSa0Isc0JBUU47QUFDUixxQkFBS0YsZ0JBQUw7QUFDSDtBQVZpQjtBQURmLEtBSEw7O0FBa0JORyxhQUFTO0FBQ0xILHdCQURLLDhCQUNlO0FBQ2hCLGdCQUFNSSxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLG9CQUF0QixDQUFkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFNQyxRQUFRLE1BQU1GLE1BQU1HLE1BQTFCO0FBQ0FILGtCQUFNSSxPQUFOLENBQWMsZ0JBQVE7QUFDbEJDLHFCQUFLQyxPQUFMLENBQWE7QUFDVCw2QkFBU0osUUFBUTtBQURSLGlCQUFiO0FBR0gsYUFKRDtBQUtIO0FBekJJLEtBbEJIOztBQThDTkssU0E5Q00sbUJBOENHO0FBQ0wsYUFBS1gsZ0JBQUw7QUFDSDtBQWhESyxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuXG4gICAgcmVsYXRpb25zOiB7XG4gICAgICAgICcuLi9ncmlkLWl0ZW0vaW5kZXgnOiB7XG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxuICAgICAgICAgICAgbGlua2VkICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEdyaWRJdGVtV2lkdGgoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHcmlkSXRlbVdpZHRoKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5saW5rZWQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R3JpZEl0ZW1XaWR0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0R3JpZEl0ZW1XaWR0aCAoKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vZ3JpZC1pdGVtL2luZGV4Jyk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxlbiA9IG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIGlmIChsZW4gPCAzKSB7XG4gICAgICAgICAgICAvLyAgICAgbm9kZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaXRlbS5zZXREYXRhKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICd3aWR0aCc6ICczMy4zMyUnXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCB3aWR0aCA9IDEwMCAvIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIC8vICAgICBub2Rlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtLnNldERhdGEoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGggKyAnJSdcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IDEwMCAvIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGggKyAnJSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlYWR5ICgpIHtcbiAgICAgICAgdGhpcy5zZXRHcmlkSXRlbVdpZHRoKCk7XG4gICAgfVxufSk7XG4iXX0=