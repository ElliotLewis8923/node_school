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
