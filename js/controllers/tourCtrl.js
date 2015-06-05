tourApp.controller('gbTourCtrl', function($scope, getShows){

	$scope.showsLoaded = false;

	getShows()
		.success(function(tourDates){
			$scope.shows = tourDates;
			$scope.showsLoaded = true;
		});

	$scope.details = null;

	$scope.showDetails = function(index){
		$scope.details = index;
		return $scope.details;
	};
});