import mCtrls from './_mCtrls';
import _ from 'lodash';
import debug from 'debug';
import loader from '../../utilities/loader';

var log = debug('Ctrls');

mCtrls.controller('MovieViewCtrl', ($scope, $state, $stateParams, MovieService) => {
    MovieService.getMovie($stateParams.id).then((movie) => {
        console.log(loader.getLoader('main').getResult(movie));
        if (!_.isNull(movie)) {
            $scope.movie = movie;
            log($scope.movie._id);
            if (!_.has($scope.movie, '_id')) {
                $scope.movie._id = $stateParams.id;
            }
        }
    });
});
