

angular.module('MainCtrl', ['dataProviderService', 'daterangepicker', 'datatables'])
    .controller('MainCtrl', function ($scope, dataProvider, DTOptionsBuilder) {
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('lengthChange', false)
            .withOption('scrollY', "300")
            .withOption('initComplete', function () {   // removes only label text and adds placeholder to input
                const $elem = angular.element('.dataTables_filter input').closest("label");
                $elem.replaceWith(angular.element('.dataTables_filter input').attr('placeholder', 'Search ...'))
            });
        $scope.frm = {};
        $scope.frm.minCount = null;
        $scope.frm.maxCount = null;
        $scope.frm.date = { startDate: null, endDate: null }

        $scope.getRecord = function (data) {
            angular.element(".dataTables_empty").html('<p class="text-center"><img src="static/images/progress-loader.gif"/></p>');
            const query = {
                'startDate': moment(data.date.startDate).format('YYYY-MM-DD'),
                'endDate': moment(data.date.endDate).format('YYYY-MM-DD'),
                'minCount': data.minCount,
                'maxCount': data.maxCount
            }
            dataProvider.getRecords(query)
                .then((res) => {
                    const data = res.data.records;
                    $scope.records = data;
                })
                .then(() => {
                    angular.element("img").remove();
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    });
