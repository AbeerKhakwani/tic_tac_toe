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
            console.log($scope.currentPlayer);
        });



    }
});
