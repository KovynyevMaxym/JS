 out = pow(5, 2);

 console.log("5^2 = " + out);

 

 function pow (base, power) {

    var i, result = 1;

    for(i = 0; i < power; i++) {

        result *= base;

    }

       return result;

 }