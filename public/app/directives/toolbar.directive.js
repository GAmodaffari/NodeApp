/**
 * Created by Alessandro on 04/04/2017.
 */
app.directive('appToolbar', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/views/shared/toolbar.view.html",
        controller: 'toolbarController'
    }
});