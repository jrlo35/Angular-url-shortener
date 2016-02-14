angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  
  $scope.link={};//works
  $scope.addLink= function(){//takes in object?
  	console.log('hi')
    Links.addLink($scope.link).then(function(){
    	$location.path('/');//redirect
    })
  }
});







//     (function(data){
//     	console.log('((((((((',data.code);
//     });
//   }
//   //$scope.addLink();
  
// });
