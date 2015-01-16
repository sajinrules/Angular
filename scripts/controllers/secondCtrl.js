angular.module('testApp')
	.controller('secondCtrl', ['$scope','ShareData',function($scope,ShareData){
		$scope.data=ShareData;
	}]);