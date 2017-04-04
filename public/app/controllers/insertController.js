/**
 * Created by Alessandro on 30/03/2017.
 */

app.controller('insertController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

    console.log('sono su');
    $scope.submit=function () {

        console.log('entro qua');
        $http({
            method: 'POST',
            url: 'http://localhost:1339/api/users',
            data: $httpParamSerializerJQLike($scope.insertUsers),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
            }
        }).then(function (resp) {

            $scope.error = resp.statusText;
            console.log($scope.error);
        });

        console.log('uscito');
    }

}]);
