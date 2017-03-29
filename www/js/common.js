function loadingIconSetting($ionicLoading) {
    $ionicLoading.show({
        template: '<i class="fa fa-spinner fa-spin fa-3x"></i>'
    });
}

function showAlertToast($cordovaToast, msg) {
    $cordovaToast.showShortBottom(msg).then(function (success) {
        // success
    }, function (error) {
        // error
    });
}

function getConnectionTimeout() {
    return 5000;
}


function getlowConnectionTimeout() {
    return 3000;
}

function gethighConnectionTimeout() {
    return 10000;
}
function getsuperhighConnectionTimeout() {
    return 20000;
}
function getStartTime() {
    return new Date().getTime();
}
function getConnectionTimeoutMessage() {
    return 'taking longer time than usual';
}

function getResponseStatusWithStatusText(startTime, exception) {
    var respTime = new Date().getTime() - startTime;
    exception.status = respTime > getConnectionTimeout() ? 408 : exception.status;
    exception.status = exception.status == 0 ? 408 : exception.status;
    exception.statusText = exception.status == 408 ? "Connection timeout" : exception.statusText;
    return exception;
}
angular.isUndefinedOrNull = function (val) {
    return angular.isUndefined(val) || val === null;
}