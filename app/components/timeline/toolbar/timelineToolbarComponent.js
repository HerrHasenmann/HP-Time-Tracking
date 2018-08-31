app.component("timelineToolbar", {
    templateUrl: "./components/timeline/toolbar/timelineToolbarTemplate.html",
    controller: ["$location", "$mdSidenav", TimelineToolbarController]
});

function TimelineToolbarController($location) {

    var ctrl = this;

	ctrl.selectedGotoDate = moment().toDate();
    ctrl.maxDate = moment().toDate();
    ctrl.minDate = moment().subtract(30, "d").toDate();

    ctrl.gotoToday = function () {
	    ctrl.gotoDate(moment().toDate());
    };

    ctrl.gotoDate = function (date) {
	    $location.path("/timeline").search({"date": moment(date).format("DD-MM-YYYY")});
    };

    ctrl.openSettings = function () {
	    $location.path("/timelineSettings").search({});
    }
}