import tour from './tour.html';

let app = angular.module('app', ['ngSanitize']);
app.component('tour', { template: tour });

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
            src: "http://dianophe.fr:3000",
            type: "iframe"
        },
        {
            letter: "CTF",
            nom: " - Multitools",
            src: "https://www.youtube.com/embed/o8cwQXL8NEg",
            type: "iframe"
        }
    ]

    let fadeIn = (element) => {
        angular.element(element).fadeIn();
    }

    $scope.begin = () => {

        angular.element('.loader').fadeOut(1000);

        $timeout(function() {
            angular.element('tour').fadeIn(1000, () => {
                angular.element('.elem-1').fadeIn(500);
            });
        }, 1500);
    };

    $scope.next = (i) => {
        let current = i - 1;

        console.log('eleme-' + current);
        angular.element('.elem-' + current).fadeOut(1000, () => {
            angular.element('.elem-' + i).fadeIn(2000);
        });
    };

    $scope.end = () => {
        angular.element('tour').fadeOut(1000);
        angular.element('.tour').fadeOut(50);

        $timeout(function() {
            angular.element('.loader').fadeIn(2000);
        }, 1500);
    };
}]);

app.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.element').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }

        });

    });

});

window.onload = function() {
    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        animationDuration: 1500,
        backgroundColor: "transparent",
        legend: {
            maxWidth: 400,
            itemWidth: 150
        },
        data: [{
            type: "pie",
            showInLegend: false,
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
    }).render();

}