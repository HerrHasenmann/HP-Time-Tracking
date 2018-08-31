app.component("timelineSettings", {
	templateUrl: "./components/timeline/settings/settingsTemplate.html",
	controller: ["$window", TimelineSettingsController]
});

function TimelineSettingsController($window) {

	var ctrl = this;

	ctrl.goBack = function () {
		$window.history.back();
	}
}