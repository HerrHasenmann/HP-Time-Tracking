app.config(["$mdIconProvider", function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('./assets/icons/mdi.svg')
}]);

// Disable aria warnings
app.config(["$mdAriaProvider", function ($mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
}]);

// Fix for not working inputs on mobile devices
app.config(["$mdGestureProvider", function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
}]);

// Set theme for app
app.config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "./sites/default/default.html"
        })
        .otherwise("/");
}]);