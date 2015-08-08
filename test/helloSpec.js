'use strict';

//var expect = require('chai').expect,
//    should = require('chai').should();

describe('Main Controller', function () {
  var scope, createController;
  
  beforeEach(module('helloAngularJS'));
  
  describe('sayHello()', function() {
    it('Should say hello', inject(function ($controller) {
      var mainController = $controller('MainController');
      mainController.sayHello().should.equal('Hello AngularJS');
    }));
  });

});