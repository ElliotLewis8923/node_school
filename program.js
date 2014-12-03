function upperCaser(input) {
    return input.toUpperCase();
}
    
module.exports = upperCaser

function repeat(operation, num) {
	return operation;
    if (num > 0) { 
	   	num -= 1; 
	   	repeat(operation, num);
    }
}

module.exports = repeat