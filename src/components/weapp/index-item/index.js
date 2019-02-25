'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../index/index': {
            type: 'parent'
        }
    },
    data: {
        top: 0,
        height: 0,
        currentName: ''
    },
    methods: {
        updateDataChange: function updateDataChange() {
            var _this = this;

            var className = '.i-index-item';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                _this.setData({
                    top: res.top,
                    height: res.height,
                    currentName: _this.data.name
                });
            }).exec();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwicmVsYXRpb25zIiwiZGF0YSIsInRvcCIsImhlaWdodCIsImN1cnJlbnROYW1lIiwibWV0aG9kcyIsInVwZGF0ZURhdGFDaGFuZ2UiLCJjbGFzc05hbWUiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzIiwic2V0RGF0YSIsImV4ZWMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGdCQUFhO0FBQ1RDLGNBQU87QUFDSEMsa0JBQU9DLE1BREo7QUFFSEMsbUJBQVE7QUFGTDtBQURFLEtBRlA7QUFRTkMsZUFBWTtBQUNSLDBCQUFtQjtBQUNmSCxrQkFBTztBQURRO0FBRFgsS0FSTjtBQWFOSSxVQUFPO0FBQ0hDLGFBQU0sQ0FESDtBQUVIQyxnQkFBUyxDQUZOO0FBR0hDLHFCQUFjO0FBSFgsS0FiRDtBQWtCTkMsYUFBUztBQUNMQyx3QkFESyw4QkFDYztBQUFBOztBQUNmLGdCQUFNQyxZQUFZLGVBQWxCO0FBQ0EsZ0JBQU1DLFFBQVFDLEdBQUdDLG1CQUFILEdBQXlCQyxFQUF6QixDQUE0QixJQUE1QixDQUFkO0FBQ0FILGtCQUFNSSxNQUFOLENBQWNMLFNBQWQsRUFBMEJNLGtCQUExQixDQUE2QyxVQUFDQyxHQUFELEVBQU87QUFDNUMsc0JBQUtDLE9BQUwsQ0FBYTtBQUNUYix5QkFBTVksSUFBSVosR0FERDtBQUVUQyw0QkFBU1csSUFBSVgsTUFGSjtBQUdUQyxpQ0FBYyxNQUFLSCxJQUFMLENBQVVMO0FBSGYsaUJBQWI7QUFLUCxhQU5ELEVBTUdvQixJQU5IO0FBT0g7QUFYSTtBQWxCSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxuICAgIHByb3BlcnRpZXMgOiB7XG4gICAgICAgIG5hbWUgOiB7XG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZWxhdGlvbnMgOiB7XG4gICAgICAgICcuLi9pbmRleC9pbmRleCcgOiB7XG4gICAgICAgICAgICB0eXBlIDogJ3BhcmVudCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSA6IHtcbiAgICAgICAgdG9wIDogMCxcbiAgICAgICAgaGVpZ2h0IDogMCxcbiAgICAgICAgY3VycmVudE5hbWUgOiAnJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVEYXRhQ2hhbmdlKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gJy5pLWluZGV4LWl0ZW0nO1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XG4gICAgICAgICAgICBxdWVyeS5zZWxlY3QoIGNsYXNzTmFtZSApLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wIDogcmVzLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IHJlcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TmFtZSA6IHRoaXMuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS5leGVjKClcbiAgICAgICAgfVxuICAgIH1cbn0pIl19