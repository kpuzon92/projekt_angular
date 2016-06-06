export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'TabController',
      controllerAs: 'tabController'
    })
}