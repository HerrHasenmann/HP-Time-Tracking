app.controller("TitleController", ["$scope", "titleService", function ($scope, titleService) {

    $scope.title = titleService.getTitle;
    function init() {
        titleService.setTitle("Material Angular Template");
    }
    init();
}]);