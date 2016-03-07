import angular from 'angular';
import ngTouch from 'angular-touch';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import LocalStorageModule from 'angular-local-storage';
import mAnimations from './animations/_loader';
import mCtrls from './controllers/_loader';
import mDirectives from './directives/_loader';
import mServices from './services/_loader';
require('angular-toArrayFilter');

/**
 * Register main angular app
 */
angular.module('movieApp', [ngTouch, 'angular-toArrayFilter', ngSanitize, uiRouter,
    LocalStorageModule, mAnimations, mCtrls, mDirectives, mServices])
    .config(($stateProvider, $locationProvider, localStorageServiceProvider, $urlRouterProvider) => {
        'ngInject';

        $stateProvider.state('movies', {
            url: '/movies',
            templateUrl: 'tpls/partials/movies.html',
            cache: false,
            controller: 'MovieListCtrl'
        }).state('viewMovie', {
            url: '/movies/{id}/view',
            templateUrl: 'tpls/partials/movie-view.html',
            cache: false,
            controller: 'MovieViewCtrl'
        }).state('newMovie', {
            url: '/movies/new',
            templateUrl: 'tpls/partials/movie-add.html',
            cache: false,
            controller: 'MovieCreateCtrl'
        }).state('editMovie', {
            url: '/movies/{id}/edit',
            templateUrl: 'tpls/partials/movie-edit.html',
            cache: false,
            controller: 'MovieEditCtrl'
        });

        $locationProvider.html5Mode(true);

        localStorageServiceProvider.setPrefix('movieApp');
        $urlRouterProvider.otherwise('movies');
    })
    .constant('API', 'localStorage');
