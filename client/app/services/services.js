angular.module('shortly.services', [])
//$scope only for controllers not factories
//factories don't destroy less volatile than controllers
.factory('Links', function ($http) {
  var getLinks=function(){
    return $http({
     method: 'GET',
     url:'/api/links',
     

    }).then(function(resp){
      console.log('^^^^^',resp.data)
      return resp.data;//display to page
    });
  };

  var addLink=function(link){//link is object
    //var obj = { url: link }
    console.log('link', link)
    //console.log('obj',obj)
    return $http({
      method: 'Post',
      url: '/api/links',
      data: link //{url: 'http://ajdf'} bc needs to be stringified
    })
    .then(function(resp){
      console.log('{{{{{{{{',resp.data)
      return resp.data
    })
  };


  //return anything
  return {
    getLinks : getLinks,
    addLink : addLink
  };
  // Your code here
})






.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {

    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
