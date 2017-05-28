myApp = angular.module('myApp',['ui.router']);
myApp.config(function($stateProvider,$urlRouterProvider){	
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'partials/state1.html',
			controller:'state1Ctrl',
			params: {carrier: {}}
		})
		.state('carrierList',{
			url:'/carrierList',
			templateUrl:'partials/state2.html',
			controller:'state2Ctrl'
		})
});