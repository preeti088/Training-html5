

function compute(num){
	for (var i = 1; i <=100;i++) 
	{
		num(i);
	}

}

 compute(function(num){console.log(num);});
