'use strict';

/**
 * @ngdoc function
 * @name pfruitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pfruitApp
 */
angular.module('pfruitApp')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });