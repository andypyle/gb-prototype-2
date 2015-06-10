tourApp.controller('gbTourCtrl', function($scope, getShows){

	$scope.showsLoaded = false;

	getShows()
		.success(function(tourDates){
			$scope.shows = tourDates;
			$scope.showsLoaded = true;
			console.log($scope.shows);
		});





	$scope.details = null;

	$scope.showDetails = function(index){
		$scope.details = index;
		console.log($scope.details);
		return $scope.details;
	};
});