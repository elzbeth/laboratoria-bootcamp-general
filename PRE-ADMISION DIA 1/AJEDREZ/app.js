document.getElementById('html');

var boardSize = parseInt(prompt('Define el número de filas y columnas'));

var board = '';



for (var row = 1; row <= boardSize; row++) {
	for (var column = 1; column <= boardSize; column++) {
		if((column + row) % 2 === 0) {
			board += ' ';
		}else{
			board += '#';
		}
	}board += '\n';
}


console.log(board)

