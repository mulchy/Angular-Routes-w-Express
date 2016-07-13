angular.module('routeApp').controller('RedController', function($scope, $http){
  $http.get('/red').then(function(response){
    $scope.player = response.data;
  })
});
