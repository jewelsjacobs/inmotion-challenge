import mCtrls from './_mCtrls';
import debug from 'debug';
import loader from '../../utilities/loader';

var log = debug('Ctrls');

mCtrls.controller('MovieEditCtrl', ($scope, $state, $stateParams, MovieService) => {
    log('test');
    $scope.updateMovie = function () {
        MovieService.updateMovie($scope.movie, $stateParams.id).then(() => {
            $state.go('movies');
        });
    };

    $scope.loadMovie = function () {
        $scope.movie = MovieService.getMovie($stateParams.id);
    };

    $scope.loadMovie();
    console.log(loader.getLoader('main').getResult('app-data'));
});
