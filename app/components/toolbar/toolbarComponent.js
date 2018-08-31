app.component("toolbar", {
    templateUrl: "./components/toolbar/toolbarTemplate.html",
    controller: ["RouteService", "$mdSidenav", ToolbarController]
});

function ToolbarController(RouteService) {

    var ctrl = this;
    ctrl.routesWithOwnToolbar = ["timeline", "timelineSettings"];

    ctrl.route = RouteService.getRoute;

    ctrl.useStandardToolbar = function () {
        if(ctrl.routesWithOwnToolbar.indexOf(ctrl.route().id) === -1){
            return true;
        }
    }
}