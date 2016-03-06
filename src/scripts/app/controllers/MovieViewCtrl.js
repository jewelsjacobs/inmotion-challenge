import mCtrls from './_mCtrls';
import debug from 'debug';
import loader from '../../utilities/loader';

var log = debug('Ctrls');

mCtrls.controller('MovieViewCtrl', ($scope, $stateParams, MovieService) => {
    log('test');
    $scope.movie = MovieService.getMovie($stateParams.id);
    console.log(loader.getLoader('main').getResult('app-data'));
});
