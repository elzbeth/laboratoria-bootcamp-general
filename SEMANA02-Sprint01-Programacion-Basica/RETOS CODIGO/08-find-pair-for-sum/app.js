document.getElementById('html');





function findPairForSum(array,number){

  var pair=[];
 
  for(i=0; i<=array.length; i++){
    var sum= array[i] + array[(i+1)];
    if(sum === number){
      pair.push(i);
      pair.push(i+1);
      console.log(pair)
      return pair
    }
  }



}



findPairForSum([3, 34, 4, 12, 5, 2], 9);
findPairForSum([3, 34, 4, 12, 5, 2], 7);
 findPairForSum([3, 34, 6, 12, 5, 2], 9);









