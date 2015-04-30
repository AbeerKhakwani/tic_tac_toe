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
    var checkForEndOfGame =function(){

    }

    var checkRow = function(){
        var current = false;
        for (var i = 0; i< $scope.board.length; i++){
                for (var x = 0; x < $scope.board[i].length; x++){
                    console.log($scope.board[i][x].value);
                if($scope.board[i][0].value === $scope.board[i][1].value
                    && $scope.board[i][0].value === $scope.board[i][2].value
                    && $scope.board[i][0].value !== '-')
                    {
                     current = true;

                    }
            }
        }
        return current;
    };

    $scope.move= function(cell){
        cell.value = $scope.currentPlayer;

         if(checkRow() == false ){
                if ($scope.currentPlayer === "x"){
                    $scope.currentPlayer = "o";
                }
                else {
                    $scope.currentPlayer = "x";
                }
         }else{
             console.log("match! Game Over!!!! ");
         }
    };

});

tictactoe.directive("reset", function(){
    return function(scope,element){
            element.bind("click",function(){
             element.after("<div class=''>New game!</div>");
         })
    }
});
