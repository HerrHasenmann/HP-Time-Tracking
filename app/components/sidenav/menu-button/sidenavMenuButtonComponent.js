app.component("sidenavMenuButton", {
	templateUrl: "./components/sidenav/menu-button/sidenavMenuButtonTemplate.html",
	controller: ["$mdSidenav", SidenavMenuButtonController]
});

function SidenavMenuButtonController($mdSidenav) {

	var ctrl = this;

	ctrl.openSidenav = function () {
		$mdSidenav("left").open();
	};
}