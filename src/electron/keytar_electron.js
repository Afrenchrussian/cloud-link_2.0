const keytar = require("keytar");

module.exports.setPassword = function(service, account, password, event) {
    keytar
        .setPassword(service, account, password)
        .then(() => (event.returnValue = "success"))
        .catch(
            err =>
                (event.returnValue = "ERROR: Setting Password in the keychain")
        );
};

module.exports.getPassword = function (service,account,event) {
    keytar
        .getPassword(service, account)
        .then(res => {
            event.returnValue = (res !== null) ? res : null;
        })
        .catch(err => console.log(err))
}
