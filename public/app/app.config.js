/**
 * Created by Alessandro on 05/04/2017.
 */

app.config(['$mdThemingProvider', function($mdThemingProvider) {

    $mdThemingProvider.theme('barTheme')
        .primaryPalette('purple')
        .accentPalette('green');
   /* $mdThemingProvider.setDefaultTheme('barTheme');*/


}]);