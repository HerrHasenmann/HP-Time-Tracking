app.component("colorSample", {
    templateUrl: "./components/color-sample/colorSampleTemplate.html",
    controller: ["$mdTheming", ColorSampleController]
});

function ColorSampleController($mdTheming){

    var ctrl = this;

    console.log($mdTheming.THEMES);

    ctrl.themes = $mdTheming.THEMES
}