app.component("toolbar", {
    templateUrl: "./components/toolbar/toolbarTemplate.html",
    controller: ["RouteService", "$mdSidenav", ToolbarController]
});

function ToolbarController(RouteService, $mdSidenav) {

    var ctrl = this;
    ctrl.routesWithOwnToolbar = ["timeline"];

    ctrl.route = RouteService.getRoute;

    ctrl.openSidenav = function () {
        $mdSidenav("left").open();
    };

    ctrl.useStandardToolbar = function () {

        if(ctrl.routesWithOwnToolbar.indexOf(ctrl.route().id) === -1){
            return true;
        }
    }
}