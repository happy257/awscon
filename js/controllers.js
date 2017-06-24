myApp.controller("homeCtrl",['$state','$scope','$stateParams','$http',function($state,$scope,$stateParams,$http) {
    if(typeof PushNotification!='undefined'){
        var push = 
        PushNotification.init(
            {"android": {"senderID": "848679895857"},
             "ios": {"alert": "true", "badge": "true", "sound": "true"},
             "windows": {} 
        });
        push.on('registration', function(data) {
           alert(JSON.stringify(data))
        });

        push.on('notification', function(data) {
            alert(JSON.stringify(data))
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
        });

        push.on('error', function(e) {
            alert(JSON.stringify(e))
            // e.message
        });
    }else{
        alert("PushNotification is undefined");
        setInterval(function(){
            if(typeof PushNotification!='undefined'){
                alert("Ready!")
            }
        },200)
    }
    //-----------------------------    
    $scope.params=$stateParams;
    $scope.offline=false;
    $scope.loading=true;
    $scope.open=function(url){
        if(typeof cordova!='undefined')
            cordova.InAppBrowser.open(url, _system);
        else
            alert(url)
    }
    $scope.moveTo=function(stateName){
        $state.go(stateName,null,{location: 'false'})
    }
	$http({
		method: 'GET',
		url:'https://x97qzmvtek.execute-api.us-east-2.amazonaws.com/prod/'
		//'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
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

myApp.controller("carrierListCtrl",['$scope','$state','$http',function($scope,$state,$http) {
	$scope.loading=true;
    $scope.offline=false;
	$http({
		method: 'GET',
		url:'https://x97qzmvtek.execute-api.us-east-2.amazonaws.com/prod/'
		//'https://r7rwh2tcgd.execute-api.us-west-2.amazonaws.com/prod/sampleres'
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
		$state.go('home',{carrier:data},{location: 'replace'})

	}
}]);

myApp.controller("splashCtrl",['$scope','$state','$timeout', function($scope,$state,$timeout) {
    $timeout(function(){$state.go('home',null,{location: 'replace'})},500);
}]);
