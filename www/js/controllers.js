angular.module('starter.controllers', ['ionic','ionic.utils'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $location, $localstorage) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.createStorage = function(){
    //TestData
    $localstorage.set('tasksday1','7');
    $localstorage.setObject('task1day1', { description: 'Schrägbankdrücken', sets: 3, repeats: 8,id:1});
    $localstorage.setObject('task2day1', { description: 'Flachbankdrücken', sets: 2, repeats: 10,id:2});
    $localstorage.setObject('task3day1', { description: 'Schrägbank Fliegende', sets: 2, repeats: 10,id:3});
    $localstorage.setObject('task4day1', { description: 'Butterfly', sets: 2, repeats: 10,id:4});
    $localstorage.setObject('task5day1', { description: 'Langhantel Curl', sets: 2, repeats: 10,id:5});
    $localstorage.setObject('task6day1', { description: 'Arni Curls', sets: 2, repeats: 8,id:6});
    $localstorage.setObject('task7day1', { description: 'Scott Bank', sets: 2, repeats: 10,id:7});
    //________________________________
    $localstorage.set('tasksday2','6');
    $localstorage.setObject('task1day2', { description: 'LH Nackendrücken sitzend', sets: 3, repeats: 8,id:1});
    $localstorage.setObject('task2day2', { description: 'KH Seitheben sitzend', sets: 3, repeats: 12,id:2});
    $localstorage.setObject('task3day2', { description: 'Vorgebeugtes KH Seitheben', sets: 3, repeats: 12,id:3});
    $localstorage.setObject('task4day2', { description: 'V-Bar Trizepsdrücken', sets: 2, repeats: 10,id:4});
    $localstorage.setObject('task5day2', { description: 'Enges Bankdrücken', sets: 2, repeats: 8,id:5});
    $localstorage.setObject('task6day2', { description: 'Überkopf Trizepsdrücken', sets: 2, repeats: 10,id:6});
    //________________________________
    $localstorage.set('tasksday3','4');
    $localstorage.setObject('task1day3', { description: 'Kniebeugen', sets: 3, repeats: 8,id:1});
    $localstorage.setObject('task2day3', { description: 'Beinpresse', sets: 3, repeats: 10,id:2});
    $localstorage.setObject('task3day3', { description: 'Beincurl', sets: 2, repeats: 10,id:3});
    $localstorage.setObject('task4day3', { description: 'Wadenheben', sets: 4, repeats: 10,id:4});
    //________________________________
    $localstorage.set('days','7');
    $localstorage.setObject('day1',{ title: 'Tag 1', description:"Brust Bizeps", id: 1 });
    $localstorage.setObject('day2',{ title: 'Tag 2', description:"Schulter Trizeps", id: 2 });
    $localstorage.setObject('day3',{ title: 'Tag 3', description:"Beine", id: 3 });
    $localstorage.setObject('day4',{ title: 'Tag 4', description:"Rücken", id: 4 });
    $localstorage.setObject('day5',{ title: 'Tag 5', description:"Pause", id: 5 });
    $localstorage.setObject('day6',{ title: 'Tag 6', description:"Pause", id: 6 });
    $localstorage.setObject('day7',{ title: 'Tag 7', description:"Pause", id: 7 });
  }

})
.controller('TaskCtrl',function($scope,$localstorage){
    $scope.lastRepeats1 = "1";
    $scope.lastRepeats2 = "2";
    $scope.lastRepeats3 = "3";
    $scope.lastWeight1 = "1";
    $scope.lastWeight2 = "2";
    $scope.lastWeight3 = "3";
    
    $scope.data = {};
    
    $scope.data.newRepeats1 = "";
    $scope.data.newRepeats2;
    $scope.data.newRepeats3;
    $scope.data.newWeight1;
    $scope.data.newWeight2;
    $scope.data.newWeight3;
    
    $scope.saveNewInput = function(){
        $localstorage.setObject('task1day1data',
            {
            'task1day1data1':[$scope.data],
            'task1day1data2':[$scope.data]
            }
        );
        
        console.log($localstorage.getObject('task1day1data'));
        console.log($localstorage.add('task1day1data'));
    }
  })

.controller('DashboardCtrl',function($scope){

  })
.controller('TaskConfigCtrl',function($scope){

})
.controller('TrainingCtrl',function($scope, $localstorage,$stateParams){

  $scope.days = [];
  for(i = 1; i <= $localstorage.get('days'); i++)
  {
    $scope.days.push($localstorage.getObject('day'+i));
  }

  $scope.dayDescription = "Brust Bizeps";
})

.controller('DayCtrl',function($scope, $localstorage, $stateParams){
  $scope.currentDay = $stateParams.dayId;
  console.log("CurrentDay: " + $scope.currentDay);

  $scope.tasks = [];
  for(i = 1; i <= $localstorage.get('tasksday'+$scope.currentDay); i++)
  {
    $scope.tasks.push($localstorage.getObject('task'+ i + 'day'+$scope.currentDay));
  }
})






















.controller('PlansCtrl', function($scope, $location, $localstorage) {
    //TestData
    $localstorage.set('tasksday1','7');
    $localstorage.setObject('task1day1', { description: 'LH Nackendrücken sitzen',id:1});
    $localstorage.setObject('task2day1', { description: 'Flachbankdrücken',id:2});
    $localstorage.setObject('task3day1', { description: 'Schrägbank Fliegende',id:3});
    $localstorage.setObject('task4day1', { description: 'Butterfly',id:4});
    $localstorage.setObject('task5day1', { description: 'Langhantel Curl',id:5});
    $localstorage.setObject('task6day1', { description: 'Arni Curls',id:6});
    $localstorage.setObject('task7day1', { description: 'Scott Bank',id:7});
    //________________________________
    $localstorage.set('days','7');
    $localstorage.setObject('day1',{ title: 'Tag 1', description:"Brust Bizeps", id: 1 });
    $localstorage.setObject('day2',{ title: 'Tag 2', description:"Schulter Trizeps", id: 2 });
    $localstorage.setObject('day3',{ title: 'Tag 3', description:"Beine", id: 3 });
    $localstorage.setObject('day4',{ title: 'Tag 4', description:"Rücken", id: 4 });
    $localstorage.setObject('day5',{ title: 'Tag 5', description:"Pause", id: 5 });
    $localstorage.setObject('day6',{ title: 'Tag 6', description:"Pause", id: 6 });
    $localstorage.setObject('day7',{ title: 'Tag 7', description:"Pause", id: 7 });

  $scope.currentPlan = 1;
  $scope.days = [];
  for(i = 1; i <= $localstorage.get('days'); i++)
  {
    $scope.days.push($localstorage.getObject('day'+i));
  }

  $scope.dayDescription = "Brust Bizeps";
  $scope.tasks = [];
  for(i = 1; i <= $localstorage.get('tasksday1'); i++)
  {
    $scope.tasks.push($localstorage.getObject('task'+ i + 'day1'));
  }

  $scope.changeCurrentPlan = function(planId){
    $scope.currentPlan = planId;
  };

  $scope.newTask = function(task){
    $location.path('ataskConfig"');
  };
    $scope.edit = function(task){

    };
})
