/**
 * Created by Alessandro on 28/03/2017.
 */

app.controller('editController',['$scope','$http','$routeParams','$httpParamSerializerJQLike',function ($scope, $http,$routeParams,$httpParamSerializerJQLike) {


    $http({
        cache: true,
        method: 'GET',
        url: 'http://localhost:1339/api/users/' + $routeParams.id
    }).then(function (response) {

        $scope.editUsers = response.data;

        console.log(response)
    }).finally(function () {

    });

$scope.submit = function () {

console.log('cioa');

   $http({

        cache: true,
        method: 'PUT',
        url: 'http://localhost:1339/api/users/' + $routeParams.id,
       data: $httpParamSerializerJQLike($scope.editUsers),
       headers: {
           'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
       }

   }).then(function (resp) {

        console.log('ciao');
       $scope.error = resp.statusText;
       $scope.editUsers = resp.data;

   }).finally(function () {
 console.log('hop');
   });
}
}]);