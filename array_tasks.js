var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(x) {
				return x ** 2;
		})
	},

	sum: function (arr) {
		let reducer = function(accumulator, current){
			return accumulator + current;
		}
		return arr.reduce(reducer);
	},

	findDuplicates: function (arr) {
		let result = [];
		arr.forEach(function(number, index) {
			if (arr.indexOf(number, index + 1) > -1) {
				if (result.indexOf(number) === -1) {
					result.push(number);
				}
			}
		})
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		let result = [];
		arr.find(function(number){
			if (number != valueToRemove){
				result.push(number);
			}
		})
		return result;
	},

	findIndexesOf: function (arr, itemToFind) {
		let result = [];
		arr.forEach(function(number, index) {
			if (number === itemToFind) {
				result.push(index);
			}
		})
		return result;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let newArray = [];
		arr.find(function(number){
			let check = number / 2;
			if (Number.isInteger(check)){
				newArray.push(number);
			}
		})
		// newArray.forEach(function(number){
		// 	return number*number;
		// })
		let newerArray = this.square(newArray);
		// return newArray.reduce(function(accumulator, current){
		// 	return accumulator + current;
		// })
		return this.sum(newerArray);
	}

}

var arr = [1, 2, 3, 4, 5]
arrayTasks.sumOfAllEvenNumbersSquared(arr)

module.exports = arrayTasks
