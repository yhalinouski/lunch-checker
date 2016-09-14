angular.module('LunchChecker', [])
.controller('LunchController', LunchController);

function LunchController($scope) {
	$scope.checkLunch = function() {
		var lunch = $scope.lunch;
		if (lunch) {
			$scope.message = getMessage(lunch);
		} else {
			$scope.message = "Please enter data first";
		}
	}

	function getMessage(lunch) {
		var lunchItems = lunch.split(",");
		if (lunchItems.length <= 3) {
			return "Enjoy!";
		} else {
			return "Too much!";
		}
	}

}