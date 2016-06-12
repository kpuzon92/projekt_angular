import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import angularfire from 'angularfire';
import firebase from 'firebase';

import login from './directives/login';
import todos from './directives/todos';

export default angular.module('app.main', [uirouter, angularfire])
  .config(routing)
  .controller('HomeController', HomeController)
  .directive('login', login)
  .directive('todos', todos)
  .name;