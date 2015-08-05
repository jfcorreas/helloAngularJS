'use strict';

//var expect = require('chai').expect,
//    should = require('chai').should();

describe('Main Controller', function () {
  var scope, createController;
  
  beforeEach(module('helloAngularJS'));
  
  beforeEach(inject(function ($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    
    scope = $rootScope.$new();
    
    createController = function () {
      return $controller('MainController', {$scope: scope});
    };
  }));

  it('should exist', function () {
    true;
  });
  
  afterEach(function () {
    scope.$destroy();
  });

});