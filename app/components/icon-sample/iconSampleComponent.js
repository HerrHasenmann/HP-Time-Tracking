app.component("iconSample", {
    templateUrl: "./components/icon-sample/iconSampleTemplate.html",
    controller: ["$rootScope", "$timeout", "$clipboard", "ICONS", IconSampleController]
});

function IconSampleController($rootScope, $timeout, $clipboard, ICONS) {

    var ctrl = this;
    var lodingPromise = null;
    var iconsToLoad = 50;

    ctrl.icons = [];

    ctrl.copyToClipboard = function (name) {
        $clipboard.copy(name).showToast().build();
    };

    ctrl.filterIcons = function () {
        if (ctrl.searchQuery) {
            loadIcons(ICONS.filter(function (icon) {
                var query = ctrl.searchQuery.toLowerCase();
                var iconName = icon.name.toLowerCase();
                var aliases = icon.aliases;

                if (iconName.indexOf(query) !== -1) {
                    return true;
                }

                if (aliases) {
                    for (var i = 0; i < aliases.length; i++) {
                        var alias = aliases[i];
                        if (alias.indexOf(query) !== -1) {
                            return true;
                        }
                    }
                }

            }))
        }else{
            loadIcons(ICONS);
        }

    };

    function loadIcons(icons) {

        $timeout.cancel(lodingPromise);
        ctrl.icons = [];
        var lower = 0;
        var upper = iconsToLoad <= icons.length ? iconsToLoad : icons.length;

        load(lower, upper, icons)

    }

    function load(lower, upper, icons) {
        lodingPromise = $timeout(function (lower, upper, icons) {
            $rootScope.safeApply(function () {
                ctrl.icons = ctrl.icons.concat(icons.slice(lower, upper));

                lower += iconsToLoad;
                lower = lower <= icons.length ? lower : icons.length;
                upper += iconsToLoad;
                upper = upper <= icons.length ? upper : icons.length;

                if(lower !== upper){
                    load(lower, upper, icons);
                }
            })
        }, 50, false, lower, upper, icons);
    }


    ctrl.$onInit = function () {
        loadIcons(ICONS)
    }
}