//add addController

jsFoodApp.controller('addController', function($scope, $firebaseArray, $state, $recipeService){
  $scope.submitRecipe = function(){
    $scope.newRec = recipeService.all;
    $scope.newRec.$add({
      recipeName: $scope.recName,
      recipeIngredients: $scope.recipeIngredients,
      recipeDirections: $scope.recipeDirections
    });
    $state.go('home');
  };
});

jsFoodApp.controller('listController', function($scope, recipeService){
  $scope.recipes = recipeService.all;
});

jsFoodApp.controller('recipeController', function($scope, recipeService, $stateParams, $state){
  $scope.singleRecipe = recipeService.get($stateParams.id);
  $scope.ingList = $scope.singleRecipe.recipeIngredients.split(";");
  $scope.prepList = $scope.singleRecipe.recipeDirections.split(";");
});

jsFoodApp.controller('deleteController', function($scope, recipeService, $state, $ionicActionSheet){
  $scope.recs = recipeService.all;
  $scope.showDetails = function(id){
    $ionicActionSheet.show({
      destructiveText: 'Delete',
      titleText:'Sure you want to delete?',
      cancelText: 'Cancel',
      destructiveButtonClicked: function(){
        var rem = $scope.recs.$getRecord(id);
        $scope.recs.$remove(rem);
        retrurn true;
      }
    });
  };
});
