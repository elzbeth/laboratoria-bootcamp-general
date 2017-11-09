var phrase = prompt('Ingresa una frase');

var firstUpperCase = function(){
	myString = phrase.toLowerCase();
	return myString.charAt(0).toUpperCase() + myString.slice(1);
}


document.getElementById('body');
console.log(firstUpperCase());


