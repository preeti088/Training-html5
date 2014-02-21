function generate (arg) {
	var a="";
	
	for(var items in arg){
			if(Array.isArray(arg[items])){
	 				var arr= arg[items];				
					var str = items+"=";
					for (var i = 0;i<arr.length;i++) {
					str+=arr[i]+"-";
					}
					a=a.substring(0,a.length-1);
					a+=str+"&";
			}

		else
			a+=items+"="+arg[items]+"&";
		}
	a=a.substring(0,a.length-1);
	console.log(a);
}

generate(
{
name:"sam",
age:12,
hobbies:["play","dance"]
});

generate(
{
	title:"abc",
	price:10,
	publisher:"apress"

});
