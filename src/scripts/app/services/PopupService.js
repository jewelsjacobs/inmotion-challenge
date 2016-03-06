import mServices from './_mServices';

mServices.service('PopupService', function ($window) {
    this.showPopup = (message) => {
        return $window.confirm(message);
    };
});
