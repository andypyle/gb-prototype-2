angular.module('BandsintownApi', [])

	.constant('SHOWS_URL','http://api.bandsintown.com/artists/Goldboot/events?format=json&app_id=goldbootWebsite&callback=JSON_CALLBACK')

	.factory('getShows', function($http, SHOWS_URL){
		return function(){
			return $http({
				method: 'jsonp',
				url: SHOWS_URL
			});
		}
	});