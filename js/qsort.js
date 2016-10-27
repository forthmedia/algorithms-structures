codeApp.controller('qsortController', function($scope, assertFactory, nameService) {
    $scope.name = "Quicksort";
    nameService.setName($scope.name);
    nameService.setBase("qsort");
    
    var a1 = [88, 23, 1, 52, 74, 99, 8, 32, 29, 16];
    var a2 = [1, 8, 16, 23, 29, 32, 52, 74, 88, 99];
    console.log("array = " + a1);
    quickSort(a1, 0, a1.length-1);
    console.log("quickSort array = " + a1);
    assertFactory.assert(
        (a1.length==a2.length && a1.every(function(v,i) { return v === a2[i]})),
        "The array has been sorted.");
});

codeApp.directive('codeQsort', function() {
	return {
		templateUrl: "./views/qsort.html"
	};
});

//  Quicksort

// helper: swap two elements, in place
var swap = function(array, a, b) {
    var t = array[a];
    array[a] = array[b];
    array[b] = t;
}

// helper: sort elements < R to the left, return pivot
var pivot = function(array, p, r) {
    var q = p;
    for (var j = p; j < r; j++) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }
    swap(array, r, q);
    return q;
}

// split array at pivot and call recursively
var quickSort = function(array, p, r) {
    if (p < r) {
        var q = pivot(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }
};
