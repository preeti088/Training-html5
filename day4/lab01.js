function compute (arg) {
	// body...
	var number=[1,2,3,4,56,7,8,9,10,40];
	for(var num in number){
		arg(number[num]);
		
	}
}

var max=0;
compute( function(arguments){

 
		if(max < arguments)
			max = arguments;
	
	
	});	
	console.log("Largest: " + max);


var sum=0;
compute(function(i){
	sum+=i;
	
});
console.log(sum);