/**
 * Created by Alessandro on 12/04/2017.
 */


app.controller('sidenavController',['$scope','$http','$routeParams',function ($scope, $http,$routeParams) {

    $http({
        cache: true,
        method: 'GET',
        url: 'http://localhost:1339/api/users/'
    }).then(function(res) {

        $scope.nomeUtenti = res.data;

    }).finally(function() {

    });



}]);