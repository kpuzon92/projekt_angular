import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import TabController from './tab.controller';

export default angular.module('app.home',[uirouter])
.config(routing)
.controller('TabController',TabController)
.name;