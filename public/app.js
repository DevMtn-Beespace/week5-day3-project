angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function( friendService ) {
				return friendService.getFriends().then(function(res) {
					console.log(res.data);
					console.log("res.data");
					return res.data;
				});
			}
		}
	});

	$urlRouterProvider.otherwise('/');

});
