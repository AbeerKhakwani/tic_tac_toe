var tictactoe = angular.module("tictactoe", ["ui.router"]);


tictactoe.config(function($stateProvider){
    $stateProvider.state("home",{
        url:"",
        templateUrl: "partials/home.html"
    });
})

tictactoe.directive("reset", function(){
    return function(scope,element){
            element.bind("click",function(){
             removeClass("hidden");
         })
    }
});
