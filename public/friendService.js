angular.module('userProfiles')
    .factory('friendService', function($http, $q) {
        return {

            login: function(user) {
                /* FIX ME */
                return $http({
                    method: 'POST',
                    url: '/api/login', // can this be a variable? or http://localhost:3000/api/login
                    data: user
                })
                // .then(function successCallback(response) {
                //     // this callback will be called asynchronously
                //     // when the response is available
                //     console.log(response.data);
                //     return response;
                // }, function errorCallback(response) {
                //     // called asynchronously if an error occurs
                //     // or server returns response with an error status.
                //     console.log(response);
                //     return response;
                // });
            },

            getFriends: function() {
                /* FIX ME */
                return $http({
                    method: 'GET',
                    url: '/api/profiles'
                })
                // .then(function successCallback(response) {
                //     // this callback will be called asynchronously
                //     // when the response is available
                //     console.log(response.data);
                //     console.log("repsonse data from getFriends");
                //     return response.data;
                // }, function errorCallback(response) {
                //     // called asynchronously if an error occurs
                //     // or server returns response with an error status.
                //     console.log(response);
                //     return response.data;
                // });
            }
        }
    });
