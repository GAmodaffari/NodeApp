/**
 * Created by Alessandro on 10/04/2017.
 */

app.directive('appSidenav', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/views/shared/sidenav.view.html',
        controller: 'sidenavController'
    }
});