document.getElementById('html');



function addArrayProperty(myObj, key, myArray){
	myObj= {
	};

	for (var i = 0; i < myArray.length; i++) {
		myObj[key] = myArray
		
	}

console.log(myObj.myProperty)

}

var myObj={};
var myArray=[1,3]
addArrayProperty(myObj, 'myProperty', myArray);










