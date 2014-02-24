var countries =["india","us","uk","china","japan","russia"]

//print all countries starting with uk

for(items in countries){

	var country = countries[items];
	if(country.indexOf("u")==0)
		console.log(country);
}
 
  //print all the coutries having character u

  for(items in countries){
  	var country = countries[items]
  	if(country.indexOf("u")!= -1)
  		console.log(country);
  } 


  //carete a new array that contain all teh values in lower case 

  for (items in countries){
  	var country = countries[items].toUpperCase();
  	console.log(country);

  }


  // careet a new array that conatin the length of the values of the array
var country=[];

for (items in countries){
country.push(countries[items].length);



}
console.log(country);

//generate a new array that has all the values converted
//to an object with a property calle name
// es { name:"india"}, {name:"us"}]

var arr=[];
for(items in countries)
{
	var obj = new Object();
	obj.name = countries[items];
	arr.push(obj);


};
 console.log(arr);
console.log(Object.keys(countries));
console.log(Object.length(countries));
