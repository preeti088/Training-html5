
var today="";
function date(argument) {
	
	today = new Date();
	console.log(today);
	var year=today.getFullYear();
	console.log(year);
	var month=today.getMonth();
	console.log(month);
	var day=today.getDay();
	console.log(day);
	return {"date":today,"year":year,"month":month};
};

var c =date();
console.log(c.year);
	

