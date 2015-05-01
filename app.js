var tictactoe = angular.module("tictactoe", ["ui.router"]);


tictactoe.config(function($stateProvider){
    $stateProvider.state("home",{
        url:"",
        templateUrl: "partials/home.html"
    });
})

tictactoe.directive("gameOver", function(){
    return function(scope,element){

});
