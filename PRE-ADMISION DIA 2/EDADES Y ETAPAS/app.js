var age = parseInt(prompt('¿How old are you?'));
var stages =['toddler', 'preschooler','gradeschooler','teenager','youngadult','adult'];




var yourStage = function() {



	while(isNaN(age) || age === "" || age === 0) { 
	alert('That is not a number. Try again');
	newAge= prompt('This time use a number');
	age = newAge;
	}
	
		if(age >= 1 && age <= 3){
			alert(`You are a ${stages[0]}`);
		}
		if(age >= 4 && age <= 5){
			alert(`You are a ${stages[1]}`);
		}
		if(age >= 6 && age <= 12){
			alert(`You are a ${stages[2]}`);
		}
		if(age >= 13 && age <= 18){
			alert(`You are a ${stages[4]}`);
		}
		if(age >= 19 && age <= 25){
			alert(`You are a ${stages[5]}`);
		}
		else if (age >= 25){
			alert("Age is just a number...");
		}
   

}

document.getElementById('html');
yourStage()