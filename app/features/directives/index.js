import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import angularfire from 'angularfire'
import firebase from 'firebase'

export default angular.module('app.home',[uirouter, angularfire])
.config(routing)
.controller('HomeController',HomeController)
.name;