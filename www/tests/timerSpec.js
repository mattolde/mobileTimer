(function(){
  'use strict';

  describe('TimerCtrl', function(){
    var scope;


    // mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('timerApp'));


    // // mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){


      // TODO remove once dummy data is removed. Need timers scope for list.
      var parentScope = $rootScope.$new();
      $controller('TimersCtrl', {$scope: parentScope});


      //create an empty scope
      scope = $rootScope.$new();
      //declare the controller and inject our empty scope
      $controller('TimerCtrl', {$scope: scope, $stateParams: {timerId: 1}});
    }));


    // TimerCtrl TESTS
    it('should load first timer with title "Boiled Eggs"', function(){
      expect(scope.timer.title).toBe('Boiled Eggs');
    });


    if('should START the count down', function(){
      expect(true).toBe(false);
    });


    if('should STOP the count down', function(){
      expect(true).toBe(false);
    });


    if('should RESET the count down', function(){
      expect(true).toBe(false);
    });


  });
}());
