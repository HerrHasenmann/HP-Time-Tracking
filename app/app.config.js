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

// Sets the theme for the app
app.config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo', {
            "default": "700"
        })
        .accentPalette('blue-grey', {
            "default": "500"
        })
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
}]);

// Sets the different routes for the app
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            template : "<default></default>"
        })
        .otherwise("/");
}]);