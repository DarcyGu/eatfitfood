
Object.defineProperty(exports, "__esModule", { value: true });
var defaultFunction = function (type, message) {
    if (window.alert_float) {
        window.alert_float(type, message);
    }
    else {
        alert(type + ': ' + message);
    }
};
exports.default = defaultFunction;
