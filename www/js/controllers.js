"use strict";

angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $rootScope, $cordovaNetwork, $cordovaToast, $state, $ionicHistory) {
    document.addEventListener("deviceready", function () {

        //$scope.network = $cordovaNetwork.getNetwork();
        $rootScope.isOnline = $cordovaNetwork.isOnline();
        $rootScope.isDeviceReady = true;
        
        $rootScope.$apply();

        // listen for Online event
        $rootScope.$on("$cordovaNetwork:online", function (event, networkState) {
            $rootScope.isOnline = true;
            //$scope.network = $cordovaNetwork.getNetwork();
           
            $rootScope.$apply();
        });

        // listen for Offline event
        $rootScope.$on("$cordovaNetwork:offline", function (event, networkState) {
            //console.log("got offline");
            $rootScope.isOnline = false;
           
            // $scope.network = $cordovaNetwork.getNetwork();
           // $ionicLoading.hide();
            $rootScope.$apply();
            if (ionic.Platform.isIPad() || ionic.Platform.isIOS() || ionic.Platform.isAndroid() || ionic.Platform.isWindowsPhone()) {
                if (!$cordovaNetwork.isOnline()) {
                    //  showAlert($ionicPopup, noInternetConnectionMsg());
                }
            }

        });
    }, false);


    $scope.myGoBack = function () {
    
        if ($state.current.name == 'app.detail') {
            $state.go("app.tab.mySeller");
        }
        else {
            $ionicHistory.goBack();
        }
    };
    $rootScope.showback = false;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;

    $scope.GoCommodity = function ()
    {
        $state.go("app.tab.commodity");
    }
    $scope.GoMySeller = function () {
        $rootScope.MySeller = true; 
        $state.go("app.tab.mySeller");
    }
    $scope.GoMyBuyer = function () {
        $rootScope.MyBuyer = true;
        $state.go("app.tab.myBuyers");
    }
    $scope.GoReports = function () {
        $state.go("app.tab.reports");
    }
    $scope.GoReports2 = function () {
        $state.go("app.tab.account");
    }
})
.controller('headerCtrl', function ($scope, $stateParams, $state, $rootScope, $ionicHistory, $ionicPopup) {
    $rootScope.showback = true;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
    $scope.moveAccount = function () {
        $state.go("app.interested");
    }

    $scope.moveSeller = function () {
        $state.go("app.seller");
    }
    $scope.moveSeller = function () {
        $state.go("app.seller");
    }
    $scope.moveMessage = function () {
        if ($state.current.name == 'app.detail1') {
            $state.go("app.message1");
        }
        else {
            $state.go("app.message2");
        }
    }
    $scope.myprevious = function ()
    {
        if ($state.current.name == 'app.detail1') {
            $state.go("app.tab.mySeller");
        }
        else if ($state.current.name == 'app.message1') {
            $state.go("app.detail1");
        }
        else if ($state.current.name == 'app.message2') {
            $state.go("app.message1");
        }
        else {
            $state.go("app.tab.mySeller");
        }
    }
    $scope.sendcommodity=function()
    {
        $state.go("app.tab.commodity");
    }
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Data request has been sent to Suppliers!',
            //template: 'Please check back after sometimes!'
        });
        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
    $scope.showAlert2 = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Data request has been sent to Interested Buyers!',
            //template: 'Please check back after sometimes!'
            buttons: [
 {
     text: '<b>OK</b>',
     type: 'button-positive',
     onTap: function (e) {
         // add your action
         $state.go('app.tab.commodity');
     }
 }
            ]
        });
        alertPopup.then(function (res) {
            console.log('Thank you for for sending request!');
        });
    };
    $scope.showAlert1 = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Do you really want to send data to buyer named- "Aditya"',
            //template: 'Please check back after sometimes!'
            buttons: [
   { text: 'No' },
   {
       text: '<b>Yes</b>',
       type: 'button-positive',
       onTap: function (e) {
           // add your action
           $state.go('app.tab.commodity');
       }
   }
            ]
        });
        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
})

.controller('ProductCtrl', function ($scope, $rootScope, $state, scProductFactory, $cordovaNetwork, $cordovaToast, $ionicLoading, $timeout, $ionicPlatform, localStorageService, $ionicHistory) {
    $rootScope.showback = false;

    $rootScope.showRequest = false;
    $rootScope.showperson = true;
  

    $scope.chats = [{
        id: 0,
        name: 'Potato: A Grade',
        lastText: 'Interested Buyer: Aditya, Jason and +12 Others',
        Image1: 'Potato.png',
        notification: '7',
        today: '100',
        tomorrow: '680',
        week: '1000',
        isChecked: false
    }, {
        id: 2,
        name: 'Potato: Off Grade',
        lastText: 'Interested Buyer: Johnson',
        Image1: 'White.png',
        notification: '5',
        today: '95',
        tomorrow: '45',
        week: '150',
        isChecked: false
    }, {
        id: 4,
        name: 'Onion A Grade',
        lastText: 'Interested Buyer: Aditya,Jason',
        Image1: 'Onion.png',
        notification: '2',
        today: '490',
        tomorrow: '502',
        week: '1232',
        isChecked: false
    },
     {
         id: 5,
         name: 'Onion: Off Grade',
         lastText: 'Interested Buyer: Jason',
         Image1: 'White.png',
         notification: '1',
         today: '130',
         tomorrow: '50',
         week:'51',
         isChecked: false
     }, {
         id: 6,
         name: 'Carrot',
         lastText: 'Interested Buyer: Aditya,Jason',
         Image1: 'Carrot.png',
         notification: '9',
         today: '12',
         tomorrow: '16',
         week: '25',
         isChecked: false
     }, {
         id: 7,
         name: 'Cabbage',
         lastText: 'Interested Buyer: Aditya,Jason',
         Image1: 'Cabbage.png',
         notification: '12',
         today: '8',
         tomorrow: '15',
         week: '150',
         isChecked: false
     }, {
         id: 8,
         name: 'Cauliflower',
         lastText: 'Interested Buyer: Aditya,Jason',
         Image1: 'Cauliflower.png',
         notification: '3',
         today: '150',
         tomorrow: '164',
         week: '1258',
         isChecked: false
     }];

    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
    $scope.moveSeller = function () {
        $state.go("app.seller");
    }

    $scope.moveAccount = function () {
        $state.go("app.interested");
    }
    $scope.multicheck = function (chat) {
        $state.go("app.chatdetail");
    };
    $scope.onHold = function (chat) {
        chat.isChecked = !chat.isChecked;
    };
})

.controller('MySellertabCtrl', function ($scope, $state, $rootScope, scFactory, $cordovaNetwork, $cordovaToast, $ionicLoading, localStorageService, $ionicHistory, $ionicPopup) {
    $rootScope.showback = false;
    $rootScope.showperson = false;
    $rootScope.showRequest = true;
    $scope.chats = [{
        id: 0,
        name: 'Aditya',
        lastText: 'Tomato, Potato Off Grade, Cabbage',
       
        isChecked: false
    }, {
        id: 2,
        name: 'Raghu',
        lastText: 'Potato, Cabbage',
       
        isChecked: false
    }, {
        id: 4,
        name: 'Shubham',
        lastText: 'Cabbage Off Grade,Tomato',
       
        isChecked: false
    },
    {
        id: 5,
        name: 'Aarav',
        lastText: 'Tomato',
        
        isChecked: false
    }, {
        id: 6,
        name: 'Raghu',
        lastText: ' Potato,Cabbage Offgade',
        
        isChecked: false
    }, {
        id: 7,
        name: 'Shubham',
        lastText: 'Cabbage,Tomato',
       
        isChecked: false
    }, {
        id: 8,
        name: 'Khan',
        lastText: 'Cabbage,cauliflower',
      
        isChecked: false
    }, {
        id: 9,
        name: 'Rahul',
        lastText: 'Cabbage,Potato',

        isChecked: false
    }, {
        id: 10,
        name: 'Nisheeth',
        lastText: 'Cabbage,Tomato',

        isChecked: false
    }, {
        id: 11,
        name: 'Malhotra',
        lastText: 'Cabbage,Tomato Off Grade',

        isChecked: false
    }, {
        id: 12,
        name: 'Khan',
        lastText: 'Cauliflower',

        isChecked: false
    }, {
        id: 13,
        name: 'Rahul',
        lastText: 'Cabbage,Potato',

        isChecked: false
    }, {
        id: 14,
        name: 'Nisheeth',
        lastText: 'Cabbage,Tomato',

        isChecked: false
    }, {
        id: 15,
        name: 'Malhotra',
        lastText: 'Tomato Off Grade',

        isChecked: false
    }, {
        id: 16,
        name: 'Aarav',
        lastText: 'Tomato',

        isChecked: false
    }, {
        id: 17,
        name: 'Raghu',
        lastText: 'Cabbage Offgade',

        isChecked: false
    }, {
        id: 18,
        name: 'Shubham',
        lastText: 'Tomato Off Grade, Potato',

        isChecked: false
    }, {
        id: 19,
        name: 'Khan',
        lastText: 'Cabbage,Tomato,cauliflower',

        isChecked: false
    }];
    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'No data shared by Suppliers!',
            template: '<center>Do you want to enter yourself?</center>',
            buttons: [
     { text: 'No' },
     {
         text: '<b>Yes</b>',
         type: 'button-positive',
         onTap: function (e) {
             // add your action
               $state.go('app.detail1');
         }
     }
            ]
        });
        confirmPopup.then(function (res) {
            if (res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };
})
.controller("homeCtrl", ["$scope", "$http", "$state", "$ionicPopup", "$ionicTabsDelegate", "$rootScope", "$ionicHistory",
    function ($scope, $http, $state, $ionicPopup, $ionicTabsDelegate, $rootScope, $ionicHistory) {
     
}])


.controller('AccountCtrl', function ($scope, $state, localStorageService, $ionicHistory) {
  
    $scope.GraphList = [
        {
            GraphName: "Acres Per Vegetable",
            GraphImage: "AcresPerVeg.png",
        },
        {
            GraphName: "Capacity per week",
            GraphImage: "CapPerWeek.png",
        },
        {
            GraphName: "Supply forecast for week",
            GraphImage: "SuppForcecWeek.png",
        },
        {
            GraphName: "Sales/supply gap",
            GraphImage: "SalesSupppGap.png",
        },
        {
            GraphName: "Top growers for each vegetable",
            GraphImage: "TopGroweVeg.png",
        },
        {
            GraphName: "Top growers per acre",
            GraphImage: "TopGroweAcre.png",
        },
        {
            GraphName: "Sales forecast for week",
            GraphImage: "SalesForecWeek.png",
        },
        {
            GraphName: "Daily average sale price",
            GraphImage: "DailAveSalePri.png",
        },
        {
            GraphName: "Comparison of daily average sale price with traditional market or other source",
            GraphImage: "CompAvSaleTrad.png",
        },
        {
            GraphName: "Top revenue generating vegetables",
            GraphImage: "TopRevnGenVeg.png",
        },
        {
            GraphName: "Top revenue generating vegetables per acre",
            GraphImage: "TopRevGenVegAcre.png",
        },
        {
            GraphName: "Top farmers whose produce (in kg) was rejected",
            GraphImage: "TopFar.png",
        }
    ]



    $scope.report1 = function (Reports) {
        localStorageService.set("ReportData", Reports);
        $state.go('app.reportsperPage');
    }
  
})
.controller('ReportsperPageCtrl', function ($scope, $stateParams, $state, $ionicHistory, localStorageService) {
    $scope.myGoBack = function () {
        $ionicHistory.goBack();
    };
    if(!angular.isUndefinedOrNull(localStorageService.get("ReportData"))){
        var ReportData = localStorageService.get("ReportData");
        $scope.GraphName = ReportData.GraphName
        $scope.GraphImage = "img/"+ReportData.GraphImage;
    }

})


.controller('reportstabCtrl', function ($scope, $stateParams, $state) {

})
.controller('myBuyerstabCtrl', function ($scope, $rootScope, $stateParams, $state, $ionicPopup) {
    $rootScope.showback = false;

    $rootScope.showRequest = false;
    $scope.goHome = function () {
        $state.go('app.tab.commodity');
    }

    $scope.movetoBuyer = function () {
        $state.go('app.buyer1');
    }
}).controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, $state, $rootScope) {
    $rootScope.showback = true;
    $rootScope.showperson = false;

    $rootScope.showRequest = false;
    $scope.chat = Chats.get($stateParams.chatId);
})
.controller('intresrtedCtrl', function ($scope, $rootScope, $state) {
    $rootScope.showback = true;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
    $scope.goHome = function () {
        $state.go("app.tab.commodity");
    }
})

.controller('DetailCtrl', function ($scope, $state, $rootScope) {
    $rootScope.showback = true;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
    $scope.moveDetail1 = function () {
        $state.go('app.detail1');
    }
    $scope.movetabSeller = function () {
        $state.go("app.tab.mySeller");
    }
})
.controller('Detail1Ctrl', function ($scope, $state, $rootScope) {
    $rootScope.showback = false;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;

    $scope.moveMessage = function () {
        $state.go("app.message1");
    }
})
.controller('message1Ctrl', function ($scope, $state, $rootScope) {
    $rootScope.showback = false;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
    $scope.Previous = function () {
        $state.go("app.detail1");
    }
    $scope.Next = function () {
        $state.go("app.message2");
    }
})
.controller('message2Ctrl', function ($scope, $state, $rootScope) {
    $rootScope.showback = false;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
    $scope.Previous = function () {
        $state.go("app.message1");
    }

})
.controller('buyer1Ctrl', function ($scope, $rootScope) {
    $rootScope.showback = true;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
})
.controller('SellerCtrl', function ($scope, $state, $rootScope) {
    $rootScope.showback = true;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
})


.controller('sellerPageCtrl', function ($scope, $state, $ionicPopup, $rootScope) {
    $rootScope.showback = true;
    $rootScope.showperson = false;
    $rootScope.showRequest = false;
    $scope.DynamicButton = "Select Buyer";
    $scope.listdata = [{ Name: 'Aditya' },
        { Name: 'Aman' }, { Name: 'Shashi' }, { Name: 'Joseph' }];
 
    $scope.showConfirm = function () {

      
        var confirmPopup = $ionicPopup.confirm({
            title: 'Select',
            template: "<ion-list>"
   + "<div class='' ng-repeat='langlist in listdata' >"
   + "<ion-radio data-ng-model='langChoice'  ng-value='langlist.Value' ng-click='selectLang(langlist)'>{{langlist.Name}}</ion-radio>"
   + "</div>"
+ "</ion-list>",
            scope: $scope,
        });
        confirmPopup.then(function (res) {
            if (res) {
                console.log('Sure!');
            } else {
                console.log('Not sure!');
            }
        });


        $scope.selectLang = function (value) {
            $scope.DynamicButton = value.Name;
            confirmPopup.close();
        }
    };

    $scope.goHome = function () {
        $state.go("app.tab.commodity");
    }
})


;


