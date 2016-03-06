import mCtrls from './_mCtrls';
import debug from 'debug';
import loader from '../../utilities/loader';

var log = debug('Ctrls');

mCtrls.controller('MovieEditCtrl', ($scope, $state, $stateParams, MovieService) => {
    log('test');
    $scope.updateMovie = function () {
        $scope.movie.edited = Date.now();
        MovieService.updateMovie($scope.movie, $stateParams.id).then(() => {
            $state.go('movies');
        });
    };

    $scope.loadMovie = function () {
        MovieService.getMovie($stateParams.id).then((movie) => {
            $scope.movie = movie;
        });
    };

    $scope.loadMovie();
    console.log(loader.getLoader('main').getResult('app-data'));
});
