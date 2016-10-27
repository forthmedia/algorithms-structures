// Uses AngularUI Router 
// (root)/code/index.html

var codeApp = angular.module('codeApp', ['ui.router', 'ui.bootstrap']);

codeApp.controller('codeController', function($scope) {	
	$scope.toggle = false;
	
	$scope.toggleNav = function() {
		$scope.toggle = $scope.toggle === false ? true: false;
	}
});

codeApp.controller('sourceController', function($scope, $http, nameService) {    
	var filename = "../code/txt/" + nameService.getSource() + ".txt";
	$http.get(filename)
    .then(function(response) {
        $scope.source = response.data;
    });
});

codeApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
	$stateProvider

		.state('main', {
			url: "/home",
			templateUrl: "../code/views/home.html",
			controller: function ($scope, $state, assertFactory) {
				assertFactory.assert(true, "Home page message");
			}
		})
});

codeApp.directive('codeNavbar', function() {
	return {
		templateUrl: "navbar.html"
	};
});

codeApp.service('nameService', function() {
	var sName;
	var sBase;
	var sSource;
	
	var setName = function(name) {
		sName = name;
	};
	
	var getName = function() {
		return sName;
	};
	
	var setBase = function(base) {
		sBase = base;
	};
	
	var getBase = function() {
		return sBase;
	}
	
	var setSource = function(source) {
		sSource = source;
	};
	
	var getSource = function() {
		return sSource;
	}
	
	return {
		setName: setName,
		getName: getName,
		setBase: setBase,
		getBase: getBase,
		setSource: setSource,
		getSource: getSource
	};
});

codeApp.factory('assertFactory', function() {
	return {
		assert: function(result, description) {
			console.log("result=" + result + " " + description);
		}
	};
});
