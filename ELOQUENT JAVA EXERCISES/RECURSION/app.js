document.getElementById('html');


function isEven(number){
 
    

	if(number % 2 == 0){
		console.log('It\'s odd.')
		return false
	}else if(number % 2 == 1){

		console.log('It\'s eve.')
	 	return true
	}else{	
		
		if(number % 2 == 0){
			console.log('It\'s odd.')
			return false
		}else if(number % 2 == 1){
			console.log('It\'s eve.')
		 	return true
		 }
	}



}



console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-4))