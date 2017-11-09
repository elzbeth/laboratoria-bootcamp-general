document.getElementById('html');





function arrayToList(a,b,c){

	console.log('control 1')
	console.log(a)
	console.log(b)
	console.log(c)

	var list={
		value: a,
		rest:{
			value:b,
			rest:{
				value:c,
				rest:null
			}
		}
	};

	console.log(list)
}







function listToArray(){

	for(var node = list; node; node= node.rest){
		
	}

}







arrayToList(1,2,3)