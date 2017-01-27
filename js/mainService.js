angular.module('assessment')
.service('mainService', function($http, $q) {
  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/products'
    })
  }
  this.getProduct = function(id) {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://practiceapi.devmounta.in/products/'+ id
  }).then(function(info) {
    var theItem = info.data
  console.log(theItem);
  deferred.resolve(theItem)
  })
  return deferred.promise
}

})
