'use strict';
var servicedomain = getServiceURI();

angular.module('app.factory', [])
.factory('scFactory', ["$http", function ($http) {
    var dataFactory = {};
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    dataFactory.GetMessageList = function () {
        return $http({
            method: "GET",
            url: servicedomain + "/TansaSc/GetWebhookInbound",
            header: headers,
            timeout: getlowConnectionTimeout()
        }).success(function (data) {

        }).error(function (data) {

        });
    };

    return dataFactory;
}])

.factory('scProductFactory', ["$http", function ($http) {
    var dataFactory = {};
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    dataFactory.GetProductList = function () {
        return $http({
            method: "GET",
            url: servicedomain + "/TansaSc/GetProducts",
            header: headers,
            timeout: getlowConnectionTimeout()
        }).success(function (data) {

        }).error(function (data) {

        });
    };

    return dataFactory;
}])
.factory('scProductFactoryPaiging', ["$http", function ($http) {
    var dataFactory = {};
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    dataFactory.GetProductPagingList = function (pageIndex, pageSize) {
        return $http({
            method: "GET",
            url: servicedomain + "/TansaSc/GetProductswithPaiging?pageNum=" + pageIndex + "&pageSize=" + pageSize,
            header: headers
            
        }).success(function (data) {

        }).error(function (data) {

        });
    };

    return dataFactory;
}]).factory('scMessagePaiging', ["$http", function ($http) {
    var dataFactory = {};
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    dataFactory.GetMessagePagingList = function (pageIndex, pageSize) {
        return $http({
            method: "GET",
            url: servicedomain + "/TansaSc/GetMessagePaiging?pageNum=" + pageIndex + "&pageSize=" + pageSize,
            header: headers

        }).success(function (data) {

        }).error(function (data) {

        });
    };

    return dataFactory;
}]);
function GetMessageList($http) {
    return $http({
        method: "GET",
        url: servicedomain + "/TansaSc/GetWebhookInbound"
    }).success(function (data) {

    }).error(function (data) {

    });
}

//function GetProductList($http) {
//    return $http({
//        method: "GET",
//        url: servicedomain + "/TansaSc/GetProducts"
//    }).success(function (data) {

//    }).error(function (data) {

//    });
//}

;