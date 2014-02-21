var acc={
	main: function(item){
		item.launch();
	}
}

acc.main({
	launch: function(){
		console.log("heeloooo");
	}
})