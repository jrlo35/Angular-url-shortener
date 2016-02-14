angular.module('shortly.links', [])
//store view object showed to user
//inject factory Links declare in any file
.controller('LinksController', function ($scope, $location, Links) {
  // Your code here

    //how is data getting added to $scope.data

    $scope.data={};
    
    $scope.getLinks=function(){
      Links.getLinks()
        .then (function(links){
    	  console.log('!!!!!!!!!!',links)
    	  $scope.data.links=links;
    	  console.log('lolol',$scope.data)
    	})//add to data object 
    };
    

   
    $scope.logout=function(){
      $location.path('/#/login')
    }
    $scope.getLinks();
  
});
