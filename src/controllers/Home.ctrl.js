'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, $http) {
        $http.get("https://blockchain.info/ticker")
            .then(function(response) {
                $scope.info = response.data;
            });
    });
