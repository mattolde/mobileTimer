angular.module('starter.controllers', [])

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

.controller('TimersCtrl', function($scope) {
  // Dummy data for testing
  $scope.timers = [
    { title: 'Boiled Eggs', id: 1 },
    { title: 'Crunches', id: 2 },
    { title: 'Sprints', id: 3 },
    { title: 'Planks', id: 4 },
  ];
})

.controller('TimerCtrl', function($scope, $stateParams) {
  // TODO load timer data to scope
});
