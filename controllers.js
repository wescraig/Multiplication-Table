angular.module('myApp', [])

.controller('multiplicationCtrl', function(){

	this.initialValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	this.setNewUpper = function(upperLimit){
		this.initialValues = [];
		for(var i = 1; i <= upperLimit; i++){
			this.initialValues.push(i);
		}

	};

	this.compute = function(numA, numB){
		return numA * numB
	}



});