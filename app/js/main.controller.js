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
        vm.loadMembers = loadMembers;

      var members = [
        {name: "Pepe", surname: "García"},
        {name: "Juan", surname: "López"}
      ];

      vm.loadMembers(members);

        function sayHello() { return 'Hello AngularJS'; }
        function loadMembers(members) {
            vm.listOfMembers = members;
        }

    }
})();