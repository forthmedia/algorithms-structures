codeApp.controller('palpermController', function($scope, assertFactory, nameService) {
    nameService.setName("Palindrome Permutation");
    nameService.setBase("palperm");
    
    var r="I'm Adam, Madam";
    var result = palperm(r);
    assertFactory.assert((result===true),  r + " is a palindrome permutation.");
   
    var t="foolish";
    var result = palperm(t);
    assertFactory.assert((result===true),  t + " is not a palindrome permutation.");  
});

codeApp.directive('codePalperm', function() {
	return {
		templateUrl: "./views/palperm.html"
	};
});

//  Arrays
//  1.4 Palindrome Permutation: Given a string, write a function to check
//  if it is a permumation of a palindrome.

var isAlpha = function(c) {
  return /^[a-zA-Z]$/.test(c);
}

var charIndex = function(c) {
    if (! isAlpha(c)) return -1;
    c = c.toLowerCase();
    return c.charCodeAt(0) - "a".charCodeAt(0);
}

var onlyOneOdd = function(s) {
    var foundOdd = false;
    for (var i=0; i<s.length; i++) {
        if ((s[i] % 2) == 1) {
            if (foundOdd) {
                return false;
            }
            foundOdd = true;
        }
    }
    return true;   
}

var palperm = function(s) {
    var set = new Array(26);
    var value;
    var i;
    
    for (i=0; i<26; i++)
        set[i] = 0;
    
    for (i=0; i<s.length; i++) {
        value = charIndex(s[i]);
        if (value > 0) {
            set[value]++;
        }
    }    
    return onlyOneOdd(set);
}
