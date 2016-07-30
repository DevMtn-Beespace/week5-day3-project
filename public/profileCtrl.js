angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo, friendService ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
	//
	// $scope.currentUser = friendService.login;//FIX ME
	// $scope.friends = friendService.getFriends;//FIX ME;
	// console.log(friendService.getFriends);

});
