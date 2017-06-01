myApp.controller("state1Ctrl",['$scope','$stateParams','$http',function($scope,$stateParams,$http) {
	$scope.params=$stateParams;
	$http({
		method: 'GET',
		url:'js/test.php',
		// 'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	})
	.then(function success(response) {
		$scope.loading=false;
		$scope.oth=[
			{category:"CATEGORY1",telno:"1800-190-280",web:"www.dummyurl.com"},
			{category:"CATEGORY2",telno:"1800-200-280",web:"www.dummyurl.com"},
			{category:"CATEGORY3",telno:"1800-390-280",web:"www.dummyurl.com"}
		] 
	},function error(response) {
		console.log(response);
	});                                                 
}]);
myApp.controller("state2Ctrl",['$scope','$state','$http', function($scope,$state,$http) {
	$scope.loading=true;
	$http({
		method: 'GET',
		url://'js/test.php',
		 'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
	}).then(function success(response) {
		$scope.loading=false;
		//$scope.carriers=response.data;
		$scope.carriers=[
			{category:"Medical",carrier:"Aetna",telno:"+91XXXXXXXXX",web:"www.placeholder.com/aetnapagename",searchTips:["Step1 – ","Step2 – ","Step3 – "]},
		{category:"Medical",carrier:"Betna",telno:"+91XXXXXXXXX",web:"www.placeholder.com/betnapage",searchTips:["Some random text"]},{category:"Medical",carrier:"Cetna",telno:"+91XXXXXXXXX",web:"www.placeholder.com/cetna"}]
	  }, function error(response) {
		console.log(response);
	  });
	$scope.showInfo=function(data){
		$state.go('home',{carrier:data})
	}
}]);
