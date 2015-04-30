var tictactoe = angular.module("tictactoe", []);

tictactoe.controller("TicTacToeCtrl", function TicTacToeCtrl($scope){

    $scope.board = [
        [{value: '-'}, { value: '-'}, { value: '-'}],
        [{value: '-'}, { value: 'x'}, { value: '-'}],
        [{value: '-'}, { value: '-'}, { value: '-'}]
    ];

    $scope.reset = function(){
      angular.forEach($scope.board, function(value,key){
            angular.forEach(value, function(cell,keyOfCell){
                       cell.value='-';
            });
            $scope.currentPlayer="x";
            $scope.winner="No Winner";
            console.log($scope.winner);
        });
    };
    $scope.reset();

    $scope.move= function(cell){
        cell.value = $scope.currentPlayer;
    };

});

tictactoe.directive("reset", function(){
    return function(scope,element){
            element.bind("click",function(){
             element.after("<div class=''>New game!</div>")
         })
    }
});
