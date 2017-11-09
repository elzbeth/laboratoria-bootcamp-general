document.getElementById('html');


function reverseArray(theArray){
 	newArray=[];
 	for (var i = theArray[0]; i <= theArray.length; i++) {
 		newElement= theArray.pop(i);
 		newArray.push(newElement);
 		i--;
 	}
 	console.log(newArray);
}

function reverseArrayInPlace(theArray){
 	newArray=[];
 	for (var i = theArray[0]; i <= theArray.length; i++) {
 		newElement= theArray.pop(i);
 		newArray.splice(i,0,newElement)
 		 		}	
console.log(newArray);

}


// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1

 	


reverseArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14])
reverseArrayInPlace([1,2,3,4,5,6,7,'8',9,10,11,12,13,14])
reverseArrayInPlace(['a','b','c','d','e'])