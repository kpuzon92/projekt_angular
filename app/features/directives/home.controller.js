export default class HomeController {
  constructor($scope, $firebaseArray ) {
      
      var  ref = new Firebase("https://projekt-angular.firebaseio.com/"); 
      $scope.messages = $firebaseArray (ref);
  }
}