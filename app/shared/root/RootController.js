app.controller("RootController", ["$rootScope", "$mdMedia", function ($rootScope, $mdMedia) {

    $rootScope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.$mdMedia = $mdMedia;
}]);