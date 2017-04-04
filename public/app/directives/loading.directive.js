/**
 * Created by Alessandro on 04/04/2017.
 */
app.directive('appLoading', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/views/shared/loading.view.html"
    }
});