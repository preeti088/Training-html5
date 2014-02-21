function confuse(){
	return function () {console.log("what is teh hell");
		// body...
	};
}

var outut =confuse();
outut();
console.log(outut);
console.log("**************************8");

