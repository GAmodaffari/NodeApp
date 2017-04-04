/**
 * Created by Alessandro on 27/03/2017.
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/home',{

        templateUrl: 'app/views/home.view.html',
        controller: 'homeController'

    }).when('/detail/:id',{
        templateUrl:'app/views/details.view.html',
        controller: 'detailsController'

    }).when('/edit/:id',{
        templateUrl:'app/views/edit.view.html',
        controller: 'editController'

    }).when('/insert',{
        templateUrl:'app/views/insert.view.html',
        controller:'insertController'

    })/*.when('/loading',{
        templateUrl:'app/views/shared/loading.view.html'

    })*/.otherwise({
        redirectTo: '/home'
    });

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

}]);