/*global Firebase*/

export default class HomeController {
    constructor($scope, $firebaseArray, $firebaseAuth) {

        var ref = new Firebase("https://blazing-heat-3656.firebaseio.com");
//        ref.orderByChild('mail').equalTo($scope.email);
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };


        $scope.loginUser = function() {
            ref.authWithPassword({
                email: $scope.email,
                password: $scope.password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                }
                else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        };

        $scope.addTask = function(){
            var message_ref = new Firebase('https://learn11.firebaseio.com');
            var newMessageRef = message_ref.push();
        newMessageRef.set({ 'done': 'false', 'text': $scope.task, 'mail' : $scope.email });
            
        };
    }
}