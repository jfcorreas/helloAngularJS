'use strict';

/**
 * @ngdoc overview
 * @name helloAngularJS
 * @description
 * # helloAngularJS
 *
 * Main module of the application.
 */

var translationsEN = {
  TITLE: 'Hello AngularJS',
  HELLO: 'Hello',
  SPANISH: 'Spanish',
  ENGLISH: 'English',
  MEMBERS: 'members'
};

var translationsES = {
  TITLE: 'Hola AngularJS',
  HELLO: 'Hola',
  SPANISH: 'Español',
  ENGLISH: 'Inglés',
  MEMBERS: 'asistentes'
};

angular
  .module('helloAngularJS', ['pascalprecht.translate'])
  .config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en', translationsEN)
    .translations('es', translationsES)
    .preferredLanguage('en');
}]);