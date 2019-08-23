'use strict';

/*
 * Contains a service to communicate with the Blockchain.info API
 */
angular
    .module('app.services')
    .constant('BASE_URL', 'https://blockchain.info/ticker')
    .factory('BlockchainHttpClientService', blockchainHttpClientService);

function blockchainHttpClientService($http, BASE_URL, $log) {
    function get() {
        return makeRequest('ticker', {});
    }

    function makeRequest(url, params) {
        var requestUrl = BASE_URL + '/' + url;
        return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).then(function(response){
            return response.data;
        }).catch(blockchainHttpClientError);
    }

    function blockchainHttpClientError(errorResponse) {
        $log.error('XHR Failed for BlockchainHttpClientError');
        $log.error(errorResponse);
        return errorResponse;
    }
}
