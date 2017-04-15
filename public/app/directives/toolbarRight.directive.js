app.directive('appToolbarRight', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/views/shared/toolbarright.view.html",
        controller: 'toolbarRightController'
    }
});
