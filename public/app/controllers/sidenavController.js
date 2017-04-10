app.controller('sidenavController', ['$scope', '$location', '$mdSidenav', '$mdUtil', function ($scope, $location, $mdSidenav, $mdUtil){


    $scope.isActive = function(link) {
        var currentRoute = $location.path();
        return link.substring(1) === currentRoute ? 'active' : '';
    };

    $scope.toggleLeft = buildToggler('left');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
        return   $mdUtil.debounce(function(){
            $mdSidenav(navID).toggle()
        },200);
    }
}]);