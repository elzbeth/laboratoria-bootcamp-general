var initialMenu = ['Ceviche','Tacos al pastor','Empanada chilena', 'Hamburguesa'];
var orderNumber = (prompt(`¿Que se te antoja comer? \n 1.-${initialMenu[0]} \n 2.-${initialMenu[1]} \n 3.-${initialMenu[2]} \n 4.-${initialMenu[3]}` ));
var validOrder;
var optionSelected = initialMenu[orderNumber-1];
var newOrder;
var inStock;
var existingDish;




var validatingOrder = function(){


	if(orderNumber === false || !orderNumber){
		var cancelledOrder = alert(`Es una lástima.\nEsperamos regreses pronto.`);
		validOrder = false
		console.log(cancelledOrder);
		console.log('Orden Cancelada');
		console.log('control 1')
	}
	

	else if(orderNumber > initialMenu.length || orderNumber <= 0){
		validOrder = false	
		var invalidOrder = confirm(`Esa no es una opción válida.\n¿Deseas intentar otra cosa?`);
		if(invalidOrder){				
			var newOrder= prompt(`Revisa bien la opciones y elige un número.\n 1.-${initialMenu[0]} \n 2.-${initialMenu[1]} \n 3.-${initialMenu[2]} \n 4.-${initialMenu[3]}` );
				orderNumber=newOrder
				optionSelected = initialMenu[orderNumber-1];
				validatingOrder();
			}
		else{
			var cancelledOrder = alert(`Es una lástima.\nEsperamos regreses pronto.`);
		}	
		console.log('Orden Invalida');
		console.log('control 2')	
		
	}


	else if(orderNumber === "" || isNaN(orderNumber)){
		validOrder = false
		var invalidOrder = confirm(`Esa no es una opción válida.\n¿Deseas intentar otra cosa?`);
		if(invalidOrder){				
			var newOrder= prompt(`Revisa bien la opciones y elige un número.\n 1.-${initialMenu[0]} \n 2.-${initialMenu[1]} \n 3.-${initialMenu[2]} \n 4.-${initialMenu[3]}` );
				orderNumber=newOrder
				optionSelected = initialMenu[orderNumber-1];
				validatingOrder();
			}
		else{
			var cancelledOrder = alert(`Es una lástima.\nEsperamos regreses pronto.`);}
		console.log('Orden Invalida');
		console.log('control 3')
	}

    else{
    	validOrder= true
    	console.log('Orden Valida');
    	var inStock = confirm(`¿Hay ${optionSelected}?`);
			if(inStock == true){
				existingDish = true;
				alert(`${optionSelected}, es una excelente elección.\nBuen provecho`);
				console.log('existingDish')
				console.log('control 5')
			}else{
				existingDish = false;
				var newOrder = confirm(`${optionSelected}, se ha terminado.\n¿Deseas ordenar otra cosa?`);
				console.log(existingDish);
				console.log('control 6');
				if(newOrder){
				var nextOrder= prompt(`¿Que  más se te antoja comer? \n 1.-${initialMenu[0]} \n 2.-${initialMenu[1]} \n 3.-${initialMenu[2]} \n 4.-${initialMenu[3]}` );
				optionSelected = initialMenu[nextOrder-1];
				validatingOrder()}
				else{
				alert(`Esperamos tener ${optionSelected} próximamente.`)
				


		console.log('control 7');
	}					
				}
			}
    	console.log('control 4')
    }

	// console.log(validOrder)






validatingOrder()