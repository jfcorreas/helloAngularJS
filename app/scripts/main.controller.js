// main.controller.js
(function() {
    'use strict';

    angular
        .module('helloAngularJS')
        .controller('MainController', MainController);

    function MainController() { 
    	/* jshint validthis: true */
    	var vm = this;
    	//this.sayHello = "NGllo AngularJS";
    	vm.sayHello = function() { return 'NGllo AngularJS ' };
    }
})();