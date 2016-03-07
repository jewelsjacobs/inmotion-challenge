import mCtrls from './_mCtrls';

mCtrls.controller('MovieCreateCtrl', ($scope, $window, $state, $stateParams, MovieService) => {
    $scope.movie = {};

    $scope.movie.rating = 3;

    $scope.addMovie = function () {
        MovieService.addMovie($scope.movie).then(() => {
            $state.go('movies');
        });
    };
});
