angular.module('testApp',['btford.socket-io'])
	.controller('firstCtrl',['$scope','ShareData','socketFactory',function($scope,ShareData,socketFactory){
		//service has two binding
		$scope.data=ShareData;

		console.log("socketFactory:",socketFactory);
	}]);