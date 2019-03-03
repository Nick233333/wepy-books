'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },

    properties: {
        key: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        dot: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 0
        }
    },

    data: {
        current: false,
        currentColor: '',
        scroll: false
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ current: current });
        },
        changeCurrentColor: function changeCurrentColor(currentColor) {
            this.setData({ currentColor: currentColor });
        },
        changeScroll: function changeScroll(scroll) {
            this.setData({ scroll: scroll });
        },
        handleClickItem: function handleClickItem() {
            var parent = this.getRelationNodes('../tabs/index')[0];
            parent.emitEvent(this.data.key);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwia2V5IiwiU3RyaW5nIiwidmFsdWUiLCJ0aXRsZSIsImRvdCIsIkJvb2xlYW4iLCJjb3VudCIsIk51bWJlciIsImRhdGEiLCJjdXJyZW50IiwiY3VycmVudENvbG9yIiwic2Nyb2xsIiwibWV0aG9kcyIsImNoYW5nZUN1cnJlbnQiLCJzZXREYXRhIiwiY2hhbmdlQ3VycmVudENvbG9yIiwiY2hhbmdlU2Nyb2xsIiwiaGFuZGxlQ2xpY2tJdGVtIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsImVtaXRFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCx5QkFBaUI7QUFDYkMsa0JBQU07QUFETztBQURWLEtBSEw7O0FBU05DLGdCQUFZO0FBQ1JDLGFBQUs7QUFDREYsa0JBQU1HLE1BREw7QUFFREMsbUJBQU87QUFGTixTQURHO0FBS1JDLGVBQU87QUFDSEwsa0JBQU1HLE1BREg7QUFFSEMsbUJBQU87QUFGSixTQUxDO0FBU1JFLGFBQUs7QUFDRE4sa0JBQU1PLE9BREw7QUFFREgsbUJBQU87QUFGTixTQVRHO0FBYVJJLGVBQU87QUFDSFIsa0JBQU1TLE1BREg7QUFFSEwsbUJBQU87QUFGSjtBQWJDLEtBVE47O0FBNEJOTSxVQUFNO0FBQ0ZDLGlCQUFTLEtBRFA7QUFFRkMsc0JBQWMsRUFGWjtBQUdGQyxnQkFBUTtBQUhOLEtBNUJBOztBQWtDTkMsYUFBUztBQUNMQyxxQkFESyx5QkFDVUosT0FEVixFQUNtQjtBQUNwQixpQkFBS0ssT0FBTCxDQUFhLEVBQUVMLGdCQUFGLEVBQWI7QUFDSCxTQUhJO0FBSUxNLDBCQUpLLDhCQUllTCxZQUpmLEVBSTZCO0FBQzlCLGlCQUFLSSxPQUFMLENBQWEsRUFBRUosMEJBQUYsRUFBYjtBQUNILFNBTkk7QUFPTE0sb0JBUEssd0JBT1NMLE1BUFQsRUFPaUI7QUFDbEIsaUJBQUtHLE9BQUwsQ0FBYSxFQUFFSCxjQUFGLEVBQWI7QUFDSCxTQVRJO0FBVUxNLHVCQVZLLDZCQVVjO0FBQ2YsZ0JBQU1DLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0IsZUFBdEIsRUFBdUMsQ0FBdkMsQ0FBZjtBQUNBRCxtQkFBT0UsU0FBUCxDQUFpQixLQUFLWixJQUFMLENBQVVSLEdBQTNCO0FBQ0g7QUFiSTtBQWxDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuXG4gICAgcmVsYXRpb25zOiB7XG4gICAgICAgICcuLi90YWJzL2luZGV4Jzoge1xuICAgICAgICAgICAgdHlwZTogJ3BhcmVudCdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGtleToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZG90OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IHtcbiAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRDb2xvcjogJycsXG4gICAgICAgIHNjcm9sbDogZmFsc2VcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VDdXJyZW50IChjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50IH0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VDdXJyZW50Q29sb3IgKGN1cnJlbnRDb2xvcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudENvbG9yIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VTY3JvbGwgKHNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2Nyb2xsIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDbGlja0l0ZW0gKCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWJzL2luZGV4JylbMF07XG4gICAgICAgICAgICBwYXJlbnQuZW1pdEV2ZW50KHRoaXMuZGF0YS5rZXkpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=