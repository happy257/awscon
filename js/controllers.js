myApp.controller("state1Ctrl",['$scope','$stateParams', function($scope,$stateParams) {
	$scope.params=$stateParams;
	$scope.medContacts=[
		{id:'car1',name:'Aetna',contactInfo:'1800-120-120'},
		{id:'car2',name:'Betna',contactInfo:'1800-120-120'},
		{id:'car3',name:'Cetna',contactInfo:'1800-120-120'},
	]	
}])
myApp.controller("state2Ctrl",['$scope','$state','$http', function($scope,$state,$http) {
	$scope.loading=true;
	$http({
		method: 'GET',
		url: 'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	}).then(function success(response) {
		$scope.loading=false;
		$scope.carriers=response.data;
	  }, function error(response) {
		console.log(response);
	  });
	$scope.showInfo=function(data){
		$state.go('home',{carrier:data})
	}
}]);