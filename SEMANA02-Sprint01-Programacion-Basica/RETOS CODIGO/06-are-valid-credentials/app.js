document.getElementById('html');





function areValidCredentials(name,password){

		if(name.length >=3 && password.length<=8){
			console.log(true)
		}else{console.log(false)
		}

	



}

var output = areValidCredentials('Ritu', 'mylongpassword');
var output = areValidCredentials('Rit', 'other');
console.log(output); // --> true




areValidCredentials('elz','memento')




