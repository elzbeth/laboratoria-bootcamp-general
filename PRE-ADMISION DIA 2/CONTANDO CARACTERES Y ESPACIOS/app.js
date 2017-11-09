


var allAbout = function(){


var phrase = prompt('Escribe una frase').toUpperCase();
var chars = phrase.split([]);
var numChar = 0;
var numSpaces = 0;


	if(phrase == '') {
		while(phrase == false){
			confirm('El campo no puede estar vacío. Intenta de nuevo');
			phrase = prompt('Escribe otra frase').toUpperCase();
		}
			var chars = phrase.split([]);
			var numChar = 0;
			var numSpaces = 0;

console.log (phrase);

	 	for (var i = 0; i < chars.length; i++) {
	 		console.log(chars[i] + '\n');
	        numChar++
		}

console.log('Tu frase contiene ' + numChar + ' letras.');

	 	for (var i = 0; i < chars.length; i++) {
		    if(chars [i] == ' '){
		       numSpaces++
		    }
	    }

console.log('Tu frase contiene ' + numSpaces + ' espacios en blanco.');

	}else{

console.log(phrase);
		
	 	for (var i = 0; i < chars.length; i++) {
	 		console.log(chars[i] + '\n');
	        numChar++
		}

console.log('Tu frase contiene ' + numChar + ' letras.');

	 	for (var i = 0; i < chars.length; i++) {
		    if(chars [i] == ' '){
		       numSpaces++
		    }
		}

console.log('Tu frase contiene ' + numSpaces + ' espacios en blanco.');

	}
}

document.getElementById('html');
allAbout()
