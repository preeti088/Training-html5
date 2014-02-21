function calculator (arg) {
	arg(20,20);

}

calculator(function(a,b){console.log(a+b);})