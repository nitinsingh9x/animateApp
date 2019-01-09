(function() {
    'use strict';

    angular
        .module('app')
        .controller('LabController', LabController);

    LabController.$inject = ['$scope','$state','$timeout'];
    function LabController($scope,$state,$timeout) {
        var vm = this;
        // $timeout(function () {
        //     $state.go('root.home');
        // }, 5000);

        activate();

        ////////////////

        function activate() { }
    }
})();