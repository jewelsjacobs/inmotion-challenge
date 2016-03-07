import mCtrls from './_mCtrls';

mCtrls.controller('MovieEditCtrl', ($scope, $state, $stateParams, MovieService) => {
    $scope.movie = {};

    $scope.movie.rating = 3;

    MovieService.getMovie($stateParams.id).then((movie) => {
        $scope.movie.rating = movie.rating;
        $scope.movie = movie;
    });

    $scope.updateMovie = function () {
        MovieService.updateMovie($scope.movie, $stateParams.id).then(() => {
            $state.go('movies');
        });
    };

});
