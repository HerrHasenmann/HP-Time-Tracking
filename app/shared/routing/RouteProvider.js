app.provider("RouteService", [function () {
    this.$get = ["$location", function ($location) {
            return new RouteService($location);
        }];

}]);

function RouteService($location) {

    var serv = this;

    var routes = {
        "default": {
            "id": "default",
            "name": "Default",
            "template": "<default></default>"
        },
        "colorSample": {
            "id": "colorSample",
            "name": "Color Sample",
            "template": "<color-sample></color-sample>"
        },
        "momentSample": {
            "id": "momentSample",
            "name": "Moment Sample",
            "template": "<moment-sample></moment-sample>"
        }
    };

    var defaultRoute = routes["default"];

    var redirects = [
        // Sample
        // {
        //     "when": "test",
        //     "route": routes["default"]
        // }
    ];

    serv.getRoutes = function () {
        return routes
    };

    serv.getDefaultRoute = function () {
        return defaultRoute
    };

    serv.getRedirects = function () {
        return redirects;
    };

    serv.getRoute = function () {
        var path = $location.path();

        if(path === "/"){
            return defaultRoute;
        } else {
            return routes[path.slice(1)];
        }
    };

    serv.setRoute = function (route) {
        if (typeof route === "string") {
            if (route.substring(0, 1) !== "/") {
                route = "/" + route;
            }

            $location.url(route);
        } else if (typeof route === "object") {
            if(route.hasOwnProperty("id")){
                $location.url("/"+route.id);
            }
        } else {
            console.error("Given parameter for RouteService.goto() was nether string nor object");
        }
    }
}