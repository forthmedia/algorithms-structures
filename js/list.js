codeApp.controller('listController', function($scope, assertFactory, nameService) {
    nameService.setName("Linked List");
    nameService.setBase("list");
});

codeApp.directive('codeList', function() {
	return {
		templateUrl: "./views/list.html"
	};
});