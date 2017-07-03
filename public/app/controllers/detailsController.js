/**
 * Created by Alessandro on 27/03/2017.
 */

app.controller('detailsController',['$scope','$http','$routeParams',function ($scope, $http,$routeParams) {

    $http({

        method: 'GET',
        url: '/api/users/' + $routeParams.id
    }).then(function(res) {

        $scope.dettagli = res.data;

    }).finally(function() {

    });


}]);