jsFoodApp.facory('recipeService', function($firebaseArray){
  var fb = new Firebase("https://foodapp-b2385.firebaseio.com");
  var recs = $firebaseArray(fb);
  var recipeService = {
    all: recs,
    get: function(recId){
      return recs.$getRecord(recId);
    }
  };
  return recipeService;
});
