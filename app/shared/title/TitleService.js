app.service("titleService", [function () {

    var serv = this;

    var title = "";

    serv.setTitle = function (newTitle) {
        title = newTitle;
    };

    serv.getTitle = function () {
        return title;
    }
}]);