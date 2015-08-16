// main.controller.js
(function() {
    'use strict';

    angular
        .module('helloAngularJS')
        .controller('MainController', MainController);

    function MainController() { 
    	/* jshint validthis: true */
    	var vm = this;

    	vm.sayHello = sayHello;
        vm.listOfMembers = "";

        function sayHello() { return 'Hello AngularJS'; }
    }
})();