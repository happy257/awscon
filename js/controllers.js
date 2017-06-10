myApp.controller("homeCtrl",['$scope','$stateParams','$http',function($scope,$stateParams,$http) {
	$scope.params=$stateParams;
	$http({
		method: 'GET',
		url:'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	})
	.then(function success(response) {
		$scope.loading=false;
		$scope.oth=response.data.othCarriers;
	},function error(response) {
		console.log(response);
	});                                                 
}]);

myApp.controller("carrierListCtrl",['$scope','$state','$http', function($scope,$state,$http) {
	$scope.loading=true;
	$http({
		method: 'GET',
		url:'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	}).then(function success(response) {
		$scope.loading=false;
        console.log(response)
		$scope.carriers=response.data.medcarriers;
	  }, function error(response) {
		console.log(response);
	  });
	$scope.showInfo=function(data){
		$state.go('home',{carrier:data})
	}
}]);

myApp.controller("splashCtrl",['$scope','$state','$timeout', function($scope,$state,$timeout) {
    $timeout(function(){$state.go('home')},500);
}]);