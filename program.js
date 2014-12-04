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

function doubleAll(numbers) {
	return numbers.map(function(x) {
		return x * 2
	});
}

module.exports = doubleAll

function getShortMessages(messages) {
  return messages.map(function(x) {
  	return x.message;
  }).filter(function(x) {
  	return x.length < 50;
  });
}

module.exports = getShortMessages

function checkUsersValid(goodUsers) {
	return function(submittedUsers) { 
		return submittedUsers.every(function(x) {
			return goodUsers.some(function(y) {
				return x.id === y.id
			});
		});
	}
}

module.exports = checkUsersValid

function countWords(inputWords) {
	words = {};
	inputWords.reduce(function(x, y) {
		words[y] ? (words[y] += 1) : (words[y] = 1)
	}, 0);
	return words
}

module.exports = countWords

function reduce(arr, fn, initial) {
	var recurse = function(index) {
		if (arr.length > 0) {
			index = 1 || index + 1;
			initial = fn(initial, arr[0], index, arr);
			arr.shift();
			return recurse(index); 
		}
		else { 
			return initial; 
		}	
	}
	return recurse();
}

module.exports = reduce
