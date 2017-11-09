document.getElementById('html');

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function isGreaterThanTen(num){

	if(num>=10){
		console.log(true)
	}else{
		console.log(false)
	}
}

isGreaterThanTen(11)
isGreaterThanTen(9)
isGreaterThanTen(10)
/*

function removeStringValuesLongerThan(theLimit, obj){

	newArray=[];
	properties= Object.keys(obj);
	
	for (var i = 0; i < properties.length; i++) {
		newArray.push([properties[i], obj[properties[i]]])

newObj={}


		for (var i = 0; i < newArray.length; i++) {
	element= newArray[i][1]	
 	element= 
	if(element.length<=theLimit){	
	newObj [newArray[i][0]] = newArray[i][1]	
    
}

}console.log(element)
console.log(obj);
console.log(newObj)
}


}


removeStringValuesLongerThan(6, obj);
 // { age: 20, location: 'Texas' }


*/



