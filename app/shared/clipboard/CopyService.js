app.factory("$clipboard", ["$mdToast", function ($mdToast) {

    var serv = this;

    serv.text = null;
    serv.showToast = false;
    serv.toastText = "Add to clipboard:";

    function copyToClipboard() {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', name);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    function showToast() {
        $mdToast.show({
            template: "<md-toast>" +
            "<md-icon style='margin: 0;' md-svg-icon='content-copy' md-colors='{fill: \"background-50\"}'></md-icon>" +
            "<div layout='column' style='margin-left: 18px;'>" +
            "<span>"+serv.toastText+"</span>" +
            "<span style='font-weight: bold'>"+serv.text+"</span>" +
            "</div>" +
            "</md-toast>",
            position: "bottom right",
            hideDelay: 2000
        });
    }

    return {

        /**
         * Sets the content to copy to the clipboard.
         *
         * @param text
         * @returns {$clipboard}
         */
        copy: function (text) {
            serv.text = text;
            return this;
        },

        /**
         * If called a toast will display the copied content.
         *
         * @returns {$clipboard}
         */
        showToast: function () {
            serv.showToast = true;
            return this;
        },

        /**
         * Changes the text displayed in the Toast. Standard is 'Add to clipboard:'
         *
         * @param toastText
         * @returns {$clipboard}
         */
        toastText: function (toastText) {
            serv.toastText = toastText;
            return this;
        },

        /**
         * Executes the copy to the clipboard
         */
        build: function () {
            copyToClipboard();
            if(serv.showToast){
                showToast();
            }
        }
    };
}]);