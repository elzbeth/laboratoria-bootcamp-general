document.getElementById('html');



/*

function findShortestWordAmongMixedElements(theArray){
	var words=[];
	var shortest= words[i];

	for (var i = 0; i <= theArray.length; i++) {
		if(typeof theArray[i] == 'string'){
			words.push(theArray[i]);		
		}
	}
console.log(words);
	for (var j = 0; j <= words.length; j++) {
		
		if(words[j].length <= shortest.length){
			shortest=words[j];
			console.log(shortest)
			return shortest
		}
	
console.log(shortest);
	}

}
//console.log(shortest)
//console.log(newArray)


findShortestWordAmongMixedElements([4, 'two', 2, 'three','a'])

//var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
//console.log(output); // --> 'two'



*/

function findShortestOfThreeWords(a,b,c){

	var shortest=[];

	if(a.length<= b.length && a.length <= c.length){
 	   shortest.push(a);
	}
	else if(b.length<= c.length){
 	   shortest.push(b);
	}else{
		shortest.push(c);
	}

	console.log(shortest)
	return shortest
}


findShortestOfThreeWords('dos', 'ala', 'tres')

