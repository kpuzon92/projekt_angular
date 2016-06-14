/*global Firebase*/

export default class HomeController {
    constructor($scope, $firebaseArray, $firebaseAuth, $rootScope) {

        var ref = new Firebase("https://popping-torch-9340.firebaseio.com/");
        $scope.messages = $firebaseArray(ref);

        //$scope.emails = [];
        $rootScope.emailToFilter = "";
        
        $rootScope.isLogged = false;
        $scope.isDoneVisible = true;
        $scope.isActiveVisible = true;

  $scope.loginUser = function(value) {
      var ref = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
      if ($scope.email == '' || !ref.test($scope.email)){
           //tempmail="";
           $scope.isLogged=false;
           alert("Podany adres email jest nieprawidłowy");
      }
      else{
          alert("zalogowano poprawnie");
         // $scope.emailAuth = $scope.email;
          $scope.isLogged=true;   
          $scope.emailToFilter=$scope.email;
        }
    };


        $scope.addTask = function(){
            var message_ref = new Firebase("https://popping-torch-9340.firebaseio.com/");
            var newMessageRef = message_ref.push();
            newMessageRef.set({
                'done': false,
                'text': $scope.task,
                'mail': $scope.email
            });
            
        };
        
        $scope.doneTask = function(message) {
            var ref1 = new Firebase('https://popping-torch-9340.firebaseio.com/' + message.$id);
            ref1.update({
                'done': true
            });
        };
        
        $scope.unDoneTask = function(message) {
            var ref = new Firebase('https://popping-torch-9340.firebaseio.com/' + message.$id);
            ref.update({
                'done': false
            });
        };

        $scope.deleteTask = function(message) {
            console.log(message);
            $scope.messages.$remove(message);
        };

        $scope.filterAll = function() {
            $scope.isDoneVisible = true;
            $scope.isActiveVisible = true;

        };
        $scope.filterActive = function() {
            $scope.isDoneVisible = false;
            $scope.isActiveVisible = true;

        };

        $scope.filterDone = function() {

            $scope.isDoneVisible = true;
            $scope.isActiveVisible = false;

        };
        $scope.showMine = function() {
            $scope.emailToFilter = $scope.email;
        };
        $scope.showAll = function() {
            $scope.emailToFilter = "";
        };
    }
}