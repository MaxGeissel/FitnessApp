// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.utils', 'starter.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.training', {
    url: '/training',
    views: {
      'menuContent': {
        templateUrl: 'templates/training.html',
        controller: 'TrainingCtrl'
      }
    }
  })
  .state('app.day', {
    url: '/day/:dayId',
    views: {
      'menuContent': {
        templateUrl: 'templates/day.html',
        controller: 'DayCtrl'
      }
    }
  }).state('app.task', {
    url: '/task/:taskId',
    views: {
      'menuContent': {
        templateUrl: 'templates/task.html',
        controller: 'TaskCtrl'
      }
    }
  })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.plans', {
      url: '/plans',
      views: {
        'menuContent': {
          templateUrl: 'templates/plans.html',
          controller: 'PlansCtrl'
        }
      }
    })
    .state('app.dashboard',{
      url: '/dashboard',
      views: {
        'menuContent':{
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })
    .state('app.taskconfig',{
      url: '/taskConfig',
      views: {
        'menuContent':{
          templateUrl: 'templates/taskConfig.html',
          controller: 'TaskConfigCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/plans/:planId',
    views: {
      'menuContent': {
        templateUrl: 'templates/plan.html',
        controller: 'PlansCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/dashboard');
});
