import mCtrls from './_mCtrls';
import _ from 'lodash';

mCtrls.controller('MovieViewCtrl', ($scope, $state, $stateParams, MovieService) => {
    MovieService.getMovie($stateParams.id).then((movie) => {
        if (!_.isNull(movie)) {
            $scope.movie = movie;
            if (!_.has($scope.movie, '_id')) {
                $scope.movie._id = $stateParams.id;
            }
        }
    });
});
