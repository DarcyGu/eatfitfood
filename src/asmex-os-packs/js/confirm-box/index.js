
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./confirmbox.css");
var callbackshow;
var callbackhide;
var confirm = function (args) {
    var action = {
        cancelText: args.cancelText,
        confirmText: args.confirmText,
        onCancel: function () {
            if (args.onCancel) {
                args.onCancel();
            }
            callbackhide();
        },
        onConfirm: function () {
            if (args.onConfirm) {
                args.onConfirm();
            }
            callbackhide();
        },
        question: args.question || 'This action cannot be undone.',
        title: args.title || 'Are you sure?',
    };
    callbackshow(action);
};
exports.confirm = confirm;
var ConfirmBox = /** @class */ (function (_super) {
    __extends(ConfirmBox, _super);
    function ConfirmBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            action: null,
            show: false,
        };
        _this.confirmRef = React.createRef();
        return _this;
    }
    ConfirmBox.prototype.componentDidMount = function () {
        var _this = this;
        callbackshow = function (action) {
            _this.setState({ show: true, action: action });
        };
        callbackhide = function () {
            _this.setState({ show: false });
        };
    };
    ConfirmBox.prototype.ccancel = function () {
        if (this.state.action) {
            this.state.action.onCancel();
        }
    };
    ConfirmBox.prototype.render = function () {
        if (!this.state.show) {
            return (React.createElement("div", { ref: this.confirmRef }));
        }
        var state = this.state.action;
        return (React.createElement("div", { className: "confirm-bg", ref: this.confirmRef },
            React.createElement("div", { className: "confirm-box" },
                (state.title) ? (React.createElement("div", { className: "confirm-title" }, state.title)) : null,
                React.createElement("div", { className: "confirm-question" }, state.question),
                React.createElement("div", { className: "confirm-buttons" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("button", { className: "btn btn-danger", onClick: state.onCancel }, state.cancelText || 'CANCEL')),
                        React.createElement("div", { className: "col-md=6" },
                            React.createElement("button", { className: "btn btn-success", onClick: state.onConfirm }, state.confirmText || 'CONFIRM')))))));
    };
    return ConfirmBox;
}(React.Component));
exports.ConfirmBox = ConfirmBox;
