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

	// sum: function (arr) {

	// },

	// findDuplicates: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
