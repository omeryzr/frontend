
angular.module('dataProviderService', [])
    .factory('dataProvider', ['$http', function ($http) {

        const urlBase = "https://getir-bitaksi-hackathon.herokuapp.com/searchRecords";
        const dataProvider = {};
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        dataProvider.getRecords = function (data) {
            return $http.post(urlBase, data, config);
        };

        return dataProvider;

    }]);