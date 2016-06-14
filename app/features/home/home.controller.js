/*global Firebase*/

export default class HomeController {
    constructor($scope, $firebaseArray, $firebaseAuth, $rootScope) {

        var ref = new Firebase("https://popping-torch-9340.firebaseio.com");
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };

        $scope.emails = [];
        $rootScope.emailToFilter = "";

        $rootScope.isLogged = false;
        $scope.isDoneVisible = true;
        $scope.isActiveVisible = true;
        
        $scope.loginUser = function() {
            ref.orderByValue().on("value", function(snapshot) {
                snapshot.forEach(function(data) {
                    var firebase_mail = data.val().mail;
                    if ($scope.emails.indexOf(firebase_mail) == -1) {
                        $scope.emails.push(firebase_mail);
                    }
                });
            });
//}; //tutaj
        $scope.isLogged = $scope.emails.some(function(arrVal) {
                return $scope.email === arrVal;
            });
        if ($scope.isLogged) {
                alert("Successfully logged!");
                $scope.emailToFilter = $scope.email;
            }
            else {

                alert("Login not found. To register add new task with this email and then login again.");
            }

        };
        
        $scope.addTask = function(){
            var message_ref = new Firebase("https://popping-torch-9340.firebaseio.com");
            var newMessageRef = message_ref.push();
            newMessageRef.set({
                'done': false,
                'text': $scope.task,
                'mail': $scope.email
            });
            
        };
        
        $scope.doneTask = function(message) {
            var ref = new Firebase('https://popping-torch-9340.firebaseio.com' + message.$id);
            ref.update({
                done: true
            });
        };
        
        $scope.unDoneTask = function(message) {
            var ref = new Firebase('https://popping-torch-9340.firebaseio.com' + message.$id);
            ref.update({
                done: false
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