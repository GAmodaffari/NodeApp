/**
 * Created by Alessandro on 11/04/2017.
 */
app.controller('toolbarRightController',['$scope','$location','$mdDialog','$mdUtil','$http',function ($scope,$location,$mdDialog,$mdUtil,$http) {

        var originatorEv;

    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    $scope.delete = function(id, index,ev){

        var confirm = $mdDialog.confirm()
            .title('Would you like to delete this user?')
            .ariaLabel('Delete')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            $http({
                cache: true,
                method: 'DELETE',
                url: 'http://localhost:1339/api/users/'+ id
            }).then(function (response) {

                $scope.nomeUtenti.splice(index, 1);
            });
            originatorEv = null;
        });
    };
    }]);
