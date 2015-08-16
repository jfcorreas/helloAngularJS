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
  });
  
  describe('sayHello()', function() {
    it('Should say hello', inject(function ($controller) {
      var mainController = $controller('MainController');
      mainController.sayHello().should.equal('Hello AngularJS');
    }));
  });

});