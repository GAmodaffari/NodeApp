/**
 * Created by Alessandro on 11/04/2017.
 */
app.controller('toolbarRightController',['$scope','$location','$mdDialog','$mdUtil','$http','datiUtenti',function ($scope,$location,$mdDialog,$mdUtil,$http,datiUtenti) {

        var originatorEv;

    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };


    console.log($scope.editId);

    $scope.delete = function(ev){

        var confirm = $mdDialog.confirm()
            .title('Would you like to delete this user?')
            .ariaLabel('Delete')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            console.log(datiUtenti.pipid);
            $http({
                cache: true,
                method: 'DELETE',
                url: 'http://localhost:1339/api/users/'+ datiUtenti.pipid
            }).then(function (response) {
                $scope.nomeUtenti.splice(datiUtenti.pipindex, 1);
            });
            originatorEv = null;
        });
    };

}]);
