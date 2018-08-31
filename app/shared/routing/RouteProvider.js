app.provider("RouteService", [function () {

    this.$get = ["$location", function ($location) {
        return new RouteService($location);
    }];

}]);

function RouteService($location) {

    var serv = this;

    var routes = {
        "sidenav": {
            "timeline": {
                "id": "timeline",
                "name": "Timeline",
                "icon": "timetable",
                "template": "<timeline></timeline>"
            },
            "colorSample": {
                "id": "colorSample",
                "name": "Color Sample",
                "icon": "palette",
                "template": "<color-sample></color-sample>"
            },
            "momentSample": {
                "id": "momentSample",
                "name": "Moment Sample",
                "icon": "calendar-clock",
                "template": "<moment-sample></moment-sample>"
            },
            "iconSample": {
                "id": "iconSample",
                "name": "Icon Sample",
                "icon": "apps",
                "template": "<icon-sample></icon-sample>"
            }
        },
        "others": {
            "timelineSettings": {
	            "id": "timelineSettings",
	            "name": "Timeline Settings",
	            "icon": "settings",
	            "template": "<timeline-settings></timeline-settings>"
            }
        }
    };

    var defaultRoute = routes.sidenav["colorSample"];

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

    serv.getSidenavRoutes = function () {
        return routes.sidenav;
    };

    serv.getDefaultRoute = function () {
        return defaultRoute
    };

    serv.getRedirects = function () {
        return redirects;
    };

    serv.getRoute = function () {
        var path = $location.path();

        if (path === "/") {
            return defaultRoute;
        } else {
            if (routes.sidenav[path.slice(1)]) {
                return routes.sidenav[path.slice(1)];
            } else if (routes.others[path.slice(1)]) {
                return routes.others[path.slice(1)]
            }
        }
    };

    serv.setRoute = function (route) {
        if (typeof route === "string") {
            if (route.substring(0, 1) !== "/") {
                route = "/" + route;
            }

            $location.url(route);
        } else if (typeof route === "object") {
            if (route.hasOwnProperty("id")) {
                $location.url("/" + route.id);
            }
        } else {
            console.error("Given parameter for RouteService.goto() was nether string nor object");
        }
    }
}