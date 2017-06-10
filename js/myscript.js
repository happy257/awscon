myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider){	
	$urlRouterProvider.otherwise('/splash');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'partials/state1.html',
			controller:'homeCtrl',
			params: {carrier: {}}
		})
		.state('carrierList',{
			url:'/carrierList',
			templateUrl:'partials/state2.html',
			controller:'carrierListCtrl'
		})
    .state('splash',{
			url:'/splash',
			templateUrl:'partials/state3.html',
			controller:'splashCtrl'
		})
});
