var tictactoe = angular.module("tictactoe", ["ui.router"]);


tictactoe.config(function($stateProvider){
    $stateProvider.state("home",{
        url:"",
        templateUrl: "partials/home.html"
    });
})

tictactoe.directive("gameOver", function(){
    return {
        restrict: 'A',
        scope: {
            'isTrue': '='
        },
        link: function (scope, element, attrs) {
            scope.$watch('isTrue', function(isTrue){
                if(isTrue){
                    element.addClass('btn btn-info');
                }

            });
        }
    }

});
