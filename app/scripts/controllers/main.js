'use strict';

/**
 * @ngdoc function
 * @name pfruitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pfruitApp
 */
angular.module('pfruitApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });