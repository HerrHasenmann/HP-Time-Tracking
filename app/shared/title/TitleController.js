app.controller("TitleController", ["$scope", "titleService", function ($scope, titleService) {

    $scope.title = titleService.title;
    function init() {
        titleService.setTitle("App Title");
    }
    init();
}]);