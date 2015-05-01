tictactoe.controller("TicTacToeCtrl", function TicTacToeCtrl($scope){

    $scope.board = [
        [{value: '-'}, { value: '-'}, { value: '-'}],
        [{value: '-'}, { value: '-'}, { value: '-'}],
        [{value: '-'}, { value: '-'}, { value: '-'}]
    ];


    $scope.reset = function(){
      angular.forEach($scope.board, function(value,key){
            angular.forEach(value, function(cell,keyOfCell){
                       cell.value='-';
            });
            $scope.currentPlayer="X";
            $scope.message="New Game";

        });
    };
    $scope.reset();
    var checkForEndOfGame =function(){
      $scope.current = false;
           var checkRow = function() {

                   for (var i = 0; i < $scope.board.length; i++) {
                       for (var x = 0; x < $scope.board[i].length; x++) {
                           // console.log($scope.board[i][x].value);
                           if ($scope.board[i][0].value === $scope.board[i][1].value
                               && $scope.board[i][0].value === $scope.board[i][2].value
                               && $scope.board[i][0].value !== '-') {
                               $scope.current = true;
                           }

                       }
                   }

               }
               var checkColumn = function()
               {

                       var i = 0;
                       for (var x = 0; x < $scope.board[i].length - 1; x++)
                       {
                           // console.log($scope.board[i][x].value);
                           if ($scope.board[i][x].value === $scope.board[i + 1][x].value
                               && $scope.board[i][x].value === $scope.board[i + 2][x].value
                               && $scope.board[i][x].value !== '-')
                               {
                                   $scope.current = true;
                               }
                       }

                   }

               var checkDiagnal = function()
               {

                       if ($scope.board[0][0].value === $scope.board[1][1].value
                           && $scope.board[0][0].value === $scope.board[2][2].value
                           && $scope.board[0][0].value !== '-')
                           {
                               $scope.current = true;
                                                   }
                       else if($scope.board[0][2].value === $scope.board[1][1].value
                              && $scope.board[0][2].value === $scope.board[2][0].value
                              && $scope.board[0][2].value !== '-')
                       {
                       $scope.current = true;
                       }


               }
               checkDiagnal();
               checkColumn();
               checkRow();

               return $scope.current;
       }

        $scope.isTaken = function(cell){
            return cell.value !== '-';
        };



    $scope.move= function(cell){
        cell.value = $scope.currentPlayer;
        //checkRow() == false &&
         if(checkForEndOfGame() == false  ){
                if ($scope.currentPlayer === "X"){
                    $scope.currentPlayer = "O";
                }
                else {
                    $scope.currentPlayer = "X";

                }
         }else{
            $scope.message= "Match! Game Over!!!!";
            $scope.winner= "Winner: " +$scope.currentPlayer;
            $scope.currentPlayer='-';
         }
    };

});
