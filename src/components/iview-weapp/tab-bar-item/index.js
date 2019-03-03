'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab-bar/index': {
            type: 'parent'
        }
    },

    properties: {
        icon: {
            type: String,
            value: ''
        },
        currentIcon: {
            type: String,
            value: ''
        },
        img: {
            type: String,
            value: ''
        },
        currentImg: {
            type: String,
            value: ''
        },
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
        currentColor: ''
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ current: current });
        },
        changeCurrentColor: function changeCurrentColor(currentColor) {
            this.setData({ currentColor: currentColor });
        },
        handleClickItem: function handleClickItem() {
            var parent = this.getRelationNodes('../tab-bar/index')[0];
            parent.emitEvent(this.data.key);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIlN0cmluZyIsInZhbHVlIiwiY3VycmVudEljb24iLCJpbWciLCJjdXJyZW50SW1nIiwia2V5IiwidGl0bGUiLCJkb3QiLCJCb29sZWFuIiwiY291bnQiLCJOdW1iZXIiLCJkYXRhIiwiY3VycmVudCIsImN1cnJlbnRDb2xvciIsIm1ldGhvZHMiLCJjaGFuZ2VDdXJyZW50Iiwic2V0RGF0YSIsImNoYW5nZUN1cnJlbnRDb2xvciIsImhhbmRsZUNsaWNrSXRlbSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJlbWl0RXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyxlQUFXO0FBQ1AsNEJBQW9CO0FBQ2hCQyxrQkFBTTtBQURVO0FBRGIsS0FITDs7QUFTTkMsZ0JBQVk7QUFDUkMsY0FBTTtBQUNGRixrQkFBTUcsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBREU7QUFLUkMscUJBQWE7QUFDVEwsa0JBQU1HLE1BREc7QUFFVEMsbUJBQU87QUFGRSxTQUxMO0FBU1JFLGFBQUs7QUFDRE4sa0JBQU1HLE1BREw7QUFFREMsbUJBQU87QUFGTixTQVRHO0FBYVJHLG9CQUFZO0FBQ1JQLGtCQUFNRyxNQURFO0FBRVJDLG1CQUFPO0FBRkMsU0FiSjtBQWlCUkksYUFBSztBQUNEUixrQkFBTUcsTUFETDtBQUVEQyxtQkFBTztBQUZOLFNBakJHO0FBcUJSSyxlQUFPO0FBQ0hULGtCQUFNRyxNQURIO0FBRUhDLG1CQUFPO0FBRkosU0FyQkM7QUF5QlJNLGFBQUs7QUFDRFYsa0JBQU1XLE9BREw7QUFFRFAsbUJBQU87QUFGTixTQXpCRztBQTZCUlEsZUFBTztBQUNIWixrQkFBTWEsTUFESDtBQUVIVCxtQkFBTztBQUZKO0FBN0JDLEtBVE47O0FBNENOVSxVQUFNO0FBQ0ZDLGlCQUFTLEtBRFA7QUFFRkMsc0JBQWM7QUFGWixLQTVDQTs7QUFpRE5DLGFBQVM7QUFDTEMscUJBREsseUJBQ1VILE9BRFYsRUFDbUI7QUFDcEIsaUJBQUtJLE9BQUwsQ0FBYSxFQUFFSixnQkFBRixFQUFiO0FBQ0gsU0FISTtBQUlMSywwQkFKSyw4QkFJZUosWUFKZixFQUk2QjtBQUM5QixpQkFBS0csT0FBTCxDQUFhLEVBQUVILDBCQUFGLEVBQWI7QUFDSCxTQU5JO0FBT0xLLHVCQVBLLDZCQU9jO0FBQ2YsZ0JBQU1DLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0Isa0JBQXRCLEVBQTBDLENBQTFDLENBQWY7QUFDQUQsbUJBQU9FLFNBQVAsQ0FBaUIsS0FBS1YsSUFBTCxDQUFVTixHQUEzQjtBQUNIO0FBVkk7QUFqREgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcblxuICAgIHJlbGF0aW9uczoge1xuICAgICAgICAnLi4vdGFiLWJhci9pbmRleCc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXJlbnQnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50SW1nOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkb3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YToge1xuICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgY3VycmVudENvbG9yOiAnJ1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZUN1cnJlbnQgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnQgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZUN1cnJlbnRDb2xvciAoY3VycmVudENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50Q29sb3IgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrSXRlbSAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYi1iYXIvaW5kZXgnKVswXTtcbiAgICAgICAgICAgIHBhcmVudC5lbWl0RXZlbnQodGhpcy5kYXRhLmtleSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==