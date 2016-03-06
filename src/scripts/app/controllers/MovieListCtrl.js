import mCtrls from './_mCtrls';

mCtrls.controller('MovieListCtrl', ($scope, $state, PopupService, $window, MovieService) => {
    MovieService.getMovies().then((movies) => {
        $scope.movies = movies;
    });

    $scope.deleteMovie = (id) => {
        if (PopupService.showPopup('Really delete this?')) {
            MovieService.deleteMovie(id).then(() => {
                $window.location.href = '';
            });
        }
    };
});
