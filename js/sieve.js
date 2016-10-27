codeApp.controller('sieveController', function($scope, assertFactory, nameService) {
    nameService.setName("Sieve of Eratosthenes");
    nameService.setBase("sieve");
    
    // try it out
    var max = 1024;
    var table = new Array(max);
    for (let i = 0; i < max; i++) table[i] = true;
    sieveErastosthenes(table, max);
    $scope.primes = printPrimes(table, max);
});

codeApp.directive('codeSieve', function() {
	return {
		templateUrl: "./views/sieve.html"
	};
});

//helper: cross off all multiples of value prime in table
var crossOffMultiples = function(table, prime) {
    for (let i = prime*prime; i < table.length; i+= prime)
        table[i] = false;
}

//helper: find the next value in table which is true
var getNextValue = function(table, prime) {
    var next = prime + 1;
    while (next < table.length && table[next] == false)
        next++;
    return next;
}

//iteratively cross off all multiples of prime, starting with 2
var sieveErastosthenes = function(table, max) {
    var prime = 2;
    while (prime <= Math.sqrt(max)) {
        crossOffMultiples(table, prime);
        prime = getNextValue(table, prime);
    }
}

// print to 'text'
var printPrimes = function(table, max) {
    var count = 2;
    var text = "Prime values up to " + max + ": ";
    for(let i = 2; i <= table.length; i++, count++) {
        if (table[i] == true) text += " " + count;
    }
    return text;
}