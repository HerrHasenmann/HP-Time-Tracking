app.component("momentSample", {
    templateUrl: "./components/moment-sample/momentSampleTemplate.html",
    controller: ["RouteService", MomentSampleController]
});

function MomentSampleController(RouteService) {

    var ctrl = this;

    ctrl.gotoHome = function () {
        RouteService.setRoute("/")
    };

    ctrl.samples = [
        moment().format('MMMM Do YYYY, h:mm:ss a'),
        moment().format('dddd'),
        moment().format("MMM Do YY"),
        moment().format('YYYY [escaped] YYYY'),
        moment().format(),
        "---",
        moment.locale(),
        moment().format('LT'),
        moment().format('LTS'),
        moment().format('L'),
        moment().format('l'),
        moment().format('LL'),
        moment().format('ll'),
        moment().format('LLL'),
        moment().format('lll'),
        moment().format('LLLL'),
        moment().format('llll')
    ];

    ctrl.sampleHints = [
        "moment().format('MMMM Do YYYY, h:mm:ss a')",
        "moment().format('dddd')",
        "moment().format('MMM Do YY')",
        "moment().format('YYYY [escaped] YYYY')",
        "moment().format()",
        "---",
        "moment.locale()",
        "moment().format('LT')",
        "moment().format('LTS')",
        "moment().format('L')",
        "moment().format('l')",
        "moment().format('LL')",
        "moment().format('ll')",
        "moment().format('LLL')",
        "moment().format('lll')",
        "moment().format('LLLL')",
        "moment().format('llll')"
    ];
}