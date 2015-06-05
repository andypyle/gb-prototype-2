var musicApp = angular.module('gbMusic', ['plangular'])
	.config(function(plangularConfigProvider){
		plangularConfigProvider.clientId = '544a4d26fb8fb78de34e2c7086e4638a';
	});
	
var tourApp = angular.module('gbTour', ['BandsintownApi'])
	.config(function($httpProvider){
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
	});