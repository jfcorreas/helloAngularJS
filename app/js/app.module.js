'use strict';

/**
 * @ngdoc overview
 * @name helloAngularJS
 * @description
 * # helloAngularJS
 *
 * Main module of the application.
 */

var translations = {
  TITLE: 'Hello AngularJS',
  HELLO: 'Hello',
  SPANISH: 'Spanish',
  ENGLISH: 'English',
  MEMBERS: 'members'
};

angular
  .module('helloAngularJS', ['pascalprecht.translate'])
  .config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en', translations)
    .preferredLanguage('en');
}]);