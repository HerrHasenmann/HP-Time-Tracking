app.component("default", {
    templateUrl: "./components/default/default.html",
    controller: ["RouteService", DefaultController]
});

function DefaultController(RouteService) {

    var ctrl = this;

    this.routes = RouteService.getRoutes;

    this.gotoRoute = function (route) {
        RouteService.setRoute(route);
    }
}