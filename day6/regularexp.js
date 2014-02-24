var emailm= /[a-zA-Z0-9]+@[a-zA-Z0-9]+.com/;
var email = "preetisngh080890@gmail.com";
console.log(emailm.test(email));

var creditm =/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

var credit="1235-1235-1354-1253";
if(credit.length==19){
console.log(creditm.test(credit));
}
else
console.log("enter");