// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'LocalStorageModule', 'starter.services', 'app.factory', 'app.directive'])

.run(function ($ionicPlatform, $state, $stateParams, $rootScope, $cordovaNetwork) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $ionicPlatform.ready(function () {
      
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})   

.config(function ($stateProvider, $urlRouterProvider) {
   

    $stateProvider
      

   .state('app', {
       url: '/app',
       abstract: true,
       cache: false,
       templateUrl: 'templates/app.html'
   })

        .state('app.tab', {
            url: '/tab',           
            templateUrl: 'templates/tabs.html'
        })
    // Each tab has its own nav history stack:

    .state('app.tab.commodity', {
        url: '/commodity',
        cache: false,
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-Commodity.html'
            }
        }
    })

    .state('app.tab.mySeller', {
        url: '/chats',
        cache: false,
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-MySeller.html'
            }
        }
    })
    

    .state('app.tab.account', {
        url: '/account',
        cache: false,
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html'
            }
        }
    })

     .state('app.reportsperPage', {
         url: '/ReportsperPage',
         cache: false,
         templateUrl: 'templates/ReportsperPage.html'
       
     })

     


       .state('app.tab.reports', {
           url: '/reports',
           views: {
               'tab-reports': {
                   templateUrl: 'templates/tab-reports.html',
               }
           }
       }).state('app.tab.myBuyers', {
           url: '/myBuyers',
           cache: false,
           views: {
               'tab-myBuyers': {
                   templateUrl: 'templates/tab-MyBuyers.html'
               }
           }
       })
     .state('app.chatdetail', {
         url: "/chatdetail",
         cache: false,
         templateUrl: "templates/chat-detail.html",
         controller: "ChatDetailCtrl"
     })
    .state('app.detail', {
        cache: false,
        url: "/detail",
        templateUrl: "templates/detail.html",
        controller: "DetailCtrl"
    }).state('app.detail1', {
        url: "/detail1",
        templateUrl: "templates/detail1.html",
        controller: "Detail1Ctrl"
    }).state('app.seller', {
        url: '/seller/',
        cache: false,
        templateUrl: 'templates/seller.html',

    }).state('app.interested', {
        url: '/interested/',
        cache: false,
        templateUrl: 'templates/interested.html',

    }).state('app.message1', {
        url: "/message1",
        templateUrl: "templates/message1.html",

    }).state('app.message2', {
        url: "/message2",
        templateUrl: "templates/message2.html",

    }).state('app.buyer1', {
        url: "/buyer1",
        templateUrl: "templates/buyer1.html"

    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/tab/commodity');

});
