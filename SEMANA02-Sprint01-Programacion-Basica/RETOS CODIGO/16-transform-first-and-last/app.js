document.getElementById('html');





function transformFirstAndLast(array){

 newObj={};

 	for (var i = 0; i < array.length; i++) {
 		newObj[array[0]]= array[array.length-1];
 	}
console.log(newObj)
}






transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
transformFirstAndLast(['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey'])





