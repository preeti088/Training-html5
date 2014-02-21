var f1 =add(1,2);
var total =f1(3);
console.log(total); // output should be 6


function add(a,b){
var sum = a+b;
return function(s){
	return sum+s;
}

}