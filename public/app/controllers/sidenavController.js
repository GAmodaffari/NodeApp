/**
 * Created by Alessandro on 12/04/2017.
 */


app.controller('sidenavController',['$scope','$http','$routeParams','datiUtenti',function ($scope, $http,$routeParams, datiUtenti) {


    $http({
        cache: true,
        method: 'GET',
        url: 'http://localhost:1339/api/users/'
    }).then(function(res) {

        $scope.nomeUtenti = res.data;
    }).finally(function() {

    });

    $scope.pass = function(index, id) {

        var content = {

            ipindex:index,
            ipid:id
        };
        console.log('index',content.pipindex,'id', content.pipid);

        datiUtenti.pipid = content.ipid;
        datiUtenti.pipindex = content.ipindex;

        console.log(datiUtenti);
    }


}]);