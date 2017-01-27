angular.module('assessment')
.controller('shopCtrl', function($scope, mainService, $state, $stateParams) {

mainService.getProducts().then(function(response){
  $scope.products = response.data;
  console.log($scope.products);
})
mainService.getProduct($stateParams.id).then(function(item) {
  $scope.item = item;
})
})
