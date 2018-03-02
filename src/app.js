let app = angular.module('app', ['chart.js']);

app.config(['ChartJsProvider', function(ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
        responsive: true,
        legend: {
            display: true,
        }
    });
}]);

app.controller('appCtrl', ['$scope', '$timeout', ($scope, $timeout) => {
    $scope.loadImage = function(image) {
        return require('./images/' + image);
    };

    $scope.list = [{
            nom: "VitaMaps",
            src: "vitamaps-thumbnails.png",
            type: "img"
        },
        {
            nom: "DiscTube",
            src: "http://dianophe.fr",
            type: "iframe"
        }
    ]

    $scope.labels = ["HTML", "CSS", "PHP", "Angular", "ASP.NET", "ASM", "C#"];

    $scope.data = [
        [90, 70, 50, 55, 10, 40, 80],
    ];
}]);

app.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);