codeApp.controller('codeModal', function ($scope, $uibModal, nameService) {
    
    $scope.modalJS = function() {
        $scope.name = "JS " +  nameService.getName();
        source = nameService.getBase() + ".js";
        nameService.setSource(source);
        open();
    };
    
    $scope.modalCPP = function() {
        $scope.name = "C++ " +  nameService.getName();
        source = nameService.getBase() + ".cpp";
        nameService.setSource(source);
        open();
    };
    
    open = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                name: function () {
                    return $scope.name;
                }
            }
        });
    };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

codeApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, name) {

    $scope.name = name;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

});