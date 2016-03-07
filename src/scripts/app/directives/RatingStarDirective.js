import mDirectives from './_mDirectives';
import _ from 'lodash';

mDirectives.directive('starRating', function () {
    return {
        restrict: 'EA',
        template:
        '<ul class="star-rating" ng-class="{readonly: readonly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
        '    <i class="fa fa-star"></i>' + // or &#9733
        '  </li>' +
        '</ul>',
        scope: {
            ratingValue: '=ngModel',
            max: '=?', // optional (default is 5)
            onRatingSelect: '&?',
            readonly: '=?'
        },
        link: function (scope) {
            if (_.isUndefined(scope.max)) {
                scope.max = 5;
            }
            function updateStars() {
                scope.stars = _.map(Array(scope.max), (value, ix) => {
                    return { filled: ix < scope.ratingValue };
                });
            }
            scope.toggle = function (index) {
                if (_.isUndefined(scope.readonly) || scope.readonly === false) {
                    scope.ratingValue = index + 1;
                    if (_.isFunction(scope.onRatingSelect)) {
                        scope.onRatingSelect({
                            rating: index + 1
                        });
                    }
                }
            };
            scope.$watch('ratingValue', (oldValue, newValue) => {
                if (newValue) {
                    updateStars();
                }
            });
        }
    };
});
