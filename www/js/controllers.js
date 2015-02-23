angular.module('timer.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TimersCtrl', function($scope, $rootScope) {
  // Dummy data for testing. Remove from root scope
  $rootScope.timers = [
    { title: 'Boiled Eggs', id: 1 },
    { title: 'Crunches', id: 2 },
    { title: 'Sprints', id: 3 },
    { title: 'Planks', id: 4 },
  ];
})

.controller('TimerCtrl', function($scope, $rootScope, $stateParams) {
  // TODO load timer data to scope. Dirty and needs to be changed and moved to a service
  $scope.getTimer = function(timerId){
    for(var i=0; i < $scope.timers.length; i++){
      if($rootScope.timers[i].id === parseInt(timerId, 10)){
        console.log('found it');
        return $rootScope.timers[i];
      }
    }
  };

  $scope.timer = $scope.getTimer($stateParams.timerId);
});
