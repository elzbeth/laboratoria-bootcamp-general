document.getElementById('html');





function convertDoubleSpaceToSingle(theString){

var output=[];
	for (var i = 0; i < theString.length; i++) {
		if(theString[i] ===' ' )
			output= theString.split(theString[i])
	}
	for (var i = 0; i < output.length; i++) {
		if(output[i] == ''){
			output.splice(i,1)
		}
	}
console.log(output.join(' '))
}







convertDoubleSpaceToSingle("string  with  double  spaces");
//console.log(output); // --> "string with double spaces"
                               





