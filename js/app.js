angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'views/blog.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('shop', {
    url: '/shop',
    templateUrl: 'views/shop.html',
    // controller: 'shopCtrl'
  })
  .state('product-details', {
    url: '/product-details/:id',
    templateUrl: 'views/product-details.html',
    controller: 'shopCtrl'
  })
})
