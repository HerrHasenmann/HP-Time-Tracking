app.service("titleService", [function () {

    var service = this;

    service.title = {
        "value": "Title"
    };

    service.setTitle = function (title) {
        service.title.value = title;
    };

    service.getTitle = function () {
        return service.title.value;
    }
}]);