app.component("colorSample", {
    templateUrl: "./components/color-sample/colorSampleTemplate.html",
    controller: ["$mdTheming", ColorSampleController]
});

function ColorSampleController($mdTheming){

    var ctrl = this;

    ctrl.themes = $mdTheming.THEMES
}