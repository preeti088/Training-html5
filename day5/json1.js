var book1={
	title:"abc",
	author:"xyz"
}

var a =[];
for (var items in book1 ) {
a[items]=book1[items];
} 

console.log(a["title"]);