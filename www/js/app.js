// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var jsFoodApp = angular.module('JSFoodApp', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

jsFoodApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "home.html"
  });
  $stateProvider.state("recList", {
    url: "/recList",
    templateUrl: "recList.html",
    controller: "listController"
  });
  // will be triggered when we pull a single recripe
  $stateProvider.state("singleRecipe", {
    url: "/:id",
    templateUrl: "singleRec.html",
    controller: "recipeController"
  });
  // will be triggered when we would like to add new order
  $stateProvider.state("add",{
    url: "/add",
    templateUrl: "add.html",
    controller: "addController"
  });
  $stateProvider.state("del", {
    url: "/del",
    templateUrl: "del.html",
    controller: "deleteController"
  });
  $stateProvider.state("edit",{
    url: "/edit",
    templateUrl: "edit.html",
    controller: "editController"
  });
  $stateProvider.state("one",{
    url: "/edit/:id",
    templateUrl: "editOne.html",
    controller: "recipeEditController"
  });
  $urlRouterProvider.otherwise("/");
});
