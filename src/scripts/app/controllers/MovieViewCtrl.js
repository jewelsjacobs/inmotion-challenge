import mCtrls from './_mCtrls';

mCtrls.controller('MovieViewCtrl', ($scope, $state, $stateParams, MovieService) => {
    MovieService.getMovie($stateParams.id).then((movie) => {
        $scope.movie = movie;
        $scope.movie._id = $stateParams.id;
    });
});
