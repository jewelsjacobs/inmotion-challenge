import mCtrls from './_mCtrls';

mCtrls.controller('MovieListCtrl', ($scope, $state, PopupService, $window, MovieService) => {
    $scope.movies = MovieService.getMovies();

    $scope.deleteMovie = (id) => {
        if (PopupService.showPopup('Really delete this?')) {
            MovieService.deleteMovie(id).then(() => {
                $window.location.href = '';
            });
        }
    };
});
