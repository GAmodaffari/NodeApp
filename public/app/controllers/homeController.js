/*
 * Created by Alessandro on 24/03/2017.
 */

app.controller('homeController',['$scope','$http','$mdDialog',function ($scope,$http,$mdDialog) {

        $http({
            cache: true,
            method: 'GET',
            url: 'http://localhost:1339/api/users/'
        }).then(function(res) {

            $scope.nomeUtenti = res.data;

        }).finally(function() {

        });


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

                });
        };

}]);
