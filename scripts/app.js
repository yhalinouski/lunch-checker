(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {

	$scope.checkLunch = function() {
		if ($scope.lunch) {
			$scope.message = getMessage($scope.lunch);
		} else {
			$scope.message = "Please enter data first";
		}
	}

	function getMessage(lunch) {
		var lunchItems = lunch.split(",");
		lunchItems = removeEmpty(lunchItems);
		if (lunchItems.length <= 3) {
			return "Enjoy!";
		} else {
			return "Too much!";
		}
	}

	function removeEmpty(array) {
		var notEmptyArray = [];
		for (var i = 0; i < array.length; i++) {
			if (array[i] && array[i].trim()) {
				notEmptyArray.push(array[i]);
			}
		}
		return notEmptyArray;
	}

}

})();
