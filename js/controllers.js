myApp.controller("homeCtrl",['$scope','$stateParams','$http',function($scope,$stateParams,$http) {
	$scope.params=$stateParams;
    $scope.offline=false;
    $scope.loading=true;
    $scope.open=function(url){
        if(typeof cordova!='undefined')
            cordova.InAppBrowser.open(url, _system);
        else
            alert(url)
    }
	$http({
		method: 'GET',
		url:'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	})
	.then(function success(response) {
		$scope.loading=false;
		$scope.oth=response.data.othCarriers;
        localStorage.appCache=JSON.stringify(response.data);
	},function error(response) {
		$scope.loading=false;
        $scope.offline=true;
		$scope.oth=JSON.parse(localStorage.appCache).othCarriers;
        console.log("Error:",response);
	});                                                 
}]);

myApp.controller("carrierListCtrl",['$scope','$state','$http', function($scope,$state,$http) {
	$scope.loading=true;
    $scope.offline=false;
	$http({
		method: 'GET',
		url:'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	}).then(function success(response) {
		$scope.loading=false;
        console.log(response)
		$scope.carriers=response.data.medcarriers;
        localStorage.appCache=JSON.stringify(response.data);
	  }, function error(response) {
        $scope.loading=false;
        $scope.offline=true;
        $scope.carriers=
            JSON.parse(localStorage.appCache).medcarriers;
        //$scope.$apply();
		console.log("Error:",response);
	  });
	$scope.showInfo=function(data){
		$state.go('home',{carrier:data})
	}
}]);

myApp.controller("splashCtrl",['$scope','$state','$timeout', function($scope,$state,$timeout) {
    $timeout(function(){$state.go('home')},500);
}]);