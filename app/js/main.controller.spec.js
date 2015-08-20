'use strict';
/*jshint expr: true*/
describe('Main Controller', function () {
  var scope, createController;
  
  beforeEach(module('helloAngularJS'));

  describe('List of Members', function() {
  	it('Should exist', inject(function($controller) {
  		var mainController = $controller('MainController');
		  mainController.listOfMembers.should.exist;
  	}));
    it('Should load Members', inject(function($controller) {
      var mainController = $controller('MainController');
      var members = [
        {name: "Pepe", surname: "García"},
        {name: "Juan", surname: "López"}
      ];
      mainController.loadMembers(members);
      mainController.listOfMembers.should.have.length(2);
    }));
  });
  
  describe('sayHello()', function() {
    it('Should say hello', inject(function ($controller) {
      var mainController = $controller('MainController');
      mainController.sayHello().should.equal('Hello AngularJS');
    }));
  });

});