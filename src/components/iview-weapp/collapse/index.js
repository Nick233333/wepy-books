'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../collapse-item/index': {
            type: 'child'
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn: function clickfn(e) {
            var params = e.detail;
            var allList = this.getRelationNodes('../collapse-item/index');
            allList.forEach(function (item) {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'i-collapse-item-show-content'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIlN0cmluZyIsImFjY29yZGlvbiIsIkJvb2xlYW4iLCJtZXRob2RzIiwiY2xpY2tmbiIsImUiLCJwYXJhbXMiLCJkZXRhaWwiLCJhbGxMaXN0IiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJpdGVtIiwiZGF0YSIsInNldERhdGEiLCJzaG93Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCxrQ0FBMEI7QUFDdEJDLGtCQUFNO0FBRGdCO0FBRG5CLEtBSEw7QUFRTkMsZ0JBQVk7QUFDUkMsY0FBTUMsTUFERTtBQUVSQyxtQkFBV0M7QUFGSCxLQVJOO0FBWU5DLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsQ0FESCxFQUNNO0FBQ1AsZ0JBQU1DLFNBQVNELEVBQUVFLE1BQWpCO0FBQ0EsZ0JBQU1DLFVBQVUsS0FBS0MsZ0JBQUwsQ0FBc0Isd0JBQXRCLENBQWhCO0FBQ0FELG9CQUFRRSxPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixvQkFBSUwsT0FBT1AsSUFBUCxLQUFnQlksS0FBS0MsSUFBTCxDQUFVYixJQUE5QixFQUFvQztBQUNoQ1kseUJBQUtFLE9BQUwsQ0FBYTtBQUNUQyxxQ0FBYTtBQURKLHFCQUFiO0FBR0gsaUJBSkQsTUFJTztBQUNISCx5QkFBS0UsT0FBTCxDQUFhO0FBQ1RDLHFDQUFhO0FBREoscUJBQWI7QUFHSDtBQUNKLGFBVkQ7QUFXSDtBQWZJO0FBWkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcblxuICAgIHJlbGF0aW9uczoge1xuICAgICAgICAnLi4vY29sbGFwc2UtaXRlbS9pbmRleCc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjaGlsZCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIGFjY29yZGlvbjogQm9vbGVhblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjbGlja2ZuKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgY29uc3QgYWxsTGlzdCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY29sbGFwc2UtaXRlbS9pbmRleCcpO1xuICAgICAgICAgICAgYWxsTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5uYW1lID09PSBpdGVtLmRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbnRlbnQ6ICdpLWNvbGxhcHNlLWl0ZW0tc2hvdy1jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbnRlbnQ6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4iXX0=