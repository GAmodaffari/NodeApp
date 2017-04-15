/**
 * Created by Alessandro on 04/04/2017.
 */
app.directive('appToolbarLeft', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/views/shared/toolbarleft.view.html",
        controller: 'toolbarLeftController'
    }
});