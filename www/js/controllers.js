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
    { id: 1, title: 'Boiled Eggs', time: 60 },
    { id: 2, title: 'Crunches', time: 120 },
    { id: 3, title: 'Sprints', time: 80 },
    { id: 4, title: 'Planks', time: 30 },
  ];
})

.controller('TimerCtrl', function($scope, $rootScope, $stateParams) {
  // TODO load timer data to scope. Dirty and needs to be changed and moved to a service
  $scope.getTimer = function(timerId){
    for(var i=0; i < $scope.timers.length; i++){
      if($rootScope.timers[i].id === parseInt(timerId, 10)){
        return $rootScope.timers[i];
      }
    }
  };

  $scope.startCountDown = function(){
    // TODO start count down from timer.time
  };

  $scope.stopCountDown = function(){
    // TODO stop count down from timer.time
  };

  $scope.resetCountDown = function(){
    // TODO reset count down to original timer.time
  };

  // set timer to scope
  $scope.timer = $scope.getTimer($stateParams.timerId);
});
