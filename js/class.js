codeApp.controller('classController', function($scope, assertFactory, nameService) {
    nameService.setName("Classes");
    nameService.setBase("class");
    
    // try it out
    var tesla = new Car({
        year: 2016,
        make: 'Tesla',
        model: 'Model S',
        isEV: true
    });
    $scope.tesla = tesla.printInfo();

    var ford = new Car({
        year: 1965,
        make: 'Ford',
        model: 'Mustang',
        isEV: false    
    });
    $scope.ford = ford.printInfo();
});

codeApp.directive('codeClass', function() {
	return {
		templateUrl: "./views/class.html"
	};
});

//  Classes ES6

class Vehicle {
    constructor(data) {
        this.year = data.year;
        this.make = data.make;
        this.model = data.model;
    }
    
    printInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(data) {
        super(data);
        this.isEV = data.isEV;
    }
    
    printInfo() {
        return `${super.printInfo()} EV? ${this.isEV}`;
    }
}