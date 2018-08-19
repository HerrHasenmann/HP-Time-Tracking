app.component("theme", {
    templateUrl: "./components/color-sample/theme/themeTemplate.html",
    controller: [ThemeController],
    bindings: {
        theme: "<",
        showHue: "<"
    }
});

function ThemeController() {

}