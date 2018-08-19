app.component("sidenav", {
    templateUrl: "./components/sidenav/sidenavTemplate.html",
    controller: ["$mdSidenav", SidenavController]
});

function SidenavController($mdSidenav) {

    var ctrl = this;

    ctrl.closeSidenav = function () {
        $mdSidenav("left").close();
    }
}