document.getElementById('html');



function countChar(theString,theChar){
	var theString = prompt('Write the sentence...');
	var theChar= prompt('The letter that you want to count is...')
	var numBs=0;
	
	 	for (var i = 0; i < theString.length; i++) {
		    if(theString [i] == theChar){
		    	numBs++
		    	var charB = theString.charAt(i);
		      
	
		  }


		    }
	    
	      console.log(theString)
		      console.log(`It has ${numBs} times the letter "${charB}".`)

				
}

 
countChar()


//Buena Vista Social Club bienvenidos