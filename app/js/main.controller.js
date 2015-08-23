// main.controller.js

// Johnpapa's angular style guide
// [Style Y010] Wrap Angular components in an Immediately Invoked Function Expression (IIFE)
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

        function sayHello(name) { return 'Hello ' + name; }
        function loadMembers(members) {
            vm.listOfMembers = members;
        }

    }
})();