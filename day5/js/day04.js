function $(expr){
	var id=expr.substring(1);
	var element= document.getElementById(id);
	return{
		click: function(arg){
			element.onclick=arg;
		}
	};
}



Acct.main({
	launch : function(){
		//Implement the following in Acct.js
		$("#addbutton").click(addButtonClicked);
	}
});
function addButtonClicked(){
	alert("Add button clicked");
}