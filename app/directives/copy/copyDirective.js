/**
 * Created by Ich on 05.08.2018.
 */
app.directive("copy", ["$compile", function ($compile) {
    return {
        restrict: "A",
        scope: {
            text: "@copy"
        },
        transclude: true,
        replace: true,
        template: "<div test md-ink-ripple ng-transclude style='position: relative;'></div>",
        controller: ["$element", "$mdToast", CopyController],
        bindToController: true
    }
}]);

function CopyController($element, $mdToast) {

    var ctrl = this;

    function copyToClipBoard(text) {

        // create temp element
        var copyElement = document.createElement("span");
        copyElement.appendChild(document.createTextNode(text));
        copyElement.id = 'tempCopyToClipboard';
        angular.element(document.body.append(copyElement));

        // select the text
        var range = document.createRange();
        range.selectNode(copyElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // copy & cleanup
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        copyElement.remove();
    }

    ctrl.$onInit = function () {

        $element.bind("click", function (event) {

            event.stopPropagation();
            copyToClipBoard(ctrl.text);
            $mdToast.show({
                template: "<md-toast>" +
                                "<md-icon style='margin: 0;' md-svg-icon='content-copy' md-colors='{fill: \"background-50\"}'></md-icon>" +
                                "<div layout='column' style='margin-left: 18px;'>" +
                                    "<span>Add to clipboard:</span>" +
                                    "<span style='font-weight: bold'>"+ctrl.text+"</span>" +
                                "</div>" +
                            "</md-toast>",
                position: "bottom right",
                hideDelay: 50000
            });
        })
    }
}