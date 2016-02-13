angular.module('shortly.links', [])
//store view object showed to user

.controller('LinksController', function ($scope, Links) {
  // Your code here
    $scope.data={}
    $scope.getLinks=Links.getLinks
    $scope.getLinks();


  
})
// .factory('Links', function Links(){

//     var getLinks=function(cb){
// 	return $http.get({
// 		method: 'GET',
// 		url:'/api/links'
//     }).success(function(data){
//     	cb(data);//display to page
//     })


// 	}
// })

// })
// $scope.links=[];
//   $scope.addLink= function(){
//   $scope.links.push({{}})
//   }

//retrieves links 