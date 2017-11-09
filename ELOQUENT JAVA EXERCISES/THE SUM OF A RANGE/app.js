document.getElementById('html');




function range(start,end){
	var newArray=[];
	for (var i = start; i <= end ; i++) {
		newArray.push(i)function sum(start,end){
	var newArray=[];
	for (var i = start; i <= end ; i++) {
		newArray.push(i)
		
		
	}

	var sumResult=0;
	for (var i = newArray[0]; i <= newArray.length; i++) {
		sumResult= sumResult + i;
	}
	console.log(sumResult)
}
		newArray= newArray.concat();
		
	}
	console.log(newArray)
}




function rangeWithStep(start,end,step){
	
			var newArray=[];
			for (var i = start; i <= end ; i+=step) {

			newArray.push(i);
			

				
		}
		console.log(newArray);
}
	


range(1,10)
sum(1,10)
rangeWithStep(1,10,2)
rangeWithStep(5,2,-)