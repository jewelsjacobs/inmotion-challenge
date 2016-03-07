import mCtrls from './_mCtrls';

mCtrls.controller('MovieEditCtrl', ($scope, $state, $stateParams, MovieService) => {
    MovieService.getMovie($stateParams.id).then((movie) => {
        console.log(movie);
        $scope.movie = movie;
    });

    $scope.updateMovie = function () {
        MovieService.updateMovie($scope.movie, $stateParams.id).then(() => {
            $state.go('movies');
        });
    };

});
