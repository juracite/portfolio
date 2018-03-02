let app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$timeout', ($scope, $timeout) => {
    $scope.loadImage = function(image) {
        return require('./images/' + image);
    };

    $scope.list = [{
            letter: "V",
            nom: "itaMaps",
            src: "vitamaps-thumbnails.png",
            type: "img"
        },
        {
            letter: "D",
            nom: "isctube",
            src: "http://dianophe.fr",
            type: "iframe"
        }
    ]
}]);

app.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "transparent",
        legend: {
            maxWidth: 400,
            itemWidth: 150
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [
                { y: 90, indexLabel: "HTML" },
                { y: 70, indexLabel: "CSS" },
                { y: 50, indexLabel: "PHP" },
                { y: 55, indexLabel: "Angular" },
                { y: 10, indexLabel: "ASP.NET" },
                { y: 40, indexLabel: "ASM" },
                { y: 80, indexLabel: "C#" }
            ]
        }]
    });
    chart.render();
}